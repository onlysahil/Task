import "./Navbar.css";
// import logo from "./logo.png"; 

const Navbar = () => {
  return (
    <header className="navbar">
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
          <span>📞 (+91) 9555696058</span>
        </div>
      </div>

      <div className="navbar-main">
        <div className="logo">
            
          {/* <img src={logo} alt="King Digital Marketing" /> */}
          <img src="https://www.kingofdigitalmarketing.com/img/logo.png" alt="King Digital Marketing" />
        </div>

        <nav className="menu">
          <a className="active" href="#">HOME</a>
          <a href="#">SERVICES ▾</a>
          <a href="#">OUR PACKAGES ▾</a>
          <a href="#">WHO WE ARE ▾</a>
          <a href="#">COURSES ▾</a>
          <a href="#">CONTACT US</a>
        </nav>

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
