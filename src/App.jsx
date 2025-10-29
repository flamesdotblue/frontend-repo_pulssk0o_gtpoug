import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import FooterCTA from "./components/FooterCTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
