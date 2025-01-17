import { createContext, useReducer } from "react";

export const PostItemsContext = createContext({
  postItems: {},
  addNewPost: () => {},
  deletePost: () => {},
});

const PostItemsReducer = (currPostItems, action) => {
  let newPostItems = currPostItems;
  if (action.type === "DELETE_POST") {
    newPostItems = currPostItems.filter(
      (post) => post.id !== action.payload.postId
    );
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
  const [postItems, dispatchPostItems] = useReducer(
    PostItemsReducer,
    DEFAULT_POST_LIST
  );

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

  const deletePost = (postId) => {
    dispatchPostItems({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostItemsContext.Provider value={{ postItems, addNewPost, deletePost }}>
      {children}
    </PostItemsContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem, distinctio alias sunt quibusdam praesentium.",
    reactions: 5,
    user_id: "user-9",
    tags: ["travel", "Mumbai", "Enjoy"],
  },
  {
    id: "2",
    title: "Bakchodi With Friend",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem, distinctio alia.",
    reactions: 12,
    user_id: "user-12",
    tags: ["friend", "enjoy", "Happiness"],
  },
];

export default PostItemsContextProvider;
