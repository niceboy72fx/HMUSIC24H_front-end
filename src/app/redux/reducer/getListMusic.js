import { ActionConstant } from "../../constant/common";

//----------------------------------------------------------------
const initialState = {
  provider: {},
  selectedSong: {},
};

export const GetListMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionConstant.GETALLMUSICACTION:
      return { ...state, provider: action.payload };

    case ActionConstant.GETSUCCESS:
      return { ...state, provider: action.payload };

    case ActionConstant.GETFAIL:
      return { ...state };

    case "HandleNextSong": {
      let nextSongIndex = state.provider.findIndex(
        (song) => song.id === state.selectedSong.id
      );
      return { ...state, selectedSong: state.provider[nextSongIndex + 1] };
    }

    default:
      return state;
  }
};
