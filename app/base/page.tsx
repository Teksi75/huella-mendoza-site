import Link from 'next/link';

export default function BasePage() {
  const modelos = [
    {
      title: 'Base 24',
      size: '24 m2 aprox',
      capacity: '1-2 personas',
      range: 'Desde un rango base',
    },
    {
      title: 'Base 36',
      size: '36 m2 aprox',
      capacity: '2-4 personas',
      range: 'Desde un rango intermedio',
    },
    {
      title: 'Base 48',
      size: '48 m2 aprox',
      capacity: '4-6 personas',
      range: 'Desde un rango ampliado',
    },
  ];

  const pasos = [
    'Brief inicial y necesidades',
    'Propuesta tecnica y rango',
    'Ajustes finales y planificacion',
    'Produccion, traslado e instalacion',
  ];

  const faqs = [
    {
      q: 'Transporte y acceso',
      a: 'Coordinamos logistica segun el terreno y accesos disponibles.',
    },
    {
      q: 'Tiempos de entrega',
      a: 'Definimos un cronograma realista desde la confirmacion.',
    },
    {
      q: 'Permisos y normativa',
      a: 'Te guiamos con requisitos locales y documentacion.',
    },
    {
      q: 'Instalacion en sitio',
      a: 'Incluye nivelacion, conexion basica y puesta en marcha.',
    },
    {
      q: 'Mantenimiento',
      a: 'Entregamos un plan simple de cuidados y mantenimiento anual.',
    },
  ];

  return (
    <main>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h1>HUELLA Base</h1>
          <p className="mt-4 max-w-3xl">
            Modelos habitacionales listos para cotizar y ejecutar. Pensados
            para quienes buscan velocidad, previsibilidad y calidad en montana.
          </p>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <div>
            <h2>Que es Base</h2>
            <p className="mt-4">
              Una linea de soluciones modulares con diseno eficiente, costos
              claros y procesos estandarizados. Ideal para vivienda, turismo o
              espacios de apoyo en proyectos mas grandes.
            </p>
          </div>
          <div className="rounded-2xl border border-tierra-200 bg-white p-6">
            <h3 className="text-xl">Para quien es</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Inversores que buscan retorno claro.</li>
              <li>Propietarios de terreno con tiempos acotados.</li>
              <li>Emprendimientos que necesitan escalar rapido.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2>Modelos</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {modelos.map((modelo) => (
              <div
                key={modelo.title}
                className="rounded-2xl border border-tierra-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl">{modelo.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{modelo.size}</p>
                <p className="text-sm text-gray-600">{modelo.capacity}</p>
                <p className="mt-4 text-sm font-semibold text-tierra-700">
                  {modelo.range}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom">
          <h2>Proceso simple</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {pasos.map((paso, index) => (
              <div key={paso} className="rounded-2xl bg-white p-5">
                <div className="text-sm font-semibold text-tierra-700">
                  Paso {index + 1}
                </div>
                <p className="mt-2 text-sm text-gray-600">{paso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2>Preguntas frecuentes</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-tierra-700 text-white">
        <div className="container-custom flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2>Pedir cotizacion</h2>
            <p className="mt-3 text-white/80">
              Contanos necesidades y te enviamos un rango de inversion.
            </p>
          </div>
          <Link href="/contacto?motivo=base" className="btn-secondary bg-white text-tierra-700">
            Pedir cotizacion
          </Link>
        </div>
      </section>
    </main>
  );
}
