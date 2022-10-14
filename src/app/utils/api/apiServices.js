import axios from "axios";

export const FetchGetAllMusic = () => {
  return axios.get("http://localhost:3000/getmusic");
};
