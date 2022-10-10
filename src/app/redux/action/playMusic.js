import React from "react";
import { ActionConstant } from "../../constant/common";
export const MusicList = (params) => {
  return {
    type: ActionConstant.MUSIClISTACTION,
    payloads: params,
  };
};

export const PlayMusic = () => {
  return {
    type: ActionConstant.PLAYMUSICACTION,
  };
};
