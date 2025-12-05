# 🧪 Testing & Verification Guide

## Quick Visual Inspection

### 1. Open in Browser
```bash
# Navigate to project directory
cd /workspaces/MRF

# Open in default browser
open index.html              # macOS
xdg-open index.html         # Linux
start index.html            # Windows
```

### 2. Test All Pages
- [ ] **Home** - Click "Home" in nav, verify hero and overview sections display
- [ ] **Our Counsel** - Click counselor names to expand profiles
- [ ] **Services** - Scroll through services, verify all 6 services display
- [ ] **About Us** - View firm history, mission, and values
- [ ] **Contact** - View address, phone, email, map
- [ ] **Request Representation** - Try form submission with validation
- [ ] **Internship** - Try application form

### 3. Test Theme Toggle
- [ ] Click sun/moon icon in header
- [ ] Verify page colors change smoothly
- [ ] Reload page - theme should persist
- [ ] Toggle back to original theme

### 4. Test Responsive Design
**Mobile (< 600px):**
- [ ] Hamburger menu visible
- [ ] Navigation menu can toggle
- [ ] Content stacks vertically
- [ ] Buttons are touch-friendly
- [ ] Text is readable (no overflow)

**Tablet (600-1023px):**
- [ ] 2-column layouts where appropriate
- [ ] Cards display nicely
- [ ] Menu might show both hamburger and nav

**Desktop (≥ 1024px):**
- [ ] Full horizontal navigation visible
- [ ] Multi-column grids display
- [ ] Large hero section shows octopus

### 5. Test Interactive Elements
- [ ] **Hamburger Menu** - Click to open/close on mobile
- [ ] **Counselor Cards** - Click to expand/collapse profiles
- [ ] **Buttons** - Hover effects, click navigation
- [ ] **Links** - All navigation links work
- [ ] **Forms** - Submit button responds

### 6. Test Form Validation
#### Representation Form:
- [ ] Leave name blank, try submit → error shows
- [ ] Enter invalid email → error shows
- [ ] Invalid phone → error shows
- [ ] Select all fields correctly → success message

#### Internship Form:
- [ ] Try submit without checking interests → error
- [ ] Don't upload resume → error
- [ ] Leave cover letter blank → error
- [ ] Fill all fields → success message

### 7. Test Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter/Space triggers buttons
- [ ] Escape closes menus (if implemented)
- [ ] Focus visible on all elements
- [ ] Counsel cards expand with keyboard

### 8. Test Smooth Scrolling
- [ ] Click navigation links
- [ ] Page smoothly scrolls to section
- [ ] No jarring page jumps

## Browser Testing

Test in multiple browsers:

### Chrome/Chromium
```bash
google-chrome index.html        # Linux
chromium index.html             # Fedora
```

### Firefox
```bash
firefox index.html
```

### Safari (macOS)
```bash
open index.html -a Safari
```

### Mobile Browsers
Use browser developer tools to test mobile sizes:
- Chrome: DevTools > Toggle device toolbar (Ctrl+Shift+M)
- Firefox: DevTools > Responsive Design Mode (Ctrl+Shift+M)

## Performance Testing

### Check Console
1. Open Developer Tools (F12)
2. Go to Console tab
3. Should see: "Defense Counsel Website Loaded Successfully"
4. No errors should appear

### Check Network
1. Open DevTools > Network tab
2. Reload page
3. All files should load (HTML, CSS, JS)
4. No 404 errors
5. Load time should be < 1 second

### Check Styles
1. Inspect elements (F12 > Elements)
2. Verify CSS is applied
3. Check computed styles
4. Verify responsive classes work

## Accessibility Testing

### Screen Reader (NVDA/JAWS)
- [ ] All buttons have labels
- [ ] Form fields have labels
- [ ] Links have descriptive text
- [ ] Images have alt text (if any)
- [ ] Headings are properly structured

### Keyboard Only
- [ ] Navigate entire site with Tab key
- [ ] Activate buttons with Enter
- [ ] Expand profiles with Enter/Space
- [ ] Toggle menus with Enter
- [ ] Focus indicators always visible

### Color Contrast
Use browser extension or online tool:
- [ ] Text on white backgrounds
- [ ] Text on colored backgrounds
- [ ] Headings vs body text
- [ ] All have sufficient contrast (WCAG AA)

## Responsive Testing

### Mobile Sizes
- [ ] iPhone SE (375px) - 320-568px
- [ ] iPhone 12 (390px) - 360-800px
- [ ] Pixel 5 (393px) - 360-800px

### Tablet Sizes
- [ ] iPad (768px) - 768-1024px
- [ ] iPad Pro (1024px) - 1024-1366px

### Desktop Sizes
- [ ] 1366x768 (common laptop)
- [ ] 1920x1080 (Full HD)
- [ ] 2560x1440 (QHD)

### Use DevTools
```
Chrome/Firefox DevTools
- Toggle device toolbar: Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
- Test various device presets
- Test custom widths
```

## Content Verification

### Check All Text
- [ ] No placeholder text remains
- [ ] All sections have content
- [ ] No Lorem Ipsum
- [ ] Firm name consistent
- [ ] Contact info accurate

### Check All Links
- [ ] Navigation links work
- [ ] Footer links work
- [ ] Email links open in mail client
- [ ] Phone links open dialer on mobile
- [ ] External links (if any) open properly

### Check All Images/SVGs
- [ ] Octopus logo displays
- [ ] Hero octopus displays
- [ ] Avatar initials show for counselors
- [ ] Icons display correctly
- [ ] No broken image icons

## Form Testing

### Representation Form
```
Valid Submission:
- Name: John Smith
- Email: john@example.com
- Phone: (555) 123-4567
- Case Type: Commercial Dispute
- Description: (any text > 20 chars)
- Contact: Email
- Urgency: Medium
Result: Success message

Invalid Submissions:
- Name: J (too short) → Error
- Email: invalid (no @) → Error
- Phone: 123 (too short) → Error
- Leave any required field → Error
```

### Internship Form
```
Valid Submission:
- Name: Jane Doe
- Email: jane@example.com
- Phone: (555) 987-6543
- Education: Law Student
- School: Harvard Law School
- Year: 3rd Year
- Resume: (any file selected)
- Cover Letter: (any text)
- Interests: Check at least 1
- Availability: Summer 2024
Result: Success message

Invalid Submissions:
- Uncheck all interests → Error
- Don't select resume → Error
- Leave fields blank → Error
```

## Theme Testing

### Light Theme
- [ ] Page loads in light mode by default
- [ ] Backgrounds are white/light
- [ ] Text is dark
- [ ] Accents are blue/teal
- [ ] All readable

### Dark Theme
- [ ] Click theme toggle → dark mode
- [ ] Backgrounds are dark
- [ ] Text is light
- [ ] Accents are bright
- [ ] All readable

### Theme Persistence
- [ ] Toggle to dark mode
- [ ] Reload page (F5)
- [ ] Dark mode persists
- [ ] Toggle back to light
- [ ] Reload page
- [ ] Light mode persists

## Animation Testing

### Page Load
- [ ] Page content fades in
- [ ] Smooth transition on nav

### Hover Effects
- [ ] Buttons change on hover
- [ ] Cards lift on hover
- [ ] Links change color on hover
- [ ] Shadows appear

### Expand/Collapse
- [ ] Counselor profiles smooth expand
- [ ] Arrow icon rotates
- [ ] Multiple profiles don't overlap

### Menu Animation
- [ ] Hamburger icon animates to X
- [ ] Menu slides down smoothly
- [ ] Menu slides up to hide

## SEO Testing

### Meta Tags
1. Open page source (Ctrl+U)
2. Verify in `<head>`:
   - [ ] Title tag present
   - [ ] Meta description present
   - [ ] Viewport meta tag
   - [ ] Theme color tag

### Structured Data
- [ ] Semantic HTML used throughout
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Nav landmarks present
- [ ] Main content identified

## Final Checklist

- [ ] All 7 pages load and display correctly
- [ ] Navigation works on all devices
- [ ] Forms validate and show messages
- [ ] Theme toggle persists
- [ ] Responsive design works (mobile/tablet/desktop)
- [ ] No console errors
- [ ] No broken links
- [ ] No 404 errors
- [ ] All animations smooth
- [ ] Keyboard navigation works
- [ ] Color contrast acceptable
- [ ] Load time acceptable (< 1s)
- [ ] Ready for GitHub Pages deployment

## Deploy to GitHub Pages

Once all tests pass:

```bash
# Commit changes
git add .
git commit -m "Full testing complete - ready for deployment"

# Push to GitHub
git push origin main

# Enable GitHub Pages in repository settings
# Site will be live at: https://USERNAME.github.io/MRF/
```

## Troubleshooting Issues

### Page Not Loading
- Check browser console for errors (F12)
- Verify file paths in HTML
- Ensure CSS and JS files are in correct folders

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path
- Verify CSS has no syntax errors

### JavaScript Not Working
- Open DevTools Console
- Check for error messages
- Verify JS file is loaded
- Check JS syntax

### Theme Not Persisting
- Check browser localStorage is enabled
- Clear all site data
- Try in incognito/private window

### Forms Not Validating
- Check browser console for JS errors
- Verify form field IDs match JS code
- Test in different browser

---

**All tests passing? You're ready to deploy! 🚀**
