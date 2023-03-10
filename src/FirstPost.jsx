import { useQuery } from "@tanstack/react-query";
import { getSinglePost, getUser } from "./apis";

const FirstPost = ({ id }) => {
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
      <h2>
        {userQuery.status == "loading" ? (
          <p>Loading...</p>
        ) : userQuery.status == "error" ? (
          <p>{userQuery.error}</p>
        ) : (
          <p>{userQuery.data.name}</p>
        )}
      </h2>
    </div>
  );
};

export default FirstPost;
