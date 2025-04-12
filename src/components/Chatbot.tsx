
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ChatMessage from './ChatMessage';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    type: 'bot',
    text: 'Hello! How can I help you with Clip-it-Quick today?',
    timestamp: new Date()
  }
];

// Simple responses based on keywords
const getBotResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('pricing') || lowerQuestion.includes('cost') || lowerQuestion.includes('price')) {
    return "Our pricing starts with a free tier. For more details, check out our pricing page at /pricing.";
  } else if (lowerQuestion.includes('feature') || lowerQuestion.includes('what can')) {
    return "Clip-it-Quick offers AI-powered video editing tools including ClipAnything for viral shorts, animated captions, AI Reframe for platform-specific resizing, and a no-skills-required editor.";
  } else if (lowerQuestion.includes('how to') || lowerQuestion.includes('help')) {
    return "To get started, sign up for a free account. You can then upload your videos and use our AI tools to edit them. Check out the 'How It Works' page for more detailed instructions.";
  } else if (lowerQuestion.includes('sign up') || lowerQuestion.includes('account')) {
    return "You can sign up for a free account by clicking the 'Sign Up - It's Free' button in the top-right corner of the page.";
  } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('support')) {
    return "For customer support, please email us at support@clip-it-quick.com or use the contact form on our website.";
  } else {
    return "I'm here to help with questions about Clip-it-Quick features, pricing, and how to use our tools. Please ask me anything specific or check out our 'How It Works' page for guided tutorials.";
  }
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getBotResponse(userMessage.text),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className={cn(
          "bg-card border border-border rounded-lg shadow-xl transition-all overflow-hidden",
          isMinimized ? "w-72 h-16" : "w-80 md:w-96 h-[500px]"
        )}>
          {/* Chat header */}
          <div className="bg-primary p-3 text-primary-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-medium">Clip-it-Quick Assistant</h3>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleMinimize}>
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Chat messages area */}
              <div className="h-[380px] overflow-y-auto p-4">
                {messages.map(msg => (
                  <ChatMessage 
                    key={msg.id}
                    type={msg.type}
                    message={msg.text}
                    timestamp={msg.timestamp}
                  />
                ))}
                {isTyping && (
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <span className="bg-muted rounded-full h-2 w-2 animate-pulse"></span>
                    <span className="bg-muted rounded-full h-2 w-2 animate-pulse delay-75"></span>
                    <span className="bg-muted rounded-full h-2 w-2 animate-pulse delay-150"></span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Chat input area */}
              <div className="border-t border-border p-3 bg-background">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
