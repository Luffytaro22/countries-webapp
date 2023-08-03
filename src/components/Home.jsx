import { Link } from 'react-router-dom';
import world from '../assets/global-map.png';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.welcome}>
        <h1>Welcome to the Countries Webapp!</h1>
        <img src={world} alt="world" className={styles.images} />
      </div>
      <p className={styles.stats}>FILTERS</p>
      <div className={styles.categories}>
        <h2>Select the categories!</h2>
        <ul className={styles.list}>
          <li>
            <Link to="/regions">
              Continents
            </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
