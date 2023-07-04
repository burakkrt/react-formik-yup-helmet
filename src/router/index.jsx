import { createBrowserRouter } from "react-router-dom";
// Pages
import PrivateAuth from "../pages/PrivateAuth.jsx";
import Landing from "../pages/Landing.jsx";
import NotFound404 from "../pages/NotFound404.jsx";
import Profile from "../pages/Profile.jsx";
import Singup from "../pages/Singup.jsx";
export const routerPaths = [
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: "profile",
        element: <Profile />,
        auth: true,
      },
    ],
  },
  {
    path: "/sing-up",
    element: <Singup />,
  },
];

const authMap = (router) =>
  router.map((route) => {
    if (route?.auth) {
      route.element = <PrivateAuth>{route.element}</PrivateAuth>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default createBrowserRouter(authMap(routerPaths));