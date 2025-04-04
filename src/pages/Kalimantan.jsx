import DescriptionContent from "../components/DescriptionContent"
import DescriptionContentBot from "../components/DescriptionContentBot"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"
import CargoSearch from "../components/CargoSearch"

function Kalimantan() {
  const descriptionItemsBot = [
    {
      content: [
        "Ekspedisi Jakarta ke Kalimantan – Sejak didirikan pada tahun 2010, Kalimantan menjadi pulau kedua yang menjadi tujuan pengiriman Sprint Cargo setelah Pulau Jawa. Sebelum memperluas layanan ke berbagai wilayah lain seperti Sumatera, Bali, Sulawesi, Maluku, dan Papua, Sprint Cargo sudah lebih dulu membangun jaringan pengiriman yang kuat di Pulau Kalimantan.",
        "Proses pengiriman ke Kalimantan umumnya menggunakan jalur laut, mencakup seluruh provinsi di pulau ini, yaitu: Kalimantan Timur, Kalimantan Selatan, Kalimantan Barat, Kalimantan Tengah, dan Kalimantan Utara.",
        "Barang dikirim dari Jakarta menuju pelabuhan tujuan yang telah ditentukan. Sebelum sampai ke alamat penerima, barang akan melewati beberapa tahapan, termasuk proses sortir dan perpindahan pengiriman menggunakan armada trucking untuk distribusi akhir.",
      ],
    },
  ]

  const descriptionItems = [
    {
      content: [
        "Ekspedisi Jakarta ke Kalimantan – Sejak berdiri pada tahun 2010, Kalimantan menjadi pulau kedua yang menjadi tujuan utama pengiriman Sprint Cargo setelah Pulau Jawa. Sebelum layanan kami menjangkau seluruh Indonesia seperti Sumatera, Bali, Sulawesi, Maluku, Papua, dan wilayah lainnya, Sprint Cargo sudah lebih dulu membangun jaringan logistik yang kuat di Kalimantan.",
        "Proses pengiriman ke Kalimantan sebagian besar menggunakan jalur laut dan mencakup semua provinsi, yaitu: Kalimantan Timur, Kalimantan Selatan, Kalimantan Barat, Kalimantan Tengah, dan Kalimantan Utara.",
        "Barang dikirim dari Jakarta menuju pelabuhan yang ditunjuk, sebelum kemudian didistribusikan ke alamat penerima. Sebelum sampai tujuan, barang akan melalui beberapa tahapan seperti proses sortir dan perpindahan menggunakan armada trucking.",
      ],
    },
    {
      title: "Jasa Pengiriman Barang ke Kalimantan Terbaik Pilihan Pelanggan",
      content: [
        "Dengan pengalaman bertahun-tahun di bidang logistik, Sprint Cargo menjadi salah satu jasa ekspedisi yang paling dicari untuk pengiriman barang ke Kalimantan. Mengapa banyak pelanggan memilih kami?",
        "Selain menjamin keamanan dan ketepatan waktu, Sprint Cargo juga menawarkan tarif kompetitif mulai dari Rp4.500/kg dengan minimal pengiriman 50 kg. Kami juga menyediakan asuransi gratis untuk barang dengan nilai tertentu.",
        "Masih banyak keuntungan lain yang kami tawarkan untuk pengiriman ke seluruh kota di Kalimantan. Semua detail layanan akan dibahas lebih lanjut sesuai dengan provinsi tujuan.",
      ],
    },
    {
      title: "Rute Ekspedisi ke Kalimantan Timur dan Kalimantan Utara",
      content: [
        "Untuk pengiriman ke Kalimantan Timur dan Kalimantan Utara, barang dikirim dari Jakarta menggunakan kapal laut menuju Pelabuhan Balikpapan. Dari sana, barang akan disortir sebelum dikirimkan ke alamat tujuan.",
        "Balikpapan menjadi pusat transit sebelum barang dikirim ke berbagai kota di Kalimantan Timur dan Kalimantan Utara, seperti Samarinda, Bontang, Berau, Kutai Kartanegara, Tarakan, Nunukan, dan lainnya.",
        "Proses transit dan sortir di Balikpapan memakan waktu maksimal dua hari sebelum barang dikirim ke tujuan akhir.",
        <em className="italic" key="uniqueKey">
          Selengkapnya tentang
          <a href="/Mobil" className="text-primary font-bold">
            {" "}
            Ekspedisi Jakarta Balikpapan.
          </a>
        </em>,
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Laut",
      content: [
        "Jasa ekspedisi cargo laut dari Sprint Cargo adalah solusi ideal untuk pengiriman barang besar atau yang tidak bisa dikirim melalui udara, seperti alat berat dan barang elektronik dengan baterai aktif.",
        "Banyak pelanggan memilih ekspedisi cargo laut karena lebih hemat biaya, dengan volume pengiriman yang lebih fleksibel. Cocok untuk bisnis online, retail, dan distribusi barang skala besar.",
        "Kami menggunakan berbagai jenis armada, seperti kapal Roro, kapal cargo, peti kemas (container), dan kapal PELNI untuk memastikan pengiriman yang efisien ke berbagai daerah.",
        "Pengiriman dengan kapal PELNI lebih cepat karena memiliki jadwal keberangkatan yang tetap, sedangkan kapal cargo menawarkan ongkos kirim lebih hemat dengan kapasitas muatan lebih besar.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Udara",
      content: [
        "Cargo udara adalah pilihan terbaik bagi pelanggan yang membutuhkan pengiriman cepat dan terjamin. Layanan ini sangat cocok untuk barang dengan batas waktu ketat atau proyek yang harus segera diselesaikan.",
        "Sprint Cargo telah bermitra dengan berbagai maskapai penerbangan untuk memastikan pengiriman menjadi prioritas tanpa kendala.",
        "Karena regulasi yang ketat, cargo udara memiliki persyaratan khusus seperti larangan pengiriman barang elektronik dengan kapasitas baterai tertentu. Namun, tim kami akan memastikan semua prosedur dipenuhi agar pengiriman berjalan lancar.",
      ],
    },
    {
      title: "Jasa Ekspedisi Kirim Mobil",
      content: [
        "Layanan kirim mobil dari Sprint Cargo tersedia untuk berbagai jenis kendaraan, mulai dari mobil pribadi, mobil perusahaan, SUV, mobil sport, hingga truk besar.",
        "Keunggulan layanan kami termasuk penjemputan langsung dari lokasi pelanggan, tanpa perlu membawa mobil ke gudang kami.",
        "Kami menawarkan berbagai metode pengiriman seperti car towing, car carrier, self drive, kapal Roro, dan container untuk memastikan kendaraan tiba dengan aman.",
      ],
    },
    {
      title: "Jasa Kirim Alat Berat",
      content: [
        "Sprint Cargo melayani pengiriman alat berat untuk berbagai sektor, termasuk konstruksi, pertambangan, dan industri lainnya.",
        "Kami dapat mengirimkan excavator, crane, bulldozer, traktor, dump truck, dan berbagai jenis alat berat lainnya dengan sistem pengiriman yang aman dan efisien.",
        "Proses pengiriman alat berat sangat mudah, cukup konfirmasi jenis barang, lakukan pengecekan administrasi, dan barang akan segera dikirim ke tujuan.",
      ],
    },
    {
      title: "Keunggulan Menggunakan Jasa Ekspedisi Sprint Cargo ke Kalimantan",
      content: [
        <ol className="list-decimal pl-5 space-y-2 text-text-primary" key="keunggulan-list">
          <li>
            <strong>Gratis Jemput Barang</strong> – Sprint Cargo menyediakan layanan penjemputan barang langsung dari
            lokasi Anda di Jakarta tanpa biaya tambahan.
          </li>
          <li>
            <strong>Tarif Ekonomis</strong> – Dengan jaringan logistik yang luas, kami menawarkan tarif kompetitif untuk
            pengiriman ke seluruh Kalimantan.
          </li>
          <li>
            <strong>Beragam Pilihan Armada</strong> – Pengiriman dilakukan melalui jalur laut dan darat menggunakan
            kapal Roro, kapal cargo, serta trucking untuk distribusi ke berbagai kota.
          </li>
          <li>
            <strong>Estimasi Pengiriman Terjamin</strong> – Dengan sistem tracking yang akurat, Anda dapat mengetahui
            posisi barang dalam perjalanan ke Balikpapan, Banjarmasin, Pontianak, Sampit, dan Tarakan.
          </li>
          <li>
            <strong>Dukungan Customer Service</strong> – Tim kami siap membantu Anda 24/7 dalam proses pengiriman dan
            konsultasi logistik.
          </li>
        </ol>,
      ],
    },
    {
      title: "Ekspedisi Jakarta ke Berbagai Wilayah Indonesia",
      content: [
        "Sebagai ekspedisi yang berpengalaman, Sprint Cargo siap membantu distribusi barang, kendaraan, dan alat berat ke berbagai wilayah di Indonesia.",
        "Selengkapnya untuk ekspedisi Jakarta bisa klik tautan di bawah ini:",
      ],
      list: [
        <a href="/sumatera" className="font-semibold text-text-secondary hover:text-primary" key="sumatera">
          Ekspedisi Jakarta Sumatera
        </a>,
        <a href="/kalimantan" className="font-semibold text-text-secondary hover:text-primary" key="kalimantan">
          Ekspedisi Jakarta Kalimantan
        </a>,
        <a href="/ntb" className="font-semibold text-text-secondary hover:text-primary" key="ntb">
          Ekspedisi Jakarta Nusa Tenggara Barat
        </a>,
        <a href="/ntt" className="font-semibold text-text-secondary hover:text-primary" key="ntt">
          Ekspedisi Jakarta Nusa Tenggara Timur
        </a>,
        <a href="/sulawesi" className="font-semibold text-text-secondary hover:text-primary" key="sulawesi">
          Ekspedisi Jakarta Sulawesi
        </a>,
        <a href="/maluku" className="font-semibold text-text-secondary hover:text-primary" key="maluku">
          Ekspedisi Jakarta Maluku
        </a>,
        <a href="/papua" className="font-semibold text-text-secondary hover:text-primary" key="papua">
          Ekspedisi Jakarta Papua
        </a>,
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-secondary">
      <HeroSection
        title="Ekspedisi Jakarta ke Kalimantan Murah dan Cepat"
        description="Sprint Cargo melayani pengiriman dari Jakarta ke Balikpapan, Banjarmasin, Pontianak, Sampit, dan Tarakan dengan tarif hemat dan pengiriman tepat waktu."
        button={{
          text: "Hubungi CS Kami",
          href: "https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <section className="py-6 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none text-text-primary" />
        </div>
        <div className="py-8 mb-8">
          <CargoSearch />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContentBot items={descriptionItemsBot} className="prose prose-lg max-w-none text-text-primary" />
        </div>
        <div className="flex justify-center mt-6">
          <button className="my-4 max-w-3xl flex justify-center items-center text-xl p-3 bg-primary rounded-md text-white transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105 shadow-lg">
            <a href="/calculator" className="w-full h-full flex items-center justify-center">
              Calculator Cargo
            </a>
          </button>
        </div>
      </section>

      <WhyChooseHero />
    </div>
  )
}

export default Kalimantan

