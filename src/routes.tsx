import { createBrowserRouter } from "react-router-dom";
import { UserList } from "./pages/userList";
import { RequireAuth } from "./requireAuth";
import Home from "./pages/home";
import Login from "./pages/login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><Home /></RequireAuth>
    },
    {
      path: "/user",
      element: <RequireAuth><UserList /></RequireAuth>,
    },
    /*{
      path: "/user",
      element: <UserList />
    },*/
    {
      path: "/login",
      element: <Login />,
    },
  ]);