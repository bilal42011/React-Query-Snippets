import { useQuery } from "@tanstack/react-query";
import { getSinglePost, getUser } from "./apis";

const NewPost = ({ id }) => {
  let postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });

  let userQuery = useQuery({
    queryKey: ["users", postQuery?.data?.userId],
    enabled: Boolean(postQuery.data),
    queryFn: getUser,
  });

  // console.log(userQuery.status);

  console.log(postQuery.status);
  if (postQuery.status == "loading") return <p>Loading...</p>;
  if (postQuery.status == "error") return <p>{postQuery.error}</p>;

  return (
    <div>
      <h1>{postQuery.data.userId}</h1>
      <h2>{userQuery?.data?.name}</h2>
    </div>
  );
};

export default NewPost;
