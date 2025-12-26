# Feature Testing Guide

## Testing All AI Features Locally

### 1. Gemini AI Chat ✅
- Navigate to **AI Chat** in the sidebar
- Click **"Start Chatting"** button
- Type a test message: "Hello, how can you help me?"
- Expected: AI responds with a helpful message

**Features to Test:**
- Message sending and receiving
- Chat history displays correctly
- Multiple consecutive messages work
- Error handling (if API fails)

### 2. Content Tools ✅
Navigate to **Content Tools** and test each tool:

#### a) Text Enhancer
- Input: "this txt is very bad and needs improvment"
- Mode: Select "improve"
- Expected: Enhanced text with better grammar and style

#### b) Email Writer
- Context: "Job application inquiry"
- Tone: "Professional"
- Expected: Complete professional email with subject line

#### c) Code Explainer
- Input: `for (let i = 0; i < 10; i++) { console.log(i); }`
- Expected: Clear explanation of the loop

#### d) Blog Generator
- Topic: "Introduction to JavaScript"
- Length: "Short"
- Expected: SEO-optimized blog post

#### e) Study Assistant
- Topic: "Photosynthesis"
- Expected: Educational notes and explanations

#### f) Other Tools
- Test Email Generator, Story Generator, Social Media Post Generator, Math Solver, and Translator similarly

### 3. ReCAPTCHA Protection ✅
- Open **Content Tools** page
- Use any tool
- Expected: reCAPTCHA loads silently in background
- Check browser console: No errors about NEXT_PUBLIC_RECAPTCHA_SITE_KEY

**Note:** ReCAPTCHA Secret Key (`RECAPTCHA_SECRET_KEY`) is needed for production to verify tokens. For local development with public site key, it should work.

### 4. Error Handling
- Go to Content Tools without Gemini API Key in .env
- Try to use a tool
- Expected: Clear error message about missing API key
- Check browser console: Meaningful error, not cryptic API error

## Browser Console Checks
1. Open Developer Tools (F12)
2. Go to **Console** tab
3. Expected: No red errors
4. Warnings about development/Next.js are OK

## Network Tab Checks
1. Open Developer Tools Network tab
2. Use any AI tool
3. Check requests:
   - ReCAPTCHA: Should call `https://www.google.com/recaptcha/api.js`
   - API calls: Should go to your app's `/api/*` endpoints
   - Gemini: Handled server-side (no direct API calls visible)

## Vercel Deployment Testing

After deploying with environment variables:

### Pre-Deployment Checklist
- [ ] GEMINI_API_KEY added to Vercel env vars
- [ ] RECAPTCHA_SECRET_KEY added to Vercel env vars  
- [ ] NEXT_PUBLIC_RECAPTCHA_SITE_KEY is public (safe to expose)
- [ ] All changes committed and pushed to Git
- [ ] Deploy triggered and completed

### Post-Deployment Testing
1. Visit your deployed app URL
2. Test AI Chat: Send a message and verify response
3. Test each Content Tool: Verify functionality
4. Check Vercel logs for any API errors
5. Open browser console: Check for errors
6. Try on mobile: Ensure responsive design works

### Troubleshooting Deployment Issues

| Issue | Solution |
|-------|----------|
| "Missing API key" error | Verify GEMINI_API_KEY is set in Vercel Environment Variables |
| ReCAPTCHA not validating | Check RECAPTCHA_SECRET_KEY is set; verify Site Key matches |
| Timeouts on API calls | Increase serverless function timeout in Vercel settings |
| Tools return empty results | Check Vercel function logs for API errors |
| 404 errors on API routes | Ensure `/api/` routes are properly deployed |

## Manual Testing Checklist

- [ ] Home page loads without errors
- [ ] Sidebar navigation works on all pages
- [ ] AI Chat feature responds to messages
- [ ] All content tools render correctly
- [ ] Tool inputs accept text/code properly
- [ ] Tool outputs display formatted results
- [ ] ReCAPTCHA loads silently (no console errors)
- [ ] Settings page works
- [ ] Dark/Light theme toggle works
- [ ] Mobile responsive design works
- [ ] No unhandled errors in console
