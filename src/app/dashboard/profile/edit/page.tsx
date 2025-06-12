'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdArrowBack } from "react-icons/md";
import { handleGetProfile } from '../../../api/profile';
import useAuth from '../../../../hooks/useAuth';

export default function EditProfilePage() {

    const { auth } = useAuth();
    const router = useRouter();

    const [firstName, setFirstName] = useState("Amit");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("9129181788@truecaller.com");
    const [phone, setPhone] = useState("9129181788");
    const [countryCode, setCountryCode] = useState("in");

    const handleUpdate = () => {
        console.log({ firstName, lastName, email, phone, countryCode });
    };

    const handleDelete = () => {
        alert("Account deleted (simulate)");
    };

    // const getProfileData = async () => {
    //     try {
    //         const res = await handleGetProfile();
    //         console.log(res.response.data.featured_contents, "result");
    //         // setTopCategoryData(res.response.data.featured_contents);
    //     } catch (error) {
    //         console.log("Error in login api", error);
    //     }
    // }

    useEffect(() => {
        console.log(auth, "auth");
        // handleGetProfile();
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <div className="flex space-x-16 items-center px-4 py-4">
                <MdArrowBack onClick={() => router.back()} className="text-2xl text-black cursor-pointer" />
                <h1 className="text-xl font-semibold text-black">Manage Profile</h1>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border rounded-xl py-3 px-4 dark:bg-gray-50 text-black dark:text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border rounded-xl py-3 px-4 dark:bg-gray-50 text-black dark:text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <div className="relative">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-xl py-3 px-4 dark:bg-gray-50 text-black dark:text-black pr-10 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500">
                        <HiOutlineChevronDown />
                    </div>
                </div>

                <PhoneInput
                    country={countryCode}
                    value={phone}
                    onChange={(phone: any, country: any) => {
                        setPhone(phone);
                        setCountryCode(country.countryCode ?? 'in');
                    }}
                    inputClass="!w-full !rounded-xl !py-3 !pl-12 !pr-4 !text-base dark:bg-gray-50 text-black dark:text-black"
                    buttonClass="!rounded-l-xl"
                    containerClass="!w-full !border !rounded-xl"
                    enableSearch={true}
                />
            </div>

            {/* Fixed bottom buttons */}
            <div className="px-4 py-4 space-y-3 bg-white sticky bottom-0 z-10">
                <button
                    onClick={handleUpdate}
                    className="w-full py-3 rounded-full text-white font-medium text-base"
                    style={{
                        background: 'linear-gradient(to right, #FFE29F, #FFA99F)',
                    }}
                >
                    Update
                </button>
                <button
                    onClick={handleDelete}
                    className="w-full py-3 rounded-full text-white font-medium text-base"
                    style={{
                        background: 'linear-gradient(to right, #FF512F, #DD2476)',
                    }}
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
}
