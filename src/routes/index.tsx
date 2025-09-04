import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { userSidebarItems } from "./userSidebarItems";
import { createBrowserRouter, Navigate } from "react-router";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import { adminSidebarItems } from "./adminSidebarItems";
import { withAuth } from "@/utils/withAuth";
import App from "@/App";
import HomePage from "@/pages/Home";

export const router = createBrowserRouter([
    {
      Component: App,
      path: "/",
      children: [
        {
          Component: HomePage,
          index: true,
        },
      ],
    },
    {
      Component: withAuth(DashboardLayout, role.superAdmin as TRole),
      path: "/admin",
      children: [
        { index: true, element: <Navigate to="/admin" /> },
        ...generateRoutes(adminSidebarItems),
      ],
    },
    {
      Component: withAuth(DashboardLayout, role.user as TRole),
      path: "/user",
      children: [
        { index: true, element: <Navigate to="/user/bookings" /> },
        ...generateRoutes(userSidebarItems),
      ],
    },
    {
      Component: Login,
      path: "/login",
    },
    {
      Component: Register,
      path: "/register",
    },
    {
      Component: Verify,
      path: "/verify",
    },



  ]);

