import Image from "next/image";
import HeroSection from "./components/Herosection/HeroSection";
import Food from "./components/Restaurant/Food";
import AboutUs from "./components/About/AboutUs";
import ConstructionSection from "./components/Construction/ConstructionSection";
import EngineeringAndTechnologySection from "./components/EngineeringandTechnology/EngineeringAndTechnologySection";
import GasRefillingServicesSection from "./components/Gas/GasRefillingServicesSection";
import TransportAndTollingSection from "./components/Transport/TransportAndTollingSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Food/>
      <ConstructionSection/>
      <EngineeringAndTechnologySection/>
      <GasRefillingServicesSection/>
      <TransportAndTollingSection/>
      <AboutUs/>
    </main>  
    );
}
