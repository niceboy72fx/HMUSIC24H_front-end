import React, { useState } from "react";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/components/antd.css";
import "../../assets/css/components/musicCard/musicCard.css";

export const CommonsSlider = ({ props }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    lazyLoad: "ondemand",
  };

  console.log(props);
  return (
    <Slider className="p-5  flex  w-full " {...settings}>
      {props.map((state) => (
        <div className="ml-5 mr-5 pl-5 pr-5 flex   ">
          <div className="Card shadow-2xl ">
            <div className="Card-image">
              <img src={state.imagePath} title="" />
            </div>
            <div className="Card-title">
              <div className="title-info p-5">
                <div className="info-name text-left text-lg font-bold truncate ">
                  {state.musicName}
                </div>
                <p className=" text-left truncate">{state.authorPath}</p>
              </div>
            </div>
            <div className="Card-play">
              <div className="play-button text-black  text-xl  ">
                <CaretRightOutlined />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
