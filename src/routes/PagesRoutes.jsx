import {
    createBrowserRouter,

  } from "react-router-dom";
  import Login from "../pages/login/Login"
  import SignUp from "../pages/signup/SignUp"
  export const routes = createBrowserRouter([
    {
      path: "/",
      element: "",
    
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    }
  ]);