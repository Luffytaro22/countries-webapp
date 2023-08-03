import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Regions from './components/Home';
import DetailsRegion from './components/DetailsRegion';
import DetailsCountry from './components/DetailsCountry';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Regions />} />
        <Route path='/detailsRegion' element={<DetailsRegion />} />
        <Route path='/detailsCountry' element={<DetailsCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
