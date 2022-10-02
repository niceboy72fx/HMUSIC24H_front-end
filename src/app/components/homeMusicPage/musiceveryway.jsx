import React from "react";
import { Card } from "antd";
import { CommonsSlider } from "../common/slider";
const { Meta } = Card;

export const MusicEveryDay = () => {
  return (
    <div className="p-5 flex text-center w-full ">
      <CommonsSlider />
    </div>
  );
};
