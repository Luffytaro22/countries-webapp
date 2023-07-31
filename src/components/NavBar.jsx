import { IoIosArrowBack } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <IoIosArrowBack />
        </NavLink>
        <input type="text" placeholder="City name..." />
        <BsFillGearFill />
      </nav>
    </header>
  );
}

export default NavBar;
