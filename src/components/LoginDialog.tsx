import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface LoginDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAdminLogin: () => void;
}

const LoginDialog = ({ isOpen, onOpenChange, onAdminLogin }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      if (email === "admin@openmind.com" && password === "admin123") {
        toast({
          title: "Welcome back!",
          description: "Successfully logged in as administrator.",
        });
        onAdminLogin();
        onOpenChange(false);
        setEmail("");
        setPassword("");
      } else if (email && password) {
        toast({
          title: "Login successful!",
          description: "Welcome to OpenMind counseling platform.",
        });
        onOpenChange(false);
        setEmail("");
        setPassword("");
      } else {
        toast({
          title: "Login failed",
          description: "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-glass/95 backdrop-blur-md border border-glass-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
            Welcome to OpenMind
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-glass/50 border-glass-border/30 focus:border-primary/50"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-glass/50 border-glass-border/30 focus:border-primary/50"
              required
            />
          </div>

          <div className="text-xs text-muted-foreground">
            <p>Demo credentials:</p>
            <p>• Admin: admin@openmind.com / admin123</p>
            <p>• User: any email / any password</p>
          </div>
          
          <Button 
            type="submit" 
            variant="glass-primary" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          
          <div className="text-center">
            <Button variant="link" className="text-sm text-muted-foreground">
              Forgot your password?
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;