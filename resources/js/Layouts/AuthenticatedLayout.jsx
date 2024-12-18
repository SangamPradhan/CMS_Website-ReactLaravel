import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { LogoutDialog } from '@/Components/LogoutDialog';
import { Button } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const currentUrl = usePage().url // Get the current URL from Inertia.js
    const [activeGroup, setActiveGroup] = useState(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        // Keep the group expanded if the current URL is within it
        if (
            currentUrl.includes('/projects')
        ) {
            setActiveGroup('projects') ||
            currentUrl.includes('/projects/edit')
        } else if (currentUrl.includes('/event')) {
            setActiveGroup('event')
        } else if (currentUrl.includes('/blogs')) {
            setActiveGroup('blogs')
        } else if (
            currentUrl.includes('/testimonials')
        ) {
            setActiveGroup('testimonials') // Keep Employee Management expanded
        } else if (
            currentUrl.includes('/gallery')
        ) {
            setActiveGroup('gallery') // Keep Employee Management expanded
        }
    }, [currentUrl])

    const toggleGroup = group => {
        setActiveGroup(prevGroup => (prevGroup === group ? null : group))
    }

    const handleLogoutOpen = () => {
        setOpen(true)
    }

    // const [showingNavigationDropdown, setShowingNavigationDropdown] =
    //     useState(false);

    return (
        <div className='flex'>
            {/* Sidebar */}
            <div className='bg-[#E6F4FF] p-4 w-64 min-h-screen'>
                <div className='mb-6'>
                    <div className='flex items-center shrink-0'>
                        <Link href='/dashboard'>
                            <ApplicationLogo className='block w-auto h-9 text-gray-800 fill-current' />
                        </Link>
                    </div>
                </div>

                {/* Navigation */}
                <nav className='space-y-1'>
                    <NavItem
                        //icon={<LayoutDashboard size={18} />}
                        label='Dashboard'
                        href='/dashboard'
                        isActive={currentUrl === '/dashboard'}
                    />

                    <NavItem
                        //icon={<Users size={18} />}
                        label='Projects'
                        href={route('projects.index')}
                        isActive={route().current('projects.index')}
                    />

                    <NavItem
                        //icon={<FileText size={18} />}
                        label='Events'
                        href={route('event.index')}
                        isActive={currentUrl === '/event'}
                    />

                    <NavItem
                        //icon={<Users size={18} />}
                        label='Blogs'
                        href={route('blogs.index')}
                        isActive={route().current('blogs.index')}
                    />

                    <NavItem
                        //icon={<Users size={18} />}
                        label='Testimonials'
                        href={route('testimonials.index')}
                        isActive={route().current('testimonials.index')}
                    />

                    <NavItem
                        //icon={<Users size={18} />}
                        label='Gallery'
                        href={route('gallery.index')}
                        isActive={route().current('gallery.index')}
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className='flex flex-col flex-1 bg-gray-100 min-w-0 transition-all duration-300 ease-in-out'>
                {header && (
                    <header className='bg-white shadow'>
                        <div className='flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl'>
                            <div>{header}</div>
                            <div className='relative ml-auto'>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type='button'
                                            className='inline-flex items-center bg-white px-3 py-2 border border-transparent rounded-md font-medium text-gray-500 text-sm hover:text-gray-700 leading-4 transition duration-150 ease-in-out focus:outline-none'
                                        >
                                            {user.name}
                                            <svg
                                                className='w-4 h-4 -me-0.5 ms-2'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        {/* Prevent dropdown from closing */}
                                        <Dropdown.Link
                                            as='div'
                                            className='cursor-pointer'
                                        >
                                            <Button
                                                onClick={e => {
                                                    e.stopPropagation() // Prevent dropdown closing
                                                    handleLogoutOpen()
                                                }}
                                                className='w-full text-left'
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
            <span className='mr-2'>{icon}</span>
            <span>{label}</span>
        </Link>
    )
}
