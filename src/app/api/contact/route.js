import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // We are receiving URL encoded form data because of jQuery serialize()
    const text = await request.text();
    const params = new URLSearchParams(text);
    
    const name = params.get('fname') || params.get('name');
    const email = params.get('email');
    const message = params.get('message');
    
    // Basic validation
    if (!email || !message) {
      return new NextResponse('Email and message are required', { status: 400 });
    }

    // Here you would typically integrate with an email service like Resend, SendGrid, or nodemailer
    console.log('Received contact form submission:', { name, email, message });

    // The jQuery code expects exactly the string "success" to trigger the success UI
    return new NextResponse('success', { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return new NextResponse('Something went wrong', { status: 500 });
  }
}
