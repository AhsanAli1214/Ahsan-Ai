import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, error: 'Token is required' }, { status: 400 });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA is not properly configured' },
        { status: 500 }
      );
    }

    // Verify token with Google's reCAPTCHA API
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (data.success && data.score >= 0.5) {
      return NextResponse.json({
        success: true,
        score: data.score,
        action: data.action,
      });
    }

    return NextResponse.json({
      success: false,
      error: 'reCAPTCHA verification failed',
      score: data.score,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'An error occurred during verification' },
      { status: 500 }
    );
  }
}
