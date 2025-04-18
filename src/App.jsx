import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Bali from './pages/Bali';
import Jawa from './pages/Jawa';
import Kalimantan from './pages/Kalimantan';
import Calculator from './pages/Calculator';
import Layout from './components/Layout';
import AlatBerat from './pages/AlatBerat';
import Mobil from './pages/Mobil';
import Motor from './pages/Motor';
import Barang from './pages/Barang';
import SewaTruk from './pages/SewaTruk';
import Sumatera from './pages/Sumatera';
import Promo from './pages/Promo';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Ongkir from './pages/Ongkir';

import Bandung from "./pages/Bandung";
import Semarang from "./pages/Semarang";
import Yogyakarta from "./pages/Yogyakarta";
import Surabaya from "./pages/Surabaya";
import Malang from "./pages/Malang";
import Solo from "./pages/Solo";
import Cilacap from "./pages/Cilacap";
import Badung from "./pages/Badung";
import Buleleng from "./pages/Buleleng";
import Denpasar from "./pages/Denpasar";
import Gianyar from "./pages/Gianyar";
import Karangasem from "./pages/Karangasem";
import Maluku from "./pages/Maluku";
import NTB from "./pages/NTB";
import NTT from "./pages/NTT";
import NusaPenida from "./pages/NusaPenida";
import Sulawesi from "./pages/Sulawesi";
import Tabanan from "./pages/Tabanan";
import Papua from "./pages/Papua";
import AgentRegistration from "./pages/AgentRegistration"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="alatberat" element={<AlatBerat />} />
          <Route path="sewatruk" element={<SewaTruk />} />
          <Route path="mobil" element={<Mobil />} />
          <Route path="motor" element={<Motor />} />
          <Route path="barang" element={<Barang />} />
          <Route path="bali" element={<Bali />} />
          <Route path="jawa" element={<Jawa />} />
          <Route path="sumatera" element={<Sumatera />} />
          <Route path="kalimantan" element={<Kalimantan />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="ongkir" element={<Ongkir />} />
          <Route path="promo" element={<Promo />} />
          <Route path="blog" element={<Blog />} />
          <Route path="agent-registration" element={<AgentRegistration />} /> 
          {/* <Route path="blog/:id" element={<BlogPost />} /> */}
          
          {/* Legacy numeric ID route - will be redirected */}
          <Route path="blog/:id(\d+)" element={<BlogPost />} />

          {/* New slug-based route */}
          <Route path="blog/:slug" element={<BlogPost />} />
          
          <Route path="sewatruk" element={<SewaTruk />} />
          <Route path="bandung" element={<Bandung />} />
          <Route path="semarang" element={<Semarang />} />
          <Route path="yogyakarta" element={<Yogyakarta />} />
          <Route path="surabaya" element={<Surabaya />} />
          <Route path="malang" element={<Malang />} />
          <Route path="solo" element={<Solo />} />
          <Route path="cilacap" element={<Cilacap />} />
          <Route path="badung" element={<Badung />} />
          <Route path="buleleng" element={<Buleleng />} />
          <Route path="denpasar" element={<Denpasar />} />
          <Route path="gianyar" element={<Gianyar />} />
          <Route path="karangasem" element={<Karangasem />} />
          <Route path="maluku" element={<Maluku />} />
          <Route path="ntb" element={<NTB />} />
          <Route path="ntt" element={<NTT />} />
          <Route path="nusapenida" element={<NusaPenida />} />
          <Route path="sulawesi" element={<Sulawesi />} />
          <Route path="tabanan" element={<Tabanan />} />
          <Route path="papua" element={<Papua />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;