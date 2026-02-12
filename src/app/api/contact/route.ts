import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const CONTACT_TO = 'aniket@blackmirage.in';

export async function POST(request: Request) {
  try {
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;

    if (!host || !port || !user || !pass) {
      console.error('SMTP not configured: set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS');
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

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: port === '465',
      auth: { user, pass },
    });

    const text = message
      ? `From: ${email}\n\nMessage:\n${message}`
      : `Contact form submission from: ${email}\n(No message provided)`;

    await transporter.sendMail({
      from: from || user,
      to: CONTACT_TO,
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
