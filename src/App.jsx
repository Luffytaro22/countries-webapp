import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
