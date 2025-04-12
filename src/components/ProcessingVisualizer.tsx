
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Wand2 } from 'lucide-react';
import { ProcessingStatus } from '@/types';

interface ProcessingVisualizerProps {
  status: ProcessingStatus;
}

const ProcessingVisualizer: React.FC<ProcessingVisualizerProps> = ({ status }) => {
  const getStatusIcon = () => {
    switch (status.status) {
      case 'uploading':
        return <div className="animate-spin rounded-full h-6 w-6 border-2 border-accent border-t-transparent"></div>;
      case 'processing':
        return <Wand2 className="h-6 w-6 text-accent animate-pulse-glow" />;
      case 'complete':
        return <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">✓</div>;
      case 'error':
        return <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center">!</div>;
      default:
        return null;
    }
  };

  const steps = [
    { key: 'uploading', label: 'Uploading video' },
    { key: 'processing', label: 'Analyzing content' },
    { key: 'complete', label: 'Generating highlights' },
  ];

  const currentStepIndex = steps.findIndex(step => step.key === status.status);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold mb-1">Processing your video</h3>
          <p className="text-muted-foreground">{status.message}</p>
        </div>
        
        <Progress value={status.progress} className="h-2 mb-6" />
        
        <div className="grid grid-cols-3 gap-2">
          {steps.map((step, index) => {
            const isActive = index <= currentStepIndex;
            const isCurrent = step.key === status.status;
            
            return (
              <div 
                key={step.key} 
                className={`flex flex-col items-center p-4 rounded-lg ${
                  isCurrent ? 'bg-accent/10' : isActive ? 'bg-muted' : 'bg-transparent'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  isActive ? 'bg-accent/20' : 'bg-muted'
                }`}>
                  {isCurrent ? getStatusIcon() : (
                    isActive ? <span className="text-accent">✓</span> : index + 1
                  )}
                </div>
                <span className={`text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6">
          <div className="w-full h-32 rounded-lg processing-pulse"></div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground">00:00</span>
            <span className="text-xs text-muted-foreground">AI is finding key moments...</span>
            <span className="text-xs text-muted-foreground">05:23</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingVisualizer;
