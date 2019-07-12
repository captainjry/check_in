import Buttons from "./views/components/Buttons.jsx";
import Calendar from "./views/Calendar.jsx";
import Charts from "./views/Charts.jsx";
import Dashboard from "./views/Dashboard.jsx";
import ExtendedForms from "./views/forms/ExtendedForms.jsx";
import ExtendedTables from "./views/tables/ExtendedTables.jsx";
import FullScreenMap from "./views/maps/FullScreenMap.jsx";
import GoogleMaps from "./views/maps/GoogleMaps.jsx";
import GridSystem from "./views/components/GridSystem.jsx";
import Icons from "./views/components/Icons.jsx";
import LockScreen from "./views/pages/LockScreen.jsx";
import Login from "./views/pages/Login.jsx";
import Notifications from "./views/components/Notifications.jsx";
import Panels from "./views/components/Panels.jsx";
import ReactTables from "./views/tables/ReactTables.jsx";
import Register from "./views/pages/Register.jsx";
import RegularForms from "./views/forms/RegularForms.jsx";
import RegularTables from "./views/tables/RegularTables.jsx";
import SweetAlert from "./views/components/SweetAlert.jsx";
import Timeline from "./views/pages/Timeline.jsx";
import Typography from "./views/components/Typography.jsx";
import UserProfile from "./views/pages/UserProfile.jsx";
import ValidationForms from "./views/forms/ValidationForms.jsx";
import VectorMap from "./views/maps/VectorMap.jsx";
import Widgets from "./views/Widgets.jsx";
import Wizard from "./views/forms/Wizard.jsx";
import Report from "./views/Report.jsx";
import Track from "./views/Track.jsx";
import Setting from "./views/Setting.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Out of office",
    icon: "nc-icon nc-book-bookmark",
    state: "pagesCollapse",
    views: [
      {
        path: "/timeline",
        name: "Timeline",
        mini: "T",
        component: Timeline,
        layout: "/admin"
      },
      {
        path: "/login",
        name: "Login",
        mini: "L",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register",
        mini: "R",
        component: Register,
        layout: "/auth"
      },
      {
        path: "/lock-screen",
        name: "LockScreen",
        mini: "LS",
        component: LockScreen,
        layout: "/auth"
      },
      {
        path: "/user-profile",
        name: "UserProfile",
        mini: "UP",
        component: UserProfile,
        layout: "/admin"
      }
    ]
  },
  {
    name: "Track",
    icon: "nc-icon nc-layout-11",
    path: "/track",
    component: Track,
    layout: "/admin"
  },
  {
    name: "Report",
    icon: "nc-icon nc-ruler-pencil",
    path: "/report",
    component: Report,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "User management",
    icon: "nc-icon nc-single-copy-04",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Help center",
    icon: "nc-icon nc-pin-3",
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps,
        layout: "/admin"
      },
      {
        path: "/full-screen-map",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-map",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "nc-icon nc-box",
    component: Setting,
    layout: "/admin"
  }
];

export default routes;
