import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto min-h-screen flex flex-col ">
                <div className="flex-auto">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
};

export default MainLayout;