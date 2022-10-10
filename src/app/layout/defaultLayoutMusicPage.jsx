import React, { useEffect, useState } from "react";
import { Layout, Menu, Input, Select, AutoComplete } from "antd";
import { Outlet, NavLink, useNavigate, Navigate } from "react-router-dom";
import useLoading from "../hook/useLoading";
import LoadingLoad from "../components/loadingSpin";
import "../assets/css/layout/defaultLayoutMusicPage.css";
import "react-h5-audio-player/lib/styles.css";
import { Content } from "antd/lib/layout/layout";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch, useSelector } from "react-redux";
import { GetSearchData } from "../redux/action/searchAction";
import { ActionConstant } from "../constant/common";
const { Header, Footer, Sider } = Layout;
const { Option } = Select;
function getItem(label, key, icon) {
  return {
    label,
    key,
    icon,
  };
}

const items = [
  getItem("Trang chủ", "1", <NavLink to=""></NavLink>),
  getItem("Tìm kiếm", "2", <NavLink to="/search"></NavLink>),
  getItem("Quốc gia", "3", <NavLink to="/country"></NavLink>),
  getItem("Top 50 Nghe Nhiều", "4", <NavLink to="/top50"></NavLink>),
  getItem("Thể Loại", "5", <NavLink to="/typeMusic"></NavLink>),
  getItem("Album", "6", <NavLink to="/album"></NavLink>),
];

const DefaultLayoutMusicPage = () => {
  // const [loading, setLoading] = useState(true);
  const { isLoading } = useLoading(true, 1800);
  const [changePage, setChangePage] = useState("1");
  const navigate = useNavigate();

  //-------------------------------------------------------------
  // const data = useSelector((state) => state.GetListMusicReducer);
  // useEffect(() => setLoading(false), data);
  // --------------------------------------------------------------------------------
  // tạo mới component random Music
  //---------------------------------------------------------------------------------
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

  //---------random musicName
  const array = [];
  const randomFunc = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomMusic = randomFunc(tempData, tempData.length);

  for (let i = 0; i < tempData.length; i++) {
    const test = { ...randomMusic[i], stt: i };
    array?.push(test);
  }

  console.log(array);

  //--------------------------------Control music------------------------------\
  const [songs, setSong] = useState?.(array[0]);
  const handleSetSong = (idSong) => {
    const song = array.find((song) => song.stt === idSong);
    if (!song) {
      setSong(array[0]);
    } else {
      setSong(song);
    }
  };

  console.log(songs);
  console.log(array[0]);

  const handleClickNext = () => {
    handleSetSong(songs.stt + 1);
  };
  const handleClickPre = () => {
    handleSetSong(songs.stt - 1);
  };
  // //---------------------------------------------------------------------------------

  const handleData = (data) => {
    dispatch(GetSearchData(data));
  };
  return (
    <>
      <Layout
        style={{
          minHeight: "84vh",
        }}
      >
        <Sider
          className="bg-white shadow-2xl  "
          style={{ backgroundColor: "black" }}
        >
          <div className="logo pb-12">
            <img
              width={800}
              height={700}
              src={require("../assets/images/logo/logo.png")}
              alt="logo"
            />
          </div>
          <div className="h-full ">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={items}
              className="text-white"
              selectedKeys={[changePage]}
              onClick={(e) => setChangePage(e.key)}
              style={{ backgroundColor: "black" }}
            />
          </div>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background  "
            style={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#181211",
            }}
          >
            <div className="w-96 ">
              <NavLink
                to="/search"
                onClick={() => {
                  setChangePage("2");
                }}
              >
                <Input.Group compact className="w-full rounded-xl">
                  <AutoComplete
                    className="w-full borber-none "
                    placeholder="Tìm kiếm bài hát"
                    options={[]}
                    onChange={(e) => handleData(e)}
                  />
                </Input.Group>
              </NavLink>
            </div>
          </Header>
          <Content
            style={{
              padding: "16px",
              backgroundColor: "#121212",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                backgroundColor: "#121212",
                maxHeight: "10pc",
              }}
            >
              {isLoading && <LoadingLoad />}
              {!isLoading && (
                <Outlet className="transition ease-in-out delay-1800" />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
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
            // src={song.filePath}
            style={{ backgroundColor: "#181818", color: "white" }}
          />
        </div>
      </Footer>
      <style>
        {`
           .ant-select-selection-search {
              border-radius:50;
           }
      `}
      </style>
    </>
  );
};

export default DefaultLayoutMusicPage;
