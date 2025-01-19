import { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { PostItemsContext } from "../store/Post-items-store";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostItemsContext);

  return (
    <div className="card myCard" style={{ width: "29rem" }}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger del"
        onClick={() => deletePost(post.id)}
      >
        <FiDelete />
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
      <div className="tags">
        {post.tags.map((tag) => (
          <button key={tag} type="button" className="btn btn-secondary mybtn">
            {tag}
          </button>
        ))}
      </div>
      <div className="alert alert-success tags" role="alert">
        This Post has been <AiTwotoneLike /> by {post.reactions.likes} people
        and <AiTwotoneDislike /> by {post.reactions.dislikes}
      </div>
    </div>
  );
};

export default Post;
