
const Banner = () => {
    return (
        <div className="hero bg-neutral-100 h-[500px]">
            <div className="hero-content text-center">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-bold">Save Up to 70% on Medical Procedures Abroad</h1>
                    <p className="py-6 text-xl text-neutral-600">
                        Access world-class healthcare at a fraction of US costs. Compare trusted clinics worldwide.
                    </p>
                    <div className="join w-full max-w-md">
                        <div className='w-full'>
                            <label className="input validator join-item w-full">
                                <input className='w-full' type="email" placeholder="Search procedures..." required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn btn-neutral join-item bg-neutral-900 text-white hover:bg-neutral-800">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;