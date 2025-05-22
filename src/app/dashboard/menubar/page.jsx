'use client';
import { Home, Search, Grid, Library, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Menubar = () => {

    const router = useRouter();
    const handleMenuBar = () => {
        router.push('/dashboard/profile');
    }
    return (
        <div className='mt-12 w-[400px]'>
            <nav className="fixed bottom-0 inset-x-0 bg-white border-t w-[400px] m-auto mt-4 shadow-md rounded-t-3xl px-6 py-2 z-50">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center text-xs font-medium text-black">
                        <Home className="h-5 w-5 text-transparent bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text" />
                        <span className="text-[13px] font-semibold">Home</span>
                    </div>

                    <div className="flex flex-col items-center text-gray-500 text-xs">
                        <Search className="h-5 w-5" />
                        <span className="text-[13px]">Search</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 text-xs">
                        <Grid className="h-5 w-5" />
                        <span className="text-[13px]">Category</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 text-xs">
                        <Library className="h-5 w-5" />
                        <span className="text-[13px]">Library</span>
                    </div>
                    <div onClick={handleMenuBar} className="flex flex-col items-center text-gray-500 text-xs cursor-pointer">
                        <User className="h-5 w-5" />
                        <span className="text-[13px]">Profile</span>
                    </div>
                </div>

                <div className="mt-2 flex justify-center">
                    <div className="w-16 h-1.5 bg-gray-300 rounded-full" />
                </div>
            </nav>
        </div>
    )
}

export default Menubar;