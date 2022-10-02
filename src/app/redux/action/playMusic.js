import { ActionConstant } from "../../constant/common";

export function GetListMusic() {
  return {
    type: ActionConstant.GETALLMUSICACTION,
  };
}

export function GetListMusicSuccess() {
  return {
    type: ActionConstant.GETSUCCESS,
  };
}

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
