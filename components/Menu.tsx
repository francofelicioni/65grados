"use client";
import { useState } from "react";

interface MenuItem {
  name: string;
  price?: number;
  priceXL?: number;
  description?: string;
  note?: string;
  vegan?: boolean;
  vegetarian?: boolean;
}

interface Category {
  id: string;
  label: string;
  labelCN?: string;
  items: MenuItem[];
}

const categories: Category[] = [
  {
    id: "desayunos",
    label: "Desayunos",
    labelCN: "早餐",
    items: [
      { name: "Croissant + Café Mediano", price: 7900 },
      { name: "Roll Aduki o Canela + Café Mediano", price: 9900 },
      { name: "Budín + Café Mediano", price: 9100 },
      { name: "Dúo — 2 Onigiri + Limonada", price: 16000, note: "para 2" },
      { name: "Para 2 — 1 Postre + Asian Tea", price: 12000, note: "para 2" },
      { name: "Para 2 — 2 Tostadas + Filtrado + Chía Activada", price: 49000, note: "para 2" },
      { name: "Para 2 — 2 Sandos + Filtrado + Postre", price: 55000, note: "para 2" },
    ],
  },
  {
    id: "specialty",
    label: "Specialty Coffee",
    labelCN: "精品咖啡",
    items: [
      { name: "Doppio", price: 5200, priceXL: 6200 },
      { name: "Long Black", price: 5900, priceXL: 6500 },
      { name: "Magic", price: 5800, priceXL: 6900 },
      { name: "Moccachino", price: 5900 },
      { name: "Flat White", price: 5200 },
      { name: "Latte", price: 6300, priceXL: 7100 },
      { name: "Latte Matcha", price: 6400, priceXL: 7100 },
      { name: "Estrella 65°", price: 6900, description: "Nuestra creación especial" },
      { name: "Clásico · Caramelo / Vainilla / Avellana", price: 4900 },
    ],
  },
  {
    id: "filtrados",
    label: "Filtrados",
    labelCN: "手沖",
    items: [
      { name: "V60", price: 9000 },
      { name: "Kalita", price: 9000 },
      { name: "Chemex", price: 9000 },
      { name: "Origami", price: 9000 },
    ],
  },
  {
    id: "iced",
    label: "Iced Coffee",
    labelCN: "冰咖啡",
    items: [
      { name: "Cold Brew", price: 5800, description: "Café molido macerado 24 hs" },
      { name: "Tepache Cold Brew", price: 6700, description: "Fermento de ananá · rodaja de ananá" },
      { name: "Mont Blanc", price: 6700, description: "Cold brew · crema de naranja · cáscara de naranja" },
      { name: "Espresso Tonic", price: 6200, description: "Tónica · hielo · espresso" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas Frías",
    labelCN: "冷飲",
    items: [
      { name: "Limonada", price: 6000 },
      { name: "Hibiscus Lima Oolong", price: 6200 },
      { name: "Mango Coco Nube", price: 7500 },
      { name: "Matcha Frutilla Latte", price: 6900 },
      { name: "Uva Lima", price: 7000 },
      { name: "Exprimido de Naranja", price: 6000 },
      { name: "Iced Tea · Menta / Frutos Rojos", price: 5900 },
    ],
  },
  {
    id: "bubble",
    label: "Bubble Tea",
    labelCN: "珍珠奶茶",
    items: [
      { name: "Black Sugar", price: 6600, description: "Azúcar negra · bubble · leche · té oolong" },
      { name: "Taro", price: 6600, description: "Taro · bubble · leche · té oolong" },
      { name: "Matcha", price: 6600, description: "Matcha · bubble · leche" },
      { name: "Oolong", price: 6600, description: "Bubble · leche · té oolong" },
      { name: "Watermelon", price: 6600, description: "Sandía · té oolong · gelatina de coco" },
      { name: "Pineapple Coco Jelly", price: 6600, description: "Ananá · leche de coco · menta · gelatina de coco" },
      { name: "+ Bubble / Coco Jelly / Aduki", price: 6000, note: "topping" },
    ],
  },
  {
    id: "taiwan-tea",
    label: "Taiwan Tea",
    labelCN: "台灣茶",
    items: [
      { name: "Maicha", description: "Sabor suave, dulce y aroma equilibrado" },
      { name: "Verde", description: "Tostado, con notas de nuez y cereal" },
      { name: "Oolong", description: "Fresco, herbal con notas cítricas" },
    ],
  },
  {
    id: "tostadas",
    label: "Tostadas",
    labelCN: "烤土司",
    items: [
      { name: "Hummus", price: 13500, description: "Pan de campo · hummus cítrico · rúcula · hongos asados · mermelada de tomate", vegan: true },
      { name: "Queso Brie", price: 15200, description: "Pan de campo · brie · tomate confitado · pesto de albahaca y lima" },
      { name: "Huevo Revuelto", price: 10800, description: "Pan de campo · queso crema · huevo revuelto · semillas" },
      { name: "Queso Crema y Mermelada", price: 10800, description: "Pan de campo · queso crema · mermelada de frutos rojos" },
    ],
  },
  {
    id: "sando",
    label: "Sando",
    labelCN: "三明治",
    items: [
      { name: "Capresse", price: 17800, description: "Pan lactal grueso · muzzarella · tomate · pesto de albahaca" },
      { name: "Avocado", price: 19700, description: "Pan lactal grueso · palta · rúcula · huevo revuelto · tomate" },
      { name: "Gírgola", price: 19700, description: "Pan lactal grueso · hummus de remolacha · pesto de tomate · gírgola en panko" },
      { name: "Medallón Mapo", price: 22700, description: "Medallón de tofu y hongos · hummus picante Mapo · lechuga · pepino", vegan: true },
    ],
  },
  {
    id: "pastry",
    label: "Pastry",
    labelCN: "糕點",
    items: [
      { name: "Croissant · Clásico / Queso / Xiangchun", price: 5900 },
      { name: "Roll Aduki / Canela", price: 6800 },
      { name: "Budín", price: 6900 },
      { name: "Budín Vegano", price: 6000, vegan: true },
      { name: "Scone", price: 5900 },
      { name: "Medialuna Dulce", price: 5200 },
      { name: "Cookie", price: 2300 },
      { name: "Croissant Relleno · Queso", price: 6400, description: "Mozzarella fundida" },
      { name: "Croissant Relleno · Queso Azul", price: 10800, description: "Tomate · queso azul · mozzarella · rúcula" },
      { name: "Scone Relleno", price: 12500, description: "Queso mozzarella · huevo revuelto · rúcula · tomate" },
    ],
  },
  {
    id: "healthy",
    label: "Healthy",
    labelCN: "健康選項",
    items: [
      { name: "Chía Activada", price: 7200, description: "Leche de almendra · granola · fruta de estación", vegan: true },
      { name: "Ensalada Brie", price: 15200, description: "Rúcula · cherry · queso brie · calabaza asada · miel de ají · vinagre" },
      { name: "Ensalada de Hongos", price: 17900, description: "Hojas verdes · tomates cherry · paté de hongos · mbeju · salsa de sésamo" },
    ],
  },
  {
    id: "snacks",
    label: "Taiwan Street Food",
    labelCN: "台灣小吃",
    items: [
      { name: "Onigiri", price: 9100, description: "Repollo · zanahoria · carne de soja", vegetarian: true },
      { name: "Dumpling", price: 6200, description: "Carne de soja · tofu", vegetarian: true },
    ],
  },
];

function formatPrice(price: number) {
  return `$${price.toLocaleString("es-AR")}`;
}

export default function Menu() {
  const [active, setActive] = useState("desayunos");

  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[#1a1aaa] text-sm tracking-[0.3em] uppercase font-sans mb-3">
            菜單 · Menú
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light text-gray-900"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Todo lo que ofrecemos
          </h2>
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-2 mb-10 reveal">
          <div className="flex gap-2 min-w-max mx-auto justify-start md:justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 text-xs tracking-widest uppercase font-sans transition-all duration-200 whitespace-nowrap border ${
                  active === cat.id
                    ? "bg-[#1a1aaa] text-white border-[#1a1aaa]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#1a1aaa] hover:text-[#1a1aaa]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active category */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline gap-3 mb-8 pb-4 border-b border-gray-100">
            <h3
              className="font-serif text-3xl font-light text-gray-900"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {current.label}
            </h3>
            {current.labelCN && (
              <span className="text-gray-400 text-lg" style={{ fontFamily: "serif" }}>
                {current.labelCN}
              </span>
            )}
          </div>

          <ul className="divide-y divide-gray-50">
            {current.items.map((item, i) => (
              <li
                key={i}
                className="py-4 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-sans text-[15px] text-gray-900">{item.name}</span>
                    {item.vegan && (
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-sans tracking-wider">
                        VEGANO
                      </span>
                    )}
                    {item.vegetarian && !item.vegan && (
                      <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-sans tracking-wider">
                        VEG
                      </span>
                    )}
                    {item.note && (
                      <span className="text-[10px] bg-blue-50 text-[#1a1aaa] px-2 py-0.5 rounded-full font-sans tracking-wider uppercase">
                        {item.note}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-400 mt-0.5 font-sans">{item.description}</p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  {item.price && (
                    <span className="font-sans text-[15px] text-gray-900">
                      {formatPrice(item.price)}
                    </span>
                  )}
                  {item.priceXL && (
                    <span className="text-sm text-gray-400 ml-2 font-sans">
                      XL {formatPrice(item.priceXL)}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-gray-400 font-sans text-center tracking-wide">
            Los postres del día se exhiben en el mostrador · Sin TACC (no apto celíaco)
          </p>
        </div>
      </div>
    </section>
  );
}
