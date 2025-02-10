import { useParams } from "react-router-dom";
import { useSingleClinicQuery } from "../../redux/services/clinic/clinic.api";
import { IHospitals } from "../../types/global";
import { FaHeart } from "react-icons/fa";
import CustomSpinner from "../Spinner/CustomSpinner";

const HospitalDetails = () => {
    const { id } = useParams() as { id: string };
    const { data, isFetching } = useSingleClinicQuery(id) as {
        data?: {
            data?: IHospitals;
            message: string;
            success?: boolean;
            meta: null | number;
        }
        isFetching: boolean;
    }
    console.log(data?.data);
    console.log(id);
    return (
        <div className="bg-neutral-50 min-h-min">
            {
                isFetching ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div className="py-8 px-4">
                        <div className=" flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-2/3">
                                <div className="bg-white  p-6 rounded-lg border border-gray-300 mb-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div >
                                            <h1 className="text-2xl font-bold mb-2">{data?.data?.clinicName}</h1>
                                            <div className="flex items-center space-x-4">
                                                <span className="bg-neutral-200 px-2 py-1 rounded text-sm">{data?.data?.country}</span>
                                                <span className="text-neutral-600"><i className="fa-solid fa-location-dot mr-1"></i>
                                                    {data?.data?.city}
                                                </span>
                                            </div>
                                        </div>
                                        <button className="px-4 py-2 flex gap-2 justify-center items-center bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                                            <FaHeart></FaHeart>
                                            Save
                                        </button>
                                    </div>
                                    <div className="mb-6  h-[400px] rounded flex items-center justify-center">
                                        <img src={data?.data?.image} alt="" className="w-full" />
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 mb-6">
                                        <div className=" h-24 rounded flex items-center justify-center">
                                            <img src={data?.data?.image} alt="" className="w-full" />
                                        </div>
                                        <div className=" h-24 rounded flex items-center justify-center">
                                            <img src={data?.data?.image} alt="" className="w-full" />
                                        </div>
                                        <div className=" h-24 rounded flex items-center justify-center">
                                            <img src={data?.data?.image} alt="" className="w-full" />
                                        </div>
                                        <div className=" h-24 rounded flex items-center justify-center">
                                            <img src={data?.data?.image} alt="" className="w-full" />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="text-xl font-semibold mb-3">About Hospital</h2>
                                            <p className="text-neutral-600">
                                                {data?.data?.notes}
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold mb-3">
                                                Procedures & Prices
                                            </h2>
                                            <div className="space-y-4">

                                                {
                                                    data?.data?.services.map((service) =>
                                                        <div key={service._id} className="flex justify-between items-center p-4 bg-neutral-100 rounded">
                                                            <span>{service.procedure}</span>
                                                            <span className="font-semibold">${service.price}</span>
                                                        </div>)
                                                }

                                            </div>
                                        </div>
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
            }

        </div>
    );
};

export default HospitalDetails;