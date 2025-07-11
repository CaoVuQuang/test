import { useParams, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Sản phẩm A", desc: "Mô tả A", price: 500000, img: "" },
  { id: 2, name: "Sản phẩm B", desc: "Mô tả B", price: 1200000, img: "" },
  { id: 3, name: "Sản phẩm C", desc: "Mô tả C", price: 300000, img: "" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => String(p.id) === id);

  if (!product) {
    return <div className="p-4">Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <img
        src={product.img || "https://placehold.co/300x200?text=No+Image"}
        alt={product.name}
      />
      <p>{product.desc}</p>
      <p><strong>{product.price.toLocaleString()} VND</strong></p>
      <button
        onClick={() => navigate("/")}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Quay lại
      </button>
    </div>
  );
}
