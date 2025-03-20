import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Bali from './pages/Bali';
import Jawa from './pages/Jawa';
import Kalimantan from './pages/Kalimantan';
import Calculator from './pages/Calculator';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bali" element={<Bali />} />
          <Route path="jawa" element={<Jawa />} />
          <Route path="kalimantan" element={<Kalimantan />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;