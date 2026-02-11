import "./process.css";
import { FaUsers, FaClipboardList, FaFlask, FaRocket } from "react-icons/fa";


const steps = [
  {
    no: "1",
    icon: <FaUsers />,
    title: "WORKSHOPS",
    list: [
      "Business Analysis",
      "Campaign Objective",
      "Preparing Proposal",
      "Designing Deliverables",
    ],
  },
  {
    no: "2",
    icon: <FaClipboardList />,
    title: "PLANNING",
    list: [
      "Industry Research",
      "Competitor Research",
      "Selecting Marketing Channels",
      "Strategy Development",
    ],
  },
  {
    no: "3",
    icon: <FaFlask />,
    title: "A/B TESTING",
    list: [
      "Experimenting with Ads",
      "Experimenting with Content",
      "Testing SEO Techniques",
      "Analyzing Audience Behavior",
    ],
  },
  {
    no: "4",
    icon: <FaRocket />,
    title: "EXECUTION",
    list: [
      "Creating Campaign",
      "Content Production",
      "Strategy Optimization",
      "Analysis & Reporting",
    ],
    button: true,
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="tag">OUR PROVEN APPROACH</div>

      <h2>DIGITAL MARKETING PROCESS</h2>

      <p className="sub">
        From strategy to execution, our systematic 4-step process delivers
        measurable results for your business
      </p>

      <div className="process-grid">
        {steps.map((item, i) => (
          <div className="card" key={i}>
            <div className="badge">{item.no}</div>

            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <ul>
              {item.list.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>

            {item.button && <button>✓ Final Step</button>}
          </div>
        ))}
      </div>
    </section>
  );
}
