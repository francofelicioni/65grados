import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/lifestyle/barista-takeaway-window-smiling-serving-coffee.jpg"
          alt="65 Grados café"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Chinese decorative character */}
        <p
          className="text-white/40 text-5xl mb-6 tracking-widest"
          style={{ fontFamily: "serif" }}
        >
          六十五度
        </p>

        {/* Logo */}
        <div className="relative w-28 h-28 mx-auto mb-6">
          <Image
            src="/images/logos/logo-transparent.png"
            alt="65 Grados"
            fill
            className="object-contain brightness-0 invert"
            priority
          />
        </div>

        <h1
          className="text-white font-serif text-5xl md:text-7xl font-light leading-tight mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Taiwanese Specialty Café
        </h1>

        <p className="text-white/80 text-base md:text-lg tracking-[0.2em] uppercase font-sans mb-10">
          Pastelería · Café de Especialidad · Núñez
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-[#1a1aaa] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#13138a] transition-colors duration-300"
          >
            Ver Menú
          </a>
          <a
            href="#ubicacion"
            className="border border-white text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-[#1a1aaa] transition-colors duration-300"
          >
            Cómo Llegar
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-white/40" />
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
