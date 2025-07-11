export default function ProductCard({ product, isFavorite, toggleFavorite, setModalProduct }) {
  return (
    <div className="border rounded bg-white p-4 max-w-xs">
      <img
        src={product.img}
        alt={product.name}
        onError={(e) => e.target.src = 'https://placehold.co/300x200?text=No+Image'}
      />
      <h3 className="font-bold">{product.name}</h3>
      <p>{product.desc}</p>
      <p><strong>{product.price.toLocaleString()} VND</strong></p>
      <button onClick={() => setModalProduct(product)} className="bg-green-600 text-white px-3 py-1 rounded mt-2 mr-2">Xem chi tiết</button>
      <button onClick={() => toggleFavorite(product)} className="bg-yellow-500 text-white px-3 py-1 rounded mt-2">
        {isFavorite ? 'Bỏ yêu thích' : 'Yêu thích'}
      </button>
    </div>
  );
}
