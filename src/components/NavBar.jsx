import { IoIosArrowBack } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const location = useLocation();
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
  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate(-1);
    }
  };

  return (
    <header>
      <nav>
        <IoIosArrowBack onClick={handleClick} />
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
