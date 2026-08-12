import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Attorneys from "./components/Attorneys";
import TrustStats from "./components/TrustStats";
import SelectedMatters from "./components/SelectedMatters";
import ConsultationCTA from "./components/ConsultationCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Attorneys />
      <TrustStats />
      <SelectedMatters />
      <ConsultationCTA />
      <Contact />
      <Footer />
    </main>
  );
}