import BlogGrid from "../components/BlogGrid"
import CalculatorCargo from "../components/CalculatorCargo"
import FAQSection from "../components/FAQSection"
import LoyaltyRewards from "../components/LoyaltyRewards"
import PromoCounter from "../components/PromoCounter"
import CargoSearch from "../components/CargoSearch"

function Promo() {
  return (
    <div className="min-h-screen bg-secondary">
      <section className="mb-16">
        <LoyaltyRewards />
      </section>

      {/* Promo Counter Section */}
      <section className="mb-16">
        <PromoCounter />
      </section>

      {/* Cargo Search Section */}
      <section className="mb-16">
        <CargoSearch />
      </section>

      {/* Calculator Cargo Section */}
      <section className="mb-16">
        <CalculatorCargo />
      </section>

      {/* Related Posts Section */}
      <section className="mb-16">
        <div className="relative block text-center">
          <h2 className="text-4xl font-bold text-text-primary">RELATED POSTS</h2>
          <div className="absolute bottom-0 left-1/2 w-1/5 h-2 bg-primary -mb-2 transform -translate-x-1/2"></div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section>
        <BlogGrid />
      </section>

      <section>
        <FAQSection />
      </section>
    </div>
  )
}

export default Promo

