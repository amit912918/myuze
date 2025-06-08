'use client'

import React, { useEffect, useState } from 'react';
import {
    ArrowLeft,
    Share2,
    Play,
    Download,
    BookOpen,
    Lightbulb,
    User
} from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import useDashboard from '../../hooks/useDashboard';
import { handlePodcastPaging } from '../../app/api/podcast';

interface PodcastDetail {
    podcast_id: number;
    title: string;
    description: string;
    copyright: string;
    language: string;
    link_uri: string;
    img_remote_uri: string;
    img_local_uri: string;
    img_height: number;
    img_width: number;
    img_type: string;
    added_on: string;
    total_episode: number;
    total_following: number;
    category: string;
    artiste_id: number | null;
    artist_name: string | null;
    is_billable: number;
    ptype: string;
}

interface PodcastEpisodeDetail {
    episode_id: number;
    title: string;
    description: string;
    subtitle: string;
    imgid: number;
    episodetype: string;
    keywords: string;
    episode_seq: number;
    duration: number;
    playback_count: number;
    isexplicit: string;
    stream_uri: string;
    stream_url: string;
    download_url: string;
    length: number;
    img_remote_uri: string;
    img_local_uri: string;
    img_height: number | null;
    img_width: number | null;
    img_type: string | null;
    added_on: string;
    pubdate: string;
    duration_format: string;
    playback_count_format: string;
    player_icon_url: string;
    is_billable: number;
}

const DetailsClient = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const conId = searchParams?.get('conId');

    const { setEpisodeId, detailData, setOpenPlayButton } = useDashboard();
    const [podcastData, setPodcastData] = useState<PodcastDetail>();
    const [episodeData, setEpisodeData] = useState<PodcastEpisodeDetail[]>();
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handlePlayButton = () => {
        setOpenPlayButton(prev => !prev);
    };

    const handleEpisode = (item: PodcastEpisodeDetail) => {
        setEpisodeId(item.episode_id);
        router.push(`/dashboard/podcast?episode_id=${encodeURIComponent(item.episode_id)}`);
    }

    const handleShareClick = async () => {
        const shareUrl = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    url: shareUrl,
                });
            } catch (error) {
                console.error('Sharing failed:', error);
            }
        } else {
            // fallback for unsupported devices
            await navigator.clipboard.writeText(shareUrl);
            alert('Link copied to clipboard!');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await handlePodcastPaging({
                    conId: Number(conId),
                    page: 1,
                    debug: false,
                    test: '1122',
                });
                const podcast_details = result.response.podcast.podcast_details;
                setPodcastData(podcast_details);
                setEpisodeData(result.response.podcast.podcast_episode_details);
            } catch (error) {
                console.error("Failed to fetch podcast:", error);
            }
        };

        fetchData();
    }, [detailData, conId]);

    const renderDescription = () => {
        const description = podcastData?.description || '';
        if (description.length <= 150) return description;

        return showFullDescription
            ? (
                <>
                    {description}
                    <span
                        className="text-blue-500 ml-2 cursor-pointer"
                        onClick={() => setShowFullDescription(false)}
                    >
                        Read Less
                    </span>
                </>
            ) : (
                <>
                    {description.slice(0, 150)}...
                    <span
                        className="text-blue-500 ml-2 cursor-pointer"
                        onClick={() => setShowFullDescription(true)}
                    >
                        Read More
                    </span>
                </>
            );
    };

    return (
        <div className="min-h-screen p-4 max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden w-full max-h-[400px]">
                {podcastData?.img_local_uri ? (
                    <Image
                        src={podcastData?.img_local_uri}
                        alt="Podcast Cover"
                        height={400}
                        width={1000}
                        className="w-full h-[400px] object-cover"
                    />
                ) : (
                    <div
                        role="status"
                        className="w-full h-[400px] bg-gray-300 dark:bg-gray-700 animate-pulse flex items-center justify-center"
                    >
                        <svg
                            className="w-10 h-10 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                        >
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                )}

                <div className="absolute top-4 left-4 text-white">
                    <ArrowLeft
                        onClick={() => router.back()}
                        size={28}
                        className="cursor-pointer"
                    />
                </div>

                <div className="absolute top-4 right-4 text-white">
                    <Share2 onClick={handleShareClick} size={28} className="cursor-pointer" />
                </div>
            </div>

            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">{podcastData?.title}</h2>
                <p className="text-gray-800 font-semibold">{podcastData?.artist_name}</p>
                <p className="text-sm text-gray-500">15 minutes</p>
            </div>

            <div className="flex justify-center gap-1 mt-4 flex-wrap">
                <div className="flex items-center gap-1 px-3 py-1 rounded-md text-sm">
                    <User size={14} /> Self Growth
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-md text-sm">
                    <BookOpen size={14} /> {podcastData?.total_episode} Chapters
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-md text-sm">
                    <Lightbulb size={14} /> 16 Insights
                </div>
            </div>

            <div className="flex justify-between mt-6 gap-3">
                <button className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-purple-200 to-purple-200 text-purple-900 font-semibold flex items-center justify-center gap-2">
                    <Download size={18} /> Download Now
                </button>
                <button
                    onClick={handlePlayButton}
                    className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-purple-800 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Play size={18} /> Play Now
                </button>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-lg">Description</h3>
                <p className="text-sm mt-2">
                    {renderDescription()}
                </p>
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-lg">{podcastData?.total_episode} Chapters</h3>
                {episodeData?.map((item: PodcastEpisodeDetail, index: number) => (
                    <div className="mt-1 bg-gray-100 rounded-xl p-4 flex items-center justify-between" key={index}>
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-purple-700 to-pink-500 p-2 rounded-full">
                                <Play
                                    onClick={() => handleEpisode(item)}
                                    size={20}
                                    className="text-white cursor-pointer"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-black">
                                    {index + 1}. {item?.title}
                                </p>
                                <p className="text-xs text-gray-500">{item?.duration_format} mins</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailsClient;
