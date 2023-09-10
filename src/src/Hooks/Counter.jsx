import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";
import '../../Stylesheets/Home.css'
import Features from "../data/FeaturesData";



const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 500, duration: 5 });
  useCountUp({ ref: "members", end: 50, duration: 5 });
  useCountUp({ ref: "githubStarsCounter", end: 100, duration: 5 });
  useCountUp({ ref: "feedbackCounter", end: 92, duration: 5 });
  useCountUp({ ref: "projectsCounter", end: 50, duration: 5 });

  return (
    <div className="counter">
      <h1>
        We have transformed over <span className="span">1000 lives</span> all
        over the Country
      </h1>

      <div className="counter-container">
        <CounterItem
          title="Members"
          counter={<span id="members" />}
          measurement="+"
        />

        <CounterItem
          title="Hospitals Visited"
          counter={<span id="githubStarsCounter" />}
          measurement="+"
        />

        <CounterItem
          title="Community Outreaches"
          counter={<span id="feedbackCounter" />}
          measurement="+"
        />

        <CounterItem
          title="Charity Outreaches"
          counter={<span id="projectsCounter" />}
          measurement="+"
        />
      </div>
      <div className="features">
        {Features.map((feature, index) => (
          <div key={index}>
            {feature.icon}
            <h5>{ feature.title}</h5>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default AboutCounter;
