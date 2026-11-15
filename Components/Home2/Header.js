"use client"
import React, { useState } from "react";
import Link from "next/link";
import menuItems from "../Layout/menu";

const HeaderTwo = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuVisible(false);
  };

  const renderDropdown = (items) => (
    <ul className="dropdown-menu">
      {items.map((item, index) => (
        <li key={index} className={`dropdown-submenu ${item.dropdown ? 'dropdown' : ''}`}>
          <Link
            className={`dropdown-item ${item.dropdown ? 'dropdown-toggle' : ''}`}
            href={item.href}
            onClick={handleMenuItemClick}
          >
            {item.text}
          </Link>
          {item.dropdown && renderDropdown(item.dropdown)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className=" navbar navbar-expand-lg  navbar-light  start-0 end-0">
      <div className="container  gap-2 gap-md-0">
        <Link className="navbar-brand m-0" href="/">
          <img
            src="/images/img/logo_small_kuskus.png"
            className="img-fluid"
            alt="Logo Image of Akkad Pest Control"
          />
        </Link>
        <div className="d-flex gap-1 gap-md-0">
          <a
            href="https://wa.me/971504001344?text=Hi"
            className=" header-call-to-action nav-btn-home2"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="tel:+97144251557"
            className=" header-call-to-action nav-btn-home2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Call Us
          </a>
          <Link
            href="https://bookingwidget.pestcontrol.ae/#/login"
            className=" header-call-to-action nav-btn-home2"
            rel="noopener noreferrer"
          >
                            My Warranty


          </Link>
          </div>
        <button
          className="navbar-toggler border border-white"
          type="button"
          onClick={() => setIsMenuVisible(!isMenuVisible)} 
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuVisible}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon-mobile"></span>
          
        </button>
        <div className={`collapse navbar-collapse ${isMenuVisible ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 right-menu left-menu-akkad align-items-lg-center">
            <li className="mega-my-warranty-button mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-827 my-warranty-button">
              <Link className="btn" href="https://bookingwidget.pestcontrol.ae/#/login" tabIndex="0" onClick={handleMenuItemClick}>
                My Warranty
              </Link>
            </li>
            {menuItems.map((menuItem, index) => (
              <li key={index} className={`nav-item ${menuItem.dropdown ? 'dropdown' : ''}`}>
                <Link
                  href={menuItem.href}
                  className={`nav-link ${menuItem.dropdown ? 'dropdown-toggle' : ''}`}
                  id={`dropdownMenuButton${index}`}
                  role="button"
                  aria-expanded="false"
                  onClick={handleMenuItemClick} 
                >
                  {menuItem.text}
                </Link>
                {menuItem.dropdown && renderDropdown(menuItem.dropdown)}
              </li>
            ))}
          </ul>
          <Link className="font-bold m-auto fs-3 text" href="/">
            044251557
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTwo;
