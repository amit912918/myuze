'use client'
import { createContext, useRef, useState, useEffect } from 'react';
import useDashboard from '../hooks/useDashboard';

interface AudioContextType {
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    setAudioSrc: (value: any) => void;
    currentTrack: any;
    setCurrentTrack: (track: any) => void;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    handlePlayPause: (episodeData: any) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {

    const { setOpenPlayButton } = useDashboard();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<any>(null);
    const [audioSrc, setAudioSrc] = useState<string>("");
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Example: set audioSrc from localStorage (adjust as needed)
    // useEffect(() => {
    //     const data = localStorage.getItem('seeAllData');
    //     if (data) {
    //         const parsed = JSON.parse(data);
    //         if (parsed?.stream_url) setAudioSrc(parsed.stream_url);
    //     }
    // }, []);

    const handlePlayPause = (episodeData: any) => {
        if (episodeData.is_billable === 2) {
            confirm()
            return;
        }

        const audio = audioRef.current;
        console.log(audio, "audio")
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setOpenPlayButton(false);
        } else {
            audio.play();
            setOpenPlayButton(true);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <AudioContext.Provider value={{
            isPlaying,
            setIsPlaying,
            currentTrack,
            setCurrentTrack,
            audioRef,
            handlePlayPause,
            setAudioSrc
        }}>
            {children}
            <audio ref={audioRef} src={audioSrc || "audio"} preload="metadata" />
        </AudioContext.Provider>
    );
};

export default AudioContext;
