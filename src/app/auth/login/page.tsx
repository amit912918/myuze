'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './login.css';
import { handleLogin } from '../../api/auth';
import { showError, showSuccess } from '../../../utils/toastService';
import { useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import useAuth from '../../../hooks/useAuth';

export default function LoginPage() {

    const { setAuthData } = useAuth();
    const router = useRouter();
    const [mobileNo, setMobileNo] = useState("");
    const [isdCode, setIsdCode] = useState("91");

    const handleSendOtp = async () => {

        const fp = await FingerprintJS.load();
        const result = await fp.get();
        console.log(result.visitorId);
        setAuthData({
            mobileNo: mobileNo,
            deviceId: result.visitorId,
            isdCode: isdCode
        })

        try {
            const payload = {
                deviceId: result.visitorId,
                langCode: "en",
                mobileNo: mobileNo,
                isdCode: isdCode
            };

            const res = await handleLogin(payload);
            console.log(res.response, "result");
            showSuccess('Otp sent successfully!');
            router.push('/auth/verification');
        } catch (error) {
            console.log("Error in login api", error);
            showError("Otp sent failed");
        }
    };

    const handlePhoneChange = (value: string, data: { dialCode: string }) => {
        const stdCode = data?.dialCode || '';

        // Remove dialCode from start of value
        const numberWithoutStd = value.startsWith(stdCode)
            ? value.slice(stdCode.length)
            : value;

        setIsdCode(stdCode);
        setMobileNo(numberWithoutStd);
    };


    return (
        <div className="overFlowscroll">
            <div className="relative bgImage">
                <Image alt='login' height={1000} width={1000} src="/images/loginImage2.png" />
                <div className="absolute loginContainer z-10 bg-white/90 backdrop-blur-md px-6 pb-10 rounded-2xl shadow-md w-[100%] text-center">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/images/loginLogo.png"
                            height={96}
                            width={96}
                            alt="Logo"
                            className="h-24 w-24"
                        />
                    </div>
                    <h2 className="text-xl text-black font-semibold">Login to your account</h2>
                    <p className="text-sm text-gray-600 mb-6">Enjoy Audio Books you like</p>
                    <div className="mb-4">
                        <PhoneInput
                            country={'in'}
                            enableSearch
                            containerClass="w-full text-black rounded-lg border border-gray-300 focus-within:border-purple-500 shadow-sm"
                            inputClass="w-full !py-2 !pl-14 !pr-4 !text-sm !rounded-lg !border-none focus:!ring-0"
                            buttonClass="!bg-transparent !border-none !left-3 absolute z-10"
                            dropdownClass="!z-50"
                            onChange={handlePhoneChange}
                        />
                    </div>

                    <button className="w-full cursor-pointer py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500" onClick={handleSendOtp}>
                        Send OTP
                    </button>
                </div>
            </div>
        </div>
    );
}
