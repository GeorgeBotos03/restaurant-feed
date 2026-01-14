import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage";
import RestaurantDetailsPage from "../pages/RestaurantDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "restaurants/:id", element: <RestaurantDetailsPage /> },
    ],
  },
]);
