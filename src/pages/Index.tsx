import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductSection from "@/components/sections/ProductSection";
import VolunteerSection from "@/components/sections/VolunteerSection";
import LoginDialog from "@/components/LoginDialog";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/admin");
  };

  const handleGetStarted = () => {
    setIsLoginOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <HeroSection onGetStarted={handleGetStarted} />
      <AboutSection />
      <ProductSection />
      <VolunteerSection />
      
      <LoginDialog 
        isOpen={isLoginOpen}
        onOpenChange={setIsLoginOpen}
        onAdminLogin={handleAdminLogin}
      />
    </div>
  );
};

export default Index;
