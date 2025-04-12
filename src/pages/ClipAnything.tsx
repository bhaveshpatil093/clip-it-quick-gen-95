
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Play, Upload, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import VideoUploader from '@/components/VideoUploader';
import { VideoData } from '@/types';

const ClipAnything = () => {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [processing, setProcessing] = useState(false);
  
  const handleVideoSelected = (videoData: VideoData) => {
    setVideo(videoData);
  };
  
  const handleStartProcessing = () => {
    setProcessing(true);
    // In a real app, this would call an API to process the video
    // For now, we'll just simulate processing with a timeout
    setTimeout(() => {
      setProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container max-w-6xl mx-auto px-4">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              CLIP ANYTHING
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
              <span className="gradient-text">Turn any long video into viral shorts</span> with AI
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Upload your video and let our AI identify the most engaging moments automatically. Create viral shorts in minutes, not hours.
            </p>
          </div>
        </div>
      </section>

      {/* Video Upload Section */}
      <section className="py-10">
        <div className="container max-w-3xl mx-auto px-4">
          {!video ? (
            <VideoUploader onVideoSelected={handleVideoSelected} />
          ) : (
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <video 
                    src={video.url} 
                    className="w-full h-full object-cover" 
                    controls
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium">{video.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {Math.floor(video.duration / 60)}:{Math.floor(video.duration % 60).toString().padStart(2, '0')} minutes
                      </p>
                    </div>
                    <Button 
                      onClick={handleStartProcessing}
                      disabled={processing}
                    >
                      {processing ? 'Processing...' : 'Generate Clips'} 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {processing && (
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="processing-pulse h-12 w-12 rounded-full flex items-center justify-center">
                      <Scissors className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">AI is analyzing your video</h3>
                      <p className="text-sm text-muted-foreground">Finding the most engaging moments...</p>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent animate-pulse rounded-full w-1/3"></div>
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How ClipAnything works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered technology analyzes your videos to create engaging short-form content in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Upload your video</h3>
                <p className="text-muted-foreground">Upload any long-form video content that you want to transform into engaging clips.</p>
              </div>
            </Card>
            
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. AI finds the best moments</h3>
                <p className="text-muted-foreground">Our AI analyzes your content to identify the most engaging segments based on speech, emotion, and content.</p>
              </div>
            </Card>
            
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Get ready-to-post clips</h3>
                <p className="text-muted-foreground">Download the AI-generated clips or further customize them with captions, music, and effects.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent content analysis</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI doesn't just randomly cut your video. It analyzes speech patterns, emotional cues, 
                and visual elements to identify truly engaging moments.
              </p>
              <ul className="space-y-4">
                {['Speech recognition and key point detection', 'Emotional highlight identification', 'Visual engagement analysis'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-lg aspect-video"></div>
            
            <div className="bg-muted rounded-lg aspect-video order-4 md:order-3"></div>
            <div className="order-3 md:order-4">
              <h2 className="text-3xl font-bold mb-6">Ready for all platforms</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get clips optimized for TikTok, Instagram Reels, YouTube Shorts, and more. The right format, 
                every time, no manual resizing needed.
              </p>
              <ul className="space-y-4">
                {['Vertical, square, and horizontal formats', 'Platform-specific aspect ratios', 'Export with one click'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to create viral content?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start transforming your long videos into engaging clips today
            </p>
            <Button size="lg" className="gap-2">
              Try ClipAnything Free <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-accent/20 p-1.5 rounded-lg">
                  <Scissors className="h-4 w-4 text-accent" />
                </div>
                <span className="font-bold">Clip-it-Quick</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                AI-powered video summarization and highlight extraction
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-3">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClipAnything;
