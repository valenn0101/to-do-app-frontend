import "./main.css";

import { Container } from "@mui/material";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateTask from "./pages/CreateTask";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
