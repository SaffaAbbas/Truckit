import { Hero } from "../components/Hero";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { ServicesAreas } from "../components/ServicesAreas";
import { OurTrucks } from "../components/OurTrucks";
import { RequestQuoteSection } from "../components/RequestQuoteSection";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero backgroundImageSrc="/images/bg.png" />
      </section>
      <section id="about">
        <WhyChooseUs imageSrc="/images/labour.png" />
      </section>
      <section id="services">
        <ServicesAreas imageSrc="/images/truck.png" />
      </section>
      <section id="trucks">
        <OurTrucks imageSrc="/images/truck2.png" />
      </section>
      <section id="quote">
        <RequestQuoteSection imageSrc="/images/truck3.png" />
      </section>
    </>
  );
}

