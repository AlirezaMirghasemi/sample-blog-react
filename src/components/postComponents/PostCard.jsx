import { Link } from "react-router";

const PostCard = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div className="post-preview" key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2 className="post-title">{post.title}</h2>
              <h3 className="post-subtitle">{post.title}</h3>
            </Link>
            <hr />
          </div>
        ))}
    </>
  );
};
export default PostCard;
