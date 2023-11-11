import { Outlet } from "react-router-dom";
import NavBar from "../SharedComponent/NavBar";
import Footer from "../SharedComponent/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;