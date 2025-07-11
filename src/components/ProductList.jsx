import ProductCard from './ProductCard';

export default function ProductList({ products, search, filterPrice, favorites, toggleFavorite, setModalProduct }) {
  const filtered = products.filter(p => {
    let match = true;
    if (search) match = p.name.toLowerCase().includes(search.toLowerCase());
    if (!match) return false;
    if (filterPrice === '<500') return p.price < 500000;
    if (filterPrice === '500-1m') return p.price >= 500000 && p.price <= 1000000;
    if (filterPrice === '>1m') return p.price > 1000000;
    return true;
  });

  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Danh sách sản phẩm</h2>
      <div className="flex flex-wrap gap-4">
        {filtered.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            isFavorite={!!favorites.find(f => f.id === p.id)}
            toggleFavorite={toggleFavorite}
            setModalProduct={setModalProduct}
          />
        ))}
      </div>
    </section>
  );
}
