import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

export default router;
