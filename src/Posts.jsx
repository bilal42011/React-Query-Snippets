import { useState } from "react";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";
import NewPost from "./NewPost";

const Posts = () => {
  const [page, setPage] = useState(<PostList1 />);

  return (
    <div>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={() => setPage(<PostList1 />)}>Post List 1</button>
        <button onClick={() => setPage(<PostList2 />)}>Post List 2</button>
        <button onClick={() => setPage(<NewPost id={1} />)}>See Post 1</button>
      </div>
      {page}
    </div>
  );
};

export default Posts;
