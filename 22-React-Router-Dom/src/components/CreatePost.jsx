import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            name="userId"
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
            name="title"
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
            name="body"
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
              name="likes"
              type="text"
              className="form-control"
              id="reactions-likes"
              placeholder="Enter How many people likes this post ?"
            />
            <input
              name="dislikes"
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
              name="tags"
              type="text"
              className="form-control"
              id="tags"
              placeholder="Enter space hashTags tags"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </Form>
    </>
  );
};

export const creatPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  postData.tags = postData.tags.split(" ");
  postData.reactions = { likes: postData.likes, dislikes: postData.dislikes };
  delete postData.likes;
  delete postData.dislikes;
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
};

export default CreatePost;
