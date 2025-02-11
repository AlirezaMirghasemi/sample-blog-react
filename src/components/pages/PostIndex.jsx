import { useEffect, useState } from "react";
import PostCard from "../postComponents/PostCard";
import PostHeader from "../postComponents/PostHeader";
import ReactPaginate from "react-paginate";

const PostIndex = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Sample React Blog");
  const [subTitle, setSubTitle] = useState("A Blog For Learning React");

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 10;
  const pageCount = Math.ceil(posts.length / postsPerPage);

  //   useEffect(() => {
  //     getPostsApi();
  //   }, []);
  useEffect(() => {
    let isMounted = true;
    const getPostsApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();

        setPosts(json);
      } catch (err) {
        setErrors(err);
      } finally {
        setLoading(false);
      }
    };
    getPostsApi();
    return () => {
      isMounted = false;
    };
  }, []);
  const displayedPosts = posts.slice(
    currentPage * postsPerPage,
    (currentPage + 1) * postsPerPage
  );
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <>
      <PostHeader title={title} subTitle={subTitle} />
      <div className="container px-4 px-lg-5 mt-10">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {loading && (
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {errors && <div>Error: {errors.message}</div>}
            {posts.length === 0 && <div>No posts found.</div>}
            {posts.length > 0 && <PostCard posts={displayedPosts} />}

            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
              disabledClassName={"disabled"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PostIndex;
