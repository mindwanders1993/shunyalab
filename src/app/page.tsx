import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import ProcessSteps from "@/components/ProcessSteps";
import Portfolio from "@/components/Portfolio";
import Philosophy from "@/components/Philosophy";
import ClientFit from "@/components/ClientFit";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Services />
        <ProcessSteps />
        <Portfolio />
        <Philosophy />
        <ClientFit />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
