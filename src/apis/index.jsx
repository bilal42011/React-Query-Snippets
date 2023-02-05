import axios from "axios";

export const getPosts = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
