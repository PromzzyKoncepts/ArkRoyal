import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Stylesheets/PeopleSlides.css";
import People from "../data/People";

function PeopleSlides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div data-aos="fade-up" className="PeopleCont">
      <div className="content">
        <div className="container">
          <Slider {...settings}>
            {People.map((item, index) => (
              <div className="people_card" key={index}>
                <div>
                  <img
                    src={item.picture}
                    alt={item.picture}
                    className="people_img"
                  />
                </div>
                <div className="card_details">
                  <h2 className="people_title">{item.name}</h2>
                  <small className="people_small">{item.position}</small>
                  <p className="people_description">{item.company}</p>
                  <small className="people_small">{item.profession}</small>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PeopleSlides;
