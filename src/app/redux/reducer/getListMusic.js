import { ActionConstant } from "../../constant/common";

//----------------------------------------------------------------
const initialState = {
  provider: {},
};

export const GetListMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstant.GETALLMUSICACTION:
      return { ...state, provider: action.payload };
    case ActionConstant.GETSUCCESS:
      return { ...state, provider: action.payload };
    case ActionConstant.GETFAIL:
      return { ...state };
    default:
      return state;
  }
};
