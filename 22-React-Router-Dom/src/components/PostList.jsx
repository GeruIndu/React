import Post from "./Post";
import EmptyPost from "./EmptyPost";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postItems} = useContext(PostItemsContext);

  const postItems = useLoaderData();

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

export const postLoader = async () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
