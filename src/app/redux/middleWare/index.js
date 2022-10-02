import { all, fork } from "redux-saga/effects";
import { WatchListMusic } from "./dataAPI/getMusic";
export default function* rootSagas() {
  yield all([WatchListMusic()]);
}
