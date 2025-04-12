
import React, { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Video, FileVideo } from 'lucide-react';
import { VideoData } from '@/types';

interface VideoUploaderProps {
  onVideoSelected: (video: VideoData) => void;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ onVideoSelected }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if it's a video file
    if (!file.type.startsWith('video/')) {
      alert('Please upload a video file.');
      return;
    }

    const videoUrl = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.src = videoUrl;
    
    video.onloadedmetadata = () => {
      const videoData: VideoData = {
        file,
        url: videoUrl,
        duration: video.duration,
        name: file.name
      };
      onVideoSelected(videoData);
    };
  };

  return (
    <Card className={`border-2 border-dashed ${dragActive ? 'border-accent' : 'border-muted'} transition-colors`}>
      <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
        <div 
          onDragEnter={handleDrag} 
          onDragLeave={handleDrag} 
          onDragOver={handleDrag} 
          onDrop={handleDrop} 
          className="w-full h-full flex flex-col items-center justify-center gap-6 py-12"
        >
          <div className={`p-6 rounded-full ${dragActive ? 'bg-accent/20' : 'bg-muted'} transition-colors`}>
            <FileVideo className="w-12 h-12 text-accent" />
          </div>
          
          <div className="text-center max-w-sm">
            <h3 className="text-xl font-semibold mb-2">Upload your video</h3>
            <p className="text-muted-foreground mb-4">
              Drag and drop your video file here, or click to browse
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" className="relative">
                <input 
                  id="video-upload" 
                  type="file" 
                  accept="video/*" 
                  onChange={handleChange} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="mr-2 h-4 w-4" /> Select video
              </Button>
              <Button variant="secondary">
                <Video className="mr-2 h-4 w-4" /> Use sample video
              </Button>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground mt-4">
            Supported formats: MP4, WebM, MOV, AVI (max 200MB)
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoUploader;
