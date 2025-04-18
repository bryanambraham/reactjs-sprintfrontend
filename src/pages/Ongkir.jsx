import React from "react";
import { Helmet } from "react-helmet";
import PromoCounter from "../components/PromoCounter";
import CargoSearch from "../components/CargoSearch";

function Ongkir() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "url": "https://sprintindonesia.com/ongkir",
            "name": "Cek Ongkir - Sprint Indonesia",
            "description": "Layanan cek ongkir untuk berbagai tujuan pengiriman barang di Indonesia, termasuk Kalimantan, Jawa, Sumatera, dan lainnya.",
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
      <CargoSearch />
      <PromoCounter />
    </div>
  );
}

export default Ongkir;
