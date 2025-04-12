
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Play, Clock } from 'lucide-react';
import { Highlight } from '@/types';
import VideoPlayer from './VideoPlayer';

interface HighlightsListProps {
  highlights: Highlight[];
  onPlay: (highlight: Highlight) => void;
}

const HighlightsList: React.FC<HighlightsListProps> = ({ highlights, onPlay }) => {
  const formatDuration = (start: number, end: number) => {
    const duration = end - start;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Highlights ({highlights.length})</h2>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Download All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((highlight) => (
          <Card key={highlight.id} className="highlight-card overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-muted overflow-hidden">
                {highlight.thumbnail ? (
                  <img 
                    src={highlight.thumbnail} 
                    alt={`Highlight at ${highlight.startTime}`} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Play className="h-10 w-10 text-muted-foreground opacity-50" />
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {formatDuration(highlight.startTime, highlight.endTime)}
              </div>
            </div>
            
            <CardContent className="p-4">
              <p className="text-sm line-clamp-2 mb-3">{highlight.summary}</p>
              
              <div className="flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => onPlay(highlight)}
                >
                  <Play className="h-3 w-3 mr-1" /> Play
                </Button>
                
                <Button variant="ghost" size="sm" className="text-xs">
                  <Download className="h-3 w-3 mr-1" /> Save
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HighlightsList;
