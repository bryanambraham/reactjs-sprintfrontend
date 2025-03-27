const VisionMission = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          {/* Vision */}
          <div data-aos="fade-up">
            <h2 className="text-primary font-semibold mb-4">VISI</h2>
            <p className="text-2xl md:text-3xl font-bold text-text-primary">
              Menjadi Perusahaan Ekspedisi Terbesar Di Indonesia
            </p>
          </div>

          {/* Mission */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-primary font-semibold mb-4">MISI</h2>
            <div className="space-y-4 text-lg text-text-secondary">
              <p data-aos="fade-up" data-aos-delay="300">
                Memberikan pelayanan terbaik untuk kepuasan pelanggan
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                Menjadi mitra terpercaya dalam pengiriman barang
              </p>
              <p data-aos="fade-up" data-aos-delay="500">
                Mengembangkan jaringan distribusi ke seluruh Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission

