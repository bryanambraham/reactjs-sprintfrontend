import React from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../components/AboutHero";
import ShippingSolution from "../components/ShippingSolution";
import VisionMission from "../components/VisionMission";
import WhyChooseHero from "../components/WhyChooseHero";

function About() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "url": "https://sprintindonesia.com/about",
            "name": "About Sprint Indonesia",
            "description": Cari tahu lebih lanjut tentang Sprint Indonesia, layanan pengiriman barang antar pulau dengan jangkauan ke seluruh Indonesia.",
            "publisher": {
              "@type": "Organization",
              "name": "Sprint Indonesia",
              "logo": "https://sprintindonesia.com/sprintlogo.png",
              "sameAs": [
                "https://www.instagram.com/sprintcargo.id"
              ]
            }
          }
          `}
        </script>
      </Helmet>
      <AboutHero />
      <VisionMission />
      <ShippingSolution />
      <WhyChooseHero />
    </div>
  );
}

export default About;
