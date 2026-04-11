import { json } from '@sveltejs/kit';
import sendEmail from '$mail/sendEmail';

export async function POST({ fetch, request }) {
  const { to, name } = await request.json();
  console.log('/POST api/email/welcome', to, name);

  if (!to || !name) {
    return json({ success: false, message: 'Name and To are required fields' }, { status: 400 });
  }

  const emailData = [
    {
      from: `"Predictorix AI" <comunidad@updates.predictorix.ai>`,
      to,
      subject: '¡Bienvenido a la Comunidad Predictorix AI!',
      content: `
    <p>Hola ${name},</p>
    <p>¡Bienvenido a la <strong>Comunidad Predictorix AI</strong>! Nos alegra tenerte aquí.</p>
  <p>
    En esta plataforma encontrarás cursos, recursos y contenido diseñado para ayudarte a 
    aprovechar la inteligencia predictiva en tu negocio.
  </p>
  <p>
    ¿Te gustaría ver todo lo que Predictorix AI puede hacer por ti? Agenda una demo 
    gratuita de 30 minutos y te mostramos cómo sacarle el máximo provecho.
  </p>
  <div>
    <a class="button" href="https://predictorix.ai/es/demo">Agendar mi demo gratuita</a>
  </div>
  <p><strong>El equipo de Predictorix AI</strong></p>
    `
    }
  ];

  await sendEmail(fetch)(emailData);

  return json({
    success: true,
    message: 'Email sent'
  });
}
