export const fetchProducts = () => Promise.resolve([
  { id: 1, name: "Khoá học React", desc: "Học React từ cơ bản đến nâng cao", price: 400000, img: "https://via.placeholder.com/300x200?text=React" },
  { id: 2, name: "Tiếng Anh giao tiếp", desc: "Nói tiếng Anh tự tin", price: 700000, img: "https://via.placeholder.com/300x200?text=English" },
  { id: 3, name: "Data Science", desc: "Phân tích dữ liệu", price: 1200000, img: "https://via.placeholder.com/300x200?text=Data+Science" }
]);

export const fetchSuggestions = () => Promise.resolve([
  { id: 1, name: "Khoá học React", price: 400000 },
  { id: 3, name: "Data Science", price: 1200000 }
]);
