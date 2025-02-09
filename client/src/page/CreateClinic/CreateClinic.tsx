import { FieldValues, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useCreateClinicMutation } from "../../redux/services/clinic/clinic.api";

const CreateClinic = () => {
    const [addClinic] = useCreateClinicMutation();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            services: [{ procedure: "", price: "" }],
            // aboutClinic: "",
        },
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "services",
    });


    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        console.log(data);
        const res = await addClinic({...data,image:"test image"})
        console.log(res);


    }

    return (
        <div className="min-h-screen bg-neutral-50">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 pt-8">Create Your Clinic Profile</h1>
                <div className="bg-white rounded-lg shadow p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        <div className="space-y-1 text-sm">
                            <label className="block ">Clinic Name</label>
                            <input type="text" id="clinicName" placeholder="Clinic Name"  {...register("clinicName", { required: true })} className="w-full px-4 py-3 rounded-md border-gray-300" />
                            {
                                errors?.clinicName && <p><small className="text-red-500">Clinic Name is Required</small></p>
                            }

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1 text-sm">
                                <label className="block ">Country</label>
                                <input type="text" id="country" placeholder="Country Name"  {...register("country", { required: true })} className="w-full px-4 py-3 rounded-md border-gray-300" />
                                {
                                    errors?.country && <p><small className="text-red-500">Country is Required</small></p>
                                }

                            </div>

                            <div className="space-y-1 text-sm">
                                <label className="block ">City</label>
                                <input type="text" id="city" placeholder="City Name"  {...register("city", { required: true })} className="w-full px-4 py-3 rounded-md border-gray-300" />
                                {
                                    errors?.city && <p><small className="text-red-500">City is Required</small></p>
                                }

                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block ">Image</label>
                                <input type="file" className="file-input file-input-bordered w-full " {...register("image")} />

                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block ">Estimate Cost</label>
                                <input type="number" id="estimatedCost" placeholder="Estimate Cost"  {...register("estimatedCost", { required: true })} className="w-full px-4 py-3 rounded-md border-gray-300" />
                                {
                                    errors?.estimatedCost && <p><small className="text-red-500">Estimate Cost is Required</small></p>
                                }

                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-1 text-sm">
                                <label className="block ">Average Cost</label>
                                <input type="number" id="usAverageCost" placeholder="Average Cost"  {...register("usAverageCost", { required: true })} className="w-full px-4 py-3 rounded-md border-gray-300" />
                                {
                                    errors?.usAverageCost && <p><small className="text-red-500">Average Cost is Required</small></p>
                                }

                            </div>

                            <div className="space-y-1 text-sm">
                                <label className="block ">Savings</label>
                                <input type="text" id="savings" placeholder="Savings Name"  {...register("savings", { required: true })} className="w-full px-4 py-3 rounded-md border-gray-300" />
                                {
                                    errors?.savings && <p><small className="text-red-500">Savings is Required</small></p>
                                }

                            </div>
                        </div>

                        {fields.map((item, index) => (
                            <div key={item.id} className="flex gap-2 mb-2">
                                <input
                                    {...register(`services.${index}.procedure` as const)}
                                    placeholder="Add a procedure"
                                    className="border p-2 rounded w-full border-gray-300"
                                />
                                <input
                                    {...register(`services.${index}.price` as const)}
                                    placeholder="Price"
                                    className="border p-2 rounded w-24 border-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="cursor-pointer bg-red-500 text-white px-2 rounded"
                                >
                                    X
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => append({ procedure: "", price: "" })}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            + Add Procedure
                        </button>

                        <div className="space-y-1 text-sm">
                            <label className="block ">Notes</label>
                            <textarea placeholder="Short notes........" {...register("notes", { required: true })} className="textarea textarea-bordered textarea-lg text-justify w-full" />
                            {
                                errors?.notes && <p><small className="text-red-500">Notes is Required</small></p>
                            }
                        </div>


                        <button className="bg-[#22292f] hover:bg-black block w-full p-3 text-white text-center rounded-sm ">Create</button>


                    </form>
                </div>
            </div>
            dsf
        </div>
    );
};

export default CreateClinic;