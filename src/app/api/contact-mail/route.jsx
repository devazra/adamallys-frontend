import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// all categories
export async function POST(req) {
    const {
        name,
        companyName,
        phoneNumber,
        email,
        message
    } = await req.json()

    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.APP_PASSWORD_FOR_EMAIL,
        },
    });

    const template = `
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
            <div style="text-align: center; padding: 10px; background-color: #007bff; color: white; border-radius: 8px;">
                <h2 style="margin: 0;">Contact Mail</h2>
            </div>
            <div style="padding: 20px;">
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold; width: 150px;">Company Name:</td>
                        <td style="padding: 10px;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Vessel:</td>
                        <td style="padding: 10px;">${companyName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Reference Number:</td>
                        <td style="padding: 10px;">${phoneNumber}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Country:</td>
                        <td style="padding: 10px;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Port of Arrival:</td>
                        <td style="padding: 10px;">${message}</td>
                    </tr>
                </table>
            </div>
        </div>
    `

    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_EMAIL,
            to: `${process.env.NEXT_PUBLIC_EMAIL}, ${email}`,
            subject: `${name}, ${companyName}`,
            html: template
        });
        return new NextResponse(
            JSON.stringify({
                status: "ok",
                message: "Email send",
            }),
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }),
            { status: 500 }
        );
    }
}