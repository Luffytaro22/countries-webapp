import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Regions from './components/Regions';
import DetailsRegion from './components/DetailsRegion';
import DetailsCountry from './components/DetailsCountry';
import Countries from './components/Countries';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/countries" element={<Countries />} />
        <Route path='/regions/detailsRegion/:regionName' element={<DetailsRegion />} />
        <Route path='/detailsCountry/:countryName' element={<DetailsCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
