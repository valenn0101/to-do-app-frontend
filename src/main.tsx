import "./main.css";

import { Container } from "@mui/material";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateProject from "./pages/CreateProject";
import CreateTask from "./pages/CreateTask";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/new-task",
    element: <CreateTask />,
    errorElement: <Error />,
  },
  {
    path: "/new-project",
    element: <CreateProject />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </>
);
