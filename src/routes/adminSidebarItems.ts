

import AllUsers from "@/pages/admin/AllUsers";
import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";
// import Analytics from "@/pages/Admin/Analytics";
// import { lazy } from "react";

// const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "All-Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
     
    ],
  },
];

// import AddDivision from "@/pages/Admin/AddDivision";
// import AddTour from "@/pages/Admin/AddTour";
// import AddTourType from "@/pages/Admin/AddTourType";
// import AllUsers from "@/pages/Admin/AllUsers";
// // import Analytics from "@/pages/Admin/Analytics";
// import { ISidebarItem } from "@/types";
// import { lazy } from "react";

// const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

// export const adminSidebarItems: ISidebarItem[] = [
//   {
//     title: "Dashboard",
//     items: [
//       {
//         title: "Analytics",
//         url: "/admin/analytics",
//         component: Analytics,
//       },
//     ],
//   },
//   {
//     title: "Tour Management",
//     items: [
//       {
//         title: "All-Users",
//         url: "/admin/all-users",
//         component: AllUsers,
//       },
//       {
//         title: "Add Division",
//         url: "/admin/add-division",
//         component: AddDivision,
//       },
//       {
//         title: "Add Tour Type",
//         url: "/admin/add-tour-type",
//         component: AddTourType,
//       },
//       {
//         title: "Add Tour",
//         url: "/admin/add-tour",
//         component: AddTour,
//       },
//     ],
//   },
// ];