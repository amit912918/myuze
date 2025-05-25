'use client'
// components/SearchPage.js
import { FaPlay, FaEllipsisV, FaListUl } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import NotFoundPage from "../../../components/dashboard/NotFound";

const authors = [
    { id: 1, img: "/images/s1.png" },
    { id: 2, img: "/images/s2.png" },
    { id: 3, img: "/images/search2.png" },
];

const podcasts = [
    {
        id: 1,
        img: "/images/search1.png",
        title: "938: Tom Wright | Billion Dollar Whale",
        author: "Planet Money",
        duration: "47:55 mins",
    },
    {
        id: 2,
        img: "/images/search2.png",
        title: "875: Should I Marry My Dying Girlfriend? | Feedback Friday",
        author: "Scott Adams",
        duration: "53:48 mins",
    },
];

export default function SearchPage() {

    const [notFound, setNotFound] = useState(false);
    const handleSearch = () => {
        setNotFound(true);
    }

    return (
        <div className="w-[400px] border border-gray-200 my-8 rounded-lg mx-auto p-4 space-y-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    <h1 className="text-xl font-semibold">Search</h1>
                </div>
                <button className="text-2xl text-gray-500">•••</button>
            </div>

            <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search"
                    className="bg-transparent outline-none w-full"
                />
            </div>

            {notFound ? <NotFoundPage /> : (<><div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-md font-semibold">Popular & Trending Authors</h2>
                    <button className="text-sm text-purple-600 font-semibold">See All</button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {authors.map((author) => (
                        <Image
                            key={author.id}
                            src={author.img}
                            width={200}
                            height={200}
                            alt="Author"
                            className="w-24 h-24 rounded-lg object-cover"
                        />
                    ))}
                </div>
            </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-md font-semibold">Most Listened Podcasts</h2>
                        <button className="text-sm text-purple-600 font-semibold">See All</button>
                    </div>
                    <div className="space-y-4">
                        {podcasts.map((podcast) => (
                            <div key={podcast.id} className="flex items-center gap-4">
                                <Image
                                    src={podcast.img}
                                    width={200}
                                    height={200}
                                    alt="Podcast"
                                    className="w-40 h-40 rounded-md object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold leading-snug">
                                        {podcast.title}
                                    </h3>
                                    <p className="text-xs text-gray-500">{podcast.author}</p>
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <span>{podcast.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-6 mt-2">
                                        <button className="bg-purple-600 text-white text-xs px-4 py-1 rounded-full flex items-center gap-2">
                                            <FaPlay size={10} />
                                            Play
                                        </button>
                                        <FaListUl className="text-gray-500" />
                                        <FaEllipsisV className="text-gray-500" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div></>)}
        </div>
    );
}
