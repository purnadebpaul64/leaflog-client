import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/AuthPageComponents/Login";
import Registration from "../Components/AuthPageComponents/Registration";
import ErrorPage from "../Pages/ErrorPage";
import AddPlantPage from "../Pages/AddPlantPage";
import UpdatePlantPage from "../Pages/UpdatePlantPage";
import AllPlantPage from "../Pages/AllPlantPage";
import MyPlantsPage from "../Pages/MyPlantsPage";
import PrivateRoute from "../Providers/PrivateRoute";
import PlantDetails from "../Pages/PlantDetails";

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
        element: (
          <PrivateRoute>
            <AddPlantPage></AddPlantPage>,
          </PrivateRoute>
        ),
      },
      {
        path: "update-plant",
        element: <UpdatePlantPage></UpdatePlantPage>,
      },
      {
        path: "all-plants",
        loader: () => fetch("http://localhost:3000/plants"),
        element: <AllPlantPage></AllPlantPage>,
      },
      {
        path: "plants/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>,
          </PrivateRoute>
        ),
      },
      {
        path: "my-plants/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/user/${params.email}`),
        element: (
          <PrivateRoute>
            <MyPlantsPage></MyPlantsPage>,
          </PrivateRoute>
        ),
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
