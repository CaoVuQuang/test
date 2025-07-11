export default function SearchFilter({ search, setSearch, filterPrice, setFilterPrice }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Tìm kiếm & lọc</h2>
      <input
        type="text"
        placeholder="Tìm theo tên…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-1 mr-2"
      />
      <select value={filterPrice} onChange={e => setFilterPrice(e.target.value)} className="border p-1">
        <option value="all">Tất cả</option>
        <option value="<500">Dưới 500K</option>
        <option value="500-1m">500K–1 triệu</option>
        <option value=">1m">Trên 1 triệu</option>
      </select>
    </section>
  );
}
