import { createContext, useEffect, useReducer, useState } from "react";

export const PostItemsContext = createContext({
  postItems: {},
  fetching: false,
  addNewPost: () => {},
  deletePost: () => {},
});

const PostItemsReducer = (currPostItems, action) => {
  let newPostItems = currPostItems;
  if (action.type === "DELETE_POST") {
    newPostItems = currPostItems.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "FETCH_ALL_POST") {
    newPostItems = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostItems = [action.payload, ...currPostItems];
  }
  return newPostItems;
};

const PostItemsContextProvider = ({ children }) => {
  const [postItems, dispatchPostItems] = useReducer(PostItemsReducer, []);
  const [fetching, setFetching] = useState(false);

  const addNewPost = (post) => {
    dispatchPostItems({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addAllPosts = (posts) => {
    dispatchPostItems({
      type: "FETCH_ALL_POST",
      payload: {
        posts: posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostItems({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addAllPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Components Aborted!!");
      controller.abort();
    };
  }, []);

  return (
    <PostItemsContext.Provider
      value={{ postItems, fetching, addNewPost, deletePost }}
    >
      {children}
    </PostItemsContext.Provider>
  );
};

export default PostItemsContextProvider;
