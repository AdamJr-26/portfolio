

// pages
import { Home, ErrorPage } from "../components/pages";


import { createBrowserRouter, RouteObject } from "react-router-dom";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

const MyRouter = createBrowserRouter(routes);

export default MyRouter;
