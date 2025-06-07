'use client'
// components/SearchPage.js
import { FaPlay, FaEllipsisV } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import NotFoundPage from "../../../components/dashboard/NotFound";
import { RiSearchFill } from "react-icons/ri";
import { Mic, X } from "lucide-react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { PiDownloadSimpleDuotone } from "react-icons/pi";
import { handleDefaultSearchApi, handleSearchApi } from "../../api/search";
import { useRouter } from "next/navigation";

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

    const router = useRouter();
    const [notFound, setNotFound] = useState(false);
    const [search, setSearch] = useState("");
    const [defaultSearchData, setDefaultSearchData] = useState({
        rankingSearch: [],
        popularSearch: []
    });
    const [searchData, setSearchData] = useState({
        rankingSearch: [],
        popularSearch: []
    });

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // setNotFound(true);
        setSearch(e.target.value);
        const result = await handleSearchApi(e.target.value);
        console.log(result.response.result.result_popular.podcasts_bucket.contents, "result.response.result.result_ranking.podcasts_bucket.contents");
        setDefaultSearchData({
            rankingSearch: result.response.result.result_ranking.podcasts_bucket.contents,
            popularSearch: result.response.result.result_popular.podcasts_bucket.contents
        })
    };

    const clearSearch = () => {
        setSearch("");
    }; const handleDetail = (conId: number) => {
        router.push(`/dashboard/details?conId=${encodeURIComponent(conId)}`);
    };

    const handleSeeAll1 = () => {
        localStorage.setItem('seeAllData', JSON.stringify(defaultSearchData?.rankingSearch));
        router.push(`/dashboard/seeall?heading=${encodeURIComponent("Ranking Podcast")}`);
    }

    const handleSeeAll2 = () => {
        localStorage.setItem('seeAllData', JSON.stringify(defaultSearchData?.popularSearch));
        router.push(`/dashboard/seeall?heading=${encodeURIComponent("Popular Podcast")}`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await handleDefaultSearchApi();
                console.log(result.response.result.result_popular.podcasts_bucket.contents, "result.response.result.result_ranking.podcasts_bucket.contents");
                setDefaultSearchData({
                    rankingSearch: result.response.result.result_ranking.podcasts_bucket.contents,
                    popularSearch: result.response.result.result_popular.podcasts_bucket.contents
                })
            } catch (error) {
                console.error("Failed to fetch podcast:", error);
            }
        };
        fetchData();
    }, [])

    return (
        <div className="w-[400px] border border-gray-200 my-8 rounded-lg mx-auto p-4 space-y-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {/* <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" /> */}
                    <RiSearchFill
                        className="w-6 h-6 text-gradient-to-r text-purple-700 text-pink-700"
                    />
                    <h1 className="text-xl font-semibold">Search</h1>
                </div>
                <div className="rounded-full cursor-pointer">
                    <HiOutlineDotsCircleHorizontal className="text-black w-7 h-7" />
                </div>
            </div>

            <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
                <IoIosSearch className="h-6 w-6 text-gray-500 cursor-pointer mr-1" />
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search"
                    className="bg-transparent outline-none w-full"
                />

                {/* Show cross only when input has value */}
                {search && (
                    <X
                        className="h-5 w-5 text-gray-500 cursor-pointer mx-2"
                        onClick={clearSearch}
                    />
                )}

                <Mic className="h-5 w-5 text-gray-500 cursor-pointer" />
            </div>


            {notFound ? <NotFoundPage /> : (<><div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-md font-semibold">Popular & Trending Authors</h2>
                    <button onClick={() => handleSeeAll1()} className="text-sm text-purple-600 font-semibold cursor-pointer">See All</button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {defaultSearchData?.rankingSearch?.map((author: any) => (
                        <Image
                            key={author.conId}
                            src={author.imgIrl}
                            width={200}
                            height={200}
                            alt="Author"
                            className="w-24 h-24 rounded-lg object-cover cursor-pointer"
                            onClick={() => handleDetail(author?.conId)}
                        />
                    ))}
                </div>
            </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-md font-semibold">Most Listened Podcasts</h2>
                        <button onClick={() => handleSeeAll2()} className="text-sm text-purple-600 font-semibold cursor-pointer">See All</button>
                    </div>
                    <div className="space-y-4">
                        {defaultSearchData?.rankingSearch?.map((podcast: any) => (
                            <div key={podcast.conId} className="flex items-center gap-4">
                                <Image
                                    src={podcast.imgIrl}
                                    width={200}
                                    height={200}
                                    alt="Podcast"
                                    className="w-40 h-40 rounded-md object-cover cursor-pointer"
                                    onClick={() => handleDetail(podcast?.conId)}
                                />
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold leading-snug">
                                        {podcast.conName}
                                    </h3>
                                    <p className="text-xs text-gray-500">{podcast.author || "author"}</p>
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <span>{podcast.duration || "00:00"}</span>
                                    </div>
                                    <div className="flex items-center gap-5 mt-2">
                                        {/* <button className="bg-purple-600 text-white text-xs px-4 py-1 rounded-full flex items-center gap-2"> */}
                                        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-1 px-4 rounded-md flex items-center justify-center text-xs gap-x-2 transition hover:opacity-90">
                                            <FaPlay size={12} />
                                            Play
                                        </button>
                                        {/* <FaListUl className="h-6 w-6 text-gray-500" /> */}
                                        <MdOutlinePlaylistAdd className="h-6 w-6 text-gray-500 font-semibold" />
                                        <PiDownloadSimpleDuotone />
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
