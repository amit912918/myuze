// For app directory (Next.js 13+), or rename to profile.js for pages/ directory

import { FaUser, FaHeadset, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { BsShieldLock } from "react-icons/bs";
import Image from "next/image";

type MenuItemProps = {
    icon: React.ReactNode;
    label: string;
    value?: string;
    textColor?: string;
};

function MenuItem({ icon, label, value, textColor = "text-gray-900" }: MenuItemProps) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 px-2 rounded">
            <div className="flex items-center space-x-3">
                <div className="text-gray-500">{icon}</div>
                <span className={`text-base ${textColor}`}>{label}</span>
            </div>
            {value && <span className="text-sm text-gray-500">{value}</span>}
        </div>
    );
}


export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-white p-4 pt-8 max-w-md mx-auto font-sans">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Profile</h1>
                <div className="w-8 h-8 rounded-full bg-gray-200" />
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
                    <Image
                        src="/girl-listening.png"
                        alt="Listening"
                        fill
                        className="w-24 h-24 object-cover rounded-xl ml-4"
                    />
                </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
                <MenuItem icon={<FaUser />} label="Manage Account" />
                <MenuItem icon={<MdSubscriptions />} label="Manage Subscription" />
                <MenuItem icon={<IoLanguage />} label="Language" value="English" />
                <MenuItem icon={<FaHeadset />} label="Contact Us" />
                <MenuItem icon={<BsShieldLock />} label="Privacy Policy" />
                <MenuItem icon={<FaFileAlt />} label="Terms of Service" />
                <MenuItem icon={<FaSignOutAlt />} label="Logout" textColor="text-red-500" />
            </div>
        </div>
    );
}