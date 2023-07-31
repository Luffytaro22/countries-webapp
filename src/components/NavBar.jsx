import { IoIosArrowBack } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';

const NavBar = () => {
  return (
    <header>
      <nav>
        <IoIosArrowBack />
        <input type="text" placeholder="City name..." />
        <BsFillGearFill />
      </nav>
    </header>
  );
}

export default NavBar;
