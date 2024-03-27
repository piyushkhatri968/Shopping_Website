"use client";
import React from "react";
import Slider from "react-slick";
import Slides from "./Slides";

import img1 from "../assets/pictures/slider-image-1.png";
import img2 from "../assets/pictures/slider-image-2.png";
import img3 from "../assets/pictures/slider-image-3.png";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slidedata = [
    {
      id: 0,
      img: img1,
      title: "Trending Item",
      mainTitle: "WOMEN'S FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: img2,
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: img3,
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];
  return (
    <div className="px-[30px]">
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slidedata.map((item) => (
            <Slides
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
