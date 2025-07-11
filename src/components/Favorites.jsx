export default function Favorites({ favorites }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Yêu thích</h2>
      <div className="flex flex-wrap gap-4">
        {favorites.map(f => (
          <div key={f.id} className="border rounded p-2 bg-yellow-100 max-w-xs">
            {f.name} — {f.price.toLocaleString()} VND
          </div>
        ))}
      </div>
    </section>
  );
}
