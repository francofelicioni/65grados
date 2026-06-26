const WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=0x95bcb7004c4eb1c7:0x3a54ff64416b438d";

const reviews = [
  {
    author: "F B",
    role: "Local Guide · 2.239 reseñas",
    text: "Lindo lugar que sirve especialidades taiwanesas. Tomé el café Mont Blanc, que se sirve frío, con crema de naranjas. Estuvo muy bien preparado, riquísimo. La atención es muy buena y cordial.",
    rating: 5,
  },
  {
    author: "Grace Wu",
    role: "5 reseñas",
    text: "¡Excelentes los sandwiches, la torta mil hojas, los bubble tea y el café que pedimos!",
    rating: 5,
  },
  {
    author: "Angel Vivas",
    role: "Local Guide · 24 reseñas",
    text: "Muy lindo lugar. Me pedí un café con leche que estaba muy rico y tenía buena temperatura. Definitivamente volveré.",
    rating: 5,
  },
  {
    author: "Ingrid",
    role: "Local Guide · 67 reseñas",
    text: "Este local me sorprendió, el café es espectacular. Pedimos un latte de avellanas que estaba riquísimo y un flat white que también estaba muy bueno. La torta vasca, increíble.",
    rating: 5,
  },
  {
    author: "Monica Beatriz Barral",
    role: "Local Guide · 97 reseñas",
    text: "¡Hermoso lugar! Muy rico el lemon pie. El café exquisito. Tiene variedad de tés muy buenos. El ambiente es muy agradable y la atención de primera.",
    rating: 5,
  },
  {
    author: "Julieta DIB",
    role: "Local Guide · 19 reseñas",
    text: "Excelente lugar. Café riquísimo, realmente de especialidad. Las cosas dulces originales y de muy buen sabor. Variedad, lindo ambiente y atención.",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[#1a1aaa] text-sm tracking-[0.3em] uppercase font-sans mb-3">
            評論 · Lo que dicen
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light text-gray-900"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Nuestros clientes hablan
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span
              className="font-serif text-5xl font-light text-gray-900"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              4.9
            </span>
            <div className="flex flex-col items-start gap-1">
              <Stars count={5} />
              <span className="text-sm text-gray-400 font-sans">75 reseñas en Google</span>
            </div>
          </div>
        </div>

        {/* Reviews grid — 3 cols × 2 rows */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 reveal-stagger">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="bg-[#F8F3EC] p-6 rounded-sm flex flex-col gap-4"
            >
              <Stars count={r.rating} />
              <p className="text-gray-700 font-sans text-[15px] leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <p className="font-sans text-sm font-medium text-gray-900">{r.author}</p>
                <p className="font-sans text-xs text-gray-400 mt-0.5">{r.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <p className="text-gray-500 font-sans text-sm mb-5">
            ¿Ya visitaste el café? Contanos tu experiencia
          </p>
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1a1aaa] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#13138a] transition-colors duration-300 font-sans"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
            </svg>
            Dejá tu reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
}
