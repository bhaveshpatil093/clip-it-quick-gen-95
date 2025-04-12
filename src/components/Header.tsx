
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  ChevronDown, 
  Film, 
  Captions, 
  FileCode,
  LogIn,
  UserPlus
} from 'lucide-react';
import { AspectRatio } from '@/components/icons';
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
                    <Link to="/editor" className="flex gap-3 p-3 hover:bg-accent/10 rounded-md">
                      <FileCode className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium">Editor</h3>
                        <p className="text-xs text-muted-foreground">All-in-one AI editor. No editing skills required</p>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            <Link to="/signup" className="text-white">Sign Up - It's Free</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
