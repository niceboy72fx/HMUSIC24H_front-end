import { call, put, takeLatest } from "redux-saga/effects";
import { ActionConstant } from "../../../constant/common";
import { getAllMusic } from "../../../utils/api/apiServices";
import {
  GetListMusic,
  GetListMusicFailed,
  GetListMusicSuccess,
} from "../../action/playMusic";

export function* GetListDataMusic() {
  const listMusic = yield call(() => getAllMusic());
  if (listMusic === undefined) {
    yield put(GetListMusicFailed());
  } else {
    yield put(GetListMusicSuccess());
  }
}

//----------------------------------------------------------------
export function* WatchListMusic() {
  yield takeLatest(ActionConstant.GETALLMUSICACTION, GetListDataMusic);
}
