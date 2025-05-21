import React from "react";
import { Play, MoreHorizontal, Download, List } from 'lucide-react';
import Menubar from "../menubar/page";

const page = () => {
    return (
        <div className="p-4 w-[400px] m-auto border border-gray-200 rounded-lg my-12">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Subscriptions</h2>
                <a href="#" className="text-purple-600 text-sm font-medium">See All</a>
            </div>

            <div className="flex gap-8">
                <div>
                    <img
                        src="/images/subImage1.png"
                        alt="indistractable cover"
                        className="w-40 h-40 rounded-lg object-cover"
                    />
                </div>
                <div>
                    <img
                        src="/images/subImage2.png"
                        alt="indistractable cover"
                        className="w-40 h-40 rounded-lg object-cover"
                    />
                </div>
            </div>

            <div className="flex justify-between items-center mb-3 mt-8">
                <h2 className="text-lg font-semibold">New Updates</h2>
                <a href="#" className="text-purple-600 text-sm font-medium">See All</a>
            </div>

            <div className="flex gap-4 items-center bg-white rounded-xl shadow p-4">
                <img
                    src="/images/playListImage.png"
                    alt="indistractable cover"
                    className="w-40 h-40 rounded-lg object-cover"
                />

                <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-semibold leading-tight">indistractable</h3>
                    <p className="text-sm text-gray-500">Apple Talk &nbsp; | &nbsp; 52:27 mins</p>

                    <div className="flex items-center mt-3 gap-2">
                        <button className="bg-pink-600 text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2">
                            <Play size={16} /> Play
                        </button>
                        <button><List size={20} className="text-gray-600" /></button>
                        <button><Download size={20} className="text-gray-600" /></button>
                        <button><MoreHorizontal size={20} className="text-gray-600" /></button>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center bg-white rounded-xl shadow p-4 my-8">
                <img
                    src="/images/playListImage.png"
                    alt="indistractable cover"
                    className="w-40 h-40 rounded-lg object-cover"
                />

                <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-semibold leading-tight">indistractable</h3>
                    <p className="text-sm text-gray-500">Apple Talk &nbsp; | &nbsp; 52:27 mins</p>

                    <div className="flex items-center mt-3 gap-2">
                        <button className="bg-pink-600 text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2">
                            <Play size={16} /> Play
                        </button>
                        <button><List size={20} className="text-gray-600" /></button>
                        <button><Download size={20} className="text-gray-600" /></button>
                        <button><MoreHorizontal size={20} className="text-gray-600" /></button>
                    </div>
                </div>
                <Menubar />
            </div>
        </div>
    )
}

export default page