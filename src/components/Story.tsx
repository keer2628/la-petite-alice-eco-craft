const Story = () => {
  return (
    <section id="story" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-elegant text-4xl text-primary mb-8">Our Story</h2>
          <p className="font-body text-lg text-foreground leading-relaxed mb-8">
            Founded by a family in Lithuania inspired by the love for their daughter Alice, La Petite Alice creates handmade, made-to-order clothing in organic linen. We believe in timeless beauty, slow production, and pieces that last beyond trends.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Every stitch tells a story of craftsmanship, every fabric choice reflects our commitment to the earth, and every piece carries the magic of handmade tradition passed down through generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;