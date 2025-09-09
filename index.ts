import { emailData } from "./data";
import { sendEmail } from "./email/emailer";

export interface EmailData {
  recipients: string[];
  position: string;
  company: string;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Send all emails sequentially with delay to avoid rate limiting.
 */
const sendAllEmails = async (): Promise<void> => {
  for (const data of emailData) {
    try {
      await sendEmail({
        recipients: data.recipients,
        position: data.position,
        company: data.company,
        sendAsBcc: false,
      });
      console.log(`Email sent successfully to ${data.company}`);
    } catch (error) {
      console.error(`Failed to send email to ${data.company}:`, error);
    }

    // 1-second delay between requests
    await delay(1000);
  }
};

sendAllEmails()
  .then(() => console.log("All emails processed"))
  .catch(error => console.error("Error in sending emails:", error));
