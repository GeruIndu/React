import { useContext } from "react";
import { PostItemsContext } from "../store/Post-items-store";

const EmptyPost = () => {
  const { addAllPosts } = useContext(PostItemsContext);

  return (
    <center className="empty">
      <h1>There has no Post.</h1>
      <button type="button" className="btn btn-primary" onClick={addAllPosts}>
        Get all Post from Server
      </button>
    </center>
  );
};

export default EmptyPost;
