/**
 * Generate a simple email body.
 *
 * NOTE:
 * - This is just a placeholder template.
 * - Replace the content below with your own HTML/branding.
 * - You still get `position` and `company` as params, but you can choose how to use them.
 */
export const generateEmailBody = (position: string, company: string): string => {
  return `
    <p>Hi,</p>

    <p>I am reaching out regarding the <strong>${position}</strong> role at <strong>${company}</strong>.</p>

    <p>This is a sample email body generated from <code>generateEmailBody()</code>.
    Please customize this template with your actual content, resume links, and personal details.</p>

    <p>Best regards,<br>
    <em>Your Name Here</em></p>

    <hr style="margin-top:2em; color:#ccc;" />
    <p style="font-size:0.8em; color:#666;">
      [Sent via automated system]
    </p>
  `;
};
