import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'; 
import './App.css';
import Header from './components/header';
import ArtDirection from './components/art_direction';
import Gallery from './components/Gallery';
import Home3 from './components/homepage3';
import Start from './components/start';
import Home from './components/HomePage';
import Branding from './components/Branding';
import Marketing from './components/Marketing';
import Visualidentities from './components/visual-Identities';
import Editorial from './components/editorial';
import LaruBiya from './components/larubiya';
import About from './components/about';
import Login from './components/login';
import KidsCooking from './components/kids-cooking';
import { Routes, Route } from 'react-router-dom';
import PageScroll from './components/test';
import ImageGallery from './components/Galleryapp';

function App() {
  return (
    <>
    

      <div className="">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Homepage" element={<Home />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/header" element={<Header />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/editorial" element={< Editorial/>} />
          <Route path="/visual-identities" element={<Visualidentities/>} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/homepage3" element={<Home3 />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/larubiya" element={<LaruBiya/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/kids-cooking" element={<KidsCooking/>} />
          <Route path="/art_direction" element={<ArtDirection/>} /> 
          <Route path="/test" element={<PageScroll/>} /> 
          <Route path="/Galleryapp" element={<ImageGallery/>} /> 
          
          
        </Routes>
      </div>
    </>
  );
}

export default App;
