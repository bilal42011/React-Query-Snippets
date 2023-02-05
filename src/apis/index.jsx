import axios from "axios";

export const getPosts = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const getSinglePost = ({ queryKey }) => {
  const [key, id] = queryKey;
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const getUser = ({ queryKey }) => {
  const [key, userId] = queryKey;

  return axios
    .get("https://jsonplaceholder.typicode.com/users/" + userId)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
