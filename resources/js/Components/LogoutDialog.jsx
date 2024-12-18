
export function LogoutDialog ({ open, onOpenChange }) {
    if (!open) return null

    const handleLogout = async () => {
        try {
            await axios.post('/logout')
            window.location.href = '/login'
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4'>
            <div className='bg-white rounded-lg w-full max-w-[400px]'>
                <div className='flex flex-col items-center p-6'>
                    <div className='flex justify-center items-center bg-[#FFDCD1] rounded-full w-20 h-20'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='40'
                            height='40'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='#FF4D12'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
                            <polyline points='16 17 21 12 16 7'></polyline>
                            <line x1='21' y1='12' x2='9' y2='12'></line>
                        </svg>
                    </div>

                    <h2 className='mt-4 font-semibold text-2xl'>Logout</h2>

                    <p className='mt-2 text-center text-gray-500'>
                        Are you sure you want to logout?
                    </p>

                    <div className='flex flex-col gap-2 mt-6 w-full'>
                        <button
                            onClick={handleLogout}
                            className='bg-[#FF4D12] hover:bg-[#FF4D12]/90 px-4 py-2 rounded w-full text-white transition-colors'
                        >
                            Yes, Logout
                        </button>
                        <button
                            onClick={() => onOpenChange(false)}
                            className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded w-full text-gray-800 transition-colors'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
