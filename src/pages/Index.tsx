
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Exams } from "@/components/Exams";

console.log("🧪 Exams component:", Exams);
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <Hero />
      <About />

      <Services />
      <Exams />
      <Contact />
    </div>
  );
};

export default Index;
