import { useSelector, useDispatch } from 'react-redux';
import { getRegions } from '../redux/home/regionSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import asia from '../assets/asia.png';
import africa from '../assets/africa.png';
import australia from '../assets/australia.png';
import europe from '../assets/europe.png';
import nAmerica from '../assets/northern-america.png';
import sAmerica from '../assets/south-america.png';
import styles from '../styles/Regions.module.css';

const regionsNames = {
  'Asia': asia,
  'Oceania': australia,
  'Europe': europe,
  'Africa': africa,
  'Northern America': nAmerica,
  'South America': sAmerica,
}

const Regions = () => {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.regions);

  useEffect(() => {
    // Dispatch the getRegions action only once when the component mounts
    Object.keys(regionsNames).forEach((name) => {
      dispatch(getRegions(name));
    });
  }, []); // Empty array of dependencies ensures the useEffect runs only once on mount

  return (
    <>
      <p className={styles.stats}>STATS BY REGION</p>
      <div className={styles.container}>
        {Object.keys(regionsNames).map((name) => (
        <Link to={`/regions/detailsRegion/${name}`} key={name} state={{regionName: name}}  className={styles.regions} >
          <div>
            <img src={regionsNames[name]} alt={name} className={styles.images} />
            <h2 className={styles.names}>{name}</h2>
            <p className={styles.names}>Population: {regions[name]}</p>
          </div>
        </Link>
        ))}
      </div>
    </>
  );
}

export default Regions;
