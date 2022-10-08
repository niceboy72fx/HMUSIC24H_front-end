import React from "react";
import { MusicEveryDay } from "../components/homeMusicPage/musiceveryway";
import { ListennerWant } from "../components/homeMusicPage/listennerwant";
import { Carousels } from "../components/common/carousel";
const HomeMusicsPage = ({ props }) => {
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
