import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

/* HELPERS */
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randFloat = (min, max, dec = 1) =>
  (Math.random() * (max - min) + min).toFixed(dec);

const messages = [
  "🔥 Alta demanda",
  "⚠️ Últimas unidades",
  "🛒 Comprado hace 2 min",
];

const getRandomMessage = () => messages[randInt(0, messages.length - 1)];

/* DATA */
const baseProducts = [
  {
    id: 1,
    name: "Audífonos Bluetooth",
    category: "Electrónica",
    price: 599,
    emoji: "🎧",
  },
  {
    id: 2,
    name: "Smartwatch Deportivo",
    category: "Electrónica",
    price: 1299,
    emoji: "⌚",
  },
  {
    id: 3,
    name: "Chamarra Impermeable",
    category: "Ropa",
    price: 899,
    emoji: "🧥",
  },
  {
    id: 4,
    name: "Zapatillas Running",
    category: "Deportes",
    price: 1499,
    emoji: "👟",
  },
  {
    id: 5,
    name: "Mochila Antirrobo",
    category: "Deportes",
    price: 699,
    emoji: "🎒",
  },
  {
    id: 6,
    name: "Lámpara LED Inteligente",
    category: "Hogar",
    price: 349,
    emoji: "💡",
  },
];

const categories = ["Todos", "Electrónica", "Ropa", "Hogar", "Deportes"];

/* COMPONENTES */

function Header() {
  return (
    <header className="bg-primary text-white py-3 shadow sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white text-decoration-none">
          ← Volver
        </Link>
        <h5 className="m-0">🛍️ Tienda MX</h5>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="text-white text-center py-5"
      style={{ background: "linear-gradient(90deg, #2563eb, #9333ea)" }}
    >
      <div className="container">
        <h2 className="fw-bold">Ofertas de Temporada</h2>
        <p>Hasta 40% de descuento</p>
      </div>
    </section>
  );
}

function Filters({ search, setSearch, selectedCategory, setSelectedCategory }) {
  return (
    <div className="bg-white border-bottom py-3">
      <div className="container d-flex flex-wrap gap-2">
        <input
          className="form-control"
          placeholder="Buscar..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn ${
              selectedCategory === cat ? "btn-primary" : "btn-outline-secondary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ p, onBuy }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm position-relative">
        <span className="badge bg-danger position-absolute m-2">
          -{p.discount}%
        </span>

        <div className="text-center fs-1 p-4">{p.emoji}</div>

        <div className="card-body">
          <h6>{p.name}</h6>

          <div className="text-warning">{"★".repeat(Math.floor(p.rating))}</div>

          <p className="text-danger small">{getRandomMessage()}</p>

          <p className="fw-bold text-primary">${p.price}</p>

          {p.stock < 10 && (
            <div className="alert alert-danger p-1 text-center">
              ¡Solo {p.stock}!
            </div>
          )}

          <button onClick={() => onBuy(p)} className="btn btn-success w-100">
            Comprar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      © 2026 Tienda MX
    </footer>
  );
}

/* MAIN */

export default function Tienda() {
  const whatsappNumber = "5523456789";

  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const products = useMemo(() => {
    return baseProducts.map((p) => ({
      ...p,
      rating: Number(randFloat(4.1, 4.9)),
      reviews: randInt(50, 200),
      stock: randInt(3, 15),
      discount: randInt(10, 40),
    }));
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "Todos" || p.category === selectedCategory),
  );

  const handleBuy = (p) => {
    const message = `Hola, quiero comprar: ${p.name} - $${p.price} MXN`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <Hero />

      <div className="alert alert-warning text-center m-0">
        🔥 {randInt(5, 25)} personas compraron hoy
      </div>

      <Filters
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="container py-5">
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <div className="row g-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} onBuy={handleBuy} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
