import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// all categories
export async function POST(req) {
    const {
        companyName,
        vessel,
        refNo,
        country,
        portOfArrival,
        eta,
        etd,
        contactPerson,
        phoneCode,
        phone,
        fax,
        email,
        file,
        comments 
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
                <h2 style="margin: 0;">Shipping Information</h2>
            </div>
            <div style="padding: 20px;">
                <p style="font-size: 16px; color: #333;">Dear Customer,</p>
                <p style="font-size: 16px; color: #333;">Here are the shipping details for your recent request:</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold; width: 150px;">Company Name:</td>
                        <td style="padding: 10px;">${companyName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Vessel:</td>
                        <td style="padding: 10px;">${vessel}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Reference Number:</td>
                        <td style="padding: 10px;">${refNo}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Country:</td>
                        <td style="padding: 10px;">${country}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Port of Arrival:</td>
                        <td style="padding: 10px;">${portOfArrival}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">ETA:</td>
                        <td style="padding: 10px;">${eta}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">ETD:</td>
                        <td style="padding: 10px;">${etd}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Contact Person:</td>
                        <td style="padding: 10px;">${contactPerson}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Phone Code:</td>
                        <td style="padding: 10px;">${phoneCode}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Phone:</td>
                        <td style="padding: 10px;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Fax:</td>
                        <td style="padding: 10px;">${fax}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Email:</td>
                        <td style="padding: 10px;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">File:</td>
                        <td style="padding: 10px;"><a href="${file}" style="color: #007bff; text-decoration: none;">Download</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; background-color: #f1f1f1; font-weight: bold;">Comments:</td>
                        <td style="padding: 10px;">${comments}</td>
                    </tr>
                </table>
                <p style="font-size: 16px; color: #333; margin-top: 20px;">If you have any questions or need further assistance, feel free to reach out to us.</p>
            </div>
            <div style="text-align: center; padding: 10px; background-color: #007bff; color: white; border-radius: 8px;">
                <p style="margin: 0;">Best regards,</p>
                <p style="margin: 0;">Adamallys LLC</p>
            </div>
        </div>
    `

    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_EMAIL,
            to: `${process.env.NEXT_PUBLIC_EMAIL}, ${email}`,
            subject: `Request A Qoute`,
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