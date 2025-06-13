'use client'
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

export default function SearchPage() {
    const router = useRouter();
    const [notFound, setNotFound] = useState(false);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [defaultSearchData, setDefaultSearchData] = useState({
        rankingSearch: [],
        popularSearch: []
    });

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        const result = await handleSearchApi(e.target.value);
        setDefaultSearchData({
            rankingSearch: result.response.result.result_ranking.podcasts_bucket.contents,
            popularSearch: result.response.result.result_popular.podcasts_bucket.contents
        });
    };

    const clearSearch = () => {
        setSearch("");
    };

    const handleDetail = (conId: number) => {
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
                setLoading(true);
                const result = await handleDefaultSearchApi();
                setDefaultSearchData({
                    rankingSearch: result.response.result.result_ranking.podcasts_bucket.contents,
                    popularSearch: result.response.result.result_popular.podcasts_bucket.contents
                });
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch podcast:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const shimmerArray = Array(5).fill(0);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <RiSearchFill className="w-6 h-6 text-gradient-to-r text-purple-700 text-pink-700" />
                    <h1 className="text-xl font-semibold">Search</h1>
                </div>
                <div className="rounded-full cursor-pointer">
                    <HiOutlineDotsCircleHorizontal className="text-black w-7 h-7" />
                </div>
            </div>

            <div style={{ backgroundColor: "#F5F5F5" }} className="rounded-full px-4 py-2 flex items-center">
                <IoIosSearch className="h-6 w-6 text-gray-500 cursor-pointer mr-1" />
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search"
                    className="w-full px-3 py-2 dark:bg-gray-100 text-black dark:text-black rounded-md outline-none"
                />
                {search && (
                    <X className="h-5 w-5 text-gray-500 cursor-pointer mx-2" onClick={clearSearch} />
                )}
                <Mic className="h-5 w-5 text-gray-500 cursor-pointer" />
            </div>

            {notFound ? <NotFoundPage /> : (
                <>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-md font-semibold">Popular & Trending Authors</h2>
                            {!loading && (
                                <button onClick={() => handleSeeAll1()} className="text-sm text-purple-600 font-semibold cursor-pointer">
                                    See All
                                </button>
                            )}
                        </div>

                        <div
                        style={{
                            scrollbarWidth: 'none',        // Firefox
                            msOverflowStyle: 'none'        // IE 10+
                        }}
                        className="flex gap-4 overflow-x-auto pb-2"
                        >
                            {loading
                                ? shimmerArray.map((_, idx) => (
                                    <div key={idx} className="w-[150px] h-[150px] bg-gray-300 animate-pulse rounded-lg" />
                                ))
                                : defaultSearchData?.rankingSearch?.map((author: any) => (
                                    <Image
                                        key={author.conId}
                                        src={author.imgIrl}
                                        width={150}
                                        height={150}
                                        alt="Author"
                                        className="rounded-lg object-cover cursor-pointer"
                                        onClick={() => handleDetail(author?.conId)}
                                    />
                                ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-md font-semibold">Most Listened Podcasts</h2>
                            {!loading && (
                                <button onClick={() => handleSeeAll2()} className="text-sm text-purple-600 font-semibold cursor-pointer">
                                    See All
                                </button>
                            )}
                        </div>

                        <div className="space-y-4">
                            {loading
                                ? shimmerArray.map((_, idx) => (
                                    <div key={idx} className="flex items-center gap-4 animate-pulse">
                                        <div className="w-[150px] h-[150px] bg-gray-300 rounded-md" />
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 w-3/4 bg-gray-300 rounded" />
                                            <div className="h-3 w-1/2 bg-gray-300 rounded" />
                                            <div className="h-3 w-1/4 bg-gray-300 rounded" />
                                            <div className="flex gap-4 mt-3">
                                                <div className="w-20 h-8 bg-gray-300 rounded" />
                                                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                                                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                                                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : defaultSearchData?.rankingSearch?.map((podcast: any) => (
                                    <div key={podcast.conId} className="flex items-center gap-4">
                                        <Image
                                            src={podcast.imgIrl}
                                            width={150}
                                            height={150}
                                            alt="Podcast"
                                            className="rounded-md object-cover cursor-pointer"
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
                                                <button
                                                    style={{ height: "32px", width: "79px", background: "radial-gradient(92.09% 394.93% at 7.91% 50%, #6B0DFF 0%, #FF6B79 100%)" }}
                                                    onClick={() => handleDetail(podcast?.conId)}
                                                    className="text-white py-1 px-4 rounded-md flex items-center justify-center text-xs gap-x-2 transition hover:opacity-90"
                                                >
                                                    <FaPlay size={12} />
                                                    Play
                                                </button>
                                                <MdOutlinePlaylistAdd className="h-6 w-6 text-gray-500 font-semibold" />
                                                <PiDownloadSimpleDuotone />
                                                <FaEllipsisV className="text-gray-500" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
