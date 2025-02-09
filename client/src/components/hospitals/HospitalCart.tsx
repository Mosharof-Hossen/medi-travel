import { IHospitals } from "../../types/global";

const HospitalCart = ({ hospital }: { hospital: IHospitals }) => {
    console.log(hospital);
    return (
        <div className="card bg-white p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{hospital.clinicName}</h3>
                <span className="bg-neutral-200 px-2 py-1 rounded text-sm">Mexico</span>
            </div>
            <figure className=" ">
                <img
                    src={hospital.image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="space-y-2 mt-4 ">
                {
                    hospital.services.map((service) =>
                        <div key={service._id} className="flex justify-between">
                            <span className="text-neutral-600">{service.procedure} Cost:</span>
                            <span className="font-semibold">${service.price}</span>
                        </div>)
                }

            </div>
            <button className="w-full mt-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">View
                Details</button>
        </div>
    );
};

export default HospitalCart;