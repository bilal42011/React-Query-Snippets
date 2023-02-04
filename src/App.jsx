import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

let POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

//wait function that we can provide to queryFunctions in order to return resolved or rejected promises
let wait = (time) => new Promise((res) => setTimeout(res, time));

function App() {
  // creating queryClient
  let queryClient = useQueryClient();
  //creating post query, contain key for uniquely identifying post query and callback to fetch
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
    // .then(() => Promise.reject("No Posts")),
  });

  //Mutation in react-query
  const newPostMutation = useMutation({
    mutationFn: (title) =>
      wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title })),
    onSuccess: () => queryClient.invalidateQueries(["posts"]),
  });

  if (postsQuery.isLoading) return <p>Loading....</p>;
  if (postsQuery.error) return <p>{postsQuery.error}</p>;

  console.log(POSTS);
  return (
    <>
      <div>
        {postsQuery.data.map((post) => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </div>
      <button onClick={() => newPostMutation.mutate("New Post")}>
        Add Post
      </button>
    </>
  );
}

export default App;
