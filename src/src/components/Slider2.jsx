import {useState, useRef} from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Support from "../../assets/support2.jpg";
import Children from "../../assets/children1.jpg";
import Group from "../../assets/group.jpg";
import football from "../../assets/football.jpg";
import buildingHouse from "../../assets/buildingHouse.jpg";
// import Header from "./Header";
// import { Burger, Menu } from "./Hamburger";

const Slider2 = () => {
    // const [open, setOpen] = useState(false);
    // const node = useRef();
  const slides = [
    {
      city: "Ark Royal",
      country: "Meet the People",
      img: Group,
      link: "#section_people",
    },
    {
      city: "Giving Back to Communities",
      country: "Offering support and assistance",
      img: Support,
    },
    {
      city: "Touching Lives",
      country: "Giving a Helping Hand to countless lives",
      img: Children,
    },
    {
      city: "Recreation & Entertainment",
      country: "All scopes of fun, Art, music and Entertainment",
      img: football,
    },
    {
      city: "Community Building",
      country: "",
      img: buildingHouse,
    },
  ];

  return (
    <div className="">
      {/* <div ref={node} className="hamburger">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div> */}
      <Carousel fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              src={slide.img}
              className="d-block w-100"
              alt={`Slide ${index}`}
            />
            <Carousel.Caption className="slide_details">
              <p className="text">{slide.country}</p>
              <h3 className="head">{slide.city}</h3>
              <a className="read_more" href={slide.link}>
                read more
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider2;
