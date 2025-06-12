'use client';
import { useState } from "react";
import { FaUser, FaHeadset, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { BsShieldLock } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Dialog } from 'primereact/dialog';

type MenuItemProps = {
    icon: React.ReactNode;
    label: React.ReactNode | string;
    value?: React.ReactNode | string;
    textColor?: string;
    onClick?: () => void;
};

function MenuItem({ icon, label, value, textColor = "text-gray-900", onClick }: MenuItemProps) {
    return (
        <div
            onClick={onClick}
            className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer px-2 rounded"
        >
            <div className="flex items-center space-x-3">
                <div className="text-gray-400">{icon}</div>
                <span style={{ fontSize: "18px" }} className={`text-base ${textColor}`}>{label}</span>
            </div>
            {value && <span style={{ fontSize: "18px" }} className="font-bold">{value}</span>}
        </div>
    );
}

export default function ProfilePage() {
    const router = useRouter();

    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [showLanguageDialog, setShowLanguageDialog] = useState(false);

    const handleLogout = () => {
        router.push('/auth/login');
    };

    const handleManageAccount = () => {
        router.push('/dashboard/profile/edit');
    };

    const availableLanguages = ["English", "Hindi"];

    return (
        <div>
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
                </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
                <MenuItem
                    icon={<FaUser />}
                    label="Manage Account"
                    value={<IoIosArrowForward />}
                    onClick={handleManageAccount}
                />
                <MenuItem
                    icon={<MdSubscriptions />}
                    label="Manage Subscription"
                    value={<IoIosArrowForward />}
                />
                <MenuItem
                    icon={<IoLanguage />}
                    label="Language"
                    value={
                        <div className="flex items-center gap-3">
                            <span>{selectedLanguage}</span>
                            <IoIosArrowForward />
                        </div>
                    }
                    onClick={() => setShowLanguageDialog(true)}
                />
                <MenuItem icon={<FaHeadset />} label="Contact Us" value={<IoIosArrowForward />} />
                <MenuItem onClick={() => window.open("https://www.myuzeplay.com/static/pp", "_self")} icon={<BsShieldLock />} label="Privacy Policy" value={<IoIosArrowForward />} />
                <MenuItem onClick={() => window.open("https://www.myuzeplay.com/static/tnc", "_self")} icon={<FaFileAlt />} label="Terms of Service" value={<IoIosArrowForward />} />
                <MenuItem icon={<FaSignOutAlt />} label={<div onClick={handleLogout} className="font-semibold">Logout</div>} textColor="text-red-500" />
            </div>

            {/* Language Dialog */}
            <Dialog
                header="Select Language"
                visible={showLanguageDialog}
                onHide={() => setShowLanguageDialog(false)}
                style={{ width: '300px' }}
                modal
            >
                <div className="flex flex-col gap-3">
                    {availableLanguages.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => {
                                setSelectedLanguage(lang);
                                setShowLanguageDialog(false);
                            }}
                            className={`py-2 px-4 rounded-md text-white ${selectedLanguage === lang ? "bg-purple-600" : "bg-gray-400"
                                }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </Dialog>
        </div>
    );
}
