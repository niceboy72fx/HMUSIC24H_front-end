import React from "react";
import { Card } from "antd";
import slick from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const { Meta } = Card;

export const CommonsSlider = () => {
  const array = [1, 2, 3, 4, 3, 4, 5, 6];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <Slider className="p-5 flex text-center w-full " {...settings}>
      {array.map(() => (
        <div className="ml-5 mr-5 pl-5 pr-5">
          <Card
            className="shadow-lg rounded-4xl "
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                style={{ height: 150 }}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      ))}
    </Slider>
  );
};
