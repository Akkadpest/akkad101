import { NextResponse } from "next/server";

// In-memory store (resets on server restart)
// For production, replace with a real DB or Google Sheets only
const leads = [];

// ── POST — save a new lead ────────────────────────────────────────────────────
export async function POST(req) {
  try {
    const body = await req.json();
    const lead = {
      name:  body.name  || "",
      email: body.email || "",
      phone: body.phone || "",
      prize: body.prize || "No Luck",
      code:  body.code  || "-",
      date:  body.date  || new Date().toLocaleString("en-GB"),
    };

    // Save in memory
    leads.unshift(lead);

    // Send to Google Sheets (permanent storage)
    const sheetsUrl = process.env.SHEETS_URL;
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch (e) {
        console.error("Google Sheets error:", e);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead save error:", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

// ── GET — fetch all leads (admin) ─────────────────────────────────────────────
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const pass = searchParams.get("pass");
    if (pass !== process.env.ADMIN_PASS && pass !== "akkad2025") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ leads });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}