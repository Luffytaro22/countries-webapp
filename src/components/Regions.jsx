import { useSelector } from 'react-redux';
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
  const { regions } = useSelector((state) => state.regions);

  return (
    <>
      <p className={styles.stats}>STATS BY REGION</p>
      <div className={styles.container}>
        {Object.keys(regionsNames).map((name) => (
        <Link to={`/regions/detailsRegion/${name}`} key={name} state={{regionName: name}}  className={styles.regions} style={{ backgroundImage: `linear-gradient(rgba(67, 104, 176, 0.5), rgba(67, 104, 176, 0.5)), url(${regionsNames[name]})` }} >
          <div>
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
