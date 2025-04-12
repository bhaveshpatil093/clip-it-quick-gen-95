
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Upload, AspectRatio, Play, Layout, Instagram, Youtube, TikTok } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import Header from '@/components/Header';
import VideoUploader from '@/components/VideoUploader';
import { VideoData } from '@/types';
import VideoPlayer from '@/components/VideoPlayer';

interface AspectRatioOption {
  id: string;
  name: string;
  ratio: string;
  icon: React.ReactNode;
  description: string;
}

const AIReframe = () => {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [processing, setProcessing] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState<string>('9:16');
  const [focusPoint, setFocusPoint] = useState<{x: number, y: number}>({x: 50, y: 50});
  const [smartTracking, setSmartTracking] = useState<boolean>(true);
  
  const aspectRatioOptions: AspectRatioOption[] = [
    { 
      id: 'vertical', 
      name: 'Vertical', 
      ratio: '9:16', 
      icon: <TikTok className="h-5 w-5" />, 
      description: 'Perfect for TikTok, Instagram Reels & YouTube Shorts'
    },
    { 
      id: 'square', 
      name: 'Square', 
      ratio: '1:1', 
      icon: <Instagram className="h-5 w-5" />, 
      description: 'Great for Instagram Feed & Facebook'
    },
    { 
      id: 'horizontal', 
      name: 'Horizontal', 
      ratio: '16:9', 
      icon: <Youtube className="h-5 w-5" />, 
      description: 'Standard for YouTube & TV'
    },
    { 
      id: 'cinematic', 
      name: 'Cinematic', 
      ratio: '2.35:1', 
      icon: <Layout className="h-5 w-5" />, 
      description: 'Film-like widescreen format'
    },
  ];
  
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

  const handleFocusChange = (values: number[]) => {
    setFocusPoint({
      x: values[0],
      y: focusPoint.y
    });
  };

  const handleVerticalFocusChange = (values: number[]) => {
    setFocusPoint({
      x: focusPoint.x,
      y: values[0]
    });
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
              AI REFRAME
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
              <span className="gradient-text">Resize any video</span> for every platform in 1 click
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Our AI automatically detects the important content in your video and keeps it in frame, no matter what aspect ratio you choose.
            </p>
          </div>
        </div>
      </section>

      {/* Video Upload Section */}
      <section className="py-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Upload your video</h2>
              <p className="text-muted-foreground">
                Upload your video and our AI will automatically reframe it to your chosen aspect ratio.
              </p>
              
              {!video ? (
                <VideoUploader onVideoSelected={handleVideoSelected} />
              ) : (
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <VideoPlayer 
                      src={video.url}
                      autoPlay={true}
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
                        {processing ? 'Processing...' : 'Reframe Video'} 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Choose target format</h2>
              
              <Tabs defaultValue="vertical">
                <TabsList className="grid grid-cols-4 mb-6">
                  {aspectRatioOptions.map(option => (
                    <TabsTrigger 
                      key={option.id} 
                      value={option.id}
                      onClick={() => setSelectedRatio(option.ratio)}
                    >
                      {option.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {aspectRatioOptions.map(option => (
                  <TabsContent key={option.id} value={option.id} className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-accent/20 p-2 rounded-lg">
                            {option.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{option.ratio} Ratio</h3>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                        </div>
                        
                        <div className="bg-muted aspect-[9/16] rounded-lg relative mx-auto max-w-[220px]">
                          {option.id === 'vertical' && (
                            <div className="aspect-[9/16] h-full rounded-lg border-2 border-accent"></div>
                          )}
                          {option.id === 'square' && (
                            <div className="aspect-[1/1] h-full rounded-lg border-2 border-accent"></div>
                          )}
                          {option.id === 'horizontal' && (
                            <div className="aspect-[16/9] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-accent"></div>
                          )}
                          {option.id === 'cinematic' && (
                            <div className="aspect-[2.35/1] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-accent"></div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-medium mb-4">Focus settings</h3>
                        
                        <div className="flex items-center gap-2 mb-6">
                          <Button
                            variant={smartTracking ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSmartTracking(true)}
                          >
                            Smart Tracking
                          </Button>
                          <Button
                            variant={!smartTracking ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSmartTracking(false)}
                          >
                            Manual Focus
                          </Button>
                        </div>
                        
                        {!smartTracking && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm">Horizontal focus</span>
                                <span className="text-sm text-muted-foreground">{focusPoint.x}%</span>
                              </div>
                              <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}
                                value={[focusPoint.x]}
                                onValueChange={handleFocusChange}
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm">Vertical focus</span>
                                <span className="text-sm text-muted-foreground">{focusPoint.y}%</span>
                              </div>
                              <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}
                                value={[focusPoint.y]}
                                onValueChange={handleVerticalFocusChange}
                              />
                            </div>
                          </div>
                        )}
                        
                        {smartTracking && (
                          <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                            <p className="text-sm">
                              AI will automatically track and keep important subjects in frame
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How AI Reframe works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI technology analyzes your video content to intelligently reframe it for any aspect ratio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Upload your video</h3>
                <p className="text-muted-foreground">Upload any video that you want to reframe for different platforms.</p>
              </div>
            </Card>
            
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <AspectRatio className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Choose target format</h3>
                <p className="text-muted-foreground">Select your desired aspect ratio from vertical, square, horizontal or cinematic.</p>
              </div>
            </Card>
            
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Download reframed video</h3>
                <p className="text-muted-foreground">Our AI intelligently reframes your video and delivers an optimized version ready to publish.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Smart reframing capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI does more than just crop your video - it intelligently adapts to ensure what matters stays in frame
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Subject Detection",
                desc: "AI automatically identifies and tracks people, objects and key elements in your video"
              },
              {
                title: "Smart Tracking",
                desc: "Keeps important subjects centered in the frame throughout the video"
              },
              {
                title: "Multiple Formats",
                desc: "Easily convert between vertical (9:16), square (1:1), horizontal (16:9), and more"
              },
              {
                title: "Manual Controls",
                desc: "Fine-tune the focus point if you need precise control over the framing"
              },
              {
                title: "Frame Preservation",
                desc: "Maintains visual quality without awkward cropping or distortion"
              },
              {
                title: "Batch Processing",
                desc: "Reframe multiple videos at once for efficient content production"
              }
            ].map((feature, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-2 rounded-lg mt-1">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">See AI Reframe in action</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Watch how our AI intelligently adapts videos to different aspect ratios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="bg-muted rounded-lg aspect-[9/16] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-black/30 to-black/10 flex flex-col items-center justify-center">
                <TikTok className="h-8 w-8 mb-2 text-white" />
                <p className="text-white text-sm font-medium">9:16 Vertical</p>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg aspect-[1/1] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-black/30 to-black/10 flex flex-col items-center justify-center">
                <Instagram className="h-8 w-8 mb-2 text-white" />
                <p className="text-white text-sm font-medium">1:1 Square</p>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg aspect-[16/9] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-black/30 to-black/10 flex flex-col items-center justify-center">
                <Youtube className="h-8 w-8 mb-2 text-white" />
                <p className="text-white text-sm font-medium">16:9 Horizontal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to reframe your videos?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start creating content optimized for every platform today
            </p>
            <Button size="lg" className="gap-2">
              Try AI Reframe <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIReframe;
