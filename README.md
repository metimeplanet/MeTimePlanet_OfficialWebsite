# Me-Time Planet — Website

A warm, organic editorial website for Me-Time Planet, a mindfulness and traditional Chinese
crafts brand. Built with pure HTML, modular CSS, and vanilla JavaScript — no frameworks required.

## File Structure

```
me-time-planet/
├── index.html              # Home page
├── css/
│   ├── variables.css       # Design tokens (colors, fonts, spacing)
│   ├── base.css            # Reset, typography, utility classes
│   ├── nav.css             # Header / navigation
│   ├── hero.css            # Hero section
│   ├── features.css        # Feature cards (home page)
│   ├── journal.css         # Journal / article cards
│   ├── workshops.css       # Workshops banner + community section
│   ├── footer.css          # Footer
│   └── pages.css           # Inner page shared styles
├── js/
│   └── main.js             # Scroll effects, mobile nav, animations
├── pages/
│   ├── our-story.html      # Our Story page
│   ├── calm-crafts.html    # Calm Crafts page
│   ├── tea-tastings.html   # Tea Tastings page
│   ├── journal.html        # Journal listing page
│   └── workshops.html      # Workshops page
└── images/                 # (place your own images here)
```

## How to Extend

### Adding a new page
1. Copy any `pages/*.html` as a starting point.
2. Update the `<title>` and `<h1>`.
3. Adjust the `<nav>` active link by adding `style="color: var(--color-ink);"` to the current page link.
4. Add your page link to the nav in every `.html` file (or factor the nav into a JS include).

### Adding a new journal article
1. Open `pages/journal.html`.
2. Copy one `<article class="journal-card">` block and paste it.
3. Update the image, tag, title, excerpt, and `href`.

### Adding a new workshop
1. Open `pages/workshops.html`.
2. Copy one `<article class="workshop-card">` block.
3. Fill in the image, title, description, and metadata.

### Changing colors or fonts
All design tokens are in `css/variables.css`. Edit there and the change propagates everywhere.

### Adding a booking/contact form
Add a `<section>` with your form markup in any page. Pair with a free form service like
Formspree (`action="https://formspree.io/f/yourkey"`) for instant submissions without a backend.

### Adding a WeChat QR code popup
In `index.html`, add a `<dialog>` element and trigger it from the WeChat CTA buttons.

## Images
All images currently use Unsplash placeholders. Replace the `src` attributes in each file
with your own photography. Recommended size: 1200×800px for hero, 800×600px for cards.

## Deployment
Upload the entire folder to any static host:
- **Vercel**: `vercel deploy`  
- **Netlify**: drag the folder to app.netlify.com
- **GitHub Pages**: push to a repo and enable Pages in settings
