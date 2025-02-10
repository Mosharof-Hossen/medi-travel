import { FaPlaneDeparture } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <NavLink className={`text-gray-600 hover:text-gray-800 text-lg font-semibold`} to={"/"}><li>Home</li></NavLink>
        <NavLink className={`text-gray-600 hover:text-gray-800 text-lg font-semibold`} to={"/find-clinic"}><li>Find Clinics</li></NavLink>
        <NavLink className={`text-gray-600 hover:text-gray-800 text-lg font-semibold`} to={"/blog"}><li>Blog</li></NavLink>
        <NavLink className={`text-gray-600 hover:text-gray-800 text-lg font-semibold`} to={"/about"}><li>About</li></NavLink>
        <NavLink className={`text-gray-600 hover:text-gray-800 text-lg font-semibold`} to={"/create-clinic"}><li>Create Clinic</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div className="navbar-start flex-1">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="flex items-center space-x-4">
                    <FaPlaneDeparture className="text-2xl text-neutral-800" />
                    <a className=" font-semibold text-neutral-800 text-xl">MediTravel</a>
                </div>
            </div>
            {/* <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div> */}
            <div className="navbar-end space-x-5 flex-auto">
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to={"/login"}>
                    <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;