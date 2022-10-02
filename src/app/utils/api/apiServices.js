import axios from "axios";

export const getAllMusic = () => {
  return axios.get("http://localhost:8080/musicModels?page=0&size=38", {
    headers: { "Content-Type": "application/hal+json" },
  });
};
