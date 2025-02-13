import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Signup/SignUp";
import CreateClinic from "../page/CreateClinic/CreateClinic";
import Blogs from "../page/Blogs/Blogs";
import HospitalDetails from "../components/hospitals/HospitalDetails";
import About from "../page/About/About";
import FindClinics from "../page/FindClinics/FindClinics";
import PrivateRouter from "./PrivateRouter";

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
                path: "/find-clinic",
                element: <FindClinics></FindClinics>
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
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
                element: <PrivateRouter role="admin"><CreateClinic></CreateClinic></PrivateRouter>
            },
            {
                path: "/service-details/:id",
                element: <HospitalDetails></HospitalDetails>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    },
])

export default router;