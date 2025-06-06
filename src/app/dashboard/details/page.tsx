'use client'
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Share2, Play, Download, BookOpen, Lightbulb, User } from 'lucide-react';
import Image from 'next/image';
import useDashboard from '../../../hooks/useDashboard';
import { handlePodcastPaging } from '../../api/podcast';
import { useRouter } from 'next/navigation';

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


const PodcastDetail = () => {

    const router = useRouter();
    const { detailData, setOpenPlayButton } = useDashboard();
    const [podcastData, setPodcastData] = useState<PodcastDetail>();
    const [episodeData, setEpisodeData] = useState<PodcastEpisodeDetail[]>();

    const handlePlayButton = () => {
        setOpenPlayButton(prev => !prev);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await handlePodcastPaging({
                    conId: detailData?.conId,
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
    }, [detailData]);

    return (
        <div className="min-h-screen p-4 max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
                <Image
                    src={detailData?.imgIrl}
                    alt="The Climate Book"
                    height={1000}
                    width={1000}
                    className="object-contain"
                />
                <div className="absolute top-4 left-4 rounded-full p-1">
                    <ArrowLeft onClick={() => router.back()} size={20} className='dark:text-white cursor-pointer' />
                </div>
                <div className="absolute top-4 right-4 rounded-full p-1">
                    <Share2 size={20} className='dark:text-white' />
                </div>
            </div>

            {/* Book Info */}
            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">{podcastData?.title}</h2>
                <p className="text-gray-600">Greta Thunberg</p>
                <p className="text-sm text-gray-500">15 minutes</p>
            </div>

            {/* Tags */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
                <div className="flex items-center gap-1 px-3 py-1 rounded-md text-black dark:text-white text-sm">
                    <User size={14} /> Self Growth
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-md text-black dark:text-white text-sm">
                    <BookOpen size={14} /> {podcastData?.total_episode} Chapters
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-md text-black dark:text-white text-sm">
                    <Lightbulb size={14} /> 16 Insights
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6 gap-3">
                <button className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-purple-200 to-purple-200 text-purple-900 font-semibold flex items-center justify-center gap-2">
                    <Download size={18} /> Download Now
                </button>
                <button onClick={handlePlayButton} className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-purple-800 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer">
                    <Play size={18} /> Play Now
                </button>
            </div>

            {/* Description */}
            <div className="mt-6">
                <h3 className="font-semibold text-lg text-black dark:text-white">Description</h3>
                <p className="text-sm text-black dark:text-white mt-2">
                    We still have time to change the world. From Greta Thunberg, the world’s leading climate activist,
                    comes the essential handbook for making it happen...
                </p>
            </div>

            {/* Chapters */}
            <div className="mt-6">
                <h3 className="font-semibold text-lg">{podcastData?.total_episode} Chapters</h3>
                {episodeData?.map((item: PodcastEpisodeDetail, index: number) => <div className="mt-1 bg-gray-100 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-purple-700 to-pink-500 p-2 rounded-full">
                            <Play size={20} className="text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-black">{index + 1}. {item?.title}</p>
                            <p className="text-xs text-gray-500">{item?.duration_format} mins</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default PodcastDetail
