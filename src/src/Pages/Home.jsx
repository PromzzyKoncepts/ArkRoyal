import { useState } from "react";

import "../../Stylesheets/Home.css";
import AboutCounter from "../Hooks/Counter";
import CitiesSlider from "../components/Slider";
import People from "../data/People";
import Featuring from "../components/Featuring";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Slider2 from "../components/Slider2";
import PeopleSlides from "../components/PeopleSlides";
// import { Link } from "react-router-dom";


const Home = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDivHover = () => {
    setShowDetails(true);
  };

  const handleDivLeave = () => {
    setShowDetails(false);
  };

  return (
    <div>      
      <div className="mobile_disable">
        <CitiesSlider />
      </div>
      <div className="desktop_disable">
        <Slider2 />
      </div>
      <Featuring />

      <AboutCounter className="" />

      <div className="section_people" id="section_people">
        <h1 id="meet_the_people">Meet The People</h1>
        <p data-aos="fade-up">
          Meet the incredible members of Ark Royal – a tapestry woven with
          diverse talents, boundless passion, and unwavering dedication. Our
          community is a mosaic of professionals from various fields, each
          contributing a unique hue to the canvas of positive societal change.
        </p>
        <div data-aos="fade-up" className="swiper">
          {People.map((person, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${person.picture})` }}
              className={`swiper-item ${showDetails ? "details-shown" : ""}`}
              onMouseEnter={handleDivHover}
              onMouseLeave={handleDivLeave}
            >
              {showDetails && (
                <div className="people-details">
                  <h4 className="colored-text">{person.name}</h4>
                  <small>{person.position}</small>
                  <hr></hr>
                  <br />
                  <p>{person.company}</p>
                  <small className="colored-text">{person.profession}</small>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* slides 2 for mobile screen */}

        <PeopleSlides />
      </div>

      <Events />
      <Footer />
    </div>
  );
};

export default Home;
