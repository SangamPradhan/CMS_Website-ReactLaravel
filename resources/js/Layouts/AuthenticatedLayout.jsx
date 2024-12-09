import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <nav className="border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 border-b">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block w-auto h-9 text-gray-800 dark:text-gray-200 fill-current" />
                                </Link>
                            </div>

                            <div className="sm:flex space-x-8 hidden sm:-my-px sm:ms-10">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    AI Solution Dashboard
                                </NavLink>
                            </div>

                            <div className="sm:flex space-x-8 hidden sm:-my-px sm:ms-10">
                                <NavLink
                                    href={route('projects.index')}
                                    active={route().current('projects.index')}
                                >
                                    Add Projects
                                </NavLink>
                            </div>

                            <div className="sm:flex space-x-8 hidden sm:-my-px sm:ms-10">
                                <NavLink
                                    href={route('event.index')}
                                    active={route().current('event.index')}
                                >
                                    Events
                                </NavLink>
                            </div>

                            <div className="sm:flex space-x-8 hidden sm:-my-px sm:ms-10">
                                <NavLink
                                    href={route('admin.addblogs')}
                                    active={route().current('admin.addblogs')}
                                >
                                    Blogs
                                </NavLink>
                            </div>

                            <div className="sm:flex space-x-8 hidden sm:-my-px sm:ms-10">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('admin.addproject')}
                                >
                                    Testimonials
                                </NavLink>
                            </div>

                            <div className="sm:flex space-x-8 hidden sm:-my-px sm:ms-10">
                                <NavLink
                                    href={route('admin.addgallery')}
                                    
                                >
                                    Gallery
                                </NavLink>
                            </div>
                        </div>
                        

                        <div className="sm:flex sm:items-center hidden sm:ms-6">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center bg-white dark:bg-gray-800 px-3 py-2 border border-transparent rounded-md font-medium text-gray-500 text-sm hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400 leading-4 transition duration-150 ease-in-out focus:outline-none"
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
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="flex items-center sm:hidden -me-2">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-900 focus:bg-gray-100 dark:focus:bg-gray-900 p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-400 focus:text-gray-500 dark:focus:text-gray-400 dark:text-gray-500 transition duration-150 ease-in-out focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pt-2 pb-3">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-gray-200 dark:border-gray-600 pt-4 pb-1 border-t">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="font-medium text-gray-500 text-sm">
                                {user.email}
                            </div>
                        </div>

                        <div className="space-y-1 mt-3">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
