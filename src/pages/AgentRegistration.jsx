import ContactForm from "../components/ContactForm"
import WhyChooseHero from "../components/WhyChooseHero"
import { useScrollAnimation } from "../hooks/usescrollanimation"

function AgentRegistration() {
  // Initialize scroll animations
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-secondary">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Pendaftaran Agen Sprint Indo</h1>
          <p className="mt-4 text-center text-text-primary max-w-2xl mx-auto">
            Bergabunglah dengan kami dan dapatkan penghasilan tambahan sebagai Agen Sprint Indo
          </p>
        </div>
      </div>

      <ContactForm />

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold text-text-primary">KEUNTUNGAN MENJADI AGEN</h2>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary -mb-2"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-accent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Penghasilan Tambahan</h3>
              <p className="text-text-secondary">
                Dapatkan komisi menarik dari setiap transaksi pengiriman yang Anda tangani. Semakin banyak pelanggan,
                semakin besar penghasilan Anda.
              </p>
            </div>

            <div className="bg-accent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Jam Kerja Fleksibel</h3>
              <p className="text-text-secondary">
                Anda dapat menjalankan bisnis ini kapan saja sesuai dengan waktu luang yang Anda miliki. Cocok sebagai
                pekerjaan sampingan atau utama.
              </p>
            </div>

            <div className="bg-accent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Dukungan Penuh</h3>
              <p className="text-text-secondary">
                Kami memberikan pelatihan dan dukungan penuh untuk memastikan Anda sukses sebagai Agen Sprint Indo.
                Termasuk materi marketing dan strategi penjualan.
              </p>
            </div>

            <div className="bg-accent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Tanpa Modal Besar</h3>
              <p className="text-text-secondary">
                Tidak perlu modal besar untuk memulai. Anda hanya perlu smartphone dan koneksi internet untuk mulai
                menjalankan bisnis ini.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseHero />
    </div>
  )
}

export default AgentRegistration
