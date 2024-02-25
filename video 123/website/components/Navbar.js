import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Link href="/"
                        className="text-white font-bold text-lg mr-4">Home
                    </Link>
                    <Link href="/about"
                        className="text-gray-300 hover:text-white mr-4">About
                    </Link>
                    <Link href="/contact"
                        className="text-gray-300 hover:text-white">Contact
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/login"
                        className="text-gray-300 hover:text-white mr-4">Login
                    </Link>
                    <Link href="/signup"
                        className="text-gray-300 hover:text-white">Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
