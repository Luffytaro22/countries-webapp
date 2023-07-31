import asia from '../assets/asia.png';
import africa from '../assets/africa.png';
import australia from '../assets/australia.png';
import europe from '../assets/europe.png';
import nAmerica from '../assets/northern-america.png';
import sAmerica from '../assets/south-america.png';

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
    <div>
      {Object.keys(regions).map((name) => (
        <div key={name}>
          <img src={regions[name]} alt={name} />
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
