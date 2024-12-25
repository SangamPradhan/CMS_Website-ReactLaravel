import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/website/Vector.svg";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null); // Track hovered link
    const [activeLink, setActiveLink] = useState("/"); // Default active link
    const currentUrl = usePage().url;

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        // Update active link based on the current URL
        if (currentUrl.includes("aboutus")) {
            setActiveLink("/aboutus");
        } else if (currentUrl.includes("projects")) {
            setActiveLink("/projects");
        } else if (currentUrl.includes("homeevent")) {
            setActiveLink("/homeevent");
        } else if (currentUrl.includes("homegallery")) {
            setActiveLink("/homegallery");
        } else if (currentUrl.includes("contactpage")) {
            setActiveLink("/contactpage");
        } else {
            setActiveLink("/");
        }
    }, [currentUrl]);

    return (
        <div className="relative z-10 bg-white w-full dark:text-white duration-300">
            <div className="py-3 md:py-2 container">
                <div className="flex justify-between items-center">
                    {/* Logo section */}
                    <Link
                        href="/"
                        className="flex items-center gap-6"
                    >
                        <img src={Logo} alt="Logo" className="ml-5 w-7" />
                        <span className="pl-0 font-semibold text-2xl sm:text-3xl">
                            AI Solution
                        </span>
                    </Link>

                    {/* Desktop view Navigation */}
                    <nav className="md:block hidden">
                        <ul className="flex items-center gap-7 mr-0">
                            <li
                                className={`py-5 ${
                                    activeLink === "/aboutus"
                                        ? "text-primary border-b-2 border-primary"
                                        : ""
                                } ${
                                    hoveredLink === "/aboutus"
                                        ? "text-primary"
                                        : ""
                                }`}
                                onMouseEnter={() => setHoveredLink("/aboutus")}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    href="/aboutus"
                                    className="hover:text-primary transition-colors duration-500"
                                    onClick={() => setActiveLink("/aboutus")}
                                >
                                    About
                                </Link>
                            </li>

                            <li
                                className={`py-5 ${
                                    activeLink === "/projects"
                                        ? "text-primary border-b-2 border-primary"
                                        : ""
                                } ${
                                    hoveredLink === "/projects"
                                        ? "text-primary"
                                        : ""
                                }`}
                                onMouseEnter={() => setHoveredLink("/homeprojects")}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    href="/homeprojects"
                                    className="hover:text-primary transition-colors duration-500"
                                    onClick={() => setActiveLink("/homeprojects")}
                                >
                                    Projects
                                </Link>
                            </li>

                            <li
                                className={`py-5 ${
                                    activeLink === "/homeevent"
                                        ? "text-primary border-b-2 border-primary"
                                        : ""
                                } ${
                                    hoveredLink === "/homeevent"
                                        ? "text-primary"
                                        : ""
                                }`}
                                onMouseEnter={() => setHoveredLink("/homeevent")}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    href="/homeevent"
                                    className="hover:text-primary transition-colors duration-500"
                                    onClick={() => setActiveLink("/homeevent")}
                                >
                                    Events
                                </Link>
                            </li>

                            <li
                                className={`py-5 ${
                                    activeLink === "/homegallery"
                                        ? "text-primary border-b-2 border-primary"
                                        : ""
                                } ${
                                    hoveredLink === "/homegallery"
                                        ? "text-primary"
                                        : ""
                                }`}
                                onMouseEnter={() => setHoveredLink("/homegallery")}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <Link
                                    href="/homegallery"
                                    className="hover:text-primary transition-colors duration-500"
                                    onClick={() => setActiveLink("/homegallery")}
                                >
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <button className="primary-btn">
                                    <Link href="/contactpage">Contact Us</Link>
                                </button>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile view Drawer */}
                    <div className="flex items-center gap-4 md:hidden">
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
