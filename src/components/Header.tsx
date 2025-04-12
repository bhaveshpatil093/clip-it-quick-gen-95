
import React from 'react';
import { Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-accent/20 p-2 rounded-lg">
            <Scissors className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold gradient-text">Clip-it-Quick</h1>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
