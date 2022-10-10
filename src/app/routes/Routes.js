import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { ActionConstant } from "../constant/common";
import DefaultLayoutMusicPage from "../layout/defaultLayoutMusicPage";
import AlbumMusicPage from "../page/albumMusicPage";
import CountryMusicPage from "../page/countryMusicPage";
import FindMusicPage from "../page/findMusicPage";
import HomeMusicsPage from "../page/homeMusicPage";
import Top50MusicPage from "../page/top50MusicPage";
import TypeMusicPage from "../page/typeMusicPage";
const MusicRoute = () => {
  //---------Dispatch---
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ActionConstant.GETALLMUSICACTION });
  }, []);

  //---------debug
  const tempData = [];
  const temp = useSelector((state) => state.GetListMusicReducer);
  const { provider } = temp;
  provider && provider?.data?.map((temp) => tempData?.push(temp));

  return (
    <>
      <Routes>
        <Route element={<DefaultLayoutMusicPage />}>
          <Route path="" element={<HomeMusicsPage props={tempData} />} />
          <Route path="/search" element={<FindMusicPage props={tempData} />} />
          <Route path="/country" element={<CountryMusicPage />} />
          <Route path="/top50" element={<Top50MusicPage />} />
          <Route path="/typeMusic" element={<TypeMusicPage />} />
          <Route path="/album" element={<AlbumMusicPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MusicRoute;
