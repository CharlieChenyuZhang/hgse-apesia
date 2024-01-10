import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import Team from "./components/Team";
import Constitution from "./components/Constitution";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Alumni from "./components/Alumni";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import Hiring from "./components/Hiring";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/speakers",
    element: <Speakers />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/constitution",
    element: <Constitution />,
  },
  {
    path: "/alumni",
    element: <Alumni />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/sponsor",
    element: <Sponsors />,
  },
  {
    path: "/hiring",
    element: <Hiring />,
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
