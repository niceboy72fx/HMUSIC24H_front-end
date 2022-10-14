import React, { useEffect } from "react";
import { MusicEveryDay } from "../components/homeMusicPage/musiceveryway";
import { ListennerWant } from "../components/homeMusicPage/listennerwant";
import { Carousels } from "../components/common/carousel";
import { ActionConstant } from "../constant/common";
import { useDispatch, useSelector } from "react-redux";

const HomeMusicsPage = ({ props }) => {
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.GetListMusicReducer);

  // TODO: 1 ham` chon selectedSong
  console.log(temp);

  return (
    <div className=" transition ease-in-out delay-1800 text-white">
      <Carousels />

      <div>
        <span className="text-5xl font-bold">Có thể bạn muốn nghe </span>
        <ListennerWant props={props} />
      </div>
      <div>
        <span className="text-5xl font-bold">Nhạc mới mỗi ngày</span>
        <MusicEveryDay props={props} />
      </div>
    </div>
  );
};

export default HomeMusicsPage;
