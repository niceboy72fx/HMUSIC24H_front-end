import { ActionConstant } from "../../constant/common";

const initialState = {
  searchData: "",
};

export const GetSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstant.SEARCH:
      return { ...state, searchData: action.payloads };
    default:
      return state;
  }
};
