import { IoIosArrowBack } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [inputVisible, setInputVisible] = useState(false);

  const handleIconClick = () => {
    setInputVisible(true);
  };

  const handleCloseIcon = () => {
    setInputVisible(false);
  };

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
    <header className={styles.header}>
      <nav className={styles.nav}>
        <IoIosArrowBack onClick={() => navigate(-1)} className={location.pathname === '/' ? styles.hide : ''} />
        <AiOutlineMenu className={location.pathname === '/' ? '' : styles.hide} />
        <p className={inputVisible ? `${styles.hide}` : `${styles.info}`}>
          {location.pathname === '/'
            ? 'Continents Population'
            : location.pathname === '/detailsRegion'
            ? 'Countries Population'
            : 'Country Information'
          }
        </p>
        <div className={inputVisible ? `${styles.inputContainer}` : `${styles.inputContainer} ${styles.hide}`}>
          <input
            type="text"
            placeholder="Country name..."
            onChange={handleInputChange}
            onKeyDown={findCountry}
            className={styles.input}
            />
            <AiOutlineClose className={styles.closeInput} onClick={handleCloseIcon} />
        </div>
        <AiOutlineSearch onClick={handleIconClick} />
        <BsFillGearFill />
      </nav>
    </header>
  );
}

export default NavBar;
