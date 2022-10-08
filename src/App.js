import MusicRoute from "./app/routes/Routes";
import "antd/dist/antd.css";
import "antd/dist/antd.less";
import DefaultLayoutMusicPage from "./app/layout/defaultLayoutMusicPage";
function App() {
  return (
    <div className="App">
      {/* <DefaultLayoutMusicPage /> */}
      <MusicRoute />
    </div>
  );
}

export default App;
