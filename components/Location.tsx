export default function Location() {
  const hours = [
    { day: "Lunes a Viernes", time: "7:00 – 19:00" },
    { day: "Sábado", time: "8:00 – 20:00" },
    { day: "Domingo", time: "15:00 – 20:00" },
  ];

  return (
    <section id="ubicacion" className="py-24 bg-[#F8F3EC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-[#1a1aaa] text-sm tracking-[0.3em] uppercase font-sans mb-3">
            地點 · Encontranos
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light text-gray-900"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Iberá 2386, Núñez
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="reveal space-y-8">
            {/* Hours */}
            <div>
              <h3 className="font-serif text-2xl font-light text-gray-900 mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}>
                Horarios
              </h3>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center py-3 border-b border-[#e0d9d0]">
                    <span className="font-sans text-[15px] text-gray-700">{h.day}</span>
                    <span className="font-sans text-[15px] text-[#1a1aaa] font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-sm">
                <p className="text-[#1a1aaa] text-xs uppercase tracking-widest font-sans mb-2">WiFi</p>
                <p className="font-sans text-gray-700 text-sm">SESENTAYCINCO</p>
              </div>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-[#1a1aaa] text-xs uppercase tracking-widest font-sans mb-2">Pet Friendly</p>
                <p className="font-sans text-gray-700 text-sm">Mascotas bienvenidas</p>
              </div>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-[#1a1aaa] text-xs uppercase tracking-widest font-sans mb-2">Take Away</p>
                <p className="font-sans text-gray-700 text-sm">Disponible siempre</p>
              </div>
              <div className="bg-white p-5 rounded-sm">
                <p className="text-[#1a1aaa] text-xs uppercase tracking-widest font-sans mb-2">Club 65</p>
                <p className="font-sans text-gray-700 text-sm">Registrate en caja</p>
              </div>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/65grados.coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#1a1aaa] font-sans text-sm tracking-wide hover:underline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @65grados.coffee
            </a>
          </div>

          {/* Map */}
          <div className="reveal h-[420px] rounded-sm overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.274!2d-58.4590!3d-34.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5b7c2f3a1a1%3A0x1234567890abcdef!2sIber%C3%A1%202386%2C%20C1429%20CABA!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="65 Grados Café — Iberá 2386, Núñez"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
