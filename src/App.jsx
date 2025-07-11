import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchSuggestions } from './api/mockApi';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import ProductList from './components/ProductList';
import Favorites from './components/Favorites';
import Suggestions from './components/Suggestions';
import ProductModal from './components/ProductModal';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filterPrice, setFilterPrice] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const toggleFavorite = (product) => {
    if (favorites.find(f => f.id === product.id)) {
      setFavorites(favorites.filter(f => f.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const getSuggestions = () => {
    fetchSuggestions().then(setSuggestions).catch(() => {
      alert('Không thể lấy gợi ý lúc này');
    });
  };

  return (
    <div>
      <Header />

      <main className="p-4 space-y-6">
        <SearchFilter search={search} setSearch={setSearch} filterPrice={filterPrice} setFilterPrice={setFilterPrice} />

        <ProductList
          products={products}
          search={search}
          filterPrice={filterPrice}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setModalProduct={setModalProduct}
        />

        <Favorites favorites={favorites} />

        <Suggestions suggestions={suggestions} getSuggestions={getSuggestions} />

        <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
      </main>
    </div>
  );
}

export default App;
