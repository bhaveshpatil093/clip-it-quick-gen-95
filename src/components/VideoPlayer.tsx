
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  startTime?: number;
  endTime?: number;
  autoPlay?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  startTime = 0, 
  endTime,
  autoPlay = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video to start time
    if (startTime) {
      video.currentTime = startTime;
    }

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      
      // If we've reached the end time, pause the video
      if (endTime && video.currentTime >= endTime) {
        video.pause();
        setIsPlaying(false);
        video.currentTime = startTime;
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(endTime ? endTime - startTime : video.duration);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [startTime, endTime]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value: number[]) => {
    if (videoRef.current) {
      const newTime = startTime + (value[0] / 100) * (endTime ? endTime - startTime : duration);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0] / 100;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const displayedTime = endTime ? currentTime - startTime : currentTime;
  const progress = duration > 0 ? (displayedTime / duration) * 100 : 0;

  return (
    <div className="video-container bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full"
        playsInline
        autoPlay={autoPlay}
        muted={isMuted}
      />
      
      <div className="relative bg-gradient-to-t from-black/70 to-transparent p-4 -mt-20">
        <div className="flex justify-between items-center mb-2">
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-white hover:bg-white/20 p-2" 
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </Button>
          
          <div className="text-white text-sm font-medium">
            {formatTime(displayedTime)} / {formatTime(duration)}
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-white hover:bg-white/20 p-2" 
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </Button>
            <div className="w-20 hidden sm:block">
              <Slider
                defaultValue={[100]}
                max={100}
                step={1}
                value={[isMuted ? 0 : volume * 100]}
                onValueChange={handleVolumeChange}
                className="h-1"
              />
            </div>
          </div>
        </div>
        
        <Slider
          defaultValue={[0]}
          max={100}
          step={0.1}
          value={[progress]}
          onValueChange={handleSliderChange}
          className="h-1"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
