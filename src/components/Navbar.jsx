import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      {/* TOP BAR */}
      <div className="navbar-top">
        <div className="top-links">
          <a href="#">About Us</a>
          <span>›</span>
          <a href="#">Blog</a>
          <span>›</span>
          <a href="#">Career</a>
          <span>›</span>
          <a href="#">Guest Post</a>
        </div>

        <div className="top-contact">
          📞 (+91) 9555696058
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="navbar-main">
        <div className="logo">
          <img
            src="https://www.kingofdigitalmarketing.com/img/logo.png"
            alt="logo"
          />
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* MENU */}
        <nav className={`menu ${open ? "show" : ""}`}>
          <a className="active" href="#">HOME</a>
          <a href="#">SERVICES ▾</a>
          <a href="#">OUR PACKAGES ▾</a>
          <a href="#">WHO WE ARE ▾</a>
          <a href="#">COURSES ▾</a>
          <a href="#">CONTACT US</a>

          <div className="mobile-extra">
            <div className="socials">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-youtube"></i>
            </div>

            <button className="seo-btn">Free SEO Report!</button>
          </div>
        </nav>

        {/* DESKTOP RIGHT */}
        <div className="nav-right">
          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
          </div>

          <button className="seo-btn">Free SEO Report!</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
