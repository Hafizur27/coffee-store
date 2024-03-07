import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Componets/Home/Home/Home";
import AddCoffee from "../Componets/AddCoffee/AddCoffee";
import ProductDetails from "../Componets/Home/PopularProduct/Product/ProductDetails/ProductDetails";
import UpdateCoffee from "../Componets/Home/PopularProduct/Product/UpdateCoffee/UpdateCoffee";
import ErrorPage from "../Componets/ErrorPage/ErrorPage";

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
        element: <AddCoffee />,
      },
      {
        path: "coffee/:id",
        element: <ProductDetails />,
      },
      {
        path: "updatecoffee/:id",
        element: <UpdateCoffee />,
      },
    ],
  },
]);
