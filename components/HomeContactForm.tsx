'use client';

import { useState } from 'react';
import { buildWhatsAppUrl } from '@/data/contact';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Feedback = {
  type: 'success' | 'error';
  message: string;
};

const initialValues = {
  nombre: '',
  email: '',
  mensaje: '',
};

export default function HomeContactForm() {
  const [values, setValues] = useState(initialValues);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nombre = values.nombre.trim();
    const email = values.email.trim();
    const mensaje = values.mensaje.trim();

    if (!nombre || !email || !mensaje) {
      setFeedback({ type: 'error', message: 'Completá nombre, email y mensaje antes de enviar.' });
      return;
    }

    if (!emailRegex.test(email)) {
      setFeedback({ type: 'error', message: 'Ingresá un email válido para continuar.' });
      return;
    }

    const message = `Hola, soy ${nombre}. Mi email es ${email}. Quiero consultar sobre: ${mensaje}`;
    const url = buildWhatsAppUrl(message);

    window.open(url, '_blank', 'noopener,noreferrer');
    setValues(initialValues);
    setFeedback({ type: 'success', message: '¡Listo! Abrimos WhatsApp para enviar tu consulta.' });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 text-gray-800 shadow-sm">
      <div className="grid gap-4">
        <div>
          <label htmlFor="nombre" className="text-sm font-medium">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={values.nombre}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-2 focus:ring-tierra-200"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-2 focus:ring-tierra-200"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="text-sm font-medium">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={values.mensaje}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-2 focus:ring-tierra-200"
            placeholder="Contanos sobre tu proyecto"
          />
        </div>
      </div>
      <button type="submit" className="btn-primary mt-6 w-full">
        Enviar consulta
      </button>
      {feedback ? (
        <p
          className={`mt-4 text-sm ${feedback.type === 'success' ? 'text-tierra-700' : 'text-red-600'}`}
          role="status"
          aria-live="polite"
        >
          {feedback.message}
        </p>
      ) : null}
    </form>
  );
}
