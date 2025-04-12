
import React from 'react';
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, 
  AlignRight, Palette, Type, ArrowLeft, RotateCcw, 
  RotateCw, Maximize, AlignJustify, Crop
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Instagram, TikTok, AspectRatio } from '@/components/icons';

const EditorControls: React.FC = () => {
  return (
    <div className="flex flex-col w-72 border-l h-full">
      <div className="p-4 border-b flex items-center justify-between">
        <Button variant="ghost" size="sm">
          <ArrowLeft size={18} className="mr-2" />
          <span>Project Settings</span>
        </Button>
      </div>
      
      <div className="p-4 space-y-6 overflow-y-auto">
        <div>
          <h3 className="font-medium mb-3">Format</h3>
          <Tabs defaultValue="16:9" className="w-full">
            <TabsList className="grid grid-cols-4 mb-2">
              <TabsTrigger value="16:9">16:9</TabsTrigger>
              <TabsTrigger value="1:1">1:1</TabsTrigger>
              <TabsTrigger value="9:16">9:16</TabsTrigger>
              <TabsTrigger value="4:5">4:5</TabsTrigger>
            </TabsList>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" className="flex-1" size="sm">
                <AspectRatio size={14} className="mr-1" />
                <span className="text-xs">Custom</span>
              </Button>
              <Button variant="outline" className="w-10 p-0" size="sm">
                <Instagram size={14} />
              </Button>
              <Button variant="outline" className="w-10 p-0" size="sm">
                <TikTok size={14} />
              </Button>
            </div>
          </Tabs>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="font-medium mb-3">Text</h3>
          <div className="grid grid-cols-4 gap-2 mb-2">
            <Button variant="outline" size="sm" className="p-2">
              <Bold size={16} />
            </Button>
            <Button variant="outline" size="sm" className="p-2">
              <Italic size={16} />
            </Button>
            <Button variant="outline" size="sm" className="p-2">
              <Underline size={16} />
            </Button>
            <Button variant="outline" size="sm" className="p-2">
              <Type size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button variant="outline" size="sm" className="p-2">
              <AlignLeft size={16} />
            </Button>
            <Button variant="outline" size="sm" className="p-2">
              <AlignCenter size={16} />
            </Button>
            <Button variant="outline" size="sm" className="p-2">
              <AlignRight size={16} />
            </Button>
            <Button variant="outline" size="sm" className="p-2">
              <AlignJustify size={16} />
            </Button>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="font-medium mb-3">Transform</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Scale</span>
                <span>100%</span>
              </div>
              <Slider defaultValue={[100]} max={200} step={1} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Rotation</span>
                <span>0°</span>
              </div>
              <Slider defaultValue={[0]} max={360} step={1} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm" className="p-2">
                <Crop size={16} />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <RotateCcw size={16} />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <RotateCw size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="font-medium mb-3">Color & Effects</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Brightness</span>
                <span>0</span>
              </div>
              <Slider defaultValue={[0]} min={-100} max={100} step={1} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Contrast</span>
                <span>0</span>
              </div>
              <Slider defaultValue={[0]} min={-100} max={100} step={1} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Saturation</span>
                <span>0</span>
              </div>
              <Slider defaultValue={[0]} min={-100} max={100} step={1} />
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <Palette size={14} className="mr-1" />
              <span>Color Presets</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorControls;
