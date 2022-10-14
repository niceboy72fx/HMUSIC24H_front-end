import { call, put, takeEvery } from "redux-saga/effects";
import { ActionConstant } from "../../../constant/common";
import { FetchGetAllMusic } from "../../../utils/api/apiServices";
import {
  GetListMusic,
  GetListMusicFailed,
  GetListMusicSuccess,
} from "../../action/common";

export function* GetListDataMusic() {
  //bug
  const listMusic = yield call(() => FetchGetAllMusic());
  //-------------
  yield put(GetListMusicSuccess(listMusic?.data));
}

//----------------------------------------------------------------
export function* WatchListMusic() {
  yield takeEvery(ActionConstant.GETALLMUSICACTION, GetListDataMusic);
}
