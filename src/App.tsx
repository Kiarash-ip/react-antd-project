import RootLayout from "./common/layout/RootLayout";
import ConsultationSection from "./modules/consultation/components/ConsultationSection";
import ContactUs from "./modules/contact-us/components/ContactUs";
import Developers from "./modules/developers/components/Developers";
import ExpertiseSection from "./modules/expertise/components/ExpertiseSection";
import HeroSection from "./modules/hero/components/HeroSection";
import ProjectsSection from "./modules/projects/components/ProjectsSection";
import ServicesSection from "./modules/services/components/ServicesSection";

function App() {
  return (
    <RootLayout>
      <HeroSection />
      <ExpertiseSection />
      <ServicesSection />
      <Developers />
      <ConsultationSection />
      <ProjectsSection />
      <ContactUs />
    </RootLayout>
  );
}

export default App;
