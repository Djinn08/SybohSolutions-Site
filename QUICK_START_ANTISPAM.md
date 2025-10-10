# Quick Start: Anti-Spam Setup

## 🚀 Get Started in 3 Steps

### 1️⃣ Get reCAPTCHA Keys (5 minutes)
1. Go to https://www.google.com/recaptcha/admin
2. Click "+" to create new site
3. Choose **reCAPTCHA v3**
4. Add domains: `sybohsolutions.com` and `localhost`
5. Copy **Site Key** and **Secret Key**

### 2️⃣ Add Environment Variables (1 minute)
Create or edit `.env.local` in project root:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### 3️⃣ Deploy (5 minutes)
1. Add environment variables to Vercel/hosting platform
2. Push code to repository
3. Deploy automatically triggers
4. Test form submission

## ✅ That's It!

Your contact forms are now protected with:
- ✨ Invisible honeypot trap for simple bots
- 🤖 Google reCAPTCHA v3 for sophisticated bots
- 🔒 Zero impact on user experience
- 📊 Automatic spam filtering

## 🧪 Test It

**Test form works**: Submit contact form normally
**Check email**: Verify you receive the submission
**View logs**: Check server logs for reCAPTCHA scores

## 📚 More Info

- **Setup Guide**: `ANTI_SPAM_SETUP.md`
- **Implementation Details**: `ANTI_SPAM_IMPLEMENTATION_SUMMARY.md`
- **Changes Log**: `CHANGELOG.md`

## ⚙️ Optional: Adjust Sensitivity

Edit `app/api/contact/route.ts` line 70:

```typescript
const minScore = 0.5; // 0.3 = permissive, 0.7 = strict
```

## 🆘 Troubleshooting

**Forms not submitting?**
- Check environment variables are set
- Verify domains in reCAPTCHA admin
- Check browser console for errors

**Still getting spam?**
- Increase score threshold to 0.7
- Check server logs for bypassed protection

**Blocking real users?**
- Decrease score threshold to 0.3
- Check reCAPTCHA scores in logs

---

**Need Help?** See full documentation in `ANTI_SPAM_SETUP.md`

