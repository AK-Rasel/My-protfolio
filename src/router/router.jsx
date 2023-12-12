import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import MyProjectDetails from "../pages/MyProjectDetails/MyProjectDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [{
        path:"/",
        element:<Home/>
      }]
      
    },
      {
        path:"myProjectDetails/:id",
        element:<MyProjectDetails/>,
        loader:() => fetch("/project.json")
      }
    
  ])
  export default router;