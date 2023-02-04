import { useQuery } from "@tanstack/react-query";

let POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

let wait = (time) => new Promise((res) => setTimeout(res, time));

function App() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      wait(1000)
        .then(() => [...POSTS])
        .then(() => Promise.reject("No Posts")),
  });

  if (postsQuery.isLoading) return <p>Loading....</p>;
  if (postsQuery.error) return <p>{postsQuery.error}</p>;
  return (
    <div>
      {POSTS.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
}

export default App;
