import { Inter } from "next/font/google"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Admin - Facebook - Connect with friends and the world around you",
    description: "Admin page : Facebook is a social networking service for everyone.",
};

export default function AdminLayout({ children }) {
    return (
        <>
            <span>Admin Navbar</span>
            {children}
        </>
    );
}
