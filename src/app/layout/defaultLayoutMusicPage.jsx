import React, { useState } from "react";
import { Layout, Menu, Input, Select, AutoComplete } from "antd";
import { Outlet, NavLink, useNavigate, Navigate } from "react-router-dom";
import useLoading from "../hook/useLoading";
import LoadingLoad from "../components/loadingSpin";
import "../assets/css/layout/defaultLayoutMusicPage.css";
import "react-h5-audio-player/lib/styles.css";
import { Content } from "antd/lib/layout/layout";
import AudioPlayer from "react-h5-audio-player";
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
  const { isLoading } = useLoading(true, 3800);
  const [changePage, setChangePage] = useState("1");
  const navigate = useNavigate();

  // --------------------------------------------------------------------------------
  return (
    <>
      <Layout
        style={{
          minHeight: "84vh",
        }}
      >
        <Sider className="bg-white shadow-2xl  ">
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
                  />
                </Input.Group>
              </NavLink>
            </div>
          </Header>
          <Content
            style={{
              padding: "16px",
              backgroundColor: "#001529",
            }}
          >
            <div
              style={{
                backgroundColor: "#001529",
              }}
            >
              {isLoading && <LoadingLoad />}
              {!isLoading && (
                <Outlet className="transition ease-in-out delay-800" />
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer
        className="bg-black"
        style={{
          minHeight: "16vh",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className=" flex justify-center text-white w-1/5">info song</div>
        <div className="control-song w-3/4">
          <AudioPlayer
            className="w-full"
            layout="stacked-reverse"
            showSkipControls={true}
            showJumpControls={false}
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
