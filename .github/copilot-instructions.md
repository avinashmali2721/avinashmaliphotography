# Copilot Instructions for Avinash Mali Photography

## Project Overview
**Avinash Mali Photography** is a photographer portfolio website showcasing various photography services (wedding, portrait, candid, product, fashion, food, travel, event, baby shoot, pre-wedding) with an interactive lightbox gallery system, pricing packages, and contact functionality.

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Structure**: Multi-page static website (3 main pages)
- **Key Feature**: Interactive image lightbox with auto-slideshow and mobile swipe support

## Project Structure & Key Components

**Main Pages** (AVINASHMALIPHOTOGRAPHY/)
- [index.html](AVINASHMALIPHOTOGRAPHY/index.html) - Portfolio homepage with 10 photography categories and galleries
- [packages.html](AVINASHMALIPHOTOGRAPHY/packages.html) - Wedding packages with pricing (Golden/Silver/Platinum)
- [contact.html](AVINASHMALIPHOTOGRAPHY/contact.html) - Contact form + social/phone links

**Image Organization**
- images/ - 10 folders: wedding/, prewedding/, candid/, portrait/, event/, abyshoot/, product/, ashion/, ood/, 	ravel/
- Each folder named to match category in HTML (e.g., wedding photos in images/wedding/)

## Architecture & Core Patterns

### Lightbox Gallery System
The interactive image viewing experience is the project's core feature:

**How it works** ([script.js](AVINASHMALIPHOTOGRAPHY/script.js) lines 5-114):
- All .gallery img elements across all categories become clickable
- Clicking an image opens a full-screen lightbox modal with fade transitions
- Auto-slideshow advances images every 3000ms
- Navigation: next/prev buttons OR keyboard/touch gestures

**Mobile Interaction**:
- Swipe right/left triggers prev/next (30px+ threshold)
- Touch events reset auto-slideshow to prevent interference

**Key Functions**:
- openLightbox(index) - Opens modal and starts slideshow
- changeImage(index) - Fades old image, swaps source, fades in new
- startSlideshow() / stopSlideshow() - Manages 3s interval

### Styling Conventions
[style.css](AVINASHMALIPHOTOGRAPHY/style.css) uses:
- **Dark overlay pattern**: ody::before with gba(0,0,0,0.45) darkens background image (creates photography portfolio aesthetic)
- **Card layout**: .type containers are 320px wide, white cards with subtle shadows
- **Gallery grid**: Flex layout with 2rem gaps, responsive wrapping
- **Navigation**: Sticky header with flexbox nav items (2rem gap between links)

**Image sizing conventions**:
- Gallery thumbnails: 180px height with object-fit: cover
- Lightbox image: Full available space

### Multi-page Navigation
All 3 pages share:
- Identical <header> and <footer> structure
- Navigation links to all pages (index, packages, contact)
- Shared style.css and script.js
- **Pattern**: No templating engine - HTML duplication is acceptable here

## Common Workflows & Patterns

### Adding a New Photography Category
1. Create folder in images/{category-name}/
2. Add images named consistently (e.g., category1.jpg, category2.jpg)
3. Add .type section in [index.html](AVINASHMALIPHOTOGRAPHY/index.html) with <div class="gallery"> containing <img> elements
4. Script automatically picks up new images via .gallery img selector

### Adding Packages
1. Add new .package div in [packages.html](AVINASHMALIPHOTOGRAPHY/packages.html) <div class="package-list">
2. Follow existing structure: <h3> title  <ul><li> features + price
3. Styling handles layout automatically

### Contact Links
Located in [contact.html](AVINASHMALIPHOTOGRAPHY/contact.html) <div class="contact-info">:
- Email: vinashmali2721@gmail.com
- Phone: +91 7558355047
- WhatsApp: Direct link via wa.me protocol
- Instagram: Preset Instagram handle link

## Developer Notes

**No Build Tools**: This is a plain HTML/CSS/JS site. No npm, webpack, or server required. Open AVINASHMALIPHOTOGRAPHY/index.html directly in browser.

**Common Edits**:
- Updating header/footer text: Edit all 3 HTML files (or ask to create a template)
- Fixing image paths: Check folder names match category <h3> text
- Styling changes: All in one [style.css](AVINASHMALIPHOTOGRAPHY/style.css) file (no scoping needed)
- Gallery behavior: [script.js](AVINASHMALIPHOTOGRAPHY/script.js) is the single script loaded on all pages

**Known Quirks**:
- "Weeding" typo in wedding image filenames (weeding1.jpg instead of wedding1.jpg)
- "Preweeding" typo in pre-wedding folder (check actual file names before adding new images)
- Contact form has no backend—submission currently logs to console only
