import axios from "axios";

export const FetchGetAllMusic = () => {
  return axios.get("http://localhost:8080/allmusic");
};
