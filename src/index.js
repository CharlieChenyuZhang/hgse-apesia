import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import Team from "./components/Team";
// import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();

const router = createBrowserRouter([
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/speakers",
    element: <Home />,
  },
  {
    path: "/team",
    element: <Home />,
  },
  {
    path: "/schedule",
    element: <Home />,
  },
  {
    path: "/constitution",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
