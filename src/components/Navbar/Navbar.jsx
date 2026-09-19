import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuToggle = useRef(null);

  useEffect(() => {
    if (!showMenu) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowMenu(false);
        menuToggle.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          {/* Hon. Seyi Adisa */}
          <img src={logo} alt="Seyi Adisa" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/services"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/resources"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Resources
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/community"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Community
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/books"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Books
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link nav__cta"
                onClick={closeMenuOnMobile}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button type="button" aria-label="Close navigation" className="nav__close" id="nav-close" onClick={() => { setShowMenu(false); menuToggle.current?.focus(); }}>
            <IoClose />
          </button>
        </div>

        <button type="button" ref={menuToggle} aria-label="Open navigation" aria-expanded={showMenu} aria-controls="nav-menu" className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
