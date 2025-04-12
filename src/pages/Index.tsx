
import React from 'react';
import { ArrowRight, Check, Play, ClipboardCheck, FastForward, PieChart, Users, Scissors } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Index = () => {
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
              AI-POWERED VIDEO SUMMARIZATION
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
              <span className="gradient-text">1 long video, 10 viral clips.</span> Create 10x faster.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Upload your video and let our AI find the key moments. Save hours of editing time and create shareable highlights instantly.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Try it free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                See demo <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-video">
              <div className="absolute inset-0 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Video thumbnails positioned similar to the reference */}
                  <div className="absolute left-[10%] bottom-[15%] w-[35%] aspect-[9/16] rounded-lg overflow-hidden bg-card border border-border shadow-lg transform -rotate-6">
                    <div className="absolute top-2 right-2 bg-primary/90 text-xs text-primary-foreground px-2 py-0.5 rounded">
                      Auto B-Rolls
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-muted to-background"></div>
                  </div>
                  <div className="absolute right-[10%] bottom-[5%] w-[40%] aspect-[9/16] rounded-lg overflow-hidden bg-card border border-border shadow-xl">
                    <div className="absolute top-2 right-2 bg-accent/90 text-xs text-accent-foreground px-2 py-0.5 rounded">
                      Key moments
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-muted to-background"></div>
                  </div>
                  <div className="absolute right-[25%] bottom-[40%] w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse">
                    <Play className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">TRUSTED BY CONTENT CREATORS WORLDWIDE</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-6 w-24 bg-muted/40 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Create social-ready clips <span className="text-accent">instantly</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <ClipboardCheck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI analysis</h3>
                <p className="text-muted-foreground">Our AI analyzes your video content to identify key moments, quotes, and engaging sections worth highlighting.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <FastForward className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced extraction</h3>
                <p className="text-muted-foreground">Automatically extract the perfect clips with our intelligent algorithm that understands context and relevance.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <PieChart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick exports</h3>
                <p className="text-muted-foreground">Download your highlights in multiple formats optimized for different social media platforms.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Customized with <span className="text-primary">AI</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI technology handles the hard work so you can focus on creating great content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature screenshots */}
            <div className="aspect-video bg-card rounded-xl overflow-hidden border border-border"></div>
            <div className="aspect-video bg-card rounded-xl overflow-hidden border border-border"></div>
            <div className="aspect-video bg-card rounded-xl overflow-hidden border border-border"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Join a global community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thousands of content creators are already using Clip-it-Quick
            </p>
          </div>

          <Carousel>
            <CarouselContent>
              {[...Array(3)].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">
                        "Clip-it-Quick has saved me countless hours of editing. Now I can create more content in less time!"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-full"></div>
                        <div>
                          <p className="font-medium">Content Creator</p>
                          <p className="text-sm text-muted-foreground">YouTube, 500K subscribers</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start creating?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload your first video and get AI-generated highlights in minutes
            </p>
            <Button size="lg" className="gap-2">
              Try Clip-it-Quick Free <ArrowRight className="h-4 w-4" />
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

export default Index;
