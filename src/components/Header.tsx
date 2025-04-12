
import React from 'react';
import { Scissors } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <div className="flex items-center justify-center gap-3">
        <div className="bg-accent/20 p-2 rounded-lg">
          <Scissors className="h-8 w-8 text-accent" />
        </div>
        <div>
          <h1 className="text-3xl font-bold gradient-text">Clip-it-Quick</h1>
          <p className="text-muted-foreground text-sm">AI-powered video summarization</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
