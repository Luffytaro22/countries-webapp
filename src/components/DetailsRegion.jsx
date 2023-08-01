import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import asia from '../assets/asia.png';
import africa from '../assets/africa.png';
import australia from '../assets/australia.png';
import europe from '../assets/europe.png';
import nAmerica from '../assets/northern-america.png';
import sAmerica from '../assets/south-america.png';
import styles from '../styles/DetailsRegion.module.css';

const regionsNames = {
  'Asia': asia,
  'Oceania': australia,
  'Europe': europe,
  'Africa': africa,
  'Northern America': nAmerica,
  'South America': sAmerica,
}

const DetailsRegion = () => {
  const location = useLocation();
  const { regionName } = location.state;
  const { regions } = useSelector((state) => state.regions);
  const { region } = useSelector((state) => state.detailRegions);
  return (
    <div>
      <div className={styles.region}>
        <img src={regionsNames[regionName]} alt={regionName} className={styles.images} />
        <div>
          <h2>{regionName}</h2>
          <p>Population: {regions[regionName]}</p>
        </div>
      </div>
      <p>STATS BY COUNTRY</p>
      <div className={styles.countriesContainer}>
        {region[regionName].map((country) => (
          <div key={country.name} className={styles.countries}>
            <img src={country.flag} alt={country.name} className={styles.images} />
            <h3>{country.name}</h3>
            <p>{country.population}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsRegion;
