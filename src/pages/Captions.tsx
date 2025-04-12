
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Upload, Captions as CaptionsIcon, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import VideoUploader from '@/components/VideoUploader';
import { VideoData } from '@/types';
import VideoPlayer from '@/components/VideoPlayer';

const CaptionStyle = ({ name, description, active, onClick }: {
  name: string;
  description: string;
  active: boolean;
  onClick: () => void;
}) => (
  <Card 
    className={`p-4 cursor-pointer transition-all ${active ? 'border-accent/80 bg-accent/5' : 'hover:bg-accent/5'}`}
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${active ? 'border-accent' : 'border-muted'}`}>
        {active && <div className="h-2.5 w-2.5 rounded-full bg-accent"></div>}
      </div>
      <div>
        <h3 className="text-base font-medium">{name}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  </Card>
);

const ColorSelector = ({ label, colors, activeColor, onChange }: {
  label: string;
  colors: string[];
  activeColor: string;
  onChange: (color: string) => void;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">{label}</label>
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color}
          className={`h-6 w-6 rounded-full ${activeColor === color ? 'ring-2 ring-offset-2 ring-accent' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  </div>
);

const Captions = () => {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [processing, setProcessing] = useState(false);
  const [captionStyle, setCaptionStyle] = useState<'subtitle' | 'kinetic' | 'minimal'>('kinetic');
  const [textColor, setTextColor] = useState<string>('#FFFFFF');
  const [bgColor, setBgColor] = useState<string>('#000000');
  const [previewTime, setPreviewTime] = useState(5); // seconds into video to preview captions
  
  const textColors = ['#FFFFFF', '#000000', '#F8E71C', '#FF5252', '#4A90E2', '#50E3C2', '#9B87F5'];
  const bgColors = ['#000000', '#FFFFFF', '#ff5252', '#4A90E2', '#50E3C2', '#F8E71C', 'transparent'];
  
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
              ANIMATED CAPTIONS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
              <span className="gradient-text">Add stunning captions</span> to your videos in seconds
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Perfect for creators who want to boost engagement. Our AI generates accurate captions with beautiful animated designs.
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
                Upload your video and our AI will automatically generate captions. You can customize the style, colors, and more.
              </p>
              
              {!video ? (
                <VideoUploader onVideoSelected={handleVideoSelected} />
              ) : (
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <VideoPlayer 
                      src={video.url}
                      startTime={previewTime}
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
                        {processing ? 'Processing...' : 'Generate Captions'} 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Style your captions</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Caption Style</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <CaptionStyle 
                    name="Subtitle" 
                    description="Classic subtitle style" 
                    active={captionStyle === 'subtitle'}
                    onClick={() => setCaptionStyle('subtitle')}
                  />
                  <CaptionStyle 
                    name="Kinetic" 
                    description="Words animate in with motion" 
                    active={captionStyle === 'kinetic'}
                    onClick={() => setCaptionStyle('kinetic')}
                  />
                  <CaptionStyle 
                    name="Minimal" 
                    description="Clean, modern design" 
                    active={captionStyle === 'minimal'}
                    onClick={() => setCaptionStyle('minimal')}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <ColorSelector 
                  label="Text color" 
                  colors={textColors} 
                  activeColor={textColor} 
                  onChange={setTextColor} 
                />
                <ColorSelector 
                  label="Background" 
                  colors={bgColors} 
                  activeColor={bgColor} 
                  onChange={setBgColor} 
                />
              </div>
              
              <Card className="p-4 border-dashed border-2 border-muted bg-muted/10">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Pro Tip:</span> Adding captions can increase viewer engagement by up to 40%
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Add eye-catching captions to your videos in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Upload your video</h3>
                <p className="text-muted-foreground">Upload any video that you want to add captions to.</p>
              </div>
            </Card>
            
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <CaptionsIcon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. AI generates captions</h3>
                <p className="text-muted-foreground">Our AI transcribes your audio and creates accurate captions with proper timing.</p>
              </div>
            </Card>
            
            <Card className="bg-card border-border">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Customize & download</h3>
                <p className="text-muted-foreground">Choose your caption style, colors, and download the enhanced video.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Caption features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our advanced caption technology gives you complete control over your content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "99% Accurate Transcription",
                desc: "AI-powered transcription ensures your captions match what's being said"
              },
              {
                title: "Multiple Languages",
                desc: "Support for over 30 languages with automatic language detection"
              },
              {
                title: "Custom Styling",
                desc: "Choose from various animation styles, colors, and font options"
              },
              {
                title: "Export Options",
                desc: "Download videos with embedded captions or SRT files"
              },
              {
                title: "Edit Text",
                desc: "Make manual adjustments to any part of the transcript"
              },
              {
                title: "Instant Preview",
                desc: "See how your captions look before finalizing the video"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to add captions to your videos?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start creating engaging content with professional captions today
            </p>
            <Button size="lg" className="gap-2">
              Try Animated Captions <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Captions;
