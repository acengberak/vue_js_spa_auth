import Home from "./components/Home";
import About from "./components/About";
import Notfound from "./components/Notfound";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default {
    mode: "history",
    linkActiveClass: "font-semibold ",
    routes: [
        {
            path: "*",
            component: Notfound
        },
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/dashboard",
            component: Dashboard
        }
    ]
};
