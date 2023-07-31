import asia from '../assets/asia.png';
import africa from '../assets/africa.png';
import australia from '../assets/australia.png';
import europe from '../assets/europe.png';
import nAmerica from '../assets/northern-america.png';
import sAmerica from '../assets/south-america.png';
import styles from '../styles/Home.module.css';

const regions = {
  'Asia': asia,
  'Australia': australia,
  'Europe': europe,
  'Africa': africa,
  'Northern America': nAmerica,
  'South America': sAmerica,
}

const Home = () => {
  return (
    <div className={styles.container}>
      {Object.keys(regions).map((name) => (
        <div key={name} className={styles.regions}>
          <img src={regions[name]} alt={name} className={styles.images} />
          <h2 className={styles.names}>{name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
