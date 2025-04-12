
import React from 'react';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type MessageType = 'user' | 'bot';

interface ChatMessageProps {
  type: MessageType;
  message: string;
  timestamp?: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  type, 
  message, 
  timestamp = new Date() 
}) => {
  return (
    <div className={cn(
      "flex items-start gap-3 mb-4",
      type === 'user' ? "flex-row-reverse" : "flex-row"
    )}>
      <div className={cn(
        "flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0",
        type === 'user' ? "bg-primary" : "bg-accent"
      )}>
        {type === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
      </div>
      <div className={cn(
        "px-4 py-3 rounded-lg max-w-[80%]",
        type === 'user' ? "bg-primary/20 rounded-tr-none" : "bg-muted rounded-tl-none"
      )}>
        <p className="text-sm">{message}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
