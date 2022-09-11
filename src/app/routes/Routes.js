import React from "react";
import { Navigate, Route, Routes } from "react-router";
import DefaultLayoutMusicPage from "../layout/defaultLayoutMusicPage";
import AlbumMusicPage from "../page/albumMusicPage";
import CountryMusicPage from "../page/countryMusicPage";
import FindMusicPage from "../page/findMusicPage";
import HomeMusicsPage from "../page/homeMusicPage";
import Top50MusicPage from "../page/top50MusicPage";
import TypeMusicPage from "../page/typeMusicPage";
const MusicRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayoutMusicPage />}>
          <Route path="" element={<HomeMusicsPage />} />
          <Route path="/search" element={<FindMusicPage />} />
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
