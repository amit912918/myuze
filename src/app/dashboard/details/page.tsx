'use client'
import React from 'react';
import { ArrowLeft, Share2, Play, Download, BookOpen, Lightbulb, User } from 'lucide-react';
import Image from 'next/image';
import useDashboard from '../../../hooks/useDashboard';

const ClimateBookDetail = () => {

    const { setOpenPlayButton } = useDashboard();
    const handlePlayButton = () => {
        setOpenPlayButton(prev => !prev);
    };

    return (
        <div className="bg-white min-h-screen p-4 max-w-md mx-auto">
            {/* Header Image & Top Icons */}
            <div className="relative rounded-2xl overflow-hidden">
                {/* <div className='relative w-full h-full'>
                <Image
                    src="/images/climate-book-cover.png"
                    alt="The Climate Book"
                    fill
                    className="object-contain"
                />
                </div> */}
                <Image
                    src="/images/climate-book-cover.png"
                    alt="The Climate Book"
                    height={1000}
                    width={1000}
                    className="object-contain"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-1">
                    <ArrowLeft size={20} />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-1">
                    <Share2 size={20} />
                </div>
            </div>

            {/* Book Info */}
            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">The Climate Book</h2>
                <p className="text-gray-600">Greta Thunberg</p>
                <p className="text-sm text-gray-500">15 minutes</p>
            </div>

            {/* Tags */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
                <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 text-sm">
                    <User size={14} /> Self Growth
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 text-sm">
                    <BookOpen size={14} /> 8 Chapters
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 text-sm">
                    <Lightbulb size={14} /> 16 Insights
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6 gap-3">
                <button className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-purple-200 to-purple-400 text-purple-900 font-semibold flex items-center justify-center gap-2">
                    <Download size={18} /> Download Now
                </button>
                <button onClick={handlePlayButton} className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer">
                    <Play size={18} /> Play Now
                </button>
            </div>

            {/* Description */}
            <div className="mt-6">
                <h3 className="font-semibold text-lg">Description</h3>
                <p className="text-sm text-gray-600 mt-2">
                    We still have time to change the world. From Greta Thunberg, the world’s leading climate activist,
                    comes the essential handbook for making it happen...
                </p>
            </div>

            {/* Chapters */}
            <div className="mt-6">
                <h3 className="font-semibold text-lg">8 Chapters</h3>
                <div className="mt-4 bg-gray-100 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-2 rounded-full">
                            <Play size={20} className="text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-sm">1. Protocol to Improve your Sleep</p>
                            <p className="text-xs text-gray-500">3 mins</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateBookDetail
