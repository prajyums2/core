import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"CORE Website" <${process.env.SMTP_USER}>`,
        to: process.env.EMAIL_TO || "contact@thecoresurvey.in",
        subject: `New Inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #E5007E; margin-bottom: 24px;">New Contact Inquiry</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Role / Party</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${role || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Message</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${message}</td>
              </tr>
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent from CORE website contact form</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
