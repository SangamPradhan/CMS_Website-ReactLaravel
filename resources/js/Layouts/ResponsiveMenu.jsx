import { Link } from "@inertiajs/react";
import { FaUserCircle } from "react-icons/fa";


const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div
            className={`${
                showMenu ? "block" : "hidden"
            } bg-white dark:bg-black dark:text-white absolute top-0 left-0 w-full h-screen z-20`}
        >
            <ul className="flex flex-col justify-center items-center gap-8 h-full">
                <li>
                    <Link
                        href="/about"
                        className="font-medium text-lg hover:text-primary transition-colors duration-500"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/homeprojects"
                        className="font-medium text-lg hover:text-primary transition-colors duration-500"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/homeevents"
                        className="font-medium text-lg hover:text-primary transition-colors duration-500"
                    >
                        Events
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
