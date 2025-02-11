import { useEffect, useState } from "react";
import PostHeader from "../postComponents/PostHeader";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const PostEdit = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [postId, setPostId] = useState(useParams().id);
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((data) => {
          setPostTitle(data.title);
          setPostContent(data.body);
          setLoading(false);
        })
        .catch((error) => {
          setErrors(error);
          setLoading(false);
        });
    }
  }, []);

  const editPost = (e) => {
    e.preventDefault();
    setPostTitle(e.target.postTitle.value);
    setPostContent(e.target.postContent.value);
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: { postId },
        title: { postTitle },
        body: { postContent },
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setErrors("");
        Swal.fire({
          title: "Success",
          text: "Your post updated successfully!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.message);
        setLoading(false);
      });
  };
  return (
    <>
      <PostHeader title={postTitle} subTitle={""} />
      <div className="container px-4 px-lg-5 mt-10">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <form onSubmit={editPost}>
            <div className="form-group">
              <label htmlFor="postTitle">Title</label>
              <input
                type="text"
                value={postTitle}
                className="form-control"
                id="postTitle"
                placeholder="Enter Title"
                onChange={(e) => setPostTitle(e.target.value.trim())}
              />
            </div>
            <div className="form-group">
              <label htmlFor="postContent">Post Content</label>
              <textarea
                value={postContent}
                className="form-control"
                id="postContent"
                rows="3"
                placeholder="Enter Post Content"
                onChange={(e) => setPostContent(e.target.value.trim())}
              ></textarea>
            </div>
            <button
              type="submit"
              className={
                postTitle.trim() && postContent.trim()
                  ? "btn btn-success"
                  : "btn btn-success  disabled"
              }
            >
              {loading && (
                <div className="spinner-grow" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {!loading && "Save"}
            </button>
            {errors && <div className="mt-2 fw-bold text-danger">{errors}</div>}
          </form>
        </div>
      </div>
    </>
  );
};
export default PostEdit;
