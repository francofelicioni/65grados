import Image from "next/image";

const images = [
  { src: "/images/food/brie-toast-confit-cherry-tomatoes-pesto-warm-light.jpg", alt: "Tostada Brie con tomates confitados y pesto", span: "col-span-1 row-span-2 md:row-span-1" },
  { src: "/images/food/lemon-tart-toasted-meringue-ceramic-plate-natural-light.jpg", alt: "Tarta de limón con merengue tostado", span: "col-span-1 row-span-1" },
  { src: "/images/food/sando-beet-green-layers-pink-filling-white-plate.jpeg", alt: "Sando de betarraga con capas de colores", span: "col-span-1 row-span-1" },
  { src: "/images/food/iced-drinks-hands-cheers-65grados-branded-cups.jpg", alt: "Bebidas heladas en vasos 65 Grados", span: "col-span-1 row-span-1" },
  { src: "/images/food/hastext/outdoor-table-assorted-sandos-colorful-drinks-sunlight.jpg", alt: "Mesa con sandos y bebidas al sol", span: "col-span-1 row-span-2 md:row-span-1" },
  { src: "/images/food/hastext/profiterol-dessert-hand-parchment-paper-65grados.jpg", alt: "Profiterol en papel mantequilla", span: "col-span-1 row-span-1" },
];

export default function FoodGallery() {
  return (
    <section id="galeria" className="py-24 bg-[#F8F3EC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[#1a1aaa] text-sm tracking-[0.3em] uppercase font-sans mb-3">
            食物 · Nuestra Cocina
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light text-gray-900"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Hecho con intención
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px] md:auto-rows-auto reveal">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-sm group md:aspect-[4/5] ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
