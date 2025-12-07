import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});
