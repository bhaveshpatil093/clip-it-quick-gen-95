
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  ChevronDown, 
  Film, 
  Captions, 
  ImageUp, 
  Award, 
  Calendar, 
  FileCode, 
  FileText, 
  Users,
  AspectRatio
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Clip-it-Quick</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                    <Link to="/clipanything" className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <Film className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">ClipAnything</h3>
                        <p className="text-xs text-muted-foreground">The fastest way to turn any video into viral shorts</p>
                      </div>
                    </Link>
                    <Link to="/captions" className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <Captions className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">Animated captions</h3>
                        <p className="text-xs text-muted-foreground">The fastest way to add animated captions</p>
                      </div>
                    </Link>
                    <Link to="/aireframe" className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <AspectRatio className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">AI Reframe</h3>
                        <p className="text-xs text-muted-foreground">Resize any video for every platform in 1 click</p>
                      </div>
                    </Link>
                    <div className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <Award className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">AI B-Roll</h3>
                        <p className="text-xs text-muted-foreground">Get relevant AI B-Roll in 1 click, under 1 minute</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">Social scheduler</h3>
                        <p className="text-xs text-muted-foreground">Schedule a month's posts to all platforms in 10 minutes</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <FileCode className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">Editor</h3>
                        <p className="text-xs text-muted-foreground">All-in-one AI editor. No editing skills required</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <FileText className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">Export to XML</h3>
                        <p className="text-xs text-muted-foreground">Edit in Adobe Premiere Pro or DaVinci Resolve at ease</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <Users className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">Team workspace</h3>
                        <p className="text-xs text-muted-foreground">Maximize your team's productivity with AI</p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>
        <div>
          <Button className="flex items-center gap-2">
            <Link to="/clipanything" className="text-white">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
