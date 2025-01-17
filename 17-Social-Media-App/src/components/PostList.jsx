import { useContext } from "react";
import Post from "./Post";
import { PostItemsContext } from "../store/Post-items-store";

const PostList = () => {
  const { postItems } = useContext(PostItemsContext);

  return (
    <>
      {postItems.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
