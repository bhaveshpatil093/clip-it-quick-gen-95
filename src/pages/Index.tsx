
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import VideoUploader from '@/components/VideoUploader';
import ProcessingVisualizer from '@/components/ProcessingVisualizer';
import VideoPlayer from '@/components/VideoPlayer';
import HighlightsList from '@/components/HighlightsList';
import { VideoData, ProcessingStatus, Highlight } from '@/types';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2 } from 'lucide-react';

const Index = () => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [processingStatus, setProcessingStatus] = useState<ProcessingStatus>({
    status: 'idle',
    progress: 0,
    message: 'Ready to process your video',
  });
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);

  const handleVideoSelected = (video: VideoData) => {
    setVideoData(video);
    // Start the mock processing flow
    mockProcessingFlow();
  };

  const mockProcessingFlow = () => {
    // Mock the processing flow with timeouts
    setProcessingStatus({
      status: 'uploading',
      progress: 10,
      message: 'Uploading video...',
    });

    setTimeout(() => {
      setProcessingStatus({
        status: 'uploading',
        progress: 40,
        message: 'Almost uploaded...',
      });
    }, 1500);

    setTimeout(() => {
      setProcessingStatus({
        status: 'processing',
        progress: 60,
        message: 'Analyzing video content...',
      });
    }, 3000);

    setTimeout(() => {
      setProcessingStatus({
        status: 'processing',
        progress: 80,
        message: 'Finding key moments...',
      });
    }, 5000);

    setTimeout(() => {
      setProcessingStatus({
        status: 'complete',
        progress: 100,
        message: 'Processing complete!',
      });
      
      // Mock highlights data
      const mockHighlights: Highlight[] = [
        {
          id: '1',
          startTime: 0,
          endTime: 15,
          videoUrl: videoData?.url || '',
          summary: 'Introduction to the main topic with key points about video summarization technology.',
        },
        {
          id: '2',
          startTime: 25,
          endTime: 40,
          videoUrl: videoData?.url || '',
          summary: 'Demonstration of the key feature with explanation of benefits for content creators.',
        },
        {
          id: '3',
          startTime: 50,
          endTime: 65,
          videoUrl: videoData?.url || '',
          summary: 'Conclusion with call to action and summary of main benefits highlighted.',
        },
      ];
      
      setHighlights(mockHighlights);
      toast({
        title: "Processing complete!",
        description: `We've found ${mockHighlights.length} highlights in your video.`,
      });
    }, 6500);
  };

  const handleReset = () => {
    setVideoData(null);
    setProcessingStatus({
      status: 'idle',
      progress: 0,
      message: 'Ready to process your video',
    });
    setHighlights([]);
    setSelectedHighlight(null);
  };

  const handlePlayHighlight = (highlight: Highlight) => {
    setSelectedHighlight(highlight);
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <Header />
      
      <main className="mt-8">
        {!videoData ? (
          <VideoUploader onVideoSelected={handleVideoSelected} />
        ) : processingStatus.status !== 'complete' ? (
          <ProcessingVisualizer status={processingStatus} />
        ) : (
          <div className="space-y-10">
            <div className="flex justify-between items-center">
              <Button variant="ghost" onClick={handleReset}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Process another video
              </Button>
              
              <Button>
                <Share2 className="mr-2 h-4 w-4" /> Share Results
              </Button>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                {selectedHighlight ? 'Highlight Preview' : 'Full Video Preview'}
              </h2>
              <VideoPlayer 
                src={selectedHighlight?.videoUrl || videoData.url} 
                startTime={selectedHighlight?.startTime || 0}
                endTime={selectedHighlight?.endTime}
                autoPlay={!!selectedHighlight}
              />
              
              {selectedHighlight && (
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-medium text-sm">{selectedHighlight.summary}</p>
                </div>
              )}
            </div>
            
            <HighlightsList 
              highlights={highlights} 
              onPlay={handlePlayHighlight}
            />
          </div>
        )}
      </main>
      
      <footer className="mt-20 text-center text-sm text-muted-foreground">
        <p>Clip-it-Quick — AI-powered video summarization and highlight extraction</p>
      </footer>
    </div>
  );
};

export default Index;
