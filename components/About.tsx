import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#F8F3EC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <p className="text-[#1a1aaa] text-sm tracking-[0.3em] uppercase font-sans mb-4">
              台 式 咖 啡 館 · Nuestra Historia
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6 text-gray-900"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Un rincón de Taiwán
              <br />
              <em>en el corazón de Núñez</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-sans text-[15px]">
              En 65 Grados llevamos la cultura del café taiwanés a Buenos Aires. Somos tostadores
              propios, lo que nos permite controlar cada etapa del proceso y ofrecerte granos de
              especialidad con el perfil de tueste exacto que define nuestra identidad.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-sans text-[15px]">
              Nuestra pastelería artesanal fusiona técnicas occidentales con ingredientes y
              sabores de Asia Oriental: aduki, matcha, taro, miso, xiangchun. El resultado
              es una propuesta única que invita a quedarse, trabajar, conversar y volver.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#e0d9d0]">
              {[
                { num: "65°", label: "Temperatura ideal del café" },
                { num: "100%", label: "Pastelería propia" },
                { num: "Pet", label: "Friendly" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="font-serif text-3xl text-[#1a1aaa] font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-sans leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images collage */}
          <div className="reveal grid grid-cols-2 gap-3 h-[520px]">
            <div className="relative rounded-sm overflow-hidden">
              <Image
                src="/images/lifestyle/latte-art-chocolate-brownie-dried-flowers-vase-minimal.jpg"
                alt="Latte art y brownie de chocolate"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/food/lemon-tart-toasted-meringue-ceramic-plate-natural-light.jpg"
                  alt="Tarta de limón con merengue"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/lifestyle/filtered-coffee.jpg"
                  alt="Interior del café"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
