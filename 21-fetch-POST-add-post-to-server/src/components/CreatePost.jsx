import { useContext, useRef } from "react";
import { PostItemsContext } from "../store/Post-items-store";
import { ToastContainer, toast } from "react-toastify";

const CreatePost = () => {
  const { addNewPost } = useContext(PostItemsContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElementLikes = useRef();
  const reactionsElementDislikes = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = {
      likes: reactionsElementLikes.current.value,
      dislikes: reactionsElementDislikes.current.value,
    };
    const tags = tagsElement.current.value.split(/\s+/);

    userIdElement.current.value = " ";
    titleElement.current.value = " ";
    bodyElement.current.value = " ";
    reactionsElementLikes.current.value = " ";
    reactionsElementDislikes.current.value = " ";
    tagsElement.current.value = " ";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title,
        body,
        reactions,
        tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addNewPost(post));

    toast.success("Post SuccessFull! 🤞", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your ID "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={titleElement}
            type="text"
            className="form-control"
            id="title"
            placeholder="Post Title . . . ."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={bodyElement}
            className="form-control"
            id="body"
            rows="3"
            placeholder="Tell us more about it . . ."
          ></textarea>

          <div className="mb-3 reactions">
            <label htmlFor="reactions" className="form-label">
              Reactions
            </label>
            <input
              ref={reactionsElementLikes}
              type="text"
              className="form-control"
              id="reactions-likes"
              placeholder="Enter How many people likes this post ?"
            />
            <input
              ref={reactionsElementDislikes}
              type="text"
              className="form-control"
              id="reactions-dislikes"
              placeholder="Enter How many people dis-likes this post ?"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              ref={tagsElement}
              type="text"
              className="form-control"
              id="tags"
              placeholder="Enter space hashTags tags"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default CreatePost;
