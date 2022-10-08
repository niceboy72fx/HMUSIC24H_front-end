import React from "react";
import { CommonsSlider } from "../common/slider";

export const ListennerWant = ({ props }) => {
  // ---------------------RandomFunctions --------------------
  const randomFunc = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const random20Music = randomFunc(props, 20);
  return (
    <div className="p-5 flex text-center w-full ">
      <CommonsSlider props={random20Music} />
    </div>
  );
};
