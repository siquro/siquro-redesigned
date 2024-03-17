import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeEmail from '../../../emails/welcome';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_WL4rMVDM_BYqcCb7vVLF6GDvponEh2GQf');

export async function POST(request: Request) {
    const { name, message, email } = await request.json();

    await resend.emails.send({
        from: 'siquro_email@resend.dev',
        to: 'ikuzmina88@gmail.com',
        subject: 'Siquro contact form',
        react: WelcomeEmail({
            name, message, email
        }),
    });

    return NextResponse.json({
        status: "Ok"
    })
}