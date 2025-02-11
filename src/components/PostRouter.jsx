import { createBrowserRouter } from "react-router";
import PostIndex from "./pages/PostIndex";
import Post from "./pages/Post";
import PostCreate from "./pages/postCreate";
import MainLayout from "./MainLayout";
import PostEdit from "./pages/PostEdit";
import PostDelete from "./pages/PostDelete";
const PostRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PostIndex />,
      },
      {
        path: "post/:id",
        element: <Post />,
      },
      {
        path: "post/create",
        element: <PostCreate />,
      },
      {
        path:"post/edit/:id",
        element:<PostEdit/>
      },
      {
        path:"post/delete/:id",
        element:<PostDelete/>,
      }
    ],
  },
]);
export default PostRouter;
