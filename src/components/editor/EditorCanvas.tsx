
import React from 'react';
import { Maximize, ZoomIn, ZoomOut, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const EditorCanvas: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="text-lg font-medium">Untitled Project</div>
        <div className="flex items-center gap-2">
          <Button>Export</Button>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center bg-accent/10 relative">
        {/* Video preview container with 16:9 aspect ratio */}
        <div className="relative w-2/3 aspect-video bg-black rounded-md overflow-hidden shadow-lg">
          {/* Placeholder for video content */}
          <div className="absolute inset-0 flex items-center justify-center text-white/50">
            <p>Drop media or click Add Media to get started</p>
          </div>
        </div>
        
        {/* Canvas controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <Button variant="ghost" size="icon">
            <ZoomOut size={18} />
          </Button>
          <Slider 
            defaultValue={[100]} 
            max={200} 
            step={1} 
            className="w-32"
          />
          <Button variant="ghost" size="icon">
            <ZoomIn size={18} />
          </Button>
          <div className="h-6 w-px bg-border mx-1" />
          <Button variant="ghost" size="icon">
            <Volume2 size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <Maximize size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorCanvas;
