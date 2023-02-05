import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./apis";

const PostList2 = () => {
  let postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  console.log(postsQuery.fetchStatus);
  console.log(postsQuery.status);

  if (postsQuery.status == "loading") return <p>Loading Posts....</p>;
  if (postsQuery.status == "error") return <p>{postsQuery.error}</p>;

  return (
    <div>
      {postsQuery.data.map(({ id, title }) => (
        <h2 key={id}>{title}</h2>
      ))}
    </div>
  );
};

export default PostList2;
