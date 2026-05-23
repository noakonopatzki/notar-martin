# notar-martin.de Static Website

Modern multi-page static website for Kanzlei Rechtsanwalt und Notar Prof. Dr. Frank Martin in Limburg an der Lahn.

## Structure

- `index.html` - Startseite with video hero
- `kanzlei.html` - Kanzlei overview
- `kanzlei/prof-dr-frank-martin.html` - profile page
- `notariat.html` - notary services
- `rechtsgebiete.html` - filterable service overview
- `rechtsgebiete/*.html` - individual legal-service pages
- `kontakt.html` - contact form with validation and mailto handoff
- `formulare.html` - forms/downloads overview
- `impressum.html`, `datenschutz.html` - legal placeholders
- `assets/css/style.css` - custom premium styling on top of Tailwind CDN
- `assets/js/script.js` - mobile menu, filters, modal, video controls, validation

## Replace Placeholders

1. The homepage hero now uses `assets/video/frank-video.mp4`. Replace that file if a newer background video is provided.
2. The logo is stored as `assets/img/fm_white_icon_871.png` and the Frank portrait is stored as `assets/img/frank-martin.png`. Remaining SVG files are fallback placeholders and can be removed once final imagery is complete.
3. Replace `https://outlook.office.com/book/REPLACE-ME` with the Microsoft Bookings URL.
4. Replace `G-XXXXXXXXXX` with the Google Analytics ID.
5. Replace `GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` with the Search Console verification token.
6. Complete address, Impressum, Datenschutz, and any professional regulatory information before launch.
7. Update the WebAkte URL if the existing WebAkte target differs from `https://www.notar-martin.de/webakte`.

## Deployment

This is a static site. Upload all files to any standard web hosting, Netlify, Vercel, or similar. No build step is required because Tailwind is loaded through CDN.

## SEO Notes

Each page includes a unique title, meta description, canonical URL, Open Graph tags, and JSON-LD schema for Attorney/Notary/LegalService. Internal links connect Notariat, Rechtsgebiete, Kanzlei, Kontakt, and Formulare.

Before publishing, compress final media assets and confirm Core Web Vitals after the actual video and images are added.
