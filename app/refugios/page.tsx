import Link from 'next/link';

export default function RefugiosPage() {
  const refugios = [
    {
      name: 'Refugio Nube',
      capacity: '2-4 personas',
      amenities: ['Cama queen', 'Cocina completa', 'Calefaccion', 'Deck'],
      images: [
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600',
      ],
      availability: 'Disponibilidad semanal',
    },
  ];

  return (
    <main>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h1>HUELLA Refugios</h1>
          <p className="mt-4 max-w-3xl">
            Experiencias de montana para desconectar. Refugios curados para
            descansar, explorar y volver con energia.
          </p>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <h2>La experiencia</h2>
          <p className="mt-4 max-w-3xl">
            Amaneceres sobre el valle, silencio real y tiempo para lo esencial.
            Cada refugio esta pensado para integrarse al paisaje.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2>Refugios disponibles</h2>
          <div className="mt-8 space-y-10">
            {refugios.map((refugio) => (
              <div
                key={refugio.name}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl">{refugio.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Capacidad: {refugio.capacity}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      {refugio.availability}
                    </p>
                    <ul className="mt-4 space-y-1 text-sm text-gray-600">
                      {refugio.amenities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3">
                    {refugio.images.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt={refugio.name}
                        className="h-28 w-28 rounded-xl object-cover"
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contacto?motivo=refugios"
                    className="btn-primary px-6 py-3"
                  >
                    Reservar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <div>
            <h2>Ubicacion y actividades</h2>
            <p className="mt-4 text-sm text-gray-600">
              Potrerillos, Mendoza. Senderismo, kayak, rutas gastronomicas y
              experiencias de montana durante todo el ano.
            </p>
          </div>
          <div className="rounded-2xl border border-tierra-200 bg-white p-6">
            <h3 className="text-xl">Como llegar</h3>
            <p className="mt-3 text-sm text-gray-600">
              Te compartimos mapa, recomendaciones y accesos segun temporada.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-700 text-white">
        <div className="container-custom flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2>Reserva directa</h2>
            <p className="mt-3 text-white/80">
              Escribinos y te pasamos disponibilidad en el momento.
            </p>
          </div>
          <Link href="/contacto?motivo=refugios" className="btn-secondary bg-white text-tierra-700">
            Reservar ahora
          </Link>
        </div>
      </section>
    </main>
  );
}
