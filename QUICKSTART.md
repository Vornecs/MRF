# 🚀 Quick Start Guide

## Get Your Defense Counsel Website Live in 5 Minutes

### Step 1: Test Locally
```bash
# Navigate to the website directory
cd /workspaces/MRF

# Open in browser (choose one):
open index.html                    # macOS
xdg-open index.html               # Linux
start index.html                  # Windows

# OR use a local server:
python -m http.server 8000        # Visit http://localhost:8000
```

### Step 2: Customize Your Content

1. **Update Firm Name & Contact:**
   - Edit `index.html`
   - Search for "Defense Counsel", "(212) 555-1234", "info@defensecounsel.com"
   - Replace with your firm's details

2. **Add Your Team:**
   - Edit `js/main.js`
   - Find `counselorData` array (around line 23)
   - Add/modify team member objects

3. **Customize Services:**
   - Edit `index.html`
   - Find Services section (around line 384)
   - Update service descriptions

### Step 3: Deploy to GitHub Pages

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Defense Counsel Website - Initial Deployment"
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/MRF.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

✅ Your site is now live at: `https://YOUR_USERNAME.github.io/MRF/`

## 🎨 Customization Highlights

### Change Theme Colors
Edit `css/styles.css` lines 9-49:
```css
:root {
    --accent-primary: #0d47a1;  /* Change this to your brand color */
}
```

### Enable Form Submissions
Integrate with Formspree, Netlify, or your own backend:
1. Visit https://formspree.io (free form service)
2. Create account and get form endpoint
3. Update form submission code in `js/main.js`

### Add Custom Domains (Optional)
After deploying to GitHub Pages:
1. Go to repository Settings > Pages
2. Add custom domain
3. Update DNS records (see GitHub docs)

## 📋 What's Included

✅ 7 Full Pages (Home, Counsel, Services, About, Contact, Forms)
✅ Light/Dark Theme Toggle with Persistence
✅ Fully Responsive Design
✅ Accordion Profile Cards for Team
✅ Form Validation & Error Messages
✅ Mobile Hamburger Menu
✅ Smooth Animations
✅ Octopus Branding
✅ Professional Styling
✅ Accessibility Features

## 🎯 Key Files

| File | Purpose |
|------|---------|
| `index.html` | All pages and structure |
| `css/styles.css` | Styling + light/dark themes |
| `js/main.js` | Functionality and interactivity |

## 🔧 Common Customizations

### Update Office Address
Search in `index.html` for "123 Justice Boulevard" and replace

### Update Phone Number
Search for "(212) 555-1234" and replace

### Update Email
Search for "info@defensecounsel.com" and replace

### Update Google Map
1. Go to https://maps.google.com
2. Search for your address
3. Click Share > Embed map
4. Copy iframe and replace in Contact section

### Change Firm Name
Search for "Defense Counsel" throughout files and replace

## ✅ Testing Checklist

- [ ] Website loads locally
- [ ] Theme toggle works
- [ ] Mobile menu works
- [ ] Counselor profiles expand
- [ ] Forms show validation
- [ ] All links work
- [ ] GitHub Pages deployed
- [ ] Live site is accessible

## 📚 Detailed Guides

For more detailed information, see:
- `DEPLOYMENT.md` - Complete deployment & customization guide
- `README.md` - Full documentation

## 🆘 Troubleshooting

**Styles not loading?**
- Check CSS file path in HTML
- Clear browser cache

**JavaScript not working?**
- Check browser console (F12) for errors
- Verify JS file path in HTML

**GitHub Pages not updating?**
- Wait a few minutes for GitHub to rebuild
- Clear browser cache
- Check Actions tab for build errors

---

**You're all set!** 🎉 Your professional defense representation website is ready to launch.
