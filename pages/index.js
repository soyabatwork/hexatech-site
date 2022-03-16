import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroContact from "../components/HeroContact";
import HeroSupport from "../components/HeroSupport";
import HomeDesignProcess from "../components/HomeDesignProcess";
import HomeFullStack from "../components/HomeFullStack";
import HomeOfferings from "../components/HomeOfferings";
import HomeTemplates from "../components/HomeTemplates";
import QuotesSection from "../components/QuotesSection";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Hero />
      <QuotesSection />
      <HomeOfferings />
      <HomeDesignProcess />
      <HomeFullStack />
      <HomeTemplates />
      <HeroSupport />
      <HeroContact />
      <Footer />
    </div>
  );
}
