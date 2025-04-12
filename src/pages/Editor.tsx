
import React from 'react';
import Header from '@/components/Header';
import EditorSidebar from '@/components/editor/EditorSidebar';
import EditorCanvas from '@/components/editor/EditorCanvas';
import EditorControls from '@/components/editor/EditorControls';
import EditorTimeline from '@/components/editor/EditorTimeline';

const Editor: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <Header />
      </div>
      
      <div className="flex-1 flex flex-col h-[calc(100vh-96px)]">
        <div className="flex flex-1 h-full">
          {/* Left sidebar */}
          <EditorSidebar />
          
          {/* Main editor canvas */}
          <EditorCanvas />
          
          {/* Right controls panel */}
          <EditorControls />
        </div>
        
        {/* Timeline at the bottom */}
        <EditorTimeline />
      </div>
    </div>
  );
};

export default Editor;
