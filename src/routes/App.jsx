import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:8080/posts");
      const post = await res.json();

      setAllPosts(post.posts);
      console.log("Effect Run");
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Outlet />
      <main>
        {allPosts.length > 0 && !isLoading ? (
          <PostsList posts={allPosts} />
        ) : allPosts.length === 0 && !isLoading ? (
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>There are no posts yet</h2>
            <p>Start adding your post by clicking on "New Post" button</p>
          </div>
        ) : (
          <div>Loading ...</div>
        )}
      </main>
    </>
  );
}

export default App;
