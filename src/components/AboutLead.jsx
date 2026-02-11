import "./AboutLead.css";

const AboutLead = () => {
  return (
    <section className="about-section">

      {/* LEFT CONTENT */}
      <div className="about-left">
        <h2>King of Digital Marketing</h2>

        <p>
          King of Digital Marketing is India's leading digital marketing services company in Delhi.
          Established in 2013, We have an experienced team, innovative strategies, and guaranteed results.
          We love to help ambitious companies to achieve skyrocketing online growth. You can feel the digital
          experience when we connect the brand with the audience with great ideas. We strive to provide cost
          effective digital marketing services for domestic and international clients.
        </p>

        <p>
          <strong>What We Do?</strong> We bring together professionalism, passion, and performance through our
          proven <span className="link">Lead Generation Services</span> with
          <span className="link"> Social Media Marketing</span> or
          <span className="link"> PPC Management (Google Ads)</span>.
          We are here to help you become the best in your industry.
        </p>

        <div className="about-buttons">
          <button className="btn-primary">Let's Talk About Your Business</button>
          <button className="btn-secondary">Know More About Us</button>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="lead-form">
        <h3>
          Ready to Grow Your Business
          <br />
          Write Your Requirements
        </h3>

        <form>
          <input placeholder="Your Name" />
          <input placeholder="Contact No" />
          <input placeholder="Your Email" />
          <input placeholder="Company Name" />
          <input placeholder="Website" />

          <select>
            <option>SEO</option>
            <option>Social Media</option>
            <option>PPC</option>
            <option>Web Development</option>
          </select>

          <textarea placeholder="Requirements"></textarea>

          <button className="submit-btn">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
};

export default AboutLead;
