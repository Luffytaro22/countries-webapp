import { IoIosArrowBack } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <IoIosArrowBack onClick={() => navigate(-1)} />
        <input type="text" placeholder="City name..." />
        <BsFillGearFill />
      </nav>
    </header>
  );
}

export default NavBar;
