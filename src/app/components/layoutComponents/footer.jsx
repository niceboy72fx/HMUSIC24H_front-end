import { ActionConstant } from "../../constant/common";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch, useSelector } from "react-redux";
import "react-h5-audio-player/lib/styles.css";
import { Layout, Menu, Input, Select, AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
const { Header, Footer, Sider } = Layout;
const { Option } = Select;
export const Footers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ActionConstant.GETALLMUSICACTION });
  }, []);

  //---------debug
  const tempData = [];
  const temp = useSelector((state) => state.GetListMusicReducer);
  const { provider } = temp;
  provider && provider?.data?.map((temp) => tempData?.push(temp));

  //---------random musicName

  const musicData = [];
  const randomFunc = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomMusic = randomFunc(tempData, tempData.length);

  for (let i = 0; i < tempData.length; i++) {
    const test = { ...randomMusic[i], stt: i };
    musicData?.push(test);
  }
  console.log(musicData);

  // useEffect(() => test(), [tempData]);

  // console.log(tempMusic?.filePath);

  //--------------------------------Control music------------------------------\
  const [songs, setSong] = useState?.(musicData[0]);
  const handleSetSong = (idSong) => {
    const song = musicData?.find((song) => song?.stt === idSong);
    if (!song) {
      setSong(musicData[0]);
    } else {
      setSong(song);
    }
  };

  const handleClickNext = () => {
    handleSetSong(songs.stt + 1);
  };
  const handleClickPre = () => {
    handleSetSong(songs.stt - 1);
  };

  return (
    <Footer
      className="bg-black"
      style={{
        minHeight: "16vh",
        backgroundColor: "#181818",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className=" flex  text-white w-1/5">
        <img
          src="https://res.cloudinary.com/dluoimlhn/image/upload/v1664547696/Korea/DDUDU%20DDUDU/DDUDU_DDUDU_hxu0je.jpg"
          alt=""
          className="w-24 h-24 rounded-full"
        />
        <div className=" p-4 w-full h-24 ">
          <p className="text-2xl font-bold mb-0 truncate">Hello World</p>
          <p className="truncate">Author</p>
        </div>
      </div>
      <div className="control-song w-3/4">
        <AudioPlayer
          className="w-full"
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={true}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPre}
          src={songs?.filePath}
          style={{ backgroundColor: "#181818", color: "white" }}
        />
      </div>
    </Footer>
  );
};
