import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Signup/SignUp";
import CreateClinic from "../page/CreateClinic/CreateClinic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/create-clinic",
                element: <CreateClinic></CreateClinic>
            },
        ]
    },
])

export default router;