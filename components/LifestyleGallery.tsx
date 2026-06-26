import Image from "next/image";

const images = [
  {
    src: "/images/lifestyle/girl-laptop-coffee-cafe-interior-vinyl-records-night.jpg",
    alt: "Trabajo remoto con café en el interior del local",
    caption: "Un espacio para quedarse",
  },
  {
    src: "/images/lifestyle/woman-holding-two-iced-drinks-yellow-red-layered.jpg",
    alt: "Dos bebidas heladas de colores",
    caption: "Mucho más que café",
  },
  {
    src: "/images/lifestyle/take-away-coffee.jpg",
    alt: "Café para llevar en vaso con logo 65°",
    caption: "Take away",
  },
  {
    src: "/images/lifestyle/latte-art-chocolate-brownie-dried-flowers-vase-minimal.jpg",
    alt: "Latte art con brownie y flores secas",
    caption: "Momentos minimalistas",
  },
];

export default function LifestyleGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[#1a1aaa] text-sm tracking-[0.3em] uppercase font-sans mb-3">
            生活 · Lifestyle
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light text-gray-900"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Más que un café
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto font-sans text-[15px]">
            Un lugar para trabajar, reunirse, traer a tu compañero y tomarte ese momento del día.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal-stagger">
          {images.map((img) => (
            <div key={img.src} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-sans tracking-wide">{img.caption}</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-400 font-sans tracking-wide text-center">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
