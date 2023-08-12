import RootLayout from "./common/layout/RootLayout";
import ExpertiseSection from "./modules/expertise/components/ExpertiseSection";
import HeroSection from "./modules/hero/components/HeroSection";
import ServicesSection from "./modules/services/components/ServicesSection";

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <ExpertiseSection />
      <ServicesSection />
    </RootLayout>
  );
}

export default App;
