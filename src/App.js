import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home';
import CatalogPage from './components/pages/Catalog';
import CartPage from './components/pages/Cart';
import ItemPage from './components/pages/Item';
import { useState } from 'react';
import { DogsData as DogsData } from './components/pages/catalog-logic/logic';

function App() {

  const [dogs, setDogs] = useState(DogsData);
  const [catalogSearch, setCatalogSearch] = useState("");
  const handleCatalogSearchChange = (event) => {
    setCatalogSearch(event.target.value);
  };

  return (
    <BrowserRouter>
      <Header catalogSearchChange={handleCatalogSearchChange} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage dogs={dogs} catalogSearch={catalogSearch} />} />
        <Route path="/dogs/:id" element={<ItemPage dogs={dogs} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
