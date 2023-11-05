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
        <li><a href="/" className="">Home</a></li>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>      
    </header>
  );
};

export default Header;
