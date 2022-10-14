import { Footer } from "antd/lib/layout/layout";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch, useSelector } from "react-redux";

export default function FooterApp() {
  const { selectedSong } = useSelector((state) => state.GetListMusicReducer);

  const dispatch = useDispatch();

  const handleNextSong = () => {
    dispatch({ type: "HandleNextSong" });
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
          //   onClickNext={handleClickNext}
          //   onClickPrevious={handleClickPre}
          src={selectedSong.filePath}
          style={{ backgroundColor: "#181818", color: "white" }}
        />
      </div>
    </Footer>
  );
}
