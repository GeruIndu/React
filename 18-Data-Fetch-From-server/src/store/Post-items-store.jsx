import { createContext, useReducer } from "react";

export const PostItemsContext = createContext({
  postItems: {},
  addNewPost: () => {},
  addAllPosts: () => {},
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
    newPostItems = [
      ...currPostItems,
      {
        id: Date.now(),
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        tags: action.payload.tags,
      },
    ];
  }
  return newPostItems;
};

const PostItemsContextProvider = ({ children }) => {
  const [postItems, dispatchPostItems] = useReducer(PostItemsReducer, []);

  const addNewPost = (userId, title, body, reactions, tags) => {
    dispatchPostItems({
      type: "ADD_POST",
      payload: {
        userId,
        title,
        body,
        reactions,
        tags,
      },
    });
  };

  const addAllPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatchPostItems({
          type: "FETCH_ALL_POST",
          payload: {
            posts: data.posts,
          },
        });
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

  return (
    <PostItemsContext.Provider
      value={{ postItems, addNewPost, addAllPosts, deletePost }}
    >
      {children}
    </PostItemsContext.Provider>
  );
};

export default PostItemsContextProvider;
