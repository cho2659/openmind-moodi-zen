import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VolunteerAnnounce = () => {
  const [showNotReadyDialog, setShowNotReadyDialog] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDownload = () => {
    setShowNotReadyDialog(true);
  };

  const licenseTerms = [
    "You agree to use the software for mental health support purposes only",
    "You will maintain the confidentiality of all user interactions",
    "You will not attempt to reverse engineer or modify the software",
    "You will report any bugs or issues to the development team",
    "You understand this is a volunteer position with no monetary compensation",
    "You will respect user privacy and data protection guidelines",
    "You agree to follow ethical AI usage guidelines",
    "You will participate in training sessions when required"
  ];

  const requirements = [
    "Minimum 4GB RAM available for node operation",
    "Stable internet connection (10+ Mbps recommended)",
    "Windows 10/11, macOS 10.15+, or Linux",
    "At least 2GB free disk space",
    "No previous experience required - training provided",
    "Commitment to run node for at least 4 hours per week"
  ];

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
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Volunteer Node Operator
                </h1>
                <p className="text-sm text-muted-foreground">Join our distributed AI network</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* License Agreement */}
          <Card className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">License Agreement</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground">
                By downloading and using the OpenMind volunteer node software, you agree to the following terms:
              </p>
              
              <div className="space-y-3">
                {licenseTerms.map((term, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{term}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-primary">Important Notice</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    This software is provided "as is" without warranty. By using it, you acknowledge that 
                    you understand the risks and responsibilities involved in running a volunteer node.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* System Requirements & Download */}
          <Card className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Download className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Download & Requirements</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">System Requirements</h3>
                <div className="space-y-2">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-sm text-muted-foreground">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <p className="text-sm font-medium text-success">Ready to Contribute</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your participation helps make mental health support more accessible globally.
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleDownload}
                  variant="glass-primary" 
                  className="w-full"
                  size="lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Volunteer Node
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Information */}
        <Card className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6 mt-8">
          <h3 className="text-lg font-semibold mb-4">What You'll Be Doing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold mb-2">Download & Install</h4>
              <p className="text-sm text-muted-foreground">
                Get the volunteer node software and follow the installation guide
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold mb-2">Run Your Node</h4>
              <p className="text-sm text-muted-foreground">
                Start the software and let it process AI requests in the background
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold mb-2">Help Others</h4>
              <p className="text-sm text-muted-foreground">
                Your node contributes to faster, more accessible mental health support
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Not Ready Dialog */}
      <Dialog open={showNotReadyDialog} onOpenChange={setShowNotReadyDialog}>
        <DialogContent className="sm:max-w-md bg-glass/95 backdrop-blur-md border border-glass-border/50">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              <span>Coming Soon</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The volunteer node software is currently in development and will be available soon. 
              We're working hard to ensure it's secure, efficient, and easy to use.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-primary font-medium">What's Next?</p>
              <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                <li>• Beta testing with select volunteers</li>
                <li>• Security audits and performance optimization</li>
                <li>• Comprehensive documentation and guides</li>
                <li>• Community training sessions</li>
              </ul>
            </div>

            <div className="flex space-x-2">
              <Button 
                variant="glass-primary" 
                onClick={() => setShowNotReadyDialog(false)}
                className="flex-1"
              >
                Got it
              </Button>
              <Button 
                variant="glass" 
                onClick={() => {
                  setShowNotReadyDialog(false);
                  navigate("/");
                }}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VolunteerAnnounce; 