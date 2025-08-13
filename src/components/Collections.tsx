import { Card, CardContent } from "@/components/ui/card";
import linenDress from "@/assets/linen-dress.jpg";
import embroideryDetail from "@/assets/embroidery-detail.jpg";

const Collections = () => {
  const collections = [
    {
      image: linenDress,
      title: "Warm Whispers Collection",
      description: "Heavy-weight linen designed for the colder season—cozy, warm, and beautiful pieces like the Dress Lana and Jumpsuit Rosel."
    },
    {
      image: embroideryDetail,
      title: "Signature Embroidery",
      description: "Custom embroidery adds a personal, charming touch to each garment—tiny fruits, florals, animals, and more, all handmade."
    }
  ];

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl text-primary mb-6">Featured Creations</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections, each piece telling its own story of craftsmanship and love.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {collections.map((collection, index) => (
            <Card key={index} className="group overflow-hidden shadow-soft hover:shadow-warm transition-elegant">
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-elegant"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-elegant"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-elegant text-xl text-primary mb-3">{collection.title}</h3>
                <p className="font-body text-foreground leading-relaxed">{collection.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;