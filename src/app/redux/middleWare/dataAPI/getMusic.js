import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
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
  yield put(GetListMusicSuccess(listMusic.data.data));
}

//----------------------------------------------------------------
export function* WatchListMusic() {
  yield takeLatest(ActionConstant.GETALLMUSICACTION, GetListDataMusic);
}
