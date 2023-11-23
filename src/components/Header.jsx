import { Link, NavLink } from 'react-router-dom';
import { logo } from '../assets/images'
const Header = () => {
  return (
    <header className="w-full absolute">
    <nav className="flex justify-around items-center" >
        <a href="/">
          <img 
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="m-0 w-[50px] h-[50px] pl-4"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16">
        <li><NavLink exact to="/Home">Home</NavLink></li>
        <li><NavLink exact to="/Catalog">Catalog</NavLink></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>      
    </header>
  );
};

export default Header;
