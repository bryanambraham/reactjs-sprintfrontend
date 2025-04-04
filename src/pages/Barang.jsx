import DescriptionContent from "../components/DescriptionContent"
import HeroSection from "../components/HeroSection"
import WhyChooseHero from "../components/WhyChooseHero"

function Barang() {
  const descriptionItems = [
    {
      title: "Layanan Jasa Ekspedisi Jakarta",
      content: [
        "Sprint Cargo menyediakan layanan pengiriman cargo hemat di Jakarta dengan proses yang simpel, cepat, dan aman.",
        "Solusi ideal untuk kebutuhan kirim barang besar dan berat, seperti kendaraan, alat berat, mesin industri, hingga barang proyek.",
      ],
    },
    {
      content: [
        "Sprint Cargo telah dipercaya berbagai perusahaan untuk menangani pengiriman barang skala besar ke berbagai penjuru Indonesia.",
        "Sprint Cargo didukung oleh tim profesional, kami pastikan pengiriman berjalan lancar dan tanpa hambatan.",
      ],
    },
    {
      title: "Jasa Ekspedisi Barang",
      content: [
        "Sprint Cargo berpengalaman menangani pengiriman barang berat mulai dari 50 kg hingga ratusan kilogram.",
        "Tim kami terlatih secara khusus untuk menangani packing, loading, dan penyimpanan barang besar dengan standar keamanan tinggi.",
        "Bagi Anda yang mungkin baru pertama kali menggunakan jasa ekspedisi cargo, bisa menyimak informasi jenis barang yang bisa dikirim berikut ini.",
      ],
      list: [
        "Alat berat: excavator, crane, bulldozer, dsb",
        "Elektronik rumah tangga: kulkas, TV, audio system",
        "Material listrik: panel surya, tiang pancang, kabel",
        "Peralatan cetak: mesin sablon, printer industri",
        "Barang kimia non-flammable: pupuk, cairan kimia",
        "Alat kesehatan: mesin USG, tabung oksigen, ranjang pasien",
      ],
    },
    {
        title: "Jasa Ekspedisi Cargo Darat",
        content: [
          "Layanan cargo darat dari Sprint Cargo memanfaatkan armada darat yang luas untuk menjangkau berbagai kota",
          "Ideal untuk kiriman kendaraan dan logistik proyek dengan kapasitas besar.",
        ],
      },
      {
        title: "Jasa Ekspedisi Cargo Laut",
        content: [
          "Untuk pengiriman lintas pulau, cargo laut kami menawarkan efisiensi biaya dengan pilihan armada seperti kapal Roro, kapal barang, dan container.",
          "Kapal PELNI kami gunakan untuk pengiriman cepat dan terjadwal ke pelabuhan besar dan kecil di seluruh Indonesia.",
        ],
      },
      {
        title: "Jasa Ekspedisi Cargo Udara",
        content: [
          "Sprint Cargo menyediakan layanan kirim cepat via udara untuk pengiriman mendesak, terutama ke wilayah Indonesia Timur.",
          "Kami bermitra dengan berbagai maskapai untuk memastikan barang Anda sampai tepat waktu dan aman.",
        ],
      },
      {
        title: "Jasa Pengiriman Kendaraan",
        content: [
          "Sprint Cargo juga menyediakan berbagai opsi kirim mobil dan motor, baik untuk pribadi maupun korporasi.",
          "Keunggulan kirim kendaraan di Sprint Cargo meliputi, tidak perlu kirim mobil ke gudang atau kantor kami, karena mobil akan dijemput oleh tim kami di rumah atau kantor Anda.",
          "Proses pengiriman menggunakan berbagai metode pengiriman yaitu car towing, car carrier, self drive, kapal roro & container.",
        ],
      },
      {
        title: "Kirim Mobil Via Car Towing",
        content: [
          "Layanan car towing dari Sprint Cargo memungkinkan pengiriman mobil satuan secara cepat dan efisien. Metode ini cocok digunakan untuk kirim mobil pribadi, mobil mewah, atau kendaraan yang membutuhkan penanganan khusus.",
          "Keunggulan utama dari car towing adalah fleksibilitasnya—pengiriman bisa dilakukan meski hanya satu unit, tanpa menunggu muatan lainnya. Ini membuat waktu pengiriman lebih singkat.",
          "Mobil Anda juga lebih aman karena tidak digabung dengan kendaraan lain. Sprint Cargo sering melayani klien dari komunitas otomotif maupun event pameran kendaraan.",
        ],
      },
      {
        title: "Kirim Mobil Via Car Carrier",
        content: [
          "Car carrier adalah solusi hemat biaya untuk pengiriman beberapa mobil sekaligus. Menggunakan truk besar seperti FUSO, armada ini dapat mengangkut 5 hingga 6 unit mobil dalam satu perjalanan.",
          "Meskipun jadwal keberangkatan menyesuaikan dengan kuota muatan, opsi ini tetap jadi pilihan favorit untuk distribusi kendaraan dalam jumlah banyak, misalnya untuk dealer atau perusahaan fleet.",
          "Sprint Cargo selalu memastikan proses loading kendaraan dilakukan dengan hati-hati dan sesuai standar keselamatan.",
        ],
      },
      {
        title: "Kirim Mobil Via Self Drive",
        content: [
          "Self drive adalah metode pengiriman mobil di mana kendaraan Anda dikendarai langsung oleh driver profesional dari Sprint Cargo ke lokasi tujuan.",
          "Keunggulannya adalah waktu pengiriman lebih fleksibel dan cepat, tanpa perlu armada tambahan. Jenis mobil apapun bisa dikirim, mulai dari mobil manual, matic, sedan, hingga kendaraan niaga.",
          "Semua driver kami telah dilatih untuk berkendara aman, dan setiap perjalanan diawasi untuk menjamin keamanan kendaraan Anda.",
        ],
      },
      {
        title: "Kirim Mobil Via Kapal Roro",
        content: [
          "Sprint Cargo juga menyediakan layanan kirim mobil via kapal Roro—kapal khusus yang bisa langsung menaikkan kendaraan ke atas dek tanpa perlu alat bantu tambahan.",
          "Kapal Roro banyak digunakan untuk pengiriman kendaraan ke berbagai pulau seperti Sumatera, Kalimantan, dan Sulawesi. Proses muat cepat dan aman, cocok untuk mobil pribadi maupun armada bisnis.",
        ],
      },
      {
        title: "Kirim Mobil Via Container",
        content: [
          "Sprint Cargo juga menyediakan layanan kirim mobil via kapal Roro—kapal khusus yang bisa langsung menaikkan kendaraan ke atas dek tanpa perlu alat bantu tambahan.",
          "Kapal Roro banyak digunakan untuk pengiriman kendaraan ke berbagai pulau seperti Sumatera, Kalimantan, dan Sulawesi. Proses muat cepat dan aman, cocok untuk mobil pribadi maupun armada bisnis.",
        ],
      },
      {
        content: [
          <em className='italic' key='uniqueKey'>
            Selengkapnya tentang
            <a href="/Mobil" className='text-blue-600'> 
                {" "}
                jasa pengiriman mobil.
            </a>
          </em>
        ],
        imageURL: "/placeholder.svg",
        imageAlt: "Mobil",
      },
      {
        title: "Jasa Ekspedisi Kirim Motor",
        content: [
          "Sprint Cargo menyediakan jasa pengiriman motor untuk kebutuhan perusahaan seperti dealer motor, maupun untuk keperluan pribadi seperti pindahan atau pengiriman ke keluarga di luar kota.",
          "Jenis armada yang digunakan untuk pengiriman motor disesuaikan dengan lokasi dan kebutuhan, mulai dari truk, towing, carrier, kapal Roro hingga container.",
        ],
      },
      {
        title: "Jasa Kirim Alat Berat",
        content: [
          "Pengiriman alat berat menjadi salah satu layanan unggulan Sprint Cargo, terutama bagi klien di sektor konstruksi, pertambangan, migas, dan proyek industri lainnya.",
          "Kami melayani pengiriman berbagai jenis alat berat seperti excavator, crane, bulldozer, traktor, dump truck, mesin panen, roller, water tank truck, hingga peralatan proyek lainnya.",
          "Prosesnya praktis: Anda cukup menginformasikan jenis alat berat, dan tim kami akan melakukan pengecekan serta menyiapkan semua kebutuhan pengiriman secara profesional.",
        ],
      },
      {
        imageURL: "/placeholder.svg",
        imageAlt: "Alat Berat",
      },
      {
        title: "Kenapa harus menggunakan Jasa Ekspedisi Sprint Cargo?"
      },
      {
        title: "Layanan Jemput Barang Gratis",
        content: [
          "Mengangkut barang besar tentu bukan hal mudah. Di Sprint Cargo, Anda tak perlu repot mengantar barang ke gudang. Tim kami siap menjemput langsung ke lokasi Anda—khususnya untuk area JABODETABEK.",
          "Tak hanya itu, proses bongkar-muat pun kami bantu sehingga pengiriman jadi lebih praktis. Jika Anda kirim barang yang memerlukan perlindungan tambahan, tersedia juga opsi packing kayu yang lebih aman.",
        ],
      },
      {
        title: "Asuransi Pengiriman Tanpa Biaya Tambahan",
        content: [
          "Sprint Cargo memberikan perlindungan tambahan bagi barang kiriman Anda melalui layanan asuransi gratis. Asuransi ini berlaku hingga nilai barang maksimal Rp 50 juta.",
          "Jika Anda mengirim barang dengan nilai lebih tinggi, kami tetap menyediakan asuransi tambahan dengan biaya premi yang sangat terjangkau.",
          "Kami ingin memastikan Anda merasa tenang, karena risiko kerusakan maupun kehilangan akibat kelalaian kru akan diganti sesuai ketentuan.",
        ],
      },
      {
        title: "Gratis Konsultasi Pengiriman",
        content: [
          "Belum pernah menggunakan jasa pengiriman cargo? Jangan khawatir—tim customer service kami siap bantu memberikan informasi seputar pengemasan, estimasi waktu, jenis armada, hingga rute terbaik.",
          "Silakan hubungi kami lewat WhatsApp atau telepon. Kami siap membantu Anda dari awal hingga proses pengiriman selesai.",
        ],
      },
      {
        title: "Layanan Cargo Terdekat di Sekitar Anda",
        content: [
          "Dengan komitmen untuk menjadi mitra logistik terbaik di Indonesia, Sprint Cargo hadir lebih dekat ke Anda melalui kantor pusat dan cabang kami di berbagai kota.",
          "Kami siap melayani segala kebutuhan pengiriman cargo—baik skala personal, bisnis, maupun proyek besar—dengan jangkauan nasional.",
        ],
      },
      {
        title: "Alamat Ekspedisi Sprint Cargo Di Jakarta",
        content: [
          "Sprint Cargo : Jl Pasar Kebayoran Lama No 20, Kebayoran Lama, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12230",
          "Telepon : +62 852-8265-6556",
          "Melayani jemput barang JABODETABEK dan layanan GRATIS jemput barang area :",
            <h3 className='text-bold min-w-fit italic text-text-primary'>Jakarta Pusat:</h3>,
            <p className='max-w-auto text-text-secondary'>Cempaka Putih, Gambir, Johar Baru, Kemayoran, Menteng, Sawah Besar, Senen, Tanah Abang.</p>,
        ]
      },
      {
        title: "Ekspedisi Jakarta Ke Berbagai Wilayah Indonesia",
        content: [
          "Sebagai Ekspedisi Jakarta yang sudah berpengalaman serta didukung dari berbagai layanan dan banyak keuntungan bagi customer, Cargonesia Express siap membantu distribusi barang, kendaraan dan alat berat anda ke berbagai wilayah Indonesia.",
          "Selengkapnya untuk ekspedisi jakarta bisa klik tautan dibawah ini :",
        ],
        list: [
          <a href="/Sumatera" className='font-semibold text-gray-500'>Ekspedisi Jakarta-Sumatera</a>,
          <a href="/Kalimantan"  className='font-semibold text-gray-500'>Ekspedisi Jakarta-Kalimantan</a>,
          <a href="/Jawa"  className='font-semibold text-gray-500'>Ekspedisi Jakarta-Jawa</a>,
          <a href="/Bali"  className='font-semibold text-gray-500'>Ekspedisi Jakarta-Bali</a>,
          // <a href="/Sulawesi"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Sulawesi</a>,
          // <a href="/Maluku"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Maluku</a>,
          // <a href="/Papua"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Papua</a>,
        ]
      },
  ]

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Jasa Ekspedisi Murah Jakarta Ke Berbagai Wilayah Indonesia"
        description="Jasa ekspedisi murah di Jakarta untuk pengiriman cargo ke berbagai wilayah Indonesia."
        subDescription="Gratis Jemput Area DKI Jakarta & Barang Dijamin Aman!"
        features={[
          { text: "Ongkos kirim murah" },
          { text: "Lebih mudah karena barang bisa dijemput" },
          { text: "Didukung oleh tenaga profesional dan berpengalaman" },
          { text: "Barang sampai tepat waktu" },
        ]}
        button={{
          text: "Hubungi CS Kami",
          href: "https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.",
        }}
        imageUrl="/barang.jpg"
        imageAlt="Hero PIC"
      />

      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none" />
        </div>
      </section>

      <WhyChooseHero />
    </div>
  )
}

export default Barang

