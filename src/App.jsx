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
          <Route path="blog/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;