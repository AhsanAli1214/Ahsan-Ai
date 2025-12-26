import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize only when API key is available to avoid build-time errors
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing');
    return null;
  }
  return new Resend(apiKey);
};

export async function POST(req: Request) {
  try {
    const resend = getResend();
    if (!resend) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const body = await req.json();
    const { error, stack, url, componentStack, userAgent } = body;

    const { data, error: resendError } = await resend.emails.send({
      from: 'Ahsan AI Hub <onboarding@resend.dev>',
      to: ['tickets@ahsan-ai-hub.p.tawk.email'],
      subject: `[ERROR] Ahsan AI Hub - ${new Date().toLocaleString()}`,
      html: `
        <h1>Error Reported in Ahsan AI Hub</h1>
        <p><strong>Error Message:</strong> ${error}</p>
        <p><strong>URL:</strong> ${url}</p>
        <p><strong>User Agent:</strong> ${userAgent}</p>
        <h2>Stack Trace</h2>
        <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${stack}</pre>
        ${componentStack ? `<h2>Component Stack</h2><pre style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${componentStack}</pre>` : ''}
      `,
    });

    if (resendError) {
      console.error('Resend Error:', resendError);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Reporting API Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Ensure the route is handled as dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';
