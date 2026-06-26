import Image from "next/image";

export default function NewProduct() {
  return (
    <section id="novedades" className="py-24 bg-[#1a1aaa] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <Image
                src="/images/new/croissant-salmon-lettuce-new-menu-item-65grados-logo.jpg"
                alt="Croissant de salmón nuevo en carta"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white text-[#1a1aaa] rounded-full flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-[10px] font-sans tracking-widest uppercase leading-none">Nuevo</span>
              <span className="text-[10px] font-sans tracking-widest uppercase leading-none mt-0.5">en carta</span>
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <p className="text-white/50 text-sm tracking-[0.3em] uppercase font-sans mb-4">
              新品上市 · Novedades
            </p>
            <h2
              className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Croissant
              <br />
              <em>de Salmón</em>
            </h2>
            <p className="text-white/75 font-sans text-[15px] leading-relaxed mb-8">
              Nuestro croissant artesanal de manteca con salmón marinado, lechuga fresca y
              una capa de queso crema. Una propuesta nueva que combina lo mejor de nuestra
              panadería propia con ingredientes de calidad. Disponible de lunes a domingo.
            </p>

            <div className="flex items-center gap-6 pt-6 border-t border-white/20">
              <div>
                <p className="text-white/50 text-xs font-sans uppercase tracking-widest">Disponible</p>
                <p className="text-white font-sans text-sm mt-1">Lunes a Domingo</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <p className="text-white/50 text-xs font-sans uppercase tracking-widest">Dirección</p>
                <p className="text-white font-sans text-sm mt-1">Iberá 2386, Núñez</p>
              </div>
            </div>

            <a
              href="#menu"
              className="inline-block mt-8 bg-white text-[#1a1aaa] px-8 py-3 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors duration-300 font-sans"
            >
              Ver Menú Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
