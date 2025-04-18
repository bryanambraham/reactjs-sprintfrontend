import React from "react";
import { Helmet } from "react-helmet";
import CalculatorCargo from "../components/CalculatorCargo";

function Calculator() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "url": "https://sprintindonesia.com/calculator",
            "name": "Calculator - Sprint Indonesia",
            "description": "Gunakan kalkulator Sprint Indonesia untuk memperkirakan biaya pengiriman di seluruh Indonesia.",
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
      <CalculatorCargo />
    </div>
  );
}

export default Calculator;
