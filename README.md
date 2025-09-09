# emailer
tired of sending HRs custom emails? try this , just enter Company name. Email [] , and Postion and see the magic happen
Perfect timing 🙂. Since you now have a **generic, GitHub-ready email sender project**, I’ll draft you a clean **first commit** that sets up everything:

---

### 📂 Project structure

```
.
├── src
│   ├── config
│   │   └── mailTransporter.ts
│   ├── email
│   │   ├── emailer.ts
│   │   └── template.ts
│   ├── data.ts
│   └── index.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

#### `.env.example`

```env
EMAIL=youremail@example.com
EMAIL_PASSWORD="PASSWORD"
```

### Generate Password

``````
Gmail

Turn on 2-Step Verification for your Google account.

Go to Google App Passwords (https://myaccount.google.com/apppasswords)

Choose “Mail” as the app and “Other” (or pick your device).

Google will generate a 16-character App Password.

Use this in your .env as EMAIL_PASSWORD.


``````

#### `README.md`

````md
# Automated Email Sender (TypeScript + Nodemailer)

This project demonstrates how to send automated emails using **Node.js**, **TypeScript**, and **Nodemailer**.

## Setup

1. Clone the repository:

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` :

4. Build & run:

   npm run start
   ```

## Project Structure

* `src/config/mailTransporter.ts` → Nodemailer transporter configuration
* `src/email/emailer.ts` → Sends emails
* `src/email/template.ts` → Generates email body (customize this!)
* `src/data.ts` → Example recipients and roles
* `src/index.ts` → Entry point

## Customization

* Edit `generateEmailBody` in `src/email/template.ts` to create your own template.
* Update `subject` in `src/email/emailer.ts`.
* Add recipients/positions in `src/data.ts`.

