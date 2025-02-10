import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaPlaneDeparture } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../redux/services/auth/auth.api";
import { toast } from "sonner";

const SignUp = () => {
    const [signUp] = useSignUpMutation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        const res = await signUp(data);
        console.log(res);
        if (res.error) {
            toast.error("Provide Valid Email.")
        }
        else {
            toast.success(res.data?.message)
            navigate("/login")
        }
    }

    return (

        <div
            className='min-h-screen bg-neutral-50'

        >
            <div className='min-h-screen flex items-center justify-center bg-neutral-100'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg ">
                    <div className=''>
                        <div className="text-center mb-8">
                            <FaPlaneDeparture className="text-3xl mx-auto text-neutral-800 mb-4" />

                            <h2 className="text-2xl font-bold">Welcome to MediTravel</h2>
                            <p className="text-neutral-600 mt-2">Sign in or create an account</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            <div className="space-y-1 text-sm">
                                <label className="block ">Name</label>
                                <input type="text" id="name" placeholder="Name"  {...register("name", { required: true })} className="w-full px-4 py-3 rounded-md" />
                                {
                                    errors?.name && <p><small className="text-red-500">Name is Required</small></p>
                                }

                            </div>

                            <div className="space-y-1 text-sm">
                                <label className="block ">Email</label>
                                <input type="email" id="email" placeholder="Email"  {...register("email", { required: true })} className="w-full px-4 py-3 rounded-md" />
                                {
                                    errors?.email && <p><small className="text-red-500">Email is Required</small></p>
                                }

                            </div>

                            <div className="space-y-1 text-sm">
                                <label className="block ">Password</label>
                                <input type="password" id="password" placeholder="Password"  {...register("password", { required: true, })} className="w-full px-4 py-3 rounded-md" />
                                {
                                    errors?.password && <p><small className="text-red-500">Password is Required</small></p>
                                }
                            </div>
                            <button className="bg-[#22292f] hover:bg-black block w-full p-3 text-white text-center rounded-sm ">Sign Up</button>

                            <div>
                                <p className="text-center font-semibold">Have a account? <Link to={"/login"}> <span className="underline">Login here</span></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;