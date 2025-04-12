
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  Sparkles, 
  Scissors, 
  Share2,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container max-w-6xl mx-auto px-4">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How <span className="gradient-text">Clip-it-Quick</span> Works
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Transform long videos into engaging clips with our AI-powered platform in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-muted/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 relative">
            {/* Connecting line behind the steps */}
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40"></div>
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 mb-6 bg-muted rounded-full flex items-center justify-center z-10 ring-4 ring-background shadow-lg">
                <Upload className="h-8 w-8 text-accent" />
              </div>
              <div className="w-12 h-12 absolute -top-6 -right-6 animate-pulse opacity-20 bg-accent rounded-full blur-xl"></div>
              <h3 className="text-xl font-bold mb-3">Upload Video</h3>
              <p className="text-center text-muted-foreground">
                Start by uploading your video to our platform. We support all common formats and large file sizes.
              </p>
              <div className="mt-6 pt-4">
                <p className="text-sm text-muted-foreground font-medium">Compatible formats</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">MP4</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">MOV</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">AVI</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">MKV</span>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 mb-6 bg-muted rounded-full flex items-center justify-center z-10 ring-4 ring-background shadow-lg">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <div className="w-12 h-12 absolute -top-6 -left-6 animate-pulse opacity-20 bg-primary rounded-full blur-xl"></div>
              <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
              <p className="text-center text-muted-foreground">
                Our AI automatically identifies the most engaging moments in your video based on content and pacing.
              </p>
              <div className="mt-6 pt-4">
                <p className="text-sm text-muted-foreground font-medium">What our AI detects</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Key moments</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Emotional peaks</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Action sequences</span>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 mb-6 bg-muted rounded-full flex items-center justify-center z-10 ring-4 ring-background shadow-lg">
                <Scissors className="h-8 w-8 text-accent" />
              </div>
              <div className="w-12 h-12 absolute -top-6 -right-6 animate-pulse opacity-20 bg-accent rounded-full blur-xl"></div>
              <h3 className="text-xl font-bold mb-3">Clip Generation</h3>
              <p className="text-center text-muted-foreground">
                Choose from AI-suggested clips or customize them in our intuitive editor with captions and effects.
              </p>
              <div className="mt-6 pt-4">
                <p className="text-sm text-muted-foreground font-medium">Customization options</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Trim points</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Auto captions</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Visual effects</span>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 mb-6 bg-muted rounded-full flex items-center justify-center z-10 ring-4 ring-background shadow-lg">
                <Share2 className="h-8 w-8 text-accent" />
              </div>
              <div className="w-12 h-12 absolute -top-6 -left-6 animate-pulse opacity-20 bg-primary rounded-full blur-xl"></div>
              <h3 className="text-xl font-bold mb-3">Share Everywhere</h3>
              <p className="text-center text-muted-foreground">
                Export your clips in multiple formats optimized for different social platforms in one click.
              </p>
              <div className="mt-6 pt-4">
                <p className="text-sm text-muted-foreground font-medium">Platform-ready formats</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">TikTok</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Instagram</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">YouTube</span>
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Smart Content Analysis</h2>
              <p className="text-muted-foreground mb-4">
                Our AI technology analyzes your video content to identify the most engaging moments that will resonate with your audience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <p className="text-sm">Content-aware detection finds moments with high engagement potential</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <p className="text-sm">Audio analysis identifies speech patterns, music beats, and emotional cues</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <p className="text-sm">Visual detection finds scene changes, action sequences, and expressive moments</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent Clip Editing</h2>
              <p className="text-muted-foreground mb-4">
                Our intuitive editor makes it easy to refine AI-generated clips with professional editing tools that require no technical expertise.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Scissors className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <p className="text-sm">Precise timing controls for perfect clip start and end points</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Scissors className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <p className="text-sm">Auto-caption generation with customizable text styles and animations</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Scissors className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <p className="text-sm">One-click aspect ratio adjustment for platform-specific formatting</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to create engaging clips?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of content creators who use Clip-it-Quick to save time and maximize engagement
            </p>
            <Button size="lg" className="gap-2">
              <Link to="/editor" className="text-white">
                Try Clip-it-Quick Free <ArrowRight className="h-4 w-4" />
              </Link>
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
          
          <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Clip-it-Quick. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
