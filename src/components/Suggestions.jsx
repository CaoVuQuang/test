export default function Suggestions({ suggestions, getSuggestions }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Gợi ý thông minh (AI)</h2>
      <button onClick={getSuggestions} className="bg-blue-600 text-white px-3 py-1 rounded">Gợi ý sản phẩm</button>
      <div className="flex flex-wrap gap-4 mt-2">
        {suggestions.map(s => (
          <div key={s.id} className="border rounded p-2 bg-green-100 max-w-xs">
            {s.name} — {s.price.toLocaleString()} VND
          </div>
        ))}
      </div>
    </section>
  );
}
