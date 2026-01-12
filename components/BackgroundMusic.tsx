"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

interface BackgroundMusicProps {
  src: string;
  volume?: number; // 0.0 to 1.0
}

const BackgroundMusic = ({ src, volume = 0.5 }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(volume);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Initialize volume separately and ensure audio loads
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    // Force audio to load metadata
    audio.load();
  }, [volume, src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Function to update duration if available
    const updateDuration = () => {
      if (
        audio.duration &&
        !isNaN(audio.duration) &&
        isFinite(audio.duration)
      ) {
        setDuration(audio.duration);
      }
    };

    // Update duration when metadata is loaded
    const handleLoadedMetadata = () => {
      updateDuration();
    };

    // Also try to get duration on other load events
    const handleLoadedData = () => {
      updateDuration();
    };

    const handleCanPlay = () => {
      updateDuration();
    };

    // Update current time
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      // Also check duration in case it wasn't available earlier
      if (
        audio.duration &&
        !isNaN(audio.duration) &&
        isFinite(audio.duration)
      ) {
        updateDuration();
      }
    };

    // Handle play/pause state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    // Handle ended event (for looping)
    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    // Check if duration is already available
    if (audio.readyState >= 1) {
      updateDuration();
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    // Try to play on mount, but handle autoplay restrictions
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was prevented - this is normal in most browsers
          console.log("Autoplay prevented. User interaction required.");
        });
    }

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [volume]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {
        console.log("Could not play audio");
      });
    } else {
      audio.pause();
    }
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
      audio.volume = currentVolume > 0 ? currentVolume : 0.5;
      setIsMuted(false);
      setCurrentVolume(audio.volume);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        className="hidden"
        aria-label="Background music"
      />

      {/* Music Player UI */}
      <div className="fixed bottom-4 right-4 z-50 w-80 sm:w-96 bg-transparent dark:bg-gray-900/95 backdrop-blur-xs rounded-lg shadow-lg border border-border p-4">
        <div className="space-y-3">
          {/* Play/Pause and Time Controls */}
          <div className="flex items-center gap-3">
            <Button
              onClick={togglePlayPause}
              variant="outline"
              size="icon"
              className="shrink-0"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>

            {/* Time Slider */}
            <div className="flex-1 space-y-1">
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
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <Button
              onClick={toggleMute}
              variant="ghost"
              size="icon-sm"
              className="shrink-0"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
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
            <span className="text-xs text-muted-foreground w-10 text-right">
              {Math.round((isMuted ? 0 : currentVolume) * 100)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;
