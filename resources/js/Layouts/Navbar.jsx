import { Link } from "@inertiajs/react"; // Import Link from Inertia
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/website/Vector.svg";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div
            className="relative z-10 dark:bg-black w-full dark:text-white duration-300"
        >
            <div className="py-3 md:py-2 container">
                <div className="flex justify-between items-center">
                    {/* Logo section */}
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-6" // Increased gap for more spacing
                    >
                        <img src={Logo} alt="Logo" className="ml-5 w-7" />
                        <span className="pl-0 font-semibold text-2xl sm:text-3xl"> {/* Added padding */}
                            AI Solution
                        </span>
                    </Link>

                    {/* Desktop view Navigation */}
                    <nav className="md:block hidden">
                        <ul className="flex items-center gap-7 mr-0">
                            <li className="py-5">
                                <Link
                                    href="aboutus"
                                    className="hover:border-primary py-2 hover:border-b-2 font-medium text-lg hover:text-primary transition-colors duration-500"
                                    active={route().current('aboutus')}
                                >
                                    About
                                </Link>
                            </li>

                            <li className="py-4">
                                <Link
                                    href="/project"
                                    className="hover:border-primary py-2 hover:border-b-2 font-medium text-lg hover:text-primary transition-colors duration-500"
                                    active={route().current('project')}
                                >
                                    Projects
                                </Link>
                            </li>

                            <li>
                            <Link
                                href="/event"
                                className="hover:border-primary py-2 hover:border-b-2 font-medium text-lg hover:text-primary transition-colors duration-500"
                                active={route().current('event')}
                                >
                                    Events
                                </Link>
                            </li>

                            <li>
                            <Link
                                href="/gallery"
                                className="hover:border-primary py-2 hover:border-b-2 font-medium text-lg hover:text-primary transition-colors duration-500"
                                active={route().current('gallery')}
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <button className="primary-btn"> <Link href="/contactpage">Contact Us</Link> </button>
                                
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile view Drawer */}
                    <div className="flex items-center gap-4 md:hidden">
                        
                        {/* Mobile Hamburger icon */}
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className="transition-all cursor-pointer"
                                size={30}
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className="transition-all cursor-pointer"
                                size={30}
                            />
                        )}
                    </div>
                </div>
            </div>
            {/* Responsive Menu */}
            <ResponsiveMenu showMenu={showMenu} />
        </div>
    );
};

export default Navbar;
