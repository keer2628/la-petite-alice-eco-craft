import { Instagram, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="gradient-warm py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img 
                src="/lovable-uploads/3267fc44-b2c0-4d08-9818-fceea58cb4e5.png" 
                alt="La Petite Alice logo" 
                className="h-8 w-auto"
              />
              <h3 className="font-elegant text-xl text-primary">La Petite Alice</h3>
            </div>
            <p className="font-body text-muted-foreground mb-4">
              Handmade in Lithuania with love
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
              <Heart className="w-4 h-4" />
              <span className="font-body text-sm">Made with care since 2024</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-elegant text-lg text-primary mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Instagram className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">@lapetitealice</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">hello@lapetitealice.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-elegant text-lg text-primary mb-4">Newsletter</h4>
            <p className="font-body text-muted-foreground mb-4">
              Join our newsletter for 20% off your first order
            </p>
            <Button className="font-body">Subscribe</Button>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 La Petite Alice | Handmade with love in Lithuania
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;