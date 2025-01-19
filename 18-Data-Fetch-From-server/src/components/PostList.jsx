import { useContext } from "react";
import Post from "./Post";
import { PostItemsContext } from "../store/Post-items-store";
import EmptyPost from "./EmptyPost";

const PostList = () => {
  const { postItems } = useContext(PostItemsContext);

  return (
    <>
      {postItems.length === 0 && <EmptyPost />}
      <div className="allPost">
        {postItems.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
