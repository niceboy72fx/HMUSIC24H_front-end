import React from "react";
import "../../assets/css/components/musicCard/musicCard.css";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import "../../assets/css/components/antd.css";
export default function MusicCard({ image, musicName, authorPath, clickPlay }) {
  return (
    <div className="ml-5 mr-5 pl-5 pr-5 flex ">
      <div className="Card shadow-2xl ">
        <div className="Card-image">
          <img src={image} title="" />
        </div>
        <div className="Card-title">
          <div className="title-info p-5">
            <div className="info-name text-left text-lg font-bold truncate ">
              {musicName}
            </div>
            <p className=" text-left truncate">{authorPath}</p>
          </div>
        </div>
        <div className="Card-play">
          <div className="play-button text-black  text-xl " onClick={clickPlay}>
            <CaretRightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

//   state.authorPath
