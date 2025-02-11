import { Outlet } from "react-router";
import Footer from "./theme/Footer";
import Header from "./theme/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
