"use client"
import React, { useState } from "react";
import Link from "next/link";
import menuItems from "./menu";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuVisible(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    
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
    
    
    <nav className="navbar navbar-expand-lg  navbar-light bg-light fixed-top height-for-nav ">
      <div className="container bg-light">
        <Link className="navbar-brand" href="/">
          <img
            src="/images/img/logo_small_kuskus.png"
            className="img-fluid w-50"
            alt="Logo Image of Akkad Pest Control"
          />
        </Link>
        
        


        <button
            onClick={toggleSidebar}
            className="menu-icon-button"
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          >
            {/* {isSidebarOpen ? "-" : "+"} */}
            <span className="navbar-toggler-icon"></span>
          </button>
       <div className="d-flex align-items-center">
  <a href="https://wa.me/97144251557?text=Hi" className="hide-on-desktop header-call-to-action"
    target="_blank" rel="noopener noreferrer">
    WhatsApp
  </a>
  <a href="tel:+97144251557" className="hide-on-desktop header-call-to-action"
    target="_blank" rel="noopener noreferrer">
    Call Us
  </a>

  {/* ✅ My Warranty - now visible on mobile */}
  <Link
  href="https://bookingwidget.pestcontrol.ae/#/login"
  className="hide-on-desktop header-call-to-action"
>
  My Warranty
</Link>
</div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuVisible(!isMenuVisible)} 
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuVisible}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuVisible ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 right-menu left-menu-akkad align-items-lg-center">
            <li className="mega-my-warranty-button mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-827 my-warranty-button">
              <Link className="btn" href="https://bookingwidget.pestcontrol.ae/#/login" tabIndex="0" onClick={handleMenuItemClick}>
                My Warranty
              </Link>
            </li>
            {menuItems.map((menuItem, index) => (
              <li key={index} className={`hide-nvb-desktop nav-item ${menuItem.dropdown ? 'dropdown' : ''}`}>
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
          <Link className="font-bold ms-auto fs-3 text" href="/">
            044251557
          </Link>
          <script src="https://analytics.ahrefs.com/analytics.js" data-key="Uj8TnPthXkp+Q7GJXms55A" async></script>
        </div>
      </div>
    </nav>
    
    
  );
};

export default Header;
