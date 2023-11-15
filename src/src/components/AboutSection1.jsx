import { useState } from "react";
import Features from "../data/FeaturesData";
import meeting from "../../assets/meeting.jpg";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";


const AboutSection1 = () => {
  const [expandedFeatures, setExpandedFeatures] = useState({});

  const toggleFeature = (index) => {
    setExpandedFeatures((prevExpandedFeatures) => ({
      ...prevExpandedFeatures,
      [index]: !prevExpandedFeatures[index],
    }));
  };

  return (
    <div>
      <div className="aboutSection1">
        <img src={meeting} alt="meeting pics" />
        <div>
          <h1>Affecting Lives for many years</h1>
          <strong>
            Our dedication to continuously touch lives of people around us
          </strong>
          <p>
            Through the passage of time, we come to realize that life is a
            complex interplay of actions and reactions, each with the potential
            to affect lives for many years. Whether through inspiration,
            support, or the lessons learnt, our actions can be the catalysts
            that shape the narratives of countless souls, leaving an enduring
            legacy that transcends the boundaries of time.
          </p>
          <div>
            <h4>Our Goals</h4>
            <div className="featureDiv">
              {Features.map((feature, index) => (
                <div className="featureCaptions" key={index}>
                  {expandedFeatures[index] ? (
                    <div>
                      <div className="expandedCaptions">
                        <RemoveCircleOutlineRoundedIcon
                          onClick={() => toggleFeature(index)}
                          style={{ cursor: "pointer" }}
                        />
                        <p className="" onClick={() => toggleFeature(index)}>
                          {feature.title}
                        </p>
                      </div>
                      <p className="featureDetails">{feature.details}</p>
                    </div>
                  ) : (
                    <>
                      <ControlPointIcon
                        onClick={() => toggleFeature(index)}
                        style={{ cursor: "pointer" }}
                      />
                      <p
                        className="featureCaptions"
                        onClick={() => toggleFeature(index)}
                      >
                        {feature.title}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection1