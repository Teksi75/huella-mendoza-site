type ContactoPageProps = {
  searchParams?: {
    motivo?: string;
  };
};

export default function ContactoPage({ searchParams }: ContactoPageProps) {
  const motivoRaw = searchParams?.motivo?.toLowerCase() ?? '';
  const motivosValidos = new Set(['base', 'diseno', 'refugios']);
  const motivo = motivosValidos.has(motivoRaw) ? motivoRaw : '';

  return (
    <main>
      <section
        id="contacto"
        className="section-padding bg-white scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <h1>Contacto</h1>
          <p className="mt-4 max-w-3xl">
            Contanos sobre tu proyecto y te respondemos con una propuesta clara.
          </p>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom grid gap-10 md:grid-cols-2">
          <form className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-semibold">Nombre</label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Telefono</label>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
                  name="telefono"
                  placeholder="+54 9 ..."
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Motivo</label>
                <select
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
                  name="motivo"
                  defaultValue={motivo}
                  required
                >
                  <option value="" disabled>
                    Seleccionar motivo
                  </option>
                  <option value="base">Base</option>
                  <option value="diseno">Diseno</option>
                  <option value="refugios">Refugios</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Mensaje</label>
                <textarea
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
                  name="mensaje"
                  rows={4}
                  placeholder="Contanos sobre tu idea..."
                />
              </div>
              <button className="btn-primary w-full">Enviar</button>
            </div>
          </form>

          <div className="rounded-2xl border border-tierra-200 bg-white p-6">
            <h2 className="text-2xl">WhatsApp directo</h2>
            <p className="mt-3 text-sm text-gray-600">
              Si preferis, escribinos y respondemos rapido.
            </p>
            <a
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tierra-700 hover:text-tierra-900"
              href="https://wa.me/5492615010488"
              target="_blank"
              rel="noreferrer"
            >
              +54 9 261 5010488
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
