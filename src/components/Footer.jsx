import "./footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        {/* SERVICES */}
        <div>
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Search Engine Optimization</li>
            <li>Social Media Optimization</li>
            <li>Pay Per Click/PPC Management</li>
            <li>Online Reputation Management</li>
            <li>Mobile App Promotion</li>
            <li>Social Media Marketing Services</li>
            <li>Content Writing Service</li>
            <li>Website Design & Development</li>
            <li>Android App Development</li>
            <li>SEO Freelancer in India</li>
            <li>Facebook Marketing Services</li>
            <li>Lead Generation Services</li>
            <li>Flipkart Marketing Services</li>
            <li>Amazon Marketing Services</li>
            <li className="blue">Digital Marketing Company</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h3>INDUSTRIES</h3>
          <ul>
            <li>Astrology</li>
            <li>Cosmetic/Plastic Surgeon</li>
            <li>Hair Transplant</li>
            <li>Immigration/Visa</li>
            <li>Overseas Education</li>
            <li>Yoga Studio</li>
            <li>Nephrologist</li>
            <li>Institute/Schools</li>
            <li>E-Commerce</li>
            <li>Coworking Space</li>
            <li>Politicians</li>
            <li>Fitness Trainer</li>
            <li>Startups</li>
            <li>Travel Agency/Hotels</li>
            <li className="blue">View More Industries</li>
          </ul>
        </div>

        {/* PACKAGES */}
        <div>
          <h3>VARIOUS PACKAGES</h3>
          <ul>
            <li>SEO Packages</li>
            <li>SMO Packages</li>
            <li>PPC Packages</li>
            <li>ORM Packages</li>
            <li>Content Writing Packages</li>
            <li>Website Development Packages</li>
            <li>Website Design Packages</li>
            <li>Android App Development Packages</li>
            <li>SEO Freelance Packages</li>
            <li className="blue">Quick Links</li>
            <li>Latest Blogs Career</li>
            <li>Team</li>
            <li>Portfolio</li>
            <li>Case Studies</li>
            <li className="blue">Digital Marketing Course</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3>CONTACT US</h3>

          <p><span>Head Branch:</span> 1800/09, 1st Floor Govindpuri Extension, Kalkaji New Delhi - 110019</p>
          <p className="blue">Phone: +91 9555696058</p>
          <p className="blue">Email: info@kingofdigitalmarketing.com</p>

          <p><span>Branch Office:</span><br/>Allahabad, Uttar Pradesh - 211003</p>
          <p className="blue">Phone: +91 9821918208</p>

          <div className="whatsapp">WhatsApp <span>Chat with us now</span></div>

          <div className="socials">
            <FaFacebookF/>
            <FaTwitter/>
            <FaLinkedinIn/>
            <FaInstagram/>
            <FaYoutube/>
          </div>

          <p className="blue pay">MAKE ONLINE PAYMENT</p>
        </div>

      </div>

      {/* CERTIFICATION ROW */}
      <div className="certifications">
  <img src="./src/assets/logobanner.png" alt="certifications" />
</div>

    </footer>
  );
}
