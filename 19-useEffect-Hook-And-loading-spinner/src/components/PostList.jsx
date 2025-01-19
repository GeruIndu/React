import { useContext } from "react";
import Post from "./Post";
import { PostItemsContext } from "../store/Post-items-store";
import EmptyPost from "./EmptyPost";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading_Spinner";

const PostList = () => {
  const { postItems, addAllPosts } = useContext(PostItemsContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addAllPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postItems.length === 0 && <EmptyPost />}
      {!fetching && (
        <div className="allPost">
          {postItems.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
