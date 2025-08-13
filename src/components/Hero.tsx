import { Button } from "@/components/ui/button";
import heroLinen from "@/assets/hero-linen.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-elegant text-5xl lg:text-6xl text-primary leading-tight mb-6">
                Handmade • Organic • Made-to-Order
              </h2>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                Discover timeless pieces crafted with love in Lithuania. Each garment is thoughtfully made from 100% organic linen, celebrating slow fashion and sustainable beauty.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="font-body px-8 py-3">
                Explore Collections
              </Button>
              <Button variant="outline" size="lg" className="font-body px-8 py-3">
                Our Story
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroLinen} 
              alt="Beautiful organic linen textures" 
              className="w-full h-[500px] object-cover rounded-lg shadow-warm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;