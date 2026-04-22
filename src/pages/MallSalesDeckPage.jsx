import Deck from "../components/Deck";
import HeroSection from "../sections/HeroSection";
import WhyPropertySection from "../sections/WhyPropertySection";
import RetailSection from "../sections/RetailSection";
import LuxuryIntro from "../sections/luxury/LuxuryIntro";
import LuxuryExperience from "../sections/luxury/LuxuryExperience";
import LuxuryOutcome from "../sections/luxury/LuxuryOutcome";
import DiningSection from"../sections/DiningSection";
import AttractionsSection from "../sections/AttractionsSection";
import EventsSection from "../sections/EventsSection"
export default function MallDeckPage() {
  return (
    <Deck>
      <HeroSection />
      <WhyPropertySection />
      {({ openModule }) => (
        <RetailSection openModule={openModule} />
      )}
       <LuxuryIntro />
      <LuxuryExperience />
      <LuxuryOutcome />
      <DiningSection/>
    < AttractionsSection/>
    <EventsSection/>
    </Deck>
  );
}