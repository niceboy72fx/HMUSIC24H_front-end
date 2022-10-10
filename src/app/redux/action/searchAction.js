import { ActionConstant } from "../../constant/common";

export const GetSearchData = (params) => {
  return {
    type: ActionConstant.SEARCH,
    payloads: params,
  };
};
