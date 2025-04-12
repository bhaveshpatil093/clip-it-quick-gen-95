
import React, { useState } from 'react';
import { Play, Plus, Trash, ChevronDown, Copy, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const EditorTimeline: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 60; // Seconds
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="flex flex-col w-full border-t">
      <div className="flex items-center justify-between p-2 border-b bg-background">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
            <Play size={14} />
          </Button>
          <span className="text-xs font-medium">{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="h-8">
            <Scissors size={14} className="mr-1" />
            <span>Split</span>
          </Button>
          <Button size="sm" variant="ghost" className="h-8">
            <Copy size={14} className="mr-1" />
            <span>Duplicate</span>
          </Button>
          <Button size="sm" variant="ghost" className="h-8 text-destructive hover:text-destructive">
            <Trash size={14} className="mr-1" />
            <span>Delete</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8">
            <Plus size={14} className="mr-1" />
            <span>Add Media</span>
          </Button>
        </div>
      </div>
      
      <div className="p-2">
        <Slider
          value={[currentTime]}
          max={duration}
          step={0.1}
          onValueChange={(values) => setCurrentTime(values[0])}
          className="cursor-pointer"
        />
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        <div className="flex items-center h-12 mb-2 relative">
          <div className="w-32 text-xs font-medium p-2 border-r">Video</div>
          <div className="flex-1 h-full bg-accent/10 rounded-md">
            <div 
              className="absolute top-0 left-32 h-12 w-1/3 bg-primary/20 rounded-md border border-primary/40"
              style={{ left: `calc(32px + ${(currentTime / duration) * 100}%)` }}
            />
          </div>
        </div>
        
        <div className="flex items-center h-12 mb-2 relative">
          <div className="w-32 text-xs font-medium p-2 border-r">Audio</div>
          <div className="flex-1 h-full bg-accent/10 rounded-md">
            <div 
              className="absolute top-0 left-32 h-12 w-1/2 bg-blue-400/20 rounded-md border border-blue-400/40"
              style={{ left: `calc(32px + ${(currentTime / duration) * 80}%)` }}
            />
          </div>
        </div>
        
        <div className="flex items-center h-12 mb-2 relative">
          <div className="w-32 text-xs font-medium p-2 border-r">Text</div>
          <div className="flex-1 h-full bg-accent/10 rounded-md">
            <div 
              className="absolute top-0 left-32 h-12 w-1/4 bg-green-400/20 rounded-md border border-green-400/40"
              style={{ left: `calc(32px + ${(currentTime / duration) * 40}%)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorTimeline;
