// For app directory (Next.js 13+), or rename to profile.js for pages/ directory
'use client';
import { FaUser, FaHeadset, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { BsShieldLock } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

type MenuItemProps = {
    icon: React.ReactNode;
    label: React.ReactNode | string;
    value?: React.ReactNode | string;
    textColor?: string;
};

function MenuItem({ icon, label, value, textColor = "text-gray-900" }: MenuItemProps) {

    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer px-2 rounded">
            <div className="flex items-center space-x-3">
                <div className="text-gray-400">{icon}</div>
                <span className={`text-base ${textColor}`}>{label}</span>
            </div>
            {value && <span className="text-sm text-black dark:text-white font-bold">{value}</span>}
        </div>
    );
}


export default function ProfilePage() {

    const router = useRouter();
    const handleLogout = () => {
        router.push('/auth/login');
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black p-4 pt-8 max-w-md mx-auto font-sans">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl text-black font-semibold">Profile</h1>
                <div className="rounded-full cursor-pointer">
                    <HiOutlineDotsCircleHorizontal className="text-black w-7 h-7" />
                </div>
            </div>

            {/* Banner */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 text-white relative overflow-hidden mb-6">
                <div className="flex items-center">
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">Enjoy All Benefits!</h2>
                        <p className="text-sm">Enjoy listening podcast with better audio quality, without restrictions, and without ads</p>
                        <button className="mt-3 bg-white text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium shadow">
                            StoryStream Pro
                        </button>
                    </div>
                    {/* <Image
                        src="/girl-listening.png"
                        alt="Listening"
                        fill
                        className="w-24 h-24 object-cover rounded-xl ml-4"
                    /> */}
                </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
                <MenuItem icon={<FaUser />} label="Manage Account" value={<IoIosArrowForward />} textColor="text-black dark:text-white" />
                <MenuItem icon={<MdSubscriptions />} label="Manage Subscription" value={<IoIosArrowForward />} textColor="text-black dark:text-white" />
                <MenuItem icon={<IoLanguage />} label="Language" value={<div className="flex px-2"><div className="mx-4">English</div><div><IoIosArrowForward /></div></div>} textColor="text-black dark:text-white" />
                <MenuItem icon={<FaHeadset />} label="Contact Us" value={<IoIosArrowForward />} textColor="text-black dark:text-white" />
                <MenuItem icon={<BsShieldLock />} label="Privacy Policy" value={<IoIosArrowForward />} textColor="text-black dark:text-white" />
                <MenuItem icon={<FaFileAlt />} label="Terms of Service" value={<IoIosArrowForward />} textColor="text-black dark:text-white" />
                <MenuItem icon={<FaSignOutAlt />} label={<div onClick={handleLogout} className="font-semibold">Logout</div>} textColor="text-red-500" />
            </div>
        </div>
    );
}