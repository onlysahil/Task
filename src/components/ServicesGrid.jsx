import "./ServicesGrid.css";

const services = [
  {
    title: "Lead Generation",
    desc: "Increase number of quality leads with lead generation campaigns. Successful lead generation campaign needs to identify, create, engage and convert. Call us to get more leads for your business through paid or organic promotion and reap benefits.",
    color: "#d4a017",
     icon: "./src/assets/leads.png",
    btn: "#b8860b",
  },
  {
    title: "Google Ads Services",
    desc: "Rank your website on 1st rank of Google, get noticed get business. Google Ads stand out your brand on top before real audience to gain maximum enquiries of users searching your product or services. Get highest ROI with Google Ads at most profitable package.",
    color: "#3b82f6",
    icon: "./src/assets/leads.png",
    btn: "#2563eb",
  },
  {
    title: "SEO Services",
    desc: "Organizations and business are rapidly growing these days due to their increased presence online. With our Search Engine Optimization services, you can rapidly increase your visibility online and ultimately grow your business.",
    color: "#8b5cf6",
    btn: "#7c3aed",
    icon: "./src/assets/leads.png",
  },
   {
    title: "Lead Generation",
    desc: "Increase number of quality leads with lead generation campaigns. Successful lead generation campaign needs to identify, create, engage and convert. Call us to get more leads for your business through paid or organic promotion and reap benefits.",
    color: "#d4a017",
     icon: "./src/assets/leads.png",
    btn: "#b8860b",
  },
  {
    title: "Google Ads Services",
    desc: "Rank your website on 1st rank of Google, get noticed get business. Google Ads stand out your brand on top before real audience to gain maximum enquiries of users searching your product or services. Get highest ROI with Google Ads at most profitable package.",
    color: "#3b82f6",
    icon: "./src/assets/leads.png",
    btn: "#2563eb",
  },
  {
    title: "SEO Services",
    desc: "Organizations and business are rapidly growing these days due to their increased presence online. With our Search Engine Optimization services, you can rapidly increase your visibility online and ultimately grow your business.",
    color: "#8b5cf6",
    btn: "#7c3aed",
    icon: "./src/assets/leads.png",
  },
  

  /* add remaining 9 cards here later */
];

const ServicesGrid = () => {
  return (
    <section className="services-section">

      <h2 className="services-heading">
        HOW DO WE EMPOWER YOU DIGITALLY
      </h2>

      <p className="services-subtext">
        At King of Digital Marketing, we don’t just offer digital marketing services; we create digital success stories for clients. Our experts combine strategy, creativity and technology to deliver measurable growth.
      </p>

      <div className="services-grid">
        {services.map((item, i) => (
          <div key={i} className="service-card">
<img src={item.icon} alt={item.title} className="service-icon" />

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button style={{ background: item.btn }}>
              Read More
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
