
import React from 'react';
import { 
  Layers, Video, Image, Music, Mic, Type, 
  SquareStack, AlignLeft, Clock, Settings, 
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type MediaTab = 'video' | 'image' | 'audio' | 'text' | 'templates' | 'captions';

interface MediaTabProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const MediaTabButton: React.FC<MediaTabProps> = ({ icon, label, active, onClick }) => (
  <Button
    variant="ghost"
    className={`flex items-center justify-start gap-3 w-full py-6 px-3 rounded-none border-l-2 ${
      active 
        ? 'border-l-primary bg-accent/40 text-primary font-medium' 
        : 'border-l-transparent text-muted-foreground hover:bg-accent/20'
    }`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </Button>
);

const EditorSidebar: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<MediaTab>('video');
  
  return (
    <div className="flex flex-col w-64 h-full border-r">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-medium">Media</h3>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <span>Library</span>
          <ChevronDown size={14} />
        </Button>
      </div>
      
      <div className="flex flex-col">
        <MediaTabButton 
          icon={<Video size={18} />} 
          label="Video" 
          active={activeTab === 'video'} 
          onClick={() => setActiveTab('video')} 
        />
        <MediaTabButton 
          icon={<Image size={18} />} 
          label="Image" 
          active={activeTab === 'image'} 
          onClick={() => setActiveTab('image')} 
        />
        <MediaTabButton 
          icon={<Music size={18} />} 
          label="Audio" 
          active={activeTab === 'audio'} 
          onClick={() => setActiveTab('audio')} 
        />
        <MediaTabButton 
          icon={<Type size={18} />} 
          label="Text" 
          active={activeTab === 'text'} 
          onClick={() => setActiveTab('text')} 
        />
        <MediaTabButton 
          icon={<SquareStack size={18} />} 
          label="Templates" 
          active={activeTab === 'templates'} 
          onClick={() => setActiveTab('templates')} 
        />
        <MediaTabButton 
          icon={<AlignLeft size={18} />} 
          label="Captions" 
          active={activeTab === 'captions'} 
          onClick={() => setActiveTab('captions')} 
        />
      </div>
      
      <Separator className="my-4" />
      
      <div className="px-4 text-xs text-muted-foreground mb-2">Recent Media</div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-2">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="aspect-video bg-accent/30 rounded-md cursor-pointer hover:opacity-80 transition-opacity"
            />
          ))}
        </div>
      </div>
      
      <div className="border-t p-4">
        <div className="flex gap-4 text-muted-foreground">
          <Button variant="ghost" size="icon">
            <Clock size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <Layers size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorSidebar;
