import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const DetailsCountry = () => {
  const location = useLocation();
  const { regionName, countryName } = location.state;
  const { region } = useSelector((state) => state.detailRegions);
  const countryRegion = region[regionName];
  const country = countryRegion.find((obj) => obj.name === countryName);

  return (
    <div>
      <div>
        <img src={country.flagName} alt={country.name} />
        <h2>{country.name}</h2>
        <p>Population: {country.population.toLocaleString('en')}</p>
      </div>
      <p>CITY INFORMATION</p>
      <div>
        <p><strong>Capital:</strong> <span>{country.capital}</span></p>
        <p><strong>Area:</strong> <span>{country.area}</span></p>
        <p><strong>Currency:</strong> <span>{country.currencies[0].name}</span></p>
        <p><strong>Demonym:</strong> <span>{country.demonym}</span></p>
        <p><strong>Language:</strong> <span>{country.languages[0].name}</span></p>
        <p><strong>Region:</strong> <span>{country.region}</span></p>
        <p><strong>Subregion:</strong> <span>{country.subregion}</span></p>
        <p><strong>Timezone:</strong> <span>{country.timezones[0]}</span></p>
      </div>
    </div>
  );
};

export default DetailsCountry;
