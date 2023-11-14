import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import Showcase from "../Pages/Showcase/Showcase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/showcase",
        element: <Showcase></Showcase>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ],
  },
]);
export default router;