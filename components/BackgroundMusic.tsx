"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Music, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface BackgroundMusicProps {
  src: string;
  volume?: number; // 0.0 to 1.0
}

const BackgroundMusic = (props: BackgroundMusicProps) => {
  const { src, volume = 0.5 } = props;

  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(volume);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize volume and load audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.load();
  }, [volume, src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      if (isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      updateDuration();
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    if (audio.readyState >= 1) updateDuration();

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() =>
        console.log("Autoplay prevented. User interaction required."),
      );
    }

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.paused ? audio.play() : audio.pause();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setCurrentVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = currentVolume > 0 ? currentVolume : 0.2;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />

      {/* Mini toggle when hidden */}
      {!isVisible && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setIsVisible(true)}
            aria-label="Show music player"
          >
            <Music className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Full Player */}
      {isVisible && (
        <div
          className={cn(
            "fixed bottom-4 right-4 z-50 w-80 sm:w-96 bg-white dark:bg-gray-900/95 backdrop-blur-xs rounded-lg shadow-lg p-4",
            "flex flex-col gap-4",
          )}
        >
          {/* Playback */}
          <div className="flex items-center gap-2">
            <Button size="icon-sm" variant="ghost" onClick={togglePlayPause}>
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>

            <div className="flex-1 gap-1">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleTimeChange}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary
                  border border-[#8d8b62]"
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${
                    (currentTime / duration) * 100
                  }%, hsl(var(--muted)) ${
                    (currentTime / duration) * 100
                  }%, hsl(var(--muted)) 100%)`,
                  height: "8px",
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <Button
              size="icon-sm"
              variant="ghost"
              onClick={() => setIsVisible(false)}
              aria-label="Hide player"
            >
              <X />
            </Button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-2">
            <Button size="icon-sm" variant="ghost" onClick={toggleMute}>
              {isMuted || currentVolume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : currentVolume}
              onChange={handleVolumeChange}
              className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary border border-[#8d8b62]"
              style={{
                background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${
                  (isMuted ? 0 : currentVolume) * 100
                }%, hsl(var(--muted)) ${
                  (isMuted ? 0 : currentVolume) * 100
                }%, hsl(var(--muted)) 100%)`,
              }}
            />

            <span className="w-10 text-xs text-right text-muted-foreground">
              {Math.round((isMuted ? 0 : currentVolume) * 100)}%
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;
