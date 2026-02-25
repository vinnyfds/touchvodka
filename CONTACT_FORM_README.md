# Contact Form Implementation Complete

## ✅ What's Been Created

### Backend Files
- **`server/index.ts`** - Express server with CORS & middleware
- **`server/emailService.ts`** - Nodemailer SMTP integration
- **`server/routes/contact.ts`** - Contact form API endpoint

### Frontend Files
- **`src/hooks/useContactForm.ts`** - Form state management hook
- **`src/pages/FindUs.tsx`** (UPDATED) - Enhanced contact form with UI feedback

### Configuration Files
- **`.env.example`** - Backend environment template
- **`.env.local.example`** - Frontend environment template
- **`CONTACT_FORM_SETUP.md`** - Complete setup documentation

### Updated Dependencies
- `nodemailer` - SMTP email client
- `express-validator` - Form validation
- `cors` - Cross-origin support
- `@types/nodemailer` - TypeScript types
- `concurrently` - Run both servers

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env` file in project root:
```bash
OFFICE365_EMAIL=info@fatdogspirits.com
OFFICE365_APP_PASSWORD=your-app-password-here
CONTACT_RECIPIENT_EMAIL=info@fatdogspirits.com
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3002,http://localhost:3000
```

**How to get app password:**
1. Go to https://account.microsoft.com/account/manage-my-microsoft-account
2. Click "Security"
3. Find "App passwords" (requires 2FA enabled)
4. Generate password for "Mail" on "Windows (or device)"
5. Copy the generated password (format: xxxx xxxx xxxx xxxx)

### 3. Run Both Servers

**Option A: Run together**
```bash
npm run dev:all
```

**Option B: Run separately**

Terminal 1 - Backend:
```bash
npm run dev:server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### 4. Test the Form

1. Open browser to `http://localhost:3002/#find-us`
2. Fill out form and click "SEND MESSAGE"
3. See success message
4. Check email at info@fatdogspirits.com

## 📧 Email Features

### What Gets Sent

**To:** info@fatdogspirits.com
**Reply-To:** User's email
**Subject:** `[Contact Form] {User's Subject}`

**Email body includes:**
- User's name
- User's email
- Subject line
- Full message
- Submission timestamp
- Both HTML and plain text formats

### Form Validation

Server-side validation:
- ✅ Name: 2-100 characters
- ✅ Email: Valid email format
- ✅ Subject: 5-200 characters
- ✅ Message: 10-5000 characters
- ✅ HTML sanitization (XSS prevention)

Client-side validation:
- ✅ All fields required
- ✅ Real-time feedback
- ✅ Loading state
- ✅ Success/error messages

## 🎨 User Experience

### Success State
- ✅ Green banner with checkmark
- Success message: "Message sent successfully!"
- Form clears automatically
- Auto-disappears after 5 seconds

### Error State
- ❌ Red banner with alert icon
- Error message displayed
- Form data preserved
- Can retry

### Loading State
- Button shows "SENDING..."
- Fields disabled (no double-submit)
- Cursor changes to "not-allowed"
- 1-3 seconds typical

## 📁 File Structure

```
touchvodka/
├── server/
│   ├── index.ts                 # Express server
│   ├── emailService.ts          # Email logic
│   └── routes/
│       └── contact.ts           # POST /api/contact
├── src/
│   ├── pages/
│   │   └── FindUs.tsx           # Contact form page
│   └── hooks/
│       └── useContactForm.ts    # Form hook
├── .env.example                 # Backend template
├── .env.local.example           # Frontend template
├── .env (create this)           # Your actual secrets
├── .env.local (create this)     # Frontend config
├── package.json                 # Updated dependencies
└── CONTACT_FORM_SETUP.md        # Setup docs
```

## 🔐 Security

✅ **Server-side validation** - All inputs validated
✅ **HTML escaping** - Prevents XSS attacks
✅ **Environment variables** - Secrets never in code
✅ **CORS configured** - Only allowed origins
✅ **No third parties** - Direct SMTP only
✅ **Type-safe** - Full TypeScript support

**Never commit:**
- `.env` file
- `.env.local` file
- App passwords

## 🌐 API Endpoint

### POST /api/contact

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Wholesale Inquiry",
  "message": "I'm interested in stocking your vodka..."
}
```

**Success response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon!"
}
```

**Error response (400/500):**
```json
{
  "success": false,
  "message": "Failed to send message...",
  "errors": []  // If validation failed
}
```

## 🚢 Deployment

### AWS Amplify Setup

#### Backend Option 1: AWS Lambda + API Gateway

1. Create Lambda function (Node.js 18+)
2. Deploy `server/` folder code
3. Set environment variables in Lambda
4. Create API Gateway trigger
5. Update frontend CORS_ORIGIN

#### Backend Option 2: Amplify Custom Domain with Express

1. Create separate Express app in Amplify
2. Or use AWS App Runner
3. Set environment variables
4. Note the API URL

#### Frontend (Amplify Console)

1. Build automatically on push
2. Set environment variables:
   ```
   VITE_API_URL=https://your-api-domain.com
   ```
3. Deploy

## 📊 Package.json Scripts

```bash
npm run dev          # Frontend only (port 3002)
npm run dev:server   # Backend only (port 3001)
npm run dev:all      # Both frontend + backend
npm run build        # Build for production
npm run lint         # TypeScript check
```

## 🐛 Troubleshooting

### "Missing Office365 credentials"
- Create `.env` file with credentials
- Restart backend: `npm run dev:server`

### "SMTP connection failed"
- Verify app password is correct
- Check 2FA is enabled in Office365
- Regenerate app password if needed

### "CORS error" in browser
- Check backend is running on 3001
- Verify CORS_ORIGIN includes your URL
- Frontend should be on 3002 or 3000

### Form won't submit
- Check browser console for errors (F12)
- Check backend console for logs
- Verify all form fields are filled
- Try clearing browser cache

### Email not received
- Check spam folder
- Verify recipient email in `.env`
- Check backend logs for "Email sent successfully"
- Verify Office365 account isn't blocked

## 📝 Notes

- Forms are stored only in email (no database)
- Emails persist in Office365 inbox
- No rate limiting on free tier (add for production)
- Backend must run concurrently with frontend

## 🎯 Next Steps

1. ✅ Create `.env` with Office365 credentials
2. ✅ Run `npm install`
3. ✅ Run `npm run dev:all`
4. ✅ Test form at `http://localhost:3002/#find-us`
5. ✅ Deploy to Amplify
6. ✅ Monitor form submissions

## 📖 Full Documentation

See **CONTACT_FORM_SETUP.md** for:
- Detailed Office365 setup
- Deployment instructions
- Rate limiting setup
- Monitoring & logging
- Production best practices

---

**Status:** ✅ Ready to use locally and deploy to production
