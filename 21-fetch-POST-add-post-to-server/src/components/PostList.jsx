import { useContext } from "react";
import Post from "./Post";
import { PostItemsContext } from "../store/Post-items-store";
import EmptyPost from "./EmptyPost";
import Loading from "./Loading_Spinner";

const PostList = () => {
  const { postItems, fetching } = useContext(PostItemsContext);

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
