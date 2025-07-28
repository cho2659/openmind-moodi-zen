import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Send, Trash2, LogOut, ArrowLeft, Bot, User, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import moodi from "../../img/moodi.png";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant'; 
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm MOO:DI, your AI mental health companion. How are you feeling today?",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're feeling ${inputValue.toLowerCase().includes('sad') ? 'sad' : 
          inputValue.toLowerCase().includes('anxious') ? 'anxious' : 
          inputValue.toLowerCase().includes('stressed') ? 'stressed' : 
          'this way'}. Let's explore some strategies that might help you feel better. Would you like to talk more about what's on your mind?`,
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleDeleteClick = (messageId: string) => {
    setMessageToDelete(messageId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (!messageToDelete) return;
    
    // Find the user message to delete
    const userMessageIndex = messages.findIndex(msg => msg.id === messageToDelete);
    if (userMessageIndex === -1) return;
    
    // Find the corresponding AI response (next message after user message)
    const aiResponseIndex = userMessageIndex + 1;
    
    // Delete the question-answer pair and all messages after it
    setMessages(prev => {
      const newMessages = [...prev];
      
      // Check if there's an AI response after this user message
      const hasAiResponse = aiResponseIndex < newMessages.length && 
                           newMessages[aiResponseIndex]?.role === 'assistant';
      
      // Calculate how many messages to remove
      const messagesToRemove = hasAiResponse ? 2 : 1; // User message + AI response (if exists)
      
      // Remove the question-answer pair and all subsequent messages
      newMessages.splice(userMessageIndex, newMessages.length - userMessageIndex);
      
      return newMessages;
    });
    
    toast({
      title: "Messages deleted",
      description: "The question-answer pair and all subsequent messages have been removed.",
    });
    
    setShowDeleteDialog(false);
    setMessageToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
    setMessageToDelete(null);
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-glass-backdrop backdrop-blur-md border-b border-glass-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <img src={moodi} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  MOO:DI
                  </h1>
                  <p className="text-sm text-muted-foreground">AI Mental Health Companion</p>
                </div>
              </div>
            </div>
            <Button 
              variant="glass"
              onClick={handleLogout}
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="bg-glass/60 backdrop-blur-sm border-glass-border/30 h-[calc(100vh-200px)] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-gradient-primary text-white'
                  }`}>
                    {message.role === 'user' ? <User className="w-4 h-4" /> : <img src={moodi} className="w-4 h-4" />}
                  </div>
                  <div className={`flex-1 ${message.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-glass/60 backdrop-blur-sm border border-glass-border/30'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-2 ${
                        message.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    {message.role === 'user' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(message.id)}
                        className="mt-2 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <img src={moodi} className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-glass/60 backdrop-blur-sm border border-glass-border/30 p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-glass-border/30 p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-glass/50 border-glass-border/30 focus:border-primary/50"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="glass-primary"
                disabled={!inputValue.trim() || isLoading}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-md bg-glass/95 backdrop-blur-md border border-glass-border/50">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <span>Delete Messages</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Are you sure you want to delete this question-answer pair and all messages after it? This action cannot be undone.
            </p>
            
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-warning">Warning</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    This will remove the selected question-answer pair and all subsequent messages from the conversation history.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button 
                variant="destructive" 
                onClick={confirmDelete}
                className="flex-1"
              >
                Delete Messages
              </Button>
              <Button 
                variant="glass" 
                onClick={cancelDelete}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chat; 