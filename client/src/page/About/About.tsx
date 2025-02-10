
const About = () => {
    return (
        <section className="bg-gray-100 py-12 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About MediTravel</h2>
                <p className="text-gray-600 leading-relaxed">
                    At <span className="text-neutral-900 font-bold">MediTravel</span>, we believe in connecting patients with top-tier healthcare providers around the world.
                    Whether you're looking for affordable treatments abroad or world-className specialists, our platform makes it easy to explore options, compare services, and
                    book medical travel seamlessly.
                </p>
                <div className="mt-6 flex justify-center">
                    <div className="w-16 h-1 bg-neutral-900 rounded-full"></div>
                </div>
                <div className="mt-8 grid md:grid-cols-3 gap-8 text-left">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">🌍 Global Reach</h3>
                        <p className="text-gray-600">Access top medical facilities across 50+ countries with trusted specialists and state-of-the-art treatments.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">💼 Hassle-Free Bookings</h3>
                        <p className="text-gray-600">Easily book medical appointments, travel packages, and post-treatment care in just a few clicks.</p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">🔒 Trusted & Secure</h3>
                        <p className="text-gray-600">Our platform ensures patient privacy, secure transactions, and reliable partnerships with accredited hospitals.</p>
                    </div>
                </div>
                <div className="mt-10">
                    <a href="#" className="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                        Learn More
                    </a>
                </div>
            </div>
        </section>

    );
};

export default About;