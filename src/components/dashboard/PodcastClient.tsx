"use client";
import { useEffect, useRef, useState } from "react";
import { FaBackward, FaForward, FaPlay, FaPause } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdArrowBack } from "react-icons/md";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Clock3, History, Share2, MoreVertical, Download } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dialog } from 'primereact/dialog';
import { MdSpeed } from "react-icons/md"; // Another good speed icon
import useDashboard from "../../hooks/useDashboard";
import { getEpisodeDetail } from "../../app/api/podcast";
import { useSearchParams } from "next/navigation";
import { useAudio } from "../../hooks/useAudio";

interface Episode {
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
    img_height: number;
    img_width: number;
    img_type: string;
    duration_format: string;
    playback_count_format: string;
    added_on: string;
    pubdate: string;
    player_icon_url: string;
    is_billable: number;
}

const defaultEpisode: Episode = {
    episode_id: 0,
    title: "",
    description: "",
    subtitle: "",
    imgid: 0,
    episodetype: "",
    keywords: "",
    episode_seq: 0,
    duration: 0,
    playback_count: 0,
    isexplicit: "",
    stream_uri: "",
    stream_url: "",
    download_url: "",
    length: 0,
    img_remote_uri: "",
    img_local_uri: "",
    img_height: 0,
    img_width: 0,
    img_type: "",
    duration_format: "",
    playback_count_format: "",
    added_on: "",
    pubdate: "",
    player_icon_url: "",
    is_billable: 0,
};

export default function PodcastClient() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const episode_id = searchParams?.get('episode_id');

    const { audioRef, isPlaying, handlePlayPause, setAudioSrc } = useAudio();
    const [episodeData, setEpisodeData] = useState<Episode>(defaultEpisode);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [timer, setTimer] = useState(5);
    const [showSpeedDialog, setShowSpeedDialog] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    // const audioRef = useRef<HTMLAudioElement>(null);
    const toast = useRef<any>(null);

    const [showSleepTimer, setShowSleepTimer] = useState(false);

    const handleClockClick = () => {
        setShowSleepTimer(true);
    };

    const handleShareClick = async () => {
        const shareUrl = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: episodeData.title,
                    text: episodeData.subtitle || 'Check out this podcast!',
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

    const handleSpeedChange = () => {
        const nextRate = playbackRate === 2 ? 1 : playbackRate + 0.5;
        setPlaybackRate(nextRate);
    };


    const confirm = () => {
        confirmDialog({
            position: "bottom",
            message: (
                <div className="bg-white rounded-3xl text-center">
                    <div className="w-[60px] h-[60px] m-auto">
                        <Image
                            width={200}
                            height={200}
                            className="w-full h-full"
                            src="/images/subscriptionLogo.png"
                            alt="Subscription Logo"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-purple-600 mt-4">
                        StoryStream Pro
                    </h2>
                    <p className="text-lg font-bold text-gray-900 my-3">
                        Unlock All Shows & Books
                        <br />
                        with StoryStream Pro
                    </p>
                    <div className="border border-gray-200"></div>
                    <p className="text-gray-600 mt-3">
                        Subscribe now to enjoy Unlimited Access
                    </p>
                    <button className="bg-gradient-to-r mt-4 from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl text-lg font-medium w-full transition hover:opacity-90">
                        Subscribe Now ({timer} Sec)
                    </button>
                    <div
                        className="text-sm text-gray-600 mt-2 cursor-pointer hover:underline"
                        onClick={() => toast.current?.hide()}
                    >
                        &larr; I’ll try this later, take me back
                    </div>
                </div>
            ),
            footer: <></>,
        });
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.playbackRate = playbackRate;
        }
    }, [playbackRate, audioRef]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getEpisodeDetail(Number(episode_id));
                setEpisodeData(result.response.podcast.podcast_episode_details[0]);
                localStorage.setItem('seeAllData', JSON.stringify(result.response.podcast.podcast_episode_details[0]));
                setAudioSrc(result.response.podcast.podcast_episode_details[0]?.stream_url);
            } catch (error) {
                console.error("Failed to fetch podcast:", error);
            }
        };
        fetchData();
    }, [episode_id, setAudioSrc]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };

        audio.addEventListener("timeupdate", updateTime);
        return () => {
            audio.removeEventListener("timeupdate", updateTime);
        };
    }, [audioRef]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <main className="flex flex-col items-center justify-center border border-gray-200 rounded-lg min-h-screen p-4">
            <ConfirmDialog />
            {/* <audio ref={audioRef} src={JSON.parse(localStorage.getItem('seeAllData') || "")?.stream_url || "audio"} preload="metadata" /> */}
            <div className="w-full flex items-center justify-between mb-4">
                <button>
                    <MdArrowBack onClick={() => router.back()} className="text-2xl cursor-pointer" />
                </button>
                <h1 className="font-semibold text-lg text-black dark:text-white">
                    Talking to Strangers
                </h1>
                <button>
                    <HiOutlineDotsVertical className="text-2xl" />
                </button>
            </div>

            <div className="w-full rounded-xl overflow-hidden shadow-lg">
                {/* {episodeData.img_local_uri && (
                    <Image
                        src={episodeData?.img_local_uri || '/images/download.png'}
                        width={200}
                        height={200}
                        alt="Cover"
                        className="w-full"
                    />
                )} */}
                {episodeData?.img_local_uri ? (
                    <Image
                        src={episodeData.img_local_uri}
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
            </div>

            <div className="text-center mt-4">
                <h2 className="font-bold text-lg text-black dark:text-white">
                    {episodeData.title || "No title"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-white">{episodeData?.subtitle}</p>
            </div>

            <div className="w-full max-w-sm mt-6">
                <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    value={currentTime}
                    className="w-full accent-purple-500"
                    onChange={(e) => {
                        const newTime = parseFloat(e.target.value);
                        if (audioRef.current) {
                            audioRef.current.currentTime = newTime;
                        }
                        setCurrentTime(newTime);
                    }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            <div className="flex items-center justify-between w-full max-w-sm mt-6 px-6">
                <button>
                    <FaBackward className="text-2xl" />
                </button>
                <button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full text-white shadow-lg"
                    onClick={() => handlePlayPause(episodeData)}
                >
                    {isPlaying ? (
                        <FaPause className="text-2xl" />
                    ) : (
                        <FaPlay className="text-2xl" />
                    )}
                </button>
                <button>
                    <FaForward className="text-2xl" />
                </button>
            </div>

            <div className="w-full flex justify-around items-center py-3 mt-6">
                {/* <History className="w-5 h-5 text-gray-600 cursor-pointer" /> */}
                <MdSpeed
                    className="w-5 h-5 text-gray-600 cursor-pointer"
                    onClick={() => setShowSpeedDialog(true)}
                />
                <Dialog
                    header="Playback Speed"
                    visible={showSpeedDialog}
                    onHide={() => setShowSpeedDialog(false)}
                    style={{ width: '300px' }}
                    modal
                >
                    <div className="flex flex-col gap-3">
                        {[0.5, 1, 1.5, 2].map((rate) => (
                            <button
                                key={rate}
                                onClick={() => {
                                    setPlaybackRate(rate);
                                    if (audioRef.current) {
                                        audioRef.current.playbackRate = rate;
                                    }
                                    setShowSpeedDialog(false);
                                }}
                                className={`py-2 px-4 rounded-md text-white ${playbackRate === rate ? "bg-purple-600" : "bg-gray-400"
                                    }`}
                            >
                                {rate}x
                            </button>
                        ))}
                    </div>
                </Dialog>

                <Clock3
                    className="w-5 h-5 text-gray-600 cursor-pointer"
                    onClick={handleClockClick}
                />

                <Dialog
                    visible={showSleepTimer}
                    onHide={() => setShowSleepTimer(false)}
                    header="Set Sleep Timer"
                    className="w-80"
                    modal
                >
                    <div className="flex flex-col gap-2">
                        <button
                            className="bg-purple-500 text-white py-2 rounded"
                            onClick={() => {
                                setTimer(15);
                                setShowSleepTimer(false);
                                // Optional: Add functionality to pause audio after 15 minutes
                            }}
                        >
                            15 Minutes
                        </button>
                        <button
                            className="bg-purple-500 text-white py-2 rounded"
                            onClick={() => {
                                setTimer(30);
                                setShowSleepTimer(false);
                            }}
                        >
                            30 Minutes
                        </button>
                    </div>
                </Dialog>

                <Share2
                    className="w-5 h-5 text-gray-600 cursor-pointer"
                    onClick={handleShareClick}
                />
                <Download className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>
        </main>
    );
}
