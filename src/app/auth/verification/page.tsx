import Link from "next/link";

export default function OTPVerification() {
    return (
        <div className="min-h-screen relative w-[350px] m-auto bg-white shadow-lg my-8 border-gray-400 rounded-lg flex flex-col justify-center items-center px-4">
            <Link href="/auth/login">
                <div className="text-xl cursor-pointer absolute left-[10px] top-[10px]">
                    ←
                </div>
            </Link>
            <h1 className="text-xl font-bold mb-2">OTP Verification</h1>
            <p className="text-sm text-center text-gray-600 mb-6">
                We have sent you an 4-digit verification code on your mobile number
            </p>

            <div className="flex gap-6 mb-6">
                <div className="w-12 h-12 border rounded-lg flex justify-between text-xl font-semibold">
                    <input
                        type="tel"
                        placeholder=""
                        className="w-full bg-gray-100 rounded-lg text-center px-4 py-2 outline-none"
                    />
                </div>
                <div className="w-12 h-12 border rounded-lg flex items-center justify-center text-xl font-semibold">
                    <input
                        type="tel"
                        placeholder=""
                        className="w-full bg-gray-100 rounded-lg text-center px-4 py-2 outline-none"
                    />
                </div>
                <div className="w-12 h-12 border rounded-lg flex items-center justify-center text-xl font-semibold">
                    <input
                        type="tel"
                        placeholder=""
                        className="w-full bg-gray-100 rounded-lg text-center px-4 py-2 outline-none"
                    />
                </div>
                <div className="w-12 h-12 border rounded-lg flex items-center justify-center text-xl font-semibold">
                    <input
                        type="tel"
                        placeholder=""
                        className="w-full bg-gray-100 rounded-lg text-center px-4 py-2 outline-none"
                    />
                </div>
            </div>

            <button className="w-full cursor-pointer max-w-xs py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                Verify
            </button>

            <p className="text-sm text-gray-600">
                Didn’t receive OTP?{' '}
                <span className="text-purple-600 font-medium cursor-pointer">Resend</span>
            </p>
        </div>
    );
}
