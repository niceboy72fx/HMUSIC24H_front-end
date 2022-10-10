import React, { useEffect, useState } from "react";
import MusicCard from "../components/common/musicCard";
import "../assets/css/page/findMusicPage.css";
import { useSelector } from "react-redux";
const FindMusicPage = ({ props, search }) => {
  const searchData = useSelector((state) => state.GetSearchReducer.searchData);
  console.log(searchData);
  return (
    <div className=" transition ease-in-out delay-1800 text-white">
      <div>
        <span className="text-5xl font-bold">Tìm kiếm âm nhạc </span>
      </div>
      <div className="Card-grid pt-5 flex ">
        {props
          .filter((state) => state.musicName.includes(searchData))
          .map((state) => (
            <MusicCard
              musicName={state.musicName}
              authorPath={state.authorPath}
              image={state.imagePath}
            />
          ))}
      </div>
    </div>
  );
};

export default FindMusicPage;
