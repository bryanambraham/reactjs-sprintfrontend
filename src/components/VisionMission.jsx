const VisionMission = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          {/* Vision */}
          <div>
            <h2 className="text-primary font-semibold mb-4">VISI</h2>
            <p className="text-2xl md:text-3xl font-bold text-text-primary">
              Menjadi Perusahaan Ekspedisi Terbesar Di Indonesia
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-primary font-semibold mb-4">MISI</h2>
            <div className="space-y-4 text-lg text-text-secondary">
              <p>Memberikan pelayanan terbaik untuk kepuasan pelanggan</p>
              <p>Menjadi mitra terpercaya dalam pengiriman barang</p>
              <p>Mengembangkan jaringan distribusi ke seluruh Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission

