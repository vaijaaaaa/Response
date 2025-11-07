import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar"


export default function Home() {
  return (
      
    <div>
      <Navbar/>
      <main>
      <HeroSection/>
      <HowItWorks/>
      <FAQ />
      </main>
      <Footer/>
    </div>
  );
}
