'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useDashboard from '../../../hooks/useDashboard';
import { MdHome, MdLibraryBooks } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import NowPlaying from '../../../components/audio/PlayIcon';

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
            {openPlayButton && <NowPlaying />}

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 inset-x-0 bg-white w-[400px] m-auto mt-4 shadow-md px-6 py-2 z-50">
                <div className="flex justify-between items-center">

                    {/* Home */}
                    <div
                        onClick={() => handleMenuBar('home')}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <MdHome
                            className={`h-6 w-6 ${activeMenu === 'home'
                                ? 'text-purple-700' // just test with solid color first
                                : 'text-gray-500'
                                }`}
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
                        <FaSearch
                            className={`h-5 w-5 ${activeMenu === 'search'
                                ? 'text-purple-700'
                                : 'text-gray-500'
                                }`}
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
                        <BiSolidCategory
                            className={`h-5 w-5 ${activeMenu === 'category'
                                ? 'text-purple-700'
                                : 'text-gray-500'
                                }`}
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
                        <MdLibraryBooks
                            className={`h-5 w-5 ${activeMenu === 'library'
                                ? 'text-purple-700'
                                : 'text-gray-500'
                                }`}
                        />
                        <span className={`text-[13px]  ${activeMenu === 'library' ? 'font-semibold text-black' : 'text-gray-500'}`}>
                            Library
                        </span>
                    </div>

                    {/* Profile */}
                    <div
                        onClick={() => handleMenuBar('profile')}
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <CgProfile
                            className={`h-5 w-5 ${activeMenu === 'profile'
                                ? 'text-purple-700'
                                : 'text-gray-500'
                                }`}
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
