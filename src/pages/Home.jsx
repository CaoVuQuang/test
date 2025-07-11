import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Sản phẩm A", desc: "Mô tả A", price: 500000, img: "" },
  { id: 2, name: "Sản phẩm B", desc: "Mô tả B", price: 1200000, img: "" },
  { id: 3, name: "Sản phẩm C", desc: "Mô tả C", price: 300000, img: "" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="p-4 space-y-6">
      <section>
        <h2 className="text-lg font-semibold mb-2">Danh sách sản phẩm</h2>
        <div className="flex flex-wrap gap-4">
          {products.map(p => (
            <div key={p.id} className="border rounded bg-white p-4 max-w-xs">
              <img
                src={p.img || "https://placehold.co/300x200?text=No+Image"}
                alt={p.name}
              />
              <h3 className="font-bold">{p.name}</h3>
              <p>{p.desc}</p>
              <p><strong>{p.price.toLocaleString()} VND</strong></p>
              <button
                onClick={() => navigate(`/product/${p.id}`)}
                className="bg-green-600 text-white px-3 py-1 rounded mt-2"
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
