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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, neque!
          </strong>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus nobis cumque reiciendis unde ut debitis, voluptatem quis
            eaque aspernatur dolorem. Fugit impedit asperiores repellendus
            soluta quos eos nobis, labore voluptas in doloribus.
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
                      {/* Add your expanded details here */}
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