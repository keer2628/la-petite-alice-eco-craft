import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Values from "@/components/Values";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Story />
        <Values />
        <Collections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
