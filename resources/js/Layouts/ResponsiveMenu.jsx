import { Link } from "@inertiajs/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";


const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div
            className={`${
                showMenu ? "block" : "hidden"
            } bg-white dark:bg-black dark:text-white absolute top-0 left-0 w-full h-screen z-20`}
        >
            <ul className="flex flex-col items-center justify-center gap-8 h-full">
                <li>
                    <Link
                        href="/#about"
                        className="text-lg font-medium hover:text-primary transition-colors duration-500"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#services"
                        className="text-lg font-medium hover:text-primary transition-colors duration-500"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        href="/#projects"
                        className="text-lg font-medium hover:text-primary transition-colors duration-500"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <FaUserCircle size={30} />
                </li>
            </ul>
        </div>
    );
};

export default ResponsiveMenu;
