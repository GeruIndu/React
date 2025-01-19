import { useContext, useRef } from "react";
import { PostItemsContext } from "../store/Post-items-store";
import { ToastContainer, toast } from "react-toastify";

const CreatePost = () => {
  const { addNewPost } = useContext(PostItemsContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/\s+/);

    addNewPost(userId, title, body, reactions, tags);

    userIdElement.current.value = " ";
    titleElement.current.value = " ";
    bodyElement.current.value = " ";
    reactionsElement.current.value = " ";
    tagsElement.current.value = " ";

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

          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">
              Reactions
            </label>
            <input
              ref={reactionsElement}
              type="text"
              className="form-control"
              id="reactions"
              placeholder="Enter How many people react this post ?"
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
