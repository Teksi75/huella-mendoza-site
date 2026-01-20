'use client';

import { useState } from 'react';
import { buildWhatsAppUrl } from '@/data/contact';

type FormStatus =
  | { type: 'idle'; message: '' }
  | { type: 'error' | 'success'; message: string };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function HomeContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({ type: 'error', message: 'Completá nombre, email y mensaje antes de enviar.' });
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setStatus({ type: 'error', message: 'Ingresá un email válido para continuar.' });
      return;
    }

    const whatsappMessage = `Hola, soy ${trimmedName}. Mi email es ${trimmedEmail}. Quiero consultar sobre: ${trimmedMessage}`;
    const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setName('');
    setEmail('');
    setMessage('');
    setStatus({ type: 'success', message: '¡Listo! Abrimos WhatsApp para que envíes tu consulta.' });
  };

  const statusColor = status.type === 'error' ? 'text-red-600' : 'text-green-700';

  return (
    <form className="rounded-2xl bg-white p-6 text-gray-800 shadow-sm" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div>
          <label htmlFor="nombre" className="text-sm font-medium">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-2 focus:ring-tierra-200"
            placeholder="Tu nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-2 focus:ring-tierra-200"
            placeholder="tu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-tierra-500 focus:outline-none focus:ring-2 focus:ring-tierra-200"
            placeholder="Contanos sobre tu proyecto"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </div>
      {status.message ? (
        <p className={`mt-4 text-sm ${statusColor}`} role="status">
          {status.message}
        </p>
      ) : null}
      <button type="submit" className="btn-primary mt-6 w-full">
        Enviar consulta
      </button>
    </form>
  );
}
