import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const PostDelete = () => {
  const [postId, setPostId] = useState(useParams().id);
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deletePost = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let json = await response.json();

      setLoading(false);
      setErrors("");
      Swal.fire({
        title: "Success",
        text: "Your post deleted successfully!",
        icon: "success",
      });
    } catch (e) {
      setErrors(e.message);
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: e.message,
        icon: "warning",
      });
    } finally {
      navigate("/");
    }
  };

  return (
    <button className="btn btn-danger" onClick={deletePost}>
      {loading && (
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!loading && "Delete"}
    </button>
  );
};
export default PostDelete;
