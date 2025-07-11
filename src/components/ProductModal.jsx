export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div onClick={e => e.stopPropagation()} className="bg-white p-4 rounded max-w-md">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <img src={product.img} alt={product.name} className="my-2" />
        <p>{product.desc}</p>
        <p><strong>{product.price.toLocaleString()} VND</strong></p>
        <button onClick={onClose} className="mt-2 px-3 py-1 bg-red-500 text-white rounded">Đóng</button>
      </div>
    </div>
  );
}
