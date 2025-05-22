import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/AuthPageComponents/Login";
import Registration from "../Components/AuthPageComponents/Registration";
import ErrorPage from "../Pages/ErrorPage";
import AddPlantPage from "../Pages/AddPlantPage";
import UpdatePlantPage from "../Pages/UpdatePlantPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "add-new-plant",
        element: <AddPlantPage></AddPlantPage>,
      },
      {
        path: "update-plant",
        element: <UpdatePlantPage></UpdatePlantPage>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth",
        element: <Login></Login>,
      },
      {
        path: "/auth/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
