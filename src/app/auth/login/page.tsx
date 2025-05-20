'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const handleSendOtp = () => {
        router.push('/auth/verification');
    };

    return (
        <div className="overFlowscroll my-12 w-[350px] m-auto">
            <div className="relative bgImage">
                <Image alt='login' src="/images/loginImage.png" />
                <div className="absolute loginContainer z-10 bg-white/90 backdrop-blur-md px-6 pb-10 rounded-2xl shadow-md w-[100%] text-center">
                    <div className="flex justify-center mb-4">
                        <Image src="/images/loginLogo.png" alt="Logo" className="h-12 w-12" />
                    </div>
                    <h2 className="text-xl font-semibold">Login to your account</h2>
                    <p className="text-sm text-gray-600 mb-6">Enjoy Audio Books you like</p>
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
                        <input
                            type="tel"
                            placeholder="Enter phone"
                            className="w-full px-4 py-2 outline-none"
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
