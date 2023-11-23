import { Route, Routes } from 'react-router-dom';
import { Logo } from '../images';

const Header = ({ catalogSearchChange }) => {
  return (
    <header className="flex items-center border-b-10 border-gray-300 px-5 md:px-10 py-2">
      <div className="w-1/3 flex items-center">
        <img src={Logo} width={80} height={80} />
      </div>
      <nav className="flex items-center justify-center flex-1">
        <a href="/" className="mx-4">Home</a>
        <a href="/catalog" className="mx-4">Catalog</a>
        <a href="/cart" className="mx-4">Cart</a>
      </nav>
      <div className="w-1/3 flex items-center justify-center">
        <Routes>
          <Route
            path="/catalog"
            element={
              <div className="flex">
                <input
                  type="text"
                  className="border rounded-full px-4 py-2 "
                  onChange={catalogSearchChange}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </header>
  );
};

export default Header;
