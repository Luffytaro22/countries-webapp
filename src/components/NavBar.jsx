import { IoIosArrowBack } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const findCountry = (event) => {
    if (event.key === 'Enter') {
      navigate('/detailsCountry', {
        state: {
          countryName: searchQuery,
        }
      })
    }
  };
  return (
    <header>
      <nav>
        <IoIosArrowBack onClick={() => navigate(-1)} />
        <input
          type="text"
          placeholder="Country name..."
          onChange={handleInputChange}
          onKeyDown={findCountry}
          />
        <BsFillGearFill />
      </nav>
    </header>
  );
}

export default NavBar;
