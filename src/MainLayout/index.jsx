import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="px-20 pt-[90px] pb-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
