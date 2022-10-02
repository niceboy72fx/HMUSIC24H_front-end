import React from "react";
import Slider from "react-slick";

const contentStyle = {
  height: "220px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export const Carousels = () => {
  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Slider autoplay className="w-100" {...settings}>
      <div>
        <h3 style={contentStyle} className="rounded-2xl">
          1
        </h3>
      </div>
      <div>
        <h3 style={contentStyle} className="rounded-2xl">
          2
        </h3>
      </div>
      <div>
        <h3 style={contentStyle} className="rounded-2xl">
          3
        </h3>
      </div>
      <div>
        <h3 style={contentStyle} className="rounded-2xl">
          4
        </h3>
      </div>
    </Slider>
  );
};
