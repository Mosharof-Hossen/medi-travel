
const Footer = () => {
    return (
        <footer id="footer" className="bg-neutral-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">MediTravel</h4>
                        <p className="text-neutral-400">Your trusted partner in medical tourism.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li><span className="hover:text-white cursor-pointer">Find Clinics</span></li>
                            <li><span className="hover:text-white cursor-pointer">Blog</span></li>
                            <li><span className="hover:text-white cursor-pointer">About Us</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li><span className="hover:text-white cursor-pointer">Mexico</span></li>
                            <li><span className="hover:text-white cursor-pointer">Thailand</span></li>
                            <li><span className="hover:text-white cursor-pointer">Turkey</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li><i className="fa-regular fa-envelope mr-2"></i> contact@meditravel.com</li>
                            <li><i className="fa-solid fa-phone mr-2"></i> +1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;