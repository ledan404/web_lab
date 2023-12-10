import { Route, Routes } from 'react-router-dom';
import { Logo } from '../images';
import { useNavigate } from 'react-router-dom';


const Header = ({ catalogSearchChange }) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center border-b-10 border-gray-300 px-5 md:px-10 py-2">
      <div className="w-1/3 flex items-center">
        <img src={Logo} width={80} height={80} />
      </div>
      <nav className="flex items-center justify-center flex-1">
        <button onClick={() => navigate('/')} className="mx-4">Home</button>
        <button onClick={() => navigate('/catalog')} className="mx-4">Catalog</button>
        <button onClick={() => navigate('/cart')}className="mx-4">Cart</button>
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
