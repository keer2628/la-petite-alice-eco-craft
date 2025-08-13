import { Leaf, Heart, Recycle } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Ethical & Organic",
      description: "Crafted with 100% organic fabrics by skilled women artisans, with no waste and no factories."
    },
    {
      icon: Recycle,
      title: "Eco-Friendly & Upcycled",
      description: "Sustainable initiatives like our 'EARTH' collection use leftover linens, each piece named after elements of nature."
    },
    {
      icon: Leaf,
      title: "Made to Order",
      description: "Thoughtfully crafted items, no excess stock, reducing over-production for a better tomorrow."
    }
  ];

  return (
    <section id="values" className="py-20 gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl text-primary mb-6">What We Stand For</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our values guide every decision we make, from sourcing materials to the final stitch.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-warm transition-elegant">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-elegant text-xl text-primary mb-4">{value.title}</h3>
              <p className="font-body text-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;