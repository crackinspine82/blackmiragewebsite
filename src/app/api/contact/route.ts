import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const CONTACT_TO = 'aniket@blackmirage.in';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM;

    if (!apiKey) {
      console.error('SENDGRID_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }
    if (!from) {
      console.error('SENDGRID_FROM is not set (verified sender email for SendGrid)');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    sgMail.setApiKey(apiKey);

    const text = message
      ? `From: ${email}\n\nMessage:\n${message}`
      : `Contact form submission from: ${email}\n(No message provided)`;

    await sgMail.send({
      to: CONTACT_TO,
      from,
      subject: `Black Mirage contact from ${email}`,
      text,
      html: `
        <p><strong>From:</strong> ${escapeHtml(email)}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message)}</p>` : '<p>(No message provided)</p>'}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
