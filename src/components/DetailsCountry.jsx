import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from '../styles/DetailsCountry.module.css';

const DetailsCountry = () => {
  const location = useLocation();
  let country;
  const { regionName, countryName } = location.state;
  const { region } = useSelector((state) => state.detailRegions);

  if (!regionName) {
    Object.keys(region).some((regionName) => {
      country = region[regionName].find((obj) => obj.name.toLowerCase() === countryName.toLowerCase());
      return country !== undefined;
    });
  } else {
    const countryRegion = region[regionName];
    country = countryRegion.find((obj) => obj.name === countryName);
  }

  if (!country) {
    return (
      <div className={styles.error}>
        <h2>Error, not matching</h2>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.country}>
        <img src={country.flagName} alt={country.name} className={styles.images} />
        <div>
          <h2>{country.name}</h2>
          <p>Population: {country.population.toLocaleString('en')}</p>
        </div>
      </div>
      <p className={styles.stats}>COUNTRY INFORMATION</p>
      <div className={styles.infoContainer}>
        <p className={styles.info}><strong>Capital:</strong> <span>{country.capital}</span></p>
        <p className={styles.info}><strong>Area:</strong> <span>{country.area}</span></p>
        {country.currencies[0] ? <p className={styles.info}><strong>Currency:</strong> <span>{country.currencies[0].name}</span></p> : ''}
        <p className={styles.info}><strong>Demonym:</strong> <span>{country.demonym}</span></p>
        <p className={styles.info}><strong>Language:</strong> <span>{country.languages[0].name}</span></p>
        <p className={styles.info}><strong>Region:</strong> <span>{country.region}</span></p>
        <p className={styles.info}><strong>Subregion:</strong> <span>{country.subregion}</span></p>
        <p className={styles.info}><strong>Timezone:</strong> <span>{country.timezones[0]}</span></p>
      </div>
    </div>
  );
};

export default DetailsCountry;
