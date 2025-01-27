import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { LogoutDialog } from '@/Components/LogoutDialog';
import { Button } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';

// Import FontAwesome icons
import { faBlog, faCalendarAlt, faCommentDots, faImages, faProjectDiagram, faQuestionCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const currentUrl = usePage().url; // Get the current URL from Inertia.js
    const [activeGroup, setActiveGroup] = useState(null);
    const [open, setOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);

    // Adjust sidebar state based on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarOpen(true); // Open sidebar for desktop view
            } else {
                setSidebarOpen(false); // Collapse sidebar for mobile view
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (
            currentUrl.includes('/projects') ||
            currentUrl.includes('projects/create') ||
            currentUrl.includes('projects/edit') ||
            currentUrl.includes('projects/show')
        ) {
            setActiveGroup('projects');
        } else if (currentUrl.includes('/event')) {
            setActiveGroup('event');
        } else if (currentUrl.includes('/blogs')) {
            setActiveGroup('blogs');
        } else if (currentUrl.includes('/testimonials')) {
            setActiveGroup('testimonials');
        } else if (currentUrl.includes('/gallery')) {
            setActiveGroup('gallery');
        } else if (
            currentUrl.includes('/contactus') ||
            currentUrl.includes('/contactus/create') // Added condition here
        ) {
            setActiveGroup('contactus');
        }

    }, [currentUrl]);

    const handleLogoutOpen = () => {
        setOpen(true);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`bg-blue-50 p-4 min-h-screen transition-all duration-500 ${sidebarOpen ? 'w-64' : 'w-16'
                    }`}
            >
                <div className="flex justify-between items-center mb-8">
                    {sidebarOpen && (
                        <Link href="/dashboard">
                            <ApplicationLogo className="block w-auto h-9 text-gray-800 fill-current" />
                        </Link>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden"
                    >
                        <FaIcons.FaBars />
                    </button>
                </div>

                {/* Navigation */}
                {sidebarOpen && (
                    <nav className="space-y-1">
                        <NavItem label="Dashboard" href="/dashboard" isActive={currentUrl === '/dashboard'} icon={<FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />} />
                        <NavItem
                            label="Projects"
                            href={route('projects.index')}
                            isActive={currentUrl === '/projects' || currentUrl.startsWith('/projects')}
                            icon={<FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />}
                        />
                        <NavItem label="Events" href={route('event.index')} isActive={currentUrl === '/event' || currentUrl.startsWith('/event')} icon={<FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />} />
                        <NavItem label="Blogs" href={route('blogs.index')} isActive={route().current('blogs.index') || currentUrl.startsWith('/blogs')} icon={<FontAwesomeIcon icon={faBlog} className="mr-2" />} />
                        <NavItem label="Testimonials" href={route('testimonials.index')} isActive={route().current('testimonials.index') || currentUrl.startsWith('/testimonials')} icon={<FontAwesomeIcon icon={faCommentDots} className="mr-2" />} />
                        <NavItem label="Gallery" href={route('gallery.index')} isActive={route().current('gallery.index') || currentUrl.startsWith('/gallery')} icon={<FontAwesomeIcon icon={faImages} className="mr-2" />} />
                        <NavItem
                            label="User Inquiries"
                            href={route('contactus.index')}
                            isActive={currentUrl === '/contactus' || currentUrl.startsWith('/contactus')}
                            icon={<FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />}
                        />

                    </nav>
                )}
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 bg-gray-100 min-w-0 transition-all duration-300 ease-in-out">
                {header && (
                    <header id="header" className="top-0 z-0 sticky bg-white shadow">
                        <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
                            <div>{header}</div>
                            <div className="relative ml-auto">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="inline-flex items-center bg-white px-3 py-2 border border-transparent rounded-md font-medium text-gray-500 text-sm hover:text-gray-700 leading-4 transition duration-150 ease-in-out focus:outline-none"
                                        >
                                            {user.name}
                                            <svg
                                                className="w-4 h-4 -me-0.5 ms-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link as="div" className="cursor-pointer">
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent dropdown closing
                                                    handleLogoutOpen();
                                                }}
                                                className="w-full text-left"
                                            >
                                                Logout
                                            </Button>
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </header>
                )}
                <main>{children}</main>
            </div>
            <LogoutDialog open={open} onOpenChange={setOpen} />
        </div>
    );
}

function NavItem({ icon, label, href, indent = false, isActive = false }) {
    return (
        <Link
            href={href}
            className={`
                flex items-center px-2 py-2 text-sm
                ${isActive
                    ? 'bg-[#0091FF] text-white'
                    : 'text-gray-700 hover:bg-blue-50'
                }
                ${indent ? 'ml-6' : ''}
                rounded-md
            `}
        >
            <span className="mr-2">{icon}</span>
            <span>{label}</span>
        </Link>
    );
}
