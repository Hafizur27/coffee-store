import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Componets/Home/Home/Home";
import AddCoffee from "../Componets/AddCoffee/AddCoffee";
import ProductDetails from "../Componets/Home/PopularProduct/Product/ProductDetails/ProductDetails";
import UpdateCoffee from "../Componets/Home/PopularProduct/Product/UpdateCoffee/UpdateCoffee";
import ErrorPage from "../Componets/ErrorPage/ErrorPage";
import SignIn from "../Componets/SignIn/SignIn";
import SignUp from "../Componets/SignUp/SignUp";
import PrivateRoute from "../Componets/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addcoffe",
        element: (
          <PrivateRoute>
            <AddCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: "coffee/:id",
        element: <ProductDetails />,
      },
      {
        path: "updatecoffee/:id",
        element: (
          <PrivateRoute>
            <UpdateCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);
