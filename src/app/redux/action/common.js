import { ActionConstant } from "../../constant/common";

export const GetListMusic = () => {
  return {
    type: ActionConstant.GETALLMUSICACTION,
  };
};

export const GetListMusicSuccess = (params) => {
  return {
    type: ActionConstant.GETSUCCESS,
    payload: params,
  };
};

export function GetListMusicFailed() {
  return {
    type: ActionConstant.GETFAIL,
  };
}

export function PlayMusic() {
  return {
    type: ActionConstant.PLAYMUSICACTION,
  };
}
