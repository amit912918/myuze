'use client';
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const OTPVerification: React.FC = () => {

    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const val = e.target.value;
        if (!/^\d?$/.test(val)) return;

        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if (val && index < 3) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        router.push('/dashboard/home');
    }

    return (
        <div className="min-h-screen relative bg-white shadow-lg border border-gray-200 rounded-lg flex flex-col justify-center items-center px-4">
            <Link href="/auth/login">
                <div className="text-xl cursor-pointer absolute left-[10px] top-[10px]">
                    ←
                </div>
            </Link>
            <h1 className="text-xl text-black font-bold mb-2">OTP Verification</h1>
            <p className="text-sm text-center text-gray-600 mb-6">
                We have sent you an 4-digit verification code on your mobile number
            </p>

            <div className="flex gap-6 mb-6">
                {otp.map((digit, index) => (
                    <div
                        key={index}
                        className="w-12 h-12 border rounded-lg flex items-center justify-center text-xl font-semibold"
                    >
                        <input
                            ref={(el) => {
                                inputsRef.current[index] = el;
                            }}
                            type="tel"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-full bg-gray-100 rounded-lg text-center text-black px-4 py-2 outline-none"
                        />
                    </div>
                ))}
            </div>

            <button onClick={handleVerify} className="w-full cursor-pointer max-w-xs py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                Verify
            </button>

            <p className="text-sm text-gray-600">
                Didn’t receive OTP?{' '}
                <span className="text-purple-600 font-medium cursor-pointer">Resend</span>
            </p>
        </div>
    );
}

export default OTPVerification;