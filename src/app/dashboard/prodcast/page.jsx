"use client";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";

export default function prodcast() {
    const [isPlaying, setIsPlaying] = useState(true);
    return (
        <main className="flex flex-col items-center justify-center w-[450px] m-auto border border-gray-200 my-12 rounded-lg min-h-screen bg-white p-4">
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
                <img
                    src="/images/playImage.png" 
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
                        <FaPause className="text-2xl" onClick={() => setIsPlaying(false)} />
                    ) : (
                        <FaPlay className="text-2xl" onClick={() => setIsPlaying(true)} />
                    )}
                </button>
                <button>
                    <FaForward className="text-2xl" />
                </button>
            </div>
        </main>
    );
}
