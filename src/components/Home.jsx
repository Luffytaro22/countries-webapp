import { useSelector, useDispatch } from 'react-redux';
import { getRegions } from '../redux/home/regionSlice';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import asia from '../assets/asia.png';
import africa from '../assets/africa.png';
import australia from '../assets/australia.png';
import europe from '../assets/europe.png';
import nAmerica from '../assets/northern-america.png';
import sAmerica from '../assets/south-america.png';
import styles from '../styles/Home.module.css';

const regionsNames = {
  'Asia': asia,
  'Oceania': australia,
  'Europe': europe,
  'Africa': africa,
  'Northern America': nAmerica,
  'South America': sAmerica,
}

const Home = () => {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.regions);

  useEffect(() => {
    // Dispatch the getRegions action only once when the component mounts
    Object.keys(regionsNames).forEach((name) => {
      dispatch(getRegions(name));
    });
  }, []); // Empty array of dependencies ensures the useEffect runs only once on mount

  return (
    <div>
      <NavLink to="/details" className={styles.container}>
      {Object.keys(regionsNames).map((name) => (
        <div key={name} className={styles.regions}>
          <img src={regionsNames[name]} alt={name} className={styles.images} />
          <h2 className={styles.names}>{name}</h2>
          <p>Population: {regions[name]}</p>
        </div>
      ))}
      </NavLink>
    </div>
  );
}

export default Home;
