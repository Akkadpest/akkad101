"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Icon from "./Icons";
import s from "./HomeNew.module.css";
import {
  AREAS, CATEGORIES, CONTACT, EMIRATES, FAQS, OFFERS, PROMISE, RATING,
  REVIEWS, SERVICES, STATS, STEPS, TIME_SLOTS,
} from "./data";

const HEADER_OFFSET = 124; // sticky header + chip bar height

const aed = (n) => `AED ${n.toLocaleString("en-US")}`;
const minPrice = (svc) => Math.min(...svc.options.map((o) => o.price));
const keyOf = (svcId, optId) => `${svcId}::${optId}`;
const initials = (name) => name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
const waLink = (text) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function Stepper({ qty, onInc, onDec, label, size = "md" }) {
  return (
    <div className={`${s.stepper} ${size === "sm" ? s.stepperSm : ""}`} role="group" aria-label={`Quantity for ${label}`}>
      <button type="button" onClick={onDec} aria-label={`Remove one ${label}`}><Icon name="minus" size={16} /></button>
      <span aria-live="polite">{qty}</span>
      <button type="button" onClick={onInc} aria-label={`Add one more ${label}`}><Icon name="plus" size={16} /></button>
    </div>
  );
}

function Stars({ value = 5, size = 14 }) {
  return (
    <span className={s.stars} aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" size={size} style={{ opacity: i < Math.round(value) ? 1 : 0.25 }} />
      ))}
    </span>
  );
}

function Sheet({ open, onClose, title, children, footer, wide }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className={s.sheetRoot} role="dialog" aria-modal="true" aria-label={title}>
      <button className={s.sheetScrim} aria-label="Close" onClick={onClose} />
      <div className={`${s.sheet} ${wide ? s.sheetWide : ""}`}>
        <div className={s.sheetHandle} aria-hidden />
        <div className={s.sheetHead}>
          <h2>{title}</h2>
          <button className={s.iconBtnGhost} onClick={onClose} aria-label="Close"><Icon name="close" /></button>
        </div>
        <div className={s.sheetBody}>{children}</div>
        {footer && <div className={s.sheetFoot}>{footer}</div>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Service card (Urban-style: text left, image + Add button right)     */
/* ------------------------------------------------------------------ */

function ServiceCard({ svc, qtyFor, countFor, add, dec, openDetails }) {
  const single = svc.options.length === 1;
  const opt = svc.options[0];
  const qty = single ? qtyFor(svc.id, opt.id) : countFor(svc.id);

  return (
    <article className={s.card}>
      <div className={s.cardText}>
        {svc.badge && <span className={s.badge}>{svc.badge}</span>}
        <h3 className={s.cardTitle}>
          <button type="button" onClick={() => openDetails(svc.id)}>{svc.title}</button>
        </h3>
        <div className={s.cardMeta}>
          <span><Icon name="shield" size={14} /> {svc.warranty}</span>
          <span><Icon name="clock" size={14} /> {svc.duration}</span>
        </div>
        <div className={s.cardPrice}>
          {single ? <strong>{aed(opt.price)}</strong> : <>Starts at <strong>{aed(minPrice(svc))}</strong></>}
        </div>
        <ul className={s.cardPoints}>
          {svc.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <button type="button" className={s.linkBtn} onClick={() => openDetails(svc.id)}>
          View details <Icon name="chevronRight" size={14} />
        </button>
      </div>

      <div className={s.cardMedia}>
        <div className={s.thumb}>
          <img src={svc.img} alt="" loading="lazy" />
        </div>
        <div className={s.addWrap}>
          {single ? (
            qty > 0 ? (
              <Stepper qty={qty} label={svc.title} size="sm" onInc={() => add(svc.id, opt.id)} onDec={() => dec(svc.id, opt.id)} />
            ) : (
              <button type="button" className={s.addBtn} onClick={() => add(svc.id, opt.id)}>Add</button>
            )
          ) : (
            <button
              type="button"
              className={`${s.addBtn} ${qty > 0 ? s.addBtnOn : ""}`}
              onClick={() => openDetails(svc.id)}
            >
              {qty > 0 ? <><Icon name="check" size={14} /> {qty} added</> : "Add"}
            </button>
          )}
        </div>
        {!single && <span className={s.optCount}>{svc.options.length} options</span>}
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomeNew() {
  const [emirate, setEmirate] = useState("Dubai");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState({}); // { "svc::opt": qty }
  const [sheet, setSheet] = useState(null); // {type:'details', id} | {type:'cart'} | {type:'location'}
  const [activeCat, setActiveCat] = useState(CATEGORIES[0].id);
  const [openFaq, setOpenFaq] = useState(0);
  const [dates, setDates] = useState([]);
  const [booking, setBooking] = useState({ date: "", slot: TIME_SLOTS[0], name: "", area: "" });

  const chipBarRef = useRef(null);
  const sectionRefs = useRef({});
  const offersRef = useRef(null);

  /* ---------- cart helpers ---------- */
  const add = useCallback((svcId, optId) => {
    setCart((c) => ({ ...c, [keyOf(svcId, optId)]: (c[keyOf(svcId, optId)] || 0) + 1 }));
  }, []);
  const dec = useCallback((svcId, optId) => {
    setCart((c) => {
      const k = keyOf(svcId, optId);
      const next = { ...c };
      if ((next[k] || 0) <= 1) delete next[k];
      else next[k] -= 1;
      return next;
    });
  }, []);
  const qtyFor = useCallback((svcId, optId) => cart[keyOf(svcId, optId)] || 0, [cart]);
  const countFor = useCallback(
    (svcId) => Object.entries(cart).reduce((n, [k, q]) => (k.startsWith(`${svcId}::`) ? n + q : n), 0),
    [cart]
  );

  const cartLines = useMemo(() => {
    return Object.entries(cart).map(([k, qty]) => {
      const [svcId, optId] = k.split("::");
      const svc = SERVICES.find((x) => x.id === svcId);
      const opt = svc.options.find((o) => o.id === optId);
      return { key: k, svc, opt, qty, total: opt.price * qty };
    });
  }, [cart]);
  const cartCount = cartLines.reduce((n, l) => n + l.qty, 0);
  const cartTotal = cartLines.reduce((n, l) => n + l.total, 0);

  /* ---------- dates (client only to avoid hydration mismatch) ---------- */
  useEffect(() => {
    const out = [];
    const now = new Date();
    for (let i = 0; i < 6; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      out.push({
        id: d.toISOString().slice(0, 10),
        top: i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-GB", { weekday: "short" }),
        bottom: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      });
    }
    setDates(out);
    setBooking((b) => ({ ...b, date: b.date || out[0].id }));
  }, []);

  /* ---------- scroll-spy for the category chip bar ---------- */
  useEffect(() => {
    if (query) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      // active = last section whose top has passed under the sticky bars
      let current = CATEGORIES[0].id;
      for (const c of CATEGORIES) {
        const el = sectionRefs.current[c.id];
        if (el && el.getBoundingClientRect().top <= HEADER_OFFSET + 24) current = c.id;
      }
      setActiveCat(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [query]);

  // keep the active chip visible inside the horizontal bar
  useEffect(() => {
    const bar = chipBarRef.current;
    const chip = bar?.querySelector(`[data-chip="${activeCat}"]`);
    if (bar && chip) {
      bar.scrollTo({ left: chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
    }
  }, [activeCat]);

  const goToCat = (id) => {
    setQuery("");
    setActiveCat(id);
    requestAnimationFrame(() => {
      const el = sectionRefs.current[id];
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET + 4, behavior: "smooth" });
    });
  };

  /* ---------- search ---------- */
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SERVICES.filter((svc) => {
      const cat = CATEGORIES.find((c) => c.id === svc.cat);
      return [svc.title, cat.label, ...svc.points].join(" ").toLowerCase().includes(q);
    });
  }, [query]);

  /* ---------- booking message ---------- */
  const bookingMessage = useMemo(() => {
    const d = dates.find((x) => x.id === booking.date);
    const lines = [
      "Hi Akkad, I'd like to book pest control:",
      "",
      ...cartLines.map((l) => `• ${l.svc.title} (${l.opt.label}) x${l.qty} – ${aed(l.total)}`),
      "",
      `Estimated total: ${aed(cartTotal)}`,
      `Emirate: ${emirate}`,
      d ? `Date: ${d.top} ${d.bottom}` : null,
      `Time: ${booking.slot}`,
      booking.name ? `Name: ${booking.name}` : null,
      booking.area ? `Area / building: ${booking.area}` : null,
    ];
    return lines.filter((x) => x !== null).join("\n");
  }, [cartLines, cartTotal, emirate, booking, dates]);

  const detailsSvc = sheet?.type === "details" ? SERVICES.find((x) => x.id === sheet.id) : null;
  const closeSheet = useCallback(() => setSheet(null), []);
  const openDetails = useCallback((id) => setSheet({ type: "details", id }), []);

  const scrollOffers = (dir) => {
    const el = offersRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const cardProps = { qtyFor, countFor, add, dec, openDetails };

  /* ================================================================ */
  return (
    <div className={s.page}>
      {/* ---------------- Header ---------------- */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <Link href="/" className={s.logo} aria-label="Akkad Pest Control – home">
            <img src="/images/img/logo_small_kuskus.png" alt="Akkad Pest Control" />
          </Link>
          <button type="button" className={s.locBtn} onClick={() => setSheet({ type: "location" })}>
            <span className={s.locLabel}><Icon name="pin" size={13} /> Serving in</span>
            <span className={s.locValue}>{emirate} <Icon name="chevronDown" size={16} /></span>
          </button>
          <nav className={s.headerActions} aria-label="Quick actions">
            <a href={CONTACT.myWarranty} className={s.warrantyLink}><Icon name="shield" size={16} /> My Warranty</a>
            <a href={CONTACT.phoneHref} className={s.iconBtn} aria-label={`Call ${CONTACT.phoneDisplay}`}><Icon name="phone" size={19} /></a>
            <a href={waLink("Hi Akkad, I need help with pest control.")} target="_blank" rel="noopener noreferrer" className={`${s.iconBtn} ${s.iconBtnWa}`} aria-label="Chat on WhatsApp">
              <Icon name="whatsapp" size={21} />
            </a>
          </nav>
        </div>
      </header>

      <div className={s.layout}>
        <main className={s.main}>
          {/* ---------------- Hero ---------------- */}
          <section className={s.hero}>
            <div className={s.heroText}>
              <h1>Pest control in <span>{emirate}</span></h1>
              <a href={CONTACT.googleReviews} target="_blank" rel="noopener noreferrer" className={s.ratingRow}>
                <span className={s.ratingPill}><Icon name="star" size={14} /> {RATING.score}</span>
                <span>{RATING.countLabel} Google reviews</span>
                <Icon name="chevronRight" size={14} />
              </a>
              <ul className={s.heroTags}>
                <li><Icon name="badge" size={15} /> Dubai Municipality approved</li>
                <li><Icon name="shield" size={15} /> 6-month warranty</li>
                <li><Icon name="leaf" size={15} /> Safe for kids & pets</li>
              </ul>
            </div>

            <label className={s.search}>
              <Icon name="search" size={20} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ‘cockroach’, ‘bed bugs’, ‘villa’…"
                aria-label="Search services"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><Icon name="close" size={18} /></button>
              )}
            </label>
          </section>

          {query ? (
            /* ---------------- Search results ---------------- */
            <section className={s.block}>
              <h2 className={s.h2}>{results.length ? `${results.length} result${results.length > 1 ? "s" : ""} for “${query}”` : `No results for “${query}”`}</h2>
              {results.length ? (
                <div className={s.cardList}>
                  {results.map((svc) => <ServiceCard key={svc.id} svc={svc} {...cardProps} />)}
                </div>
              ) : (
                <div className={s.empty}>
                  <p>Not sure what pest you have? Send us a photo and we’ll tell you.</p>
                  <a className={s.btnPrimary} href={waLink(`Hi Akkad, I need help with: ${query}`)} target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" size={18} /> Ask on WhatsApp
                  </a>
                </div>
              )}
            </section>
          ) : (
            <>
              {/* ---------------- Pest grid ---------------- */}
              <section className={s.block}>
                <div className={s.panel}>
                  <h2 className={s.h2Small}>What’s bugging you?</h2>
                  <div className={s.pestGrid}>
                    {CATEGORIES.map((c) => (
                      <button key={c.id} type="button" className={s.pestTile} onClick={() => goToCat(c.id)}>
                        <span className={s.pestIcon}><img src={c.icon} alt="" /></span>
                        <span>{c.label}</span>
                      </button>
                    ))}
                    <a className={s.pestTile} href={waLink("Hi Akkad, I'm not sure which pest I have. Can I send a photo?")} target="_blank" rel="noopener noreferrer">
                      <span className={`${s.pestIcon} ${s.pestIconHelp}`}><Icon name="whatsapp" size={30} /></span>
                      <span>Not sure? Ask us</span>
                    </a>
                  </div>
                </div>
              </section>

              {/* ---------------- Offers ---------------- */}
              <section className={s.block} aria-label="Offers">
                <div className={s.rowHead}>
                  <h2 className={s.h2}>Offers & benefits</h2>
                  <div className={s.arrows}>
                    <button type="button" onClick={() => scrollOffers(-1)} aria-label="Previous offer"><Icon name="chevronRight" size={18} style={{ transform: "rotate(180deg)" }} /></button>
                    <button type="button" onClick={() => scrollOffers(1)} aria-label="Next offer"><Icon name="chevronRight" size={18} /></button>
                  </div>
                </div>
                <div className={s.offers} ref={offersRef}>
                  {OFFERS.map((o) => (
                    <div key={o.id} className={`${s.offer} ${s[`offer_${o.tone}`]}`}>
                      <div className={s.offerText}>
                        <span className={s.offerKicker}>{o.kicker}</span>
                        <p className={s.offerTitle}>{o.title}</p>
                        {o.target ? (
                          <button type="button" className={s.offerCta} onClick={() => goToCat(o.target)}>{o.cta} <Icon name="arrowRight" size={14} /></button>
                        ) : (
                          <a className={s.offerCta} href={waLink("Hi Akkad, can I pay with Tabby?")} target="_blank" rel="noopener noreferrer">{o.cta} <Icon name="arrowRight" size={14} /></a>
                        )}
                      </div>
                      <div className={s.offerImg}><img src={o.img} alt="" loading="lazy" /></div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ---------------- Sticky category chips ---------------- */}
              <div className={s.chipBar} ref={chipBarRef} role="tablist" aria-label="Pest categories">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    data-chip={c.id}
                    aria-selected={activeCat === c.id}
                    className={`${s.chip} ${activeCat === c.id ? s.chipOn : ""}`}
                    onClick={() => goToCat(c.id)}
                  >
                    <img src={c.icon} alt="" /> {c.label}
                  </button>
                ))}
              </div>

              {/* ---------------- Services by category ---------------- */}
              {CATEGORIES.map((c) => {
                const list = SERVICES.filter((x) => x.cat === c.id);
                if (!list.length) return null;
                return (
                  <section
                    key={c.id}
                    id={`svc-${c.id}`}
                    data-cat={c.id}
                    ref={(el) => (sectionRefs.current[c.id] = el)}
                    className={s.catSection}
                  >
                    <div className={s.catHead}>
                      <h2 className={s.h2}>{c.label} control</h2>
                      <p>{c.blurb}</p>
                    </div>
                    <div className={s.cardList}>
                      {list.map((svc) => <ServiceCard key={svc.id} svc={svc} {...cardProps} />)}
                    </div>
                    <Link href={c.learnMore} className={s.learnMore}>Learn more about {c.label.toLowerCase()} <Icon name="chevronRight" size={14} /></Link>
                  </section>
                );
              })}
            </>
          )}

          {/* ---------------- Akkad promise ---------------- */}
          <section className={s.block}>
            <div className={s.promise}>
              <div className={s.promiseHead}>
                <img src="/images/img/logo_small_kuskus.png" alt="" />
                <div>
                  <h2>The Akkad promise</h2>
                  <p>What you get with every booking</p>
                </div>
              </div>
              <ul className={s.promiseList}>
                {PROMISE.map((p) => (
                  <li key={p.title}>
                    <span className={s.promiseIcon}><Icon name={p.icon} size={20} /></span>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------------- Team + stats ---------------- */}
          <section className={s.block}>
            <div className={s.teamCard}>
              <img src="/images/new-home/team-working.jpg" alt="The Akkad Pest Control team with their service vehicles" loading="lazy" />
              <div className={s.teamText}>
                <span className={s.eyebrow}>Award-winning team</span>
                <h2>Trained experts, at your door</h2>
                <p>Uniformed, background-checked technicians with 10+ years of field experience. Awarded Best Pest Control Company 2025 by Dubai Municipality.</p>
              </div>
              <ul className={s.stats}>
                {STATS.map((st) => (
                  <li key={st.label}><strong>{st.value}</strong><span>{st.label}</span></li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------------- How it works ---------------- */}
          <section className={s.block}>
            <h2 className={s.h2}>How it works</h2>
            <ol className={s.steps}>
              {STEPS.map((st, i) => (
                <li key={st.title}>
                  <span className={s.stepNum}>{i + 1}</span>
                  <div>
                    <strong>{st.title}</strong>
                    <p>{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------------- Reviews ---------------- */}
          <section className={s.block}>
            <div className={s.rowHead}>
              <h2 className={s.h2}>Loved by families in {emirate}</h2>
            </div>
            <div className={s.reviewSummary}>
              <div className={s.reviewScore}>
                <strong>{RATING.score}</strong>
                <Stars value={RATING.score} size={16} />
                <span>{RATING.countLabel} reviews</span>
              </div>
              <ul className={s.histogram}>
                {RATING.histogram.map((h) => (
                  <li key={h.stars}>
                    <span>{h.stars}<Icon name="star" size={11} /></span>
                    <span className={s.bar}><span style={{ width: `${h.pct}%` }} /></span>
                    <span className={s.pct}>{h.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.reviews}>
              {REVIEWS.map((r) => (
                <figure key={r.name} className={s.review}>
                  <div className={s.reviewHead}>
                    <span className={s.avatar}>{initials(r.name)}</span>
                    <div>
                      <strong>{r.name}</strong>
                      <span>{r.date} · Google</span>
                    </div>
                  </div>
                  <Stars value={5} size={13} />
                  <blockquote>{r.text}</blockquote>
                </figure>
              ))}
            </div>
            <div className={s.reviewActions}>
              <a href={CONTACT.googleReviews} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>Read all reviews</a>
              <a href={CONTACT.writeReview} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>Write a review</a>
            </div>
          </section>

          {/* ---------------- Areas ---------------- */}
          <section className={s.block}>
            <h2 className={s.h2}>Popular areas we serve</h2>
            <div className={s.areas}>
              {AREAS.map((a) => (
                <Link key={a.href} href={a.href} className={s.area}><Icon name="pin" size={14} /> {a.label}</Link>
              ))}
            </div>
          </section>

          {/* ---------------- FAQ ---------------- */}
          <section className={s.block}>
            <h2 className={s.h2}>Frequently asked questions</h2>
            <div className={s.faq}>
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className={`${s.faqItem} ${open ? s.faqOpen : ""}`}>
                    <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : i)}>
                      <span>{f.q}</span>
                      <Icon name="chevronDown" size={18} />
                    </button>
                    <div className={s.faqA} hidden={!open}><p>{f.a}</p></div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ---------------- Final CTA ---------------- */}
          <section className={s.block}>
            <div className={s.helpCard}>
              <img src="/images/img/warranty_man.jpg" alt="" loading="lazy" />
              <div className={s.helpText}>
                <h2>Need help choosing?</h2>
                <p>Send us a photo of the pest – our expert will recommend the right treatment in minutes.</p>
                <div className={s.helpBtns}>
                  <a className={s.btnPrimary} href={waLink("Hi Akkad, I'd like some advice on pest control.")} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> WhatsApp us</a>
                  <a className={s.btnLight} href={CONTACT.phoneHref}><Icon name="phone" size={17} /> {CONTACT.phoneDisplay}</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ---------------- Desktop aside: cart + promise ---------------- */}
        <aside className={s.aside} aria-label="Your booking">
          <div className={s.asideCard}>
            <h2 className={s.asideTitle}>Your booking</h2>
            {cartLines.length === 0 ? (
              <div className={s.asideEmpty}>
                <span className={s.asideEmptyIcon}><Icon name="cart" size={26} /></span>
                <p>No services added yet</p>
                <small>Tap “Add” on any service to start.</small>
              </div>
            ) : (
              <>
                <ul className={s.cartLines}>
                  {cartLines.map((l) => (
                    <li key={l.key}>
                      <div>
                        <strong>{l.svc.title}</strong>
                        <span>{l.opt.label}</span>
                      </div>
                      <Stepper qty={l.qty} size="sm" label={l.svc.title} onInc={() => add(l.svc.id, l.opt.id)} onDec={() => dec(l.svc.id, l.opt.id)} />
                      <b>{aed(l.total)}</b>
                    </li>
                  ))}
                </ul>
                <button type="button" className={s.btnCheckout} onClick={() => setSheet({ type: "cart" })}>
                  <span>{aed(cartTotal)}</span>
                  <span>Choose time <Icon name="arrowRight" size={16} /></span>
                </button>
              </>
            )}
          </div>
          <div className={s.asideCard}>
            <ul className={s.asidePromise}>
              {PROMISE.map((p) => (
                <li key={p.title}><Icon name={p.icon} size={18} /><span><strong>{p.title}</strong> · {p.text}</span></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* ---------------- Footer ---------------- */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div className={s.footerBrand}>
            <img src="/images/new-home/logo-white.png" alt="Akkad Pest Control" />
            <p>Dubai Municipality licensed pest control for homes and businesses across Dubai, Sharjah and Ajman.</p>
            <div className={s.socials}>
              <a href="https://facebook.com/akkadpestcontrol" aria-label="Facebook"><img src="/images/new-home/facebook.png" alt="" /></a>
              <a href="https://www.instagram.com/akkadpestcontrol/" aria-label="Instagram"><img src="/images/new-home/instagram.png" alt="" /></a>
            </div>
          </div>
          <div className={s.footerCols}>
            <div>
              <h3>Services</h3>
              {CATEGORIES.slice(0, 5).map((c) => <Link key={c.id} href={c.learnMore}>{c.label} control</Link>)}
              <Link href="/commercial-pest-control">Commercial</Link>
            </div>
            <div>
              <h3>Company</h3>
              <Link href="/about-akkad">About Akkad</Link>
              <Link href="/contact-us">Contact us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/blogs">Blog</Link>
              <a href={CONTACT.myWarranty}>My Warranty</a>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="tel:+97144251557">+971 4 425 1557</a>
              <a href="tel:+97143966211">+971 4 396 6211</a>
              <a href="tel:+97142521009">+971 4 252 1009</a>
              <a href={waLink("Hi Akkad")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className={s.footerBottom}>
          <div className={s.payments}>
            {["visa", "master-card", "pay", "tabby"].map((p) => <img key={p} src={`/images/new-home/${p}.png`} alt={p} />)}
          </div>
          <p>© {new Date().getFullYear()} Akkad Pest Control Services LLC · <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms-and-conditions">Terms</Link></p>
        </div>
      </footer>

      {/* ---------------- Mobile bottom bar ---------------- */}
      <div className={s.bottomBar}>
        {cartCount > 0 ? (
          <button type="button" className={s.cartBar} onClick={() => setSheet({ type: "cart" })}>
            <span className={s.cartBarLeft}>
              <span className={s.cartBadge}><Icon name="cart" size={18} /><i>{cartCount}</i></span>
              <span><b>{aed(cartTotal)}</b><small>{cartCount} item{cartCount > 1 ? "s" : ""}</small></span>
            </span>
            <span className={s.cartBarCta}>View cart <Icon name="chevronRight" size={16} /></span>
          </button>
        ) : (
          <div className={s.quickBar}>
            <a href={CONTACT.phoneHref} className={s.btnLight}><Icon name="phone" size={17} /> Call</a>
            <a href={waLink("Hi Akkad, I need help with pest control.")} target="_blank" rel="noopener noreferrer" className={s.btnPrimary}><Icon name="whatsapp" size={18} /> WhatsApp us</a>
          </div>
        )}
      </div>

      {/* ---------------- Sheets ---------------- */}
      <Sheet open={sheet?.type === "location"} onClose={closeSheet} title="Where do you need us?">
        <div className={s.locList}>
          {EMIRATES.map((e) => (
            <button
              key={e}
              type="button"
              className={`${s.locOption} ${emirate === e ? s.locOptionOn : ""}`}
              onClick={() => { setEmirate(e); closeSheet(); }}
            >
              <Icon name="pin" size={18} /> <span>{e}</span>
              {emirate === e && <Icon name="check" size={18} />}
            </button>
          ))}
        </div>
      </Sheet>

      <Sheet
        open={!!detailsSvc}
        onClose={closeSheet}
        title={detailsSvc?.title || ""}
        footer={
          countFor(detailsSvc?.id || "") > 0 ? (
            <button type="button" className={s.btnCheckout} onClick={() => setSheet({ type: "cart" })}>
              <span>{aed(cartTotal)}</span>
              <span>View cart <Icon name="arrowRight" size={16} /></span>
            </button>
          ) : (
            <button type="button" className={s.btnSecondary} onClick={closeSheet}>Done</button>
          )
        }
      >
        {detailsSvc && (
          <div className={s.details}>
            <div className={s.detailsHero}><img src={detailsSvc.img} alt="" /></div>
            <div className={s.cardMeta}>
              <span><Icon name="shield" size={14} /> {detailsSvc.warranty}</span>
              <span><Icon name="clock" size={14} /> {detailsSvc.duration}</span>
            </div>

            <h3 className={s.h3}>{detailsSvc.options.length > 1 ? "Choose your home size" : "Price"}</h3>
            <ul className={s.optList}>
              {detailsSvc.options.map((o) => {
                const q = qtyFor(detailsSvc.id, o.id);
                return (
                  <li key={o.id}>
                    <div>
                      <strong>{o.label}</strong>
                      <span>{aed(o.price)}</span>
                    </div>
                    {q > 0 ? (
                      <Stepper qty={q} size="sm" label={o.label} onInc={() => add(detailsSvc.id, o.id)} onDec={() => dec(detailsSvc.id, o.id)} />
                    ) : (
                      <button type="button" className={s.addBtn} onClick={() => add(detailsSvc.id, o.id)}>Add</button>
                    )}
                  </li>
                );
              })}
            </ul>

            <h3 className={s.h3}>What’s included</h3>
            <ul className={s.checkList}>
              {detailsSvc.includes.map((x) => <li key={x}><Icon name="check" size={16} /> {x}</li>)}
            </ul>

            <h3 className={s.h3}>Before we arrive</h3>
            <ul className={s.tipList}>
              {detailsSvc.before.map((x) => <li key={x}>{x}</li>)}
            </ul>

            <Link href={CATEGORIES.find((c) => c.id === detailsSvc.cat).learnMore} className={s.learnMore} onClick={closeSheet}>
              Learn more about this treatment <Icon name="chevronRight" size={14} />
            </Link>
          </div>
        )}
      </Sheet>

      <Sheet
        open={sheet?.type === "cart"}
        onClose={closeSheet}
        title="Your booking"
        wide
        footer={
          cartLines.length > 0 && (
            <div className={s.cartFoot}>
              <a className={s.btnPrimaryBig} href={waLink(bookingMessage)} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={20} /> Confirm on WhatsApp · {aed(cartTotal)}
              </a>
              <a className={s.callLink} href={CONTACT.phoneHref}>or call {CONTACT.phoneDisplay}</a>
            </div>
          )
        }
      >
        {cartLines.length === 0 ? (
          <div className={s.asideEmpty}>
            <span className={s.asideEmptyIcon}><Icon name="cart" size={26} /></span>
            <p>Your cart is empty</p>
            <button type="button" className={s.btnSecondary} onClick={closeSheet}>Browse services</button>
          </div>
        ) : (
          <div className={s.checkout}>
            <ul className={s.cartLines}>
              {cartLines.map((l) => (
                <li key={l.key}>
                  <div>
                    <strong>{l.svc.title}</strong>
                    <span>{l.opt.label} · {aed(l.opt.price)}</span>
                  </div>
                  <Stepper qty={l.qty} size="sm" label={l.svc.title} onInc={() => add(l.svc.id, l.opt.id)} onDec={() => dec(l.svc.id, l.opt.id)} />
                  <b>{aed(l.total)}</b>
                </li>
              ))}
            </ul>

            <h3 className={s.h3}><Icon name="calendar" size={17} /> When should we come?</h3>
            <div className={s.dateRow}>
              {dates.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={`${s.dateChip} ${booking.date === d.id ? s.dateChipOn : ""}`}
                  onClick={() => setBooking((b) => ({ ...b, date: d.id }))}
                >
                  <small>{d.top}</small>
                  <strong>{d.bottom}</strong>
                </button>
              ))}
            </div>
            <div className={s.slotRow}>
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`${s.slot} ${booking.slot === t ? s.slotOn : ""}`}
                  onClick={() => setBooking((b) => ({ ...b, slot: t }))}
                >
                  {t}
                </button>
              ))}
            </div>

            <h3 className={s.h3}><Icon name="user" size={17} /> Your details <small>(optional)</small></h3>
            <div className={s.fields}>
              <input type="text" placeholder="Your name" value={booking.name} onChange={(e) => setBooking((b) => ({ ...b, name: e.target.value }))} aria-label="Your name" />
              <input type="text" placeholder={`Area / building in ${emirate}`} value={booking.area} onChange={(e) => setBooking((b) => ({ ...b, area: e.target.value }))} aria-label="Area or building" />
            </div>

            <div className={s.summary}>
              <div><span>Services</span><span>{aed(cartTotal)}</span></div>
              <div><span>Warranty</span><span className={s.free}>6 months included</span></div>
              <div className={s.summaryTotal}><span>Estimated total</span><span>{aed(cartTotal)}</span></div>
              <p>Our team confirms the final price and exact time on WhatsApp before the visit.</p>
            </div>
          </div>
        )}
      </Sheet>
    </div>
  );
}
