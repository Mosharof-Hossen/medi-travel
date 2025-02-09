import { FaArrowRight } from "react-icons/fa";
import blog1 from "../../assets/blogs/blog1.jpg"
import blog2 from "../../assets/blogs/blog2.jpg"
import doctor1 from "../../assets/doctor/member3.png"
import doctor2 from "../../assets/doctor/member4.png"

const Blogs = () => {
    return (
        <div className="bg-neutral-50 min-h-min">


            <div className="py-8 px-4">
                <div className=" flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <div className="bg-white  p-6 rounded-lg border border-gray-300 mb-6">
                            <div className="mb-6  h-[300px] rounded flex items-center justify-center">
                                <img src={blog1} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="flex space-x-2 items-center">
                                    <img src = {doctor1} alt="" className="w-8 h-8"/>
                                    <div>
                                        <h6 className="font-bold text-sm">Dr. Emily Carter</h6>
                                        <p className="text-xs text-gray-500">Posted on March 15, 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 mt-2">
                                <h3 className="text-xl font-bold">The Importance of Regular Health Checkups</h3>
                                <p className="text-sm text-gray-500">Regular health checkups play a crucial role in early disease...</p>
                                <button className="flex items-center space-x-1 cursor-pointer"><span>Read More</span> <FaArrowRight></FaArrowRight></button>
                            </div>
                        </div>
                        
                        <div className="bg-white  p-6 rounded-lg border border-gray-300 mb-6">
                            <div className="mb-6  h-[300px] rounded flex items-center justify-center">
                                <img src={blog2} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="flex space-x-2 items-center">
                                    <img src = {doctor2} alt="" className="w-8 h-8"/>
                                    <div>
                                        <h6 className="font-bold text-sm">Dr. Jonathan Smith</h6>
                                        <p className="text-xs text-gray-500">Posted on March 25, 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 mt-2">
                                <h3 className="text-xl font-bold">How Sleep Affects Your Immune System</h3>
                                <p className="text-sm text-gray-500">Sleep is a vital process that directly influences...</p>
                                <button className="flex items-center space-x-1 cursor-pointer"><span>Read More</span> <FaArrowRight></FaArrowRight></button>
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg border border-gray-300 sticky top-24">
                            <h2 className="text-xl font-semibold mb-4">Contact Hospital</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                                    <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                                    <input type="tel" className="w-full p-2 border border-gray-300 rounded-lg" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                                    <textarea className="w-full p-2 border border-gray-300 rounded-lg h-32"></textarea>
                                </div>
                                <button className="w-full py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                                    Send Message
                                </button>
                            </form>
                            <div className="mt-6 pt-6 border-t">
                                <div className="flex items-center space-x-2 mb-4">
                                    <i className="fa-solid fa-phone text-neutral-600"></i>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fa-regular fa-envelope text-neutral-600"></i>
                                    <span>contact@hospitalangeles.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blogs;