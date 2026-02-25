# Contact Form Email Setup Guide

Complete guide to set up the contact form with Microsoft 365 SMTP integration.

## Overview

The contact form uses a Node.js/Express backend with Nodemailer to send emails directly via Microsoft 365 SMTP, without any third-party email services.

**Architecture:**
- **Frontend:** React form in `src/pages/FindUs.tsx`
- **Backend:** Express server in `server/index.ts`
- **Email Service:** Nodemailer with Office365 SMTP
- **Storage:** None (just email delivery)

## Prerequisites

1. Microsoft 365 email account (info@fatdogspirits.com)
2. Admin access to Microsoft 365 account settings
3. Node.js 16+ installed
4. Npm or Yarn package manager

## Step 1: Generate Office365 App Password

1. Go to https://account.microsoft.com/account/manage-my-microsoft-account
2. Click **"Security"** on the left sidebar
3. Scroll down to **"App passwords"** section
4. If you don't see it, ensure:
   - 2-factor authentication is enabled
   - You're signed in as admin
5. Select **"Mail"** and **"Windows (or device)"**
6. Click **"Create"**
7. Copy the generated password (it looks like: `xxxx xxxx xxxx xxxx`)

## Step 2: Set Up Environment Variables

### For Server (.env file)

Create `.env` file in the project root (copy from `.env.example`):

```bash
# Office 365 Email Configuration
OFFICE365_EMAIL=info@fatdogspirits.com
OFFICE365_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx  # From step 1
CONTACT_RECIPIENT_EMAIL=info@fatdogspirits.com
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3002,http://localhost:3000,https://touchvodka.com
```

### For Frontend (.env.local file)

Create `.env.local` file in the project root (copy from `.env.local.example`):

```bash
VITE_API_URL=http://localhost:3001
```

### Important Security Notes

⚠️ **NEVER commit .env to git!**

Add to `.gitignore` (should already be there):
```
.env
.env.local
.env.*.local
```

## Step 3: Install Dependencies

```bash
npm install
```

This installs:
- `nodemailer` - Email sending
- `express-validator` - Form validation
- `cors` - Cross-origin requests
- `@types/nodemailer` - TypeScript types

## Step 4: Run Backend Server

In one terminal:

```bash
npm run dev:server
```

Or manually:

```bash
npx tsx server/index.ts
```

You should see:
```
📧 Contact form server running on port 3001
Health check: http://localhost:3001/api/health
```

## Step 5: Run Frontend (Separate Terminal)

```bash
npm run dev
```

Frontend runs on `http://localhost:3002` (or 3000)

## Step 6: Test the Form

1. Navigate to `http://localhost:3002/#find-us` (or your app URL + #find-us)
2. Fill out the contact form:
   - Name: "Test User"
   - Email: "your@email.com"
   - Subject: "Test Message"
   - Message: "This is a test"
3. Click "SEND MESSAGE"
4. You should see a success message
5. Check your email at info@fatdogspirits.com

## API Endpoint

### POST /api/contact

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Wholesale Inquiry",
  "message": "I'm interested in stocking your vodka..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon!"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Failed to send message. Please try again or contact us directly."
}
```

## Form Validation

Server-side validation includes:

- **Name:** 2-100 characters, required
- **Email:** Valid email format, required
- **Subject:** 5-200 characters, required
- **Message:** 10-5000 characters, required

Client-side validation:
- All fields marked as required
- HTML5 email validation

## Email Format

Sent emails include:

- **From:** info@fatdogspirits.com
- **To:** info@fatdogspirits.com
- **Reply-To:** User's email (so you can reply to them)
- **Subject:** `[Contact Form] {Subject}`
- **Body:** 
  - HTML formatted with styling
  - User's name, email, subject
  - Full message content
  - Timestamp
  - Plain text version as fallback

## Deployment

### On AWS Amplify

#### Backend (Express Server)

Option 1: AWS Lambda (Recommended)
- Create a Lambda function with Node.js runtime
- Deploy the server code as a function
- Set environment variables in Lambda
- API Gateway points to the function

Option 2: Amplify App Runner
- Fork the repo with server folder included
- Configure build settings to run the server
- Set environment variables in Amplify console

#### Frontend

- Amplify automatically builds and deploys React
- Update `VITE_API_URL` to point to backend
- In Amplify console: Environment variables → add `VITE_API_URL=https://your-api-domain.com`

### Environment Variables on Amplify

Set in Amplify Console → App settings → Environment variables:

```
OFFICE365_EMAIL=info@fatdogspirits.com
OFFICE365_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
CONTACT_RECIPIENT_EMAIL=info@fatdogspirits.com
PORT=3001
NODE_ENV=production
CORS_ORIGIN=https://touchvodka.com
```

## Troubleshooting

### "Missing Office365 email credentials"

**Problem:** Environment variables not set

**Solution:**
1. Create `.env` file in project root
2. Add `OFFICE365_EMAIL` and `OFFICE365_APP_PASSWORD`
3. Restart server: `npm run dev:server`

### "SMTP connection failed"

**Problem:** Email credentials invalid or 2FA not enabled

**Solution:**
1. Verify Office365 credentials are correct
2. Check 2-factor authentication is enabled
3. Regenerate app password
4. Update `.env` file

### "CORS error" (Frontend can't reach backend)

**Problem:** CORS origin not configured

**Solution:**
1. Check backend console for CORS message
2. Update `CORS_ORIGIN` in `.env`:
   ```
   CORS_ORIGIN=http://localhost:3002,http://localhost:3000
   ```
3. Restart backend server

### Form won't submit

**Problem:** Validation error on client or server

**Solution:**
1. Open DevTools (F12) → Console
2. Check for error messages
3. Verify all fields are filled correctly
4. Check server console for validation errors

### Email not received

**Problem:** Email sent but not in inbox

**Solution:**
1. Check spam/junk folder
2. Verify recipient email in `.env`
3. Check server logs for success message
4. Verify Office365 account isn't blocked

## Security Best Practices

1. ✅ **Never commit .env file** - Use .gitignore
2. ✅ **Validate all inputs** - Server-side validation implemented
3. ✅ **Sanitize HTML** - Email content escaped to prevent XSS
4. ✅ **Use HTTPS** - Required for production
5. ✅ **Rate limiting** - Consider adding for production
6. ✅ **CORS restricted** - Only allow known origins
7. ✅ **App Password** - Not your main Office365 password

## Rate Limiting (Optional)

For production, add rate limiting:

```bash
npm install express-rate-limit
```

Update `server/routes/contact.ts`:

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
});

router.post('/contact', limiter, contactValidationRules(), ...);
```

## Monitoring & Logging

### Check server health:
```bash
curl http://localhost:3001/api/health
```

### Enable verbose logging:
```typescript
// In emailService.ts
console.log('Email sent:', info.messageId);
console.error('Email error:', error);
```

### Production logging:
Consider using services like:
- AWS CloudWatch
- Datadog
- LogRocket
- Sentry

## File Structure

```
project/
├── server/
│   ├── index.ts              # Express server
│   ├── emailService.ts       # Email logic
│   └── routes/
│       └── contact.ts        # Contact API endpoint
├── src/
│   ├── pages/
│   │   └── FindUs.tsx        # Updated form component
│   └── hooks/
│       └── useContactForm.ts # Form state hook
├── .env.example              # Environment template
├── .env.local.example        # Frontend env template
└── package.json              # Dependencies
```

## Performance Considerations

- Email sending is async (non-blocking)
- Form submission completes in 1-3 seconds
- Server handles concurrent requests
- Consider caching transporter connection

## Support & Testing

### Test Email Address

For testing, use:
- Gmail: `test@gmail.com`
- Outlook: `test@outlook.com`
- Custom: Any email address you control

### Test Subject Lines

- "Test Message"
- "Wholesale Inquiry"
- "Product Question"

### Monitor Email Delivery

Check Office365 Activity log:
1. Go to https://admin.microsoft.com
2. Users → Active users
3. Select the account
4. Activity section

## Next Steps

1. ✅ Set up app password
2. ✅ Configure .env file
3. ✅ Install dependencies
4. ✅ Run backend server
5. ✅ Test form locally
6. ✅ Deploy to Amplify
7. ✅ Monitor submissions
8. ✅ Add rate limiting (optional)

---

**Questions?** Check the troubleshooting section or review server logs for detailed error messages.
