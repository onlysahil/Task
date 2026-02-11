import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="India Flag"
          className="hero-flag"
        />

        <p className="hero-tagline">PERFORMANCE FOCUSED</p>

        <h1 className="hero-title">
          LEAD GENERATION SERVICES
        </h1>

        <p className="hero-subtitle">
          HELPED 400+ CLIENTS ACHIEVE OVER 10 LAKH+ QUALIFIED LEADS SINCE 2013
        </p>

        <button className="hero-btn">
          REQUEST A CALL
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
