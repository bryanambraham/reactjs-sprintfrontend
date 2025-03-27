const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
          <div className="relative block text-center">
            <h2 className="text-3xl font-bold">TENTANG SPRINTCARGO</h2>
            <div className="absolute bottom-0 left-1/2 w-1/2 h-1 bg-primary -mb-2 transform -translate-x-1/2"></div>
          </div>

          <div className="space-y-4 text-text-primary">
            <p>
              SprintCargo adalah perusahaan ekspedisi yang melayani pengiriman barang ke seluruh penjuru Indonesia. Kami
              memastikan setiap kiriman tiba tepat waktu dan aman, dari kota besar hingga daerah terpencil.
            </p>

            <p>
              Kami bekerja sama dengan mitra transportasi udara, laut, dan darat untuk memberikan solusi pengiriman yang
              fleksibel dan efisien, memastikan barang Anda mendapatkan prioritas di setiap tahap pengiriman.
            </p>

            <p>
              Dengan jaringan luas di seluruh Indonesia, kami dapat menangani berbagai jenis pengiriman, baik itu untuk
              keperluan bisnis atau pribadi, bahkan ke pelosok desa dan kecamatan.
            </p>

            <p>
              Semua pengiriman dilindungi oleh asuransi gratis untuk barang bernilai hingga 50 juta Rupiah, menjamin
              keamanan barang Anda di setiap perjalanan.
            </p>

            <p className="text-primary font-semibold border-l-4 border-primary pl-4">
              Bersama SprintCargo, kiriman Anda lebih cepat, lebih aman, dan lebih terjamin.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative" data-aos="fade-left" data-aos-delay="200">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Orange Blob Background */}
            <div className="absolute inset-0 bg-primary rounded-full transform -rotate-12"></div>

            {/* Image */}
            <div className="relative z-10 mt-12">
              <div className="aspect-square rounded-md overflow-hidden">
                <img src="/staff2.jpg" alt="Staff" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4" data-aos="fade-up" data-aos-delay="300">
            <a
              href="/About"
              className="bg-primary text-text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              TENTANG SPRINTCARGO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

