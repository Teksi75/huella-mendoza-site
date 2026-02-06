import Link from 'next/link';
import { buildWhatsAppUrl, whatsappMessages } from '@/data/contact';

export default function ContactoPage() {
  return (
    <main>
      <section
        id="contacto"
        className="section-padding bg-white scroll-mt-28 pt-20 md:scroll-mt-32 md:pt-24"
      >
        <div className="container-custom">
          <h1>Contacto</h1>
          <p className="mt-4 max-w-3xl">
            Respondemos personalmente por WhatsApp. Tiempo de respuesta habitual: dentro del día.
          </p>
        </div>
      </section>

      <section className="section-padding bg-tierra-50">
        <div className="container-custom grid gap-10 md:grid-cols-2">
          <div className="u-card p-6">
            <h2 className="text-2xl">Consulta por WhatsApp</h2>
            <p className="mt-3 text-sm text-gray-600">
              Contanos qué necesitás y te orientamos sobre próximos pasos.
            </p>
            <Link
              href={buildWhatsAppUrl(whatsappMessages.contacto)}
              target="_blank"
              rel="noopener noreferrer"
              className="u-btn-primary u-ease u-focus mt-6 inline-flex"
            >
              Hacer una consulta
            </Link>
          </div>

          <div className="u-card p-6">
            <h2 className="text-2xl">WhatsApp directo</h2>
            <p className="mt-3 text-sm text-gray-600">
              Si preferís, escribinos y coordinamos la respuesta que necesitás.
            </p>
            <Link
              className="u-btn-secondary u-ease u-focus mt-6 inline-flex items-center gap-2 text-sm"
              href={buildWhatsAppUrl(whatsappMessages.contactoDirecto)}
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 261 5010488
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
