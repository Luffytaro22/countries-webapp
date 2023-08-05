import { IoIosArrowBack } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import earth from '/planeta-tierra.png';
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
      navigate(`/detailsCountry/${searchQuery}`, {
        state: {
          countryName: searchQuery,
        }
      })
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <IoIosArrowBack onClick={() => navigate(-1)} className={location.pathname === '/' ? styles.hide : styles.back} />
        <AiOutlineMenu className={location.pathname === '/' ? styles.hamburguer : styles.hide} />
        <img src={earth} alt="logo" className={location.pathname === '/' ? `${styles.hide} ${styles.logo}` : styles.hide} />
        <p className={inputVisible ? `${styles.hide}` : `${styles.info}`}>
          {location.pathname === '/'
            ? 'Countries Webapp'
            : location.pathname === '/regions'
            ? 'Regions Population'
            : location.pathname.includes('/regions/detailsRegion')
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
        <div className={styles.divIcons}>
          <AiOutlineSearch onClick={handleIconClick} />
          <BsFillGearFill />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
