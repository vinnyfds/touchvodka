# Contact Form - Quick Start Guide

## ⚡ 3-Minute Setup

### 1. Get Office365 App Password
```
1. Go to: https://account.microsoft.com/account/manage-my-microsoft-account
2. Click: Security
3. Find: App passwords
4. Select: Mail + Windows
5. Copy: Your app password
```

### 2. Create `.env` File
```bash
OFFICE365_EMAIL=info@fatdogspirits.com
OFFICE365_APP_PASSWORD=your-password-here
CONTACT_RECIPIENT_EMAIL=info@fatdogspirits.com
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3002,http://localhost:3000
```

### 3. Install & Run
```bash
npm install
npm run dev:all
```

### 4. Test
Visit: `http://localhost:3002/#find-us`

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `server/index.ts` | Express server |
| `server/emailService.ts` | Email logic |
| `server/routes/contact.ts` | API endpoint |
| `src/hooks/useContactForm.ts` | Form hook |
| `src/pages/FindUs.tsx` | Form UI |

---

## 🎯 What Happens

1. User fills form → clicks "SEND MESSAGE"
2. Frontend validates → sends POST to `/api/contact`
3. Backend validates → creates Nodemailer transporter
4. Email sent via Microsoft 365 SMTP
5. User sees success message
6. Email arrives at info@fatdogspirits.com

---

## ✅ Features

- ✅ Form validation (client + server)
- ✅ HTML email with styling
- ✅ Success/error feedback
- ✅ Loading state
- ✅ No third-party services
- ✅ Direct SMTP (Microsoft 365)
- ✅ TypeScript support

---

## 🔧 Scripts

```bash
npm run dev          # Frontend only
npm run dev:server   # Backend only
npm run dev:all      # Both (recommended)
npm run build        # Production build
npm run lint         # TypeScript check
```

---

## 📧 API Endpoint

**POST** `/api/contact`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here..."
}
```

---

## 🚀 Deployment

### Amplify Setup

**Backend:**
- Create Lambda function with `server/index.ts`
- Set environment variables
- Create API Gateway trigger

**Frontend:**
- Add `VITE_API_URL=https://api-url.com` env var
- Deploy normally

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Missing credentials | Create `.env` file |
| SMTP error | Regenerate app password |
| CORS error | Verify CORS_ORIGIN setting |
| Not receiving emails | Check spam folder, verify recipient |

---

## 📚 Full Documentation

See `CONTACT_FORM_SETUP.md` for detailed information.

---

**Status:** ✅ Ready to use
