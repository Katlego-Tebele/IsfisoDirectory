# 🖼️ How to Add Your Hero Background Image

## ✅ What I've Done:

I've updated your website CSS so the hero section (home page banner) will now display a beautiful background image with:
- ✅ Full-screen background image
- ✅ Warm brown overlay for better text readability
- ✅ White text that stands out beautifully
- ✅ Professional look

---

## 📸 To Add Your Background Image:

### Step 1: Choose Your Best Image

Pick **your most impressive carpentry photo** - this is the first thing visitors see!

**Good choices:**
- ✅ Wide shot of a completed kitchen
- ✅ Beautiful living room with TV unit
- ✅ Impressive bedroom with wardrobe
- ✅ Any project you're most proud of
- ✅ Should show your craftsmanship clearly

**Image specs:**
- **Size:** 1920 x 1080 pixels (or similar wide format)
- **Format:** JPG or PNG
- **Quality:** High quality, well-lit photo

### Step 2: Add the Image

1. **Find or take your hero image**
2. **Rename it to:** `hero-bg.jpg`
3. **Place it in:** `assets/images/` folder (NOT in services or gallery)

**Full path should be:**
```
Isfiso-Carpentry/assets/images/hero-bg.jpg
```

### Step 3: Test

1. **Open** `index.html` in your browser
2. **Refresh** (Ctrl+F5)
3. Your hero section should now show your image as the background!

---

## 🎨 What You'll See:

- Your image will cover the entire hero section
- A warm brown overlay makes the text readable
- White text stands out beautifully
- Professional, magazine-quality look

---

## 🔧 Alternative: Use an Existing Gallery Image

Don't have a special hero image? Use one of your existing photos!

### Option A: Copy from Gallery

1. Go to `assets/images/gallery/`
2. Pick your best image (maybe kitchen.jpeg or work1.jpeg?)
3. **Copy** it to `assets/images/`
4. **Rename the copy** to `hero-bg.jpg`

### Option B: Update the CSS Path

If you want to use a specific gallery image without copying:

1. Open `assets/css/styles.css`
2. Find this line (around line 365):
   ```css
   background: url('../images/hero-bg.jpg') center/cover no-repeat;
   ```
3. Change to:
   ```css
   background: url('../images/gallery/kitchen.jpeg') center/cover no-repeat;
   ```
   (or whatever image you want to use)

---

## 📱 Tips for Best Results:

### Good Hero Background Images:
- ✅ Wide/landscape orientation
- ✅ Well-lit, not too dark
- ✅ Shows your work quality
- ✅ Not too busy (so text is readable)
- ✅ Professional looking

### Avoid:
- ❌ Very dark images (text won't show)
- ❌ Portrait/vertical images (won't fit well)
- ❌ Blurry or low quality
- ❌ Images with text already on them

---

## 🎯 Quick Examples:

### Using kitchen.jpeg from gallery:
```
1. Copy: assets/images/gallery/kitchen.jpeg
2. To: assets/images/
3. Rename to: hero-bg.jpg
4. Refresh browser
```

### Using a new photo from your phone:
```
1. Take wide photo of your best work
2. Transfer to computer
3. Resize to 1920x1080 (optional but recommended)
4. Name it: hero-bg.jpg
5. Put in: assets/images/
6. Refresh browser
```

---

## 🆘 Troubleshooting:

### Image doesn't show?
- ✅ Check file name is exactly: `hero-bg.jpg` (lowercase, no spaces)
- ✅ Check it's in: `assets/images/` (not in services or gallery)
- ✅ Refresh browser with Ctrl+F5
- ✅ Check file format is .jpg or .jpeg

### Image shows but looks bad?
- Resize image to 1920x1080 pixels
- Compress with TinyPNG: https://tinypng.com
- Try a different photo

### Text is hard to read?
- The brown overlay should help
- If still an issue, pick a lighter/less busy image
- Or I can adjust the overlay darkness

---

## 🌟 See the Difference:

**Before:** Plain cream background  
**After:** Your stunning carpentry work as background with elegant overlay!

---

**Your hero section will look amazing! 🚀**

Just add that `hero-bg.jpg` image and refresh your browser!
