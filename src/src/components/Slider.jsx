import { useState, useEffect } from 'react';
import '../../Stylesheets/Slider.scss'
// import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Support from '../../assets/support2.jpg'
import Children from '../../assets/children1.jpg'
import Group from '../../assets/group.jpg'
import logo from '../../assets/logo.jpg'
// import healthWork from "../../assets/healthWork.jpg";
import football from "../../assets/football.jpg";
import buildingHouse from "../../assets/buildingHouse.jpg";
import Header from './Header';

const CitiesSlider = () => {

  // const supportDataURL = toDataURL(Support);
  
  const slides = [
    {
      city: "Ark Royal",
      country: "Meet the People",
      img: Group,
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

  // ipheco-ecommerce, taiwo-movie streaming, prosper-crypto/investment, IG-github clone eche-facebook clone, chidimma-user-data management/registry,  web app-online version of computer softwares

  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 8000;

  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  let changeTO = null;

  useEffect(() => {
    runAutochangeTO();
    setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);

    return () => {
      window.clearTimeout(changeTO);
    };
  },[]);

  const runAutochangeTO = () => {
    changeTO = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO();
    }, AUTOCHANGE_TIME);
  };

  const changeSlides = (change) => {
    window.clearTimeout(changeTO);
    const length = slides.length;
    const prevSlideValue = activeSlide;
    let newActiveSlide = prevSlideValue + change;
    if (newActiveSlide < 0) newActiveSlide = length - 1;
    if (newActiveSlide >= length) newActiveSlide = 0;
    setActiveSlide(newActiveSlide);
    setPrevSlide(prevSlideValue);
  };

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
      <p className="slider__top-heading">Ark Royal</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
              "s--prev": prevSlide === index,
            })}
            key={slide.city}
          >
            <Header />
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.city.split().map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{
                      backgroundImage: `url(${slide.img})`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
};


export default CitiesSlider