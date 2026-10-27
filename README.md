# Isifiso-Sakho Carpentry Website

A beautiful, modern, professional website for Isifiso-Sakho Carpentry showcasing quality craftsmanship in kitchen units, wardrobes, TV units, bar tables, wooden flooring, and ceiling installations.

## 🏗️ Business Information

- **Business Name:** Isifiso-Sakho Carpentry
- **Phone & WhatsApp:** 076 720 6347
- **Address:** 5181 Phumzile Street, Diepkloof Zone 5, Gauteng, South Africa

## 📁 Project Structure

```
Isfiso-Carpentry/
├── index.html                  # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css         # All styling
│   ├── js/
│   │   └── main.js            # All JavaScript functionality
│   └── images/
│       ├── services/          # Service section images
│       │   ├── kitchen.jpg
│       │   ├── wardrobe.jpg
│       │   ├── tv-unit.jpg
│       │   ├── bar-table.jpg
│       │   ├── flooring.jpg
│       │   └── ceiling.jpg
│       ├── gallery/           # Gallery/portfolio images
│       │   ├── project-1.jpg
│       │   ├── project-2.jpg
│       │   ├── project-3.jpg
│       │   ├── project-4.jpg
│       │   ├── project-5.jpg
│       │   └── project-6.jpg
│       └── hero-bg.jpg        # Hero section background (optional)
└── README.md
```

## 📸 Adding Your Images

### Step 1: Prepare Your Images

1. **Optimize your images** before uploading:
   - Recommended size: 1200px-1920px width for best quality
   - File format: JPG or PNG
   - Compress images to reduce file size (aim for under 500KB per image)

2. **Organize by category:**
   - Kitchen photos → `assets/images/services/kitchen.jpg`
   - Wardrobe photos → `assets/images/services/wardrobe.jpg`
   - TV unit photos → `assets/images/services/tv-unit.jpg`
   - Bar table photos → `assets/images/services/bar-table.jpg`
   - Flooring photos → `assets/images/services/flooring.jpg`
   - Ceiling photos → `assets/images/services/ceiling.jpg`

### Step 2: Add Service Images

Replace the placeholder images in `assets/images/services/` with your actual photos:

- `kitchen.jpg` - Your best kitchen unit installation
- `wardrobe.jpg` - Your best wardrobe installation
- `tv-unit.jpg` - Your best TV unit installation
- `bar-table.jpg` - Your best bar table work
- `flooring.jpg` - Your best wooden flooring work
- `ceiling.jpg` - Your best ceiling installation

**Important:** Use these exact filenames or update the image paths in `index.html`.

### Step 3: Add Gallery/Portfolio Images

Add 6-12 photos of your completed projects to `assets/images/gallery/`:

- Name them: `project-1.jpg`, `project-2.jpg`, `project-3.jpg`, etc.
- These will appear in the "Our Work" section
- Mix different types of projects to showcase variety

### Step 4: Add Hero Background (Optional)

- Add a hero background image: `assets/images/hero-bg.jpg`
- This should be a high-quality, professional photo of your best work
- Recommended size: 1920px × 1080px

## 🚀 How to Launch the Website

### Option 1: Open Locally (Testing)

1. Double-click `index.html` to open in your browser
2. The website will work perfectly for viewing and testing

### Option 2: Deploy Online (Recommended)

#### Using GitHub Pages (FREE):

1. Create a GitHub account at https://github.com
2. Create a new repository
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select "main" branch and click Save
6. Your website will be live at: `https://yourusername.github.io/repository-name`

#### Using Netlify (FREE):

1. Go to https://www.netlify.com
2. Sign up for a free account
3. Drag and drop your entire project folder
4. Your website will be live instantly with a custom URL

#### Using InfinityFree (FREE Hosting):

1. Go to https://infinityfree.net
2. Sign up and create a free hosting account
3. Upload files via FTP or File Manager
4. Your website will be live with a free subdomain

## ✨ Features

- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **WhatsApp Integration** - All enquiry buttons open WhatsApp with pre-filled messages
- **Image Gallery** - Clickable lightbox gallery for project photos
- **Smooth Animations** - Professional fade-in effects and hover animations
- **Mobile-First Design** - Optimized for smartphone users
- **Fast Loading** - Optimized images and lazy loading
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessible** - Keyboard navigation and screen reader support

## 📱 WhatsApp Integration

All contact buttons direct customers to WhatsApp with pre-filled messages:

- **Phone Number:** 27767206347 (international format)
- **Target:** Opens in new tab
- **Messages:** Customized per service

Examples:
- General enquiry: "Hello Isifiso-Sakho Carpentry, I found your website..."
- Kitchen units: "I am interested in built-in kitchen units..."
- Wardrobes: "I am interested in built-in wardrobes..."

## 🎨 Color Palette

- **Primary (Wood Brown):** #8B4513
- **Cream/Off-White:** #FAF6F1
- **Charcoal:** #2C2C2C
- **Gold/Beige Accent:** #D4A574
- **WhatsApp Green:** #25D366

## 🛠️ Customization

### Change Business Information

Edit `index.html` to update:
- Business name
- Address
- Phone number
- Services descriptions

### Change Colors

Edit `assets/css/styles.css` in the `:root` section:

```css
:root {
    --color-primary: #8B4513;        /* Change main color */
    --color-secondary: #D4A574;      /* Change accent color */
    /* ... other colors */
}
```

### Add More Gallery Images

1. Add images to `assets/images/gallery/`
2. In `index.html`, find the gallery section
3. Copy and paste this code for each new image:

```html
<div class="gallery-item">
    <img src="assets/images/gallery/your-image.jpg" alt="Project Description" loading="lazy">
</div>
```

### Change WhatsApp Messages

In `index.html`, find any WhatsApp link and update the `text=` parameter:

```html
<a href="https://wa.me/27767206347?text=Your%20custom%20message%20here">
```

**Note:** Use `%20` for spaces in URLs.

## 📋 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Images Not Showing?

1. Check that image files are in the correct folders
2. Verify filenames match exactly (case-sensitive)
3. Ensure images are JPG or PNG format
4. Try refreshing the browser (Ctrl+F5)

### WhatsApp Links Not Working?

1. Test links on a mobile device (works better)
2. Ensure WhatsApp is installed
3. Check that the phone number format is correct: 27767206347

### Website Looks Broken?

1. Check that all three files are present:
   - `index.html`
   - `assets/css/styles.css`
   - `assets/js/main.js`
2. Verify folder structure matches the diagram above
3. Clear browser cache and refresh

## 📞 Support

For technical support or questions about the website:

**Website Developer Support:**
- Review this README file
- Check browser console for errors (F12)
- Ensure all files are uploaded correctly

**Business Contact:**
- Phone: 076 720 6347
- WhatsApp: https://wa.me/27767206347

## 📄 License

This website is custom-built for Isifiso-Sakho Carpentry.

---

**Built with ❤️ for Isifiso-Sakho Carpentry**

*Quality Craftsmanship. Beautiful Spaces.*
