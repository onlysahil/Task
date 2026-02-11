import "./Expertise.css";

const services = [
  {
    no: "01",
    title: "DIGITAL MARKETING SERVICES",
    desc: "Grow Your Business by SEO SMO PPC Services",
    color: "#f97316",
    icon: "📣",
  },
  {
    no: "02",
    title: "PPC SERVICES",
    desc: "Instant Traffic, Leads, Sales, Brand Awareness",
    color: "#0ea5e9",
    icon: "🖼️",
  },
  {
    no: "03",
    title: "WEB DESIGN & DEVELOPMENT",
    desc: "Creative High Quality Website Design & Development",
    color: "#0f172a",
    icon: "🌐",
  },
  {
    no: "04",
    title: "SOCIAL MEDIA SERVICES",
    desc: "Let Your Social Profile Engage Your Customers",
    color: "#64748b",
    icon: "💬",
  },
  {
    no: "05",
    title: "MOBILE APP DEVELOPMENT",
    desc: "Make Android & iOS App for Your Business",
    color: "#0d9488",
    icon: "📱",
  },
  {
    no: "06",
    title: "CONTENT WRITING SERVICES",
    desc: "High quality content to increase the traffic & rank",
    color: "#eab308",
    icon: "✍️",
  },
  {
    no: "07",
    title: "LEAD GENERATION",
    desc: "Guaranteed & Qualified Lead Generation",
    color: "#ef4444",
    icon: "📈",
  },
  {
    no: "08",
    title: "LEARN DIGITAL MARKETING",
    desc: "Make Your Career in Digital Marketing",
    color: "#ca8a04",
    icon: "🎓",
  },
];

const Expertise = () => {
  return (
    <section className="expertise">
      <p className="expertise-top">
        <span>RESULT DRIVEN</span> DIGITAL MARKETING COMPANY IN DELHI, INDIA
      </p>

      <p className="expertise-sub">
        Unique and Innovative Digital Marketing Strategies
      </p>

      <h2 className="expertise-title">Our Expertise</h2>

      <div className="expertise-grid">
        {services.map((item) => (
     <div
  key={item.no + item.title}
  className="expertise-card"
  style={{ "--accent": item.color || "#000" }}
>

            <div className="card-no" style={{ color: item.color }}>
              {item.no}
            </div>

            <div className="card-icon">{item.icon}</div>

            <h3 style={{ color: item.color }}>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
