import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/DetailsRegion.module.css';

const Countries = () => {
  const { region } = useSelector((state) => state.detailRegions);
  // Utiliza useMemo para copiar y ordenar la información de region solo una vez
  const sortedRegions = useMemo(() => {
    let countries = [];
    Object.keys(region).map((name) => {
      let regionCountries = [...region[name]];
      countries.push(regionCountries);
    });

    return countries.flat().sort((a, b) => a.name.localeCompare(b.name));
  }, [region]);
  return (
    <>
    <p className={styles.stats}>STATS BY COUNTRY</p>
    <div className={styles.countriesContainer}>
      {sortedRegions.map((country) => (
      <Link to={`/detailsCountry/${country.name}`} key={country.name} state={{countryName: country.name}} className={styles.countries} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${country.flagName})`}}>
        <div>
          <h3 className={styles.names}>{country.name}</h3>
          <p className={styles.names}>Population: {country.population.toLocaleString('en')}</p>
        </div>
      </Link>
      ))}
    </div>
    </>
  );
};

export default Countries;
