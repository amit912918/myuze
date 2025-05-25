"use client";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdArrowBack } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

export default function prodcast() {

    const [isPlaying, setIsPlaying] = useState(true);
    const toast = useRef(null);
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 1 ? prev - 1 : 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm = () => {
        confirmDialog({
            position: "bottom",
            accept,
            reject,
            message: (
                <div className="bg-white rounded-2xl w-[400px] text-center">
                    <div className="w-[60px] h-[60px] m-auto">
                        <Image width={200} height={200} className='w-full h-full' src='/images/subscriptionLogo.png' alt='subscription Logo' />
                    </div>
                    <h2 className="text-xl font-semibold text-purple-600 mt-4">StoryStream Pro</h2>
                    <p className="text-lg font-bold text-gray-900 my-3">
                        Unlock All Shows & Books<br />with StoryStream Pro
                    </p>
                    <div className='border border-gray-200'></div>
                    <p className="text-gray-600 mt-3">Subscribe now to enjoy Unlimited Access</p>

                    <button className="bg-gradient-to-r mt-4 from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl text-lg font-medium w-full transition hover:opacity-90">
                        Subscribe Now ({timer} Sec)
                    </button>

                    <div className="text-sm text-gray-600 mt-2 cursor-pointer hover:underline" onClick={reject}>
                        &larr; I’ll try this later, take me back
                    </div>
                    <div className="text-xs text-white bg-black px-3 py-1 rounded-full inline-block mt-2">
                        11 / 46
                    </div>
                </div>
            ),
        });
    };

    const handleSubscription = () => {
        confirm("bottom")
    }


    return (
        <main className="flex flex-col items-center justify-center w-[450px] m-auto border border-gray-200 my-12 rounded-lg min-h-screen bg-white p-4">
            <ConfirmDialog />
            <div className="w-full flex items-center justify-between mb-4">
                <button>
                    <MdArrowBack className="text-2xl" />
                </button>
                <h1 className="font-semibold text-lg">Talking to Strangers</h1>
                <button>
                    <HiOutlineDotsVertical className="text-2xl" />
                </button>
            </div>

            <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-lg">
                <Image
                    src="/images/playImage.png"
                    width={200}
                    height={200}
                    alt="Ikigai Cover"
                    className="w-full"
                />
            </div>

            <div className="text-center mt-4">
                <h2 className="font-bold text-lg">Question Assumptions to Uncover the Truth</h2>
                <p className="text-sm text-gray-500">Ikigai</p>
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-sm mt-6">
                <input
                    type="range"
                    min="0"
                    max="144"
                    value="138"
                    className="w-full accent-purple-500"
                    readOnly
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>2:30</span>
                    <span>2:44</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between w-full max-w-sm mt-6 px-6">
                <button>
                    <FaBackward className="text-2xl" />
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full text-white shadow-lg">
                    {isPlaying ? (
                        <FaPause className="text-2xl" onClick={() => { setIsPlaying(false); handleSubscription() }} />
                    ) : (
                        <FaPlay className="text-2xl" onClick={() => { setIsPlaying(true); handleSubscription() }} />
                    )}
                </button>
                <button>
                    <FaForward className="text-2xl" />
                </button>
            </div>
        </main>
    );
}
