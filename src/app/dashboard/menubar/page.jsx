'use client';
import { Home, Search, Grid, Library, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Menubar = () => {

    const router = useRouter();
    const handleMenuBar = (des) => {
        if (des === "profile") {
            router.push('/dashboard/profile');
        }
        else if (des === "category") {
            router.push('/dashboard/category');
        }
        else if (des === "home") {
            router.push('/dashboard/home');
        }
        else if (des === "search") {
            router.push('/dashboard/search');
        }
    }
    return (
        <div className='mt-12'>
            <nav className="fixed bottom-0 inset-x-0 bg-white border-t w-[400px] m-auto mt-4 shadow-md rounded-t-2xl px-6 py-2 z-50">
                <div className="flex justify-between items-center">
                    <div onClick={() => handleMenuBar('home')} className="flex flex-col items-center text-gray-500 text-xs font-medium text-black cursor-pointer">
                        <Home className="h-5 w-5" />
                        <span className="text-[13px] font-semibold">Home</span>
                    </div>

                    <div onClick={() => handleMenuBar('search')} className="flex flex-col items-center text-gray-700 text-xs cursor-pointer">
                        <Search className="h-5 w-5" />
                        <span className="text-[13px]">Search</span>
                    </div>
                    <div onClick={() => handleMenuBar('category')} className="flex flex-col items-center text-gray-700 text-xs cursor-pointer">
                        <Grid className="h-5 w-5" />
                        <span className="text-[13px]">Category</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-700 text-xs cursor-pointer">
                        <Library className="h-5 w-5" />
                        <span className="text-[13px]">Library</span>
                    </div>
                    <div onClick={() => handleMenuBar('profile')} className="flex flex-col items-center text-gray-700 text-xs cursor-pointer">
                        <User className="h-5 w-5" />
                        <span className="text-[13px]">Profile</span>
                    </div>
                </div>

                {/* <div className="mt-2 flex justify-center">
                    <div className="w-16 h-1.5 bg-gray-300 rounded-full" />
                </div> */}
            </nav>
        </div>
    )
}

export default Menubar;