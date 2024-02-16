import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About";
import Mission from "./Pages/Mission/Mission";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import DonorRegistration from "./Pages/DonorRegistration/DonorRegistration";
import DonorSearch from "./Pages/DonorSearch/DonorSearch";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AuthProvider from "./providers/AuthProvider";
import BloodRequest from "./Pages/BloodRequest/BloodRequest";
import Campaign from "./Pages/Campaign/Campaign";
import Donate from "./Pages/Donate/Donate";
import AllBloodRequest from "./Pages/AllBloodRequest/AllBloodRequest";
import Appointment from "./Pages/Appointment/Appointment";
import AdminHome from "./Pages/AdminHome/AdminHome";
import Dashboard from "./Pages/Layout/Dashboard/Dashboard";
import VolunteerManage from "./Pages/VolunteerManage/VolunteerManage";
import ManageCampaign from "./Pages/ManageCampaign/ManageCampaign";
import UserHome from "./Pages/UserHome/UserHome";
import UserAppointment from "./Pages/UserAppointment/UserAppointment";
import Chat from "./Component/Chat/Chat";
import CampaignDetails from "./Pages/CampaignDetails/CampaignDetails";
import BioMedical from "./Pages/BioMedical/BioMedical";
import CommunityChat from "./Component/Chat/CommunityChat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateCampaign from "./Pages/CreateCampaign/CreateCampaign";
import Profile from "./Pages/Profile/Profile";

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/mission",
        element: <Mission></Mission>,
      },
      {
        path: "/donorRegistration",
        element: <DonorRegistration></DonorRegistration>,
      },
      {
        path: "/donorSearch",
        element: <DonorSearch></DonorSearch>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/bloodRequest",
        element: <BloodRequest></BloodRequest>,
      },
      {
        path: "/campaign",
        element: <Campaign></Campaign>,
      },
      {
        path: "/campaign/:id",
        element: <CampaignDetails></CampaignDetails>,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/allrequest",
        element: <AllBloodRequest></AllBloodRequest>,
      },
      {
        path: "chat",
        element: <Chat></Chat>,
      },
      {
        path: "/communityChat",
        element: <CommunityChat/>,
      },
      {
        path: "bioMedical",
        element: <BioMedical></BioMedical>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/dashboard/volunteer",
        element: <VolunteerManage></VolunteerManage>,
      },
      {
        path: "/dashboard/campaign",
        element: <ManageCampaign></ManageCampaign>,
      },
      {
        path: "/dashboard/userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/userappointment",
        element: <UserAppointment></UserAppointment>,
      },
      {
        path: "/dashboard/createCampaign",
        element: <CreateCampaign></CreateCampaign>
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider> 
    </AuthProvider>
  </React.StrictMode>
);
