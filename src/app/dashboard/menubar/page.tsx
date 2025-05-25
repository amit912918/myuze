'use client';
import { useEffect, useState } from 'react';
import { Home, Search, Grid, Library, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import NowPlaying from '../../../components/audio/PlayIcon';
import useDashboard from '../../../hooks/useDashboard';

const Menubar = () => {
    const router = useRouter();
    const [activeMenu, setActiveMenu] = useState('home');
    const { openPlayButton } = useDashboard();

    const handleMenuBar = (des: string) => {
        setActiveMenu(des);
        router.push(`/dashboard/${des}`);
    };

    useEffect(() => {
        console.log(openPlayButton, 'Updated openPlayButton');
    }, [openPlayButton]);

    return (
        <div className='mt-12'>
            {/* Floating Play Button */}
            {openPlayButton && <NowPlaying title='The like ted' artist='Camine Galb' image='playImage.png' />}

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 inset-x-0 bg-white border-t w-[400px] m-auto mt-4 shadow-md rounded-t-2xl px-6 py-2 z-50">
                <div className="flex justify-between items-center">

                    {/* Home */}
                    <div
                        onClick={() => handleMenuBar('home')}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <Home
                            className={`h-5 w-5 ${activeMenu === 'home' ? 'text-[radial-gradient(circle_at_top_left,_#6B0DFF,_#FF6B79)]' : 'text-gray-500'}`}
                        />
                        <span className={`text-[13px] ${activeMenu === 'home' ? 'font-semibold text-black' : 'text-gray-500'}`}>
                            Home
                        </span>
                    </div>

                    {/* Search */}
                    <div
                        onClick={() => handleMenuBar('search')}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <Search
                            className={`h-5 w-5 ${activeMenu === 'search' ? 'text-[radial-gradient(circle_at_top_left,_#6B0DFF,_#FF6B79)]' : 'text-gray-500'}`}
                        />
                        <span className={`text-[13px] ${activeMenu === 'search' ? 'font-semibold text-black' : 'text-gray-500'}`}>
                            Search
                        </span>
                    </div>

                    {/* Category */}
                    <div
                        onClick={() => handleMenuBar('category')}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <Grid
                            className={`h-5 w-5 ${activeMenu === 'category' ? 'text-[radial-gradient(circle_at_top_left,_#6B0DFF,_#FF6B79)]' : 'text-gray-500'}`}
                        />
                        <span className={`text-[13px] ${activeMenu === 'category' ? 'font-semibold text-black' : 'text-gray-500'}`}>
                            Category
                        </span>
                    </div>

                    {/* Library (no route in your code, so left inactive) */}
                    <div
                        onClick={() => handleMenuBar('library')}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <Library className={`h-5 w-5 ${activeMenu === 'library' ? 'text-[radial-gradient(circle_at_top_left,_#6B0DFF,_#FF6B79)]' : 'text-gray-500'}`} />
                        <span className="text-[13px]">
                            Library
                        </span>
                    </div>

                    {/* Profile */}
                    <div
                        onClick={() => handleMenuBar('profile')}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <User
                            className={`h-5 w-5 ${activeMenu === 'profile' ? 'text-[radial-gradient(circle_at_top_left,_#6B0DFF,_#FF6B79)]' : 'text-gray-500'}`}
                        />
                        <span className={`text-[13px] ${activeMenu === 'profile' ? 'font-semibold text-black' : 'text-gray-500'}`}>
                            Profile
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;
