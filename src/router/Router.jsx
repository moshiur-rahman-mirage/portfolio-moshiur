import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Layout";
import Home from "../page/Home/Home";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },

    ],
  },
]);

export default Router;