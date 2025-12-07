import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Auth from "../pages/Auth/Auth";
import Register from "../pages/Register/Register";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Cart from "../pages/Cart/Cart";
import { Navigate } from "react-router-dom";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/auth", element: <Auth /> },
  { path: "/sign-up", element: <Register /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/cart", element: <Cart /> },

  { path: "*", element: <Navigate to="/" /> },
];
