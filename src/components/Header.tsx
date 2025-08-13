import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="gradient-hero shadow-soft">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/3267fc44-b2c0-4d08-9818-fceea58cb4e5.png" 
              alt="La Petite Alice logo" 
              className="h-16 w-auto"
            />
            <div>
              <h1 className="font-elegant text-2xl text-primary">La Petite Alice</h1>
              <p className="font-body text-sm text-muted-foreground italic">with a touch of magic</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#story" className="font-body text-primary hover:text-primary/80 transition-elegant">Our Story</a>
            <a href="#collections" className="font-body text-primary hover:text-primary/80 transition-elegant">Collections</a>
            <a href="#values" className="font-body text-primary hover:text-primary/80 transition-elegant">Values</a>
            <Button variant="outline" className="font-body">Contact</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;