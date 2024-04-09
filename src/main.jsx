import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages Imports
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Connection from "./pages/Connection/Connection";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Settings from "./pages/Settings/Settings";
import Categories from "./pages/Categories/Categories";
import DetailCategories from "./pages/DetailCategories/DetailCategories";
import Discussion from "./pages/Discussion/Discussion";
import OrderCompletion from "./pages/OrderCompletion/OrderCompletion";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },

      {
        path: "/product-detail",
        element: <ProductDetail />,
      },

      {
        path: "/connection",
        element: <Connection />,
      },

      {
        path: "/create-account",
        element: <CreateAccount />,
      },

      {
        path: "/settings",
        element: <Settings />,
      },

      {
        path: "/categories",
        element: <Categories />,
      },

      {
        path: "/detail-categories",
        element: <DetailCategories />,
      },

      {
        path: "/discussion",
        element: <Discussion />,
      },

      {
        path: "/order-completion",
        element: <OrderCompletion />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
