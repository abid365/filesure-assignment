import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CaDetails from "./components/CaDetails.jsx";
import Main from "./Layout/Main.jsx";
import { caUrl } from "../public/api/caApi.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "ca/:id",
        element: <CaDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`https://filesiure-backend.vercel.app/ca`);
          const data = await res.json();
          const caDetails = data.find((details) => details._id === params.id);
          return caDetails;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1536px]">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
