import { useState } from "react";
import "slick-carousel/slick/slick.css";
import Navbar from "./Navbar";


import ResponsiveMenu from "./ResponsiveMenu";

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);

    // Toggle function for the responsive menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            {/* Header Section */}
            <header className="top-0 z-50 sticky w-full">
                <div className="top-0 sticky px-1 w-full">
                    {/* Navbar */}
                    <Navbar />

                    {/* Mobile Dark Mode and Hamburger Icon */}
                    <div className="flex justify-between items-center md:hidden py-3">
                        

                        {/* Hamburger Menu */}
                        <button
                            onClick={toggleMenu}
                            aria-label={showMenu ? "Close menu" : "Open menu"}
                            className="text-2xl cursor-pointer"
                        >
                            {showMenu ? "X Close" : "☰ Open"}
                        </button>
                    </div>
                </div>

                {/* Responsive Menu */}
                <ResponsiveMenu showMenu={showMenu} />
            </header>


            {/* Main Content */}
            <main className="px-1 py-0 w-full">{children}</main>
        </>
    );
};

export default Layout;
