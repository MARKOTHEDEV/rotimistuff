import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/Homepage"
import JobSearch from "./Pages/JobSearch";
import JobSearchDetail from "./Pages/JobSearchDetail";
import SignIn from "./Pages/SignIn";
import MemeberShipPlan from "./Pages/MemberShipPlan";
import Dashboard from "./Pages/DashBoard";
import AddService from "./Pages/AddService";
import ManageService from "./Pages/ManageService";
import Proposals from "./Pages/Proposal";
import Register from "./Pages/Register";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/job-search",
    element: <JobSearch/>,
  },
  {
    path: "/job-search/:id",
    element: <JobSearchDetail/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <Register/>,
  },
  {
    path: "/membership",
    element: <MemeberShipPlan/>,
  },

  {
    path: "/dashboard/profile",
    element: <Dashboard/>,
  },
  {
    path: "/dashboard/add-service",
    element: <AddService/>,
  },
  {
    path: "/dashboard/manage-service",
    element: <ManageService/>,
  },
  {
    path: "/dashboard/proposals",
    element: <Proposals/>,
  },
  
]);


function App() {

  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}

export default App
