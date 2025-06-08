'use client';
import { createContext, useContext, useRef, useState } from 'react';


interface AudioContextType {
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    currentTrack: any;
    setCurrentTrack: (track: any) => void;
    audioRef: React.RefObject<HTMLAudioElement | null>; // fix here
}

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<any>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    return (
        <AudioContext.Provider value={{ isPlaying, setIsPlaying, currentTrack, setCurrentTrack, audioRef }}>
            {children}
            <audio ref={audioRef} />
        </AudioContext.Provider>
    );
};

export default AudioContext;
