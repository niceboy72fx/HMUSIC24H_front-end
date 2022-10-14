import React from "react";
import store from "../../";
import { useEffect, useState } from "react";
import { ActionConstant } from "../../constant/common";
import DefaultLayoutMusicPage from "../../layout/defaultLayoutMusicPage";
import { useDispatch } from "react-redux";
export const RandomMusic = () => {
  useEffect(() => {
    store.dispatch({ type: ActionConstant.GETALLMUSICACTION });
  }, []);

  //---------debug
  const tempData = [];
  const temp = store.Selector((state) => state.GetListMusicReducer);
  const { provider } = temp;
  provider && provider?.data?.map((temp) => tempData?.push(temp));

  //---------random musicName
  const array = [];
  const randomFunc = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomMusic = randomFunc(tempData, tempData.length);
  console.log(randomMusic);
  console.log(1);
  return <DefaultLayoutMusicPage random={randomMusic} />;
};
