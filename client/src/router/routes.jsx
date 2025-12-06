import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Auth from "../pages/Auth/Auth";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/auth", element: <Auth /> },
];
