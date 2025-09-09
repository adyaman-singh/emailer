import { transporter } from "../config/mailTransporter";
import { generateEmailBody } from "./template";

interface SendEmailOptions {
  recipients: string[];
  position: string;
  company: string;
  sendAsBcc?: boolean;
}

/**
 * Send an email using Nodemailer.
 *
 * NOTE:
 * - Update `from` with your name or app name in .env (EMAIL).
 * - Update `subject` to fit your use case (job application, newsletter, alerts, etc).
 * - The `generateEmailBody` function is where you customize your email HTML.
 */
export const sendEmail = async ({
  recipients,
  position,
  company,
  sendAsBcc = false,
}: SendEmailOptions): Promise<void> => {
  const mailOptions = {
   from: `"YOUR NAME HERE" <${process.env.EMAIL}>`, // Add your name here
    to: sendAsBcc ? undefined : recipients,
    bcc: sendAsBcc ? recipients : undefined,
    subject: `Message regarding ${position} at ${company}`, //  customize this line
    html: generateEmailBody(position, company),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
