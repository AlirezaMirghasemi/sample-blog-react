import { useEffect, useState } from "react";
import PostHeader from "../postComponents/PostHeader";
import { Link, useParams } from "react-router";
import PostDelete from "./PostDelete";

const Post = () => {
  const [id, setId] = useState(useParams().id);
  const [post, setPost] = useState();
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPostsApi();
  }, []);
  const getPostsApi = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setPost(json);
    } catch (err) {
      setErrors(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && (
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {errors && <div>Error: {errors.message}</div>}
      {post === null && <div>No posts found.</div>}
      {post !=null && (
        <>
          <PostHeader title={post.title} subTitle={""} />
          <article className="mb-4">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <p>{post.body}</p>
                </div>
                <Link className="btn btn-info" to={`/post/edit/${post.id}`} > Edit </Link>
                <PostDelete id={post.id}/>
              </div>
            </div>

          </article>
        </>
      )}
    </>
  );
};
export default Post;
