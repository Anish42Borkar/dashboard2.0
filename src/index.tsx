import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Layout from "./pages/layout";
import SidebarContext from "./provider/sidebarProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SidebarContext>
        <Layout />
      </SidebarContext>
    ),
    children: [
      { element: <Dashboard />, index: true },
      {
        path: "/product",
        element: <Dashboard />,
      },
      {
        path: "/customer",
        element: <Dashboard />,
      },
      {
        path: "/income",
        element: <Dashboard />,
      },
      {
        path: "/promote",
        element: <Dashboard />,
      },
      {
        path: "/help",
        element: <Dashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
