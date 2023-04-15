import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import AllPosts from "./pages/AllPosts";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.scss";
// import { AuthContexProvider } from "./context/authContext";

const Layout = () =>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/",
        element : <Home/>
      },
      {
        path: "/allposts",
        element : <AllPosts/>
      },
      {
      path: "/post/:id",
      element: <Single/>
      },
      {
        path:"/write",
        element : <Write/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}


export default App;