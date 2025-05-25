'use client';

import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

type NowPlayingProps = {
    title: string;
    artist: string;
    image: string;
};

const NowPlaying: React.FC<NowPlayingProps> = ({ title, artist, image }) => {
    return (
        <div className="fixed bottom-18 left-1/2 transform -translate-x-1/2 w-[400px] m-auto bg-white shadow-xl rounded-xl p-3 flex items-center justify-between z-50">
            <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                    <Image
                        src={`/images/${image}`}
                        alt={title}
                        fill
                        sizes="48px"
                        className="object-cover"
                    />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-semibold text-black truncate w-[150px]">{title}</h3>
                    <p className="text-xs text-gray-500">{artist}</p>
                </div>
            </div>
            <div>
                <button className="p-3 rounded-full bg-gradient-to-r from-[#6B0DFF] to-[#FF6B79] shadow-md">
                    <FaPlay className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default NowPlaying;
