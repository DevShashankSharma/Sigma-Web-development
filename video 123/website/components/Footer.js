const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300">&copy; 2024 Your Company. All rights reserved.</p>
                    <div className="flex mt-4 md:mt-0">
                        <a href="#" className="text-gray-300 hover:text-white mr-4">Privacy Policy</a>
                        <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
