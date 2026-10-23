# Hamid Shahid · Walima invitation

A bespoke, responsive invitation in HTML, CSS, and vanilla JavaScript. No installation, build step, backend, or external runtime dependencies. The bride’s name is kept private.

## Preview

Open `index.html` directly in your browser. For an HTTP preview, run this from the project folder:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000`. The page also works directly from a local file. It uses a joyful blue-and-white floral theme with blush accents, an animated welcome shower, and a brief petal flourish when guests select “Join our celebration.” Animations respect reduced-motion preferences. There is no share invitation button.

## Publish free on GitHub Pages

1. Create a **public** GitHub repository, for example `hamidweds`.
2. Upload `index.html`, `styles.css`, `script.js`, `.nojekyll`, and the entire `assets` folder to the repository root. Keep the file structure intact.
3. Open the repository’s **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/ (root)**, and save.
5. Once GitHub finishes publishing, the invitation will be at `https://YOUR-USERNAME.github.io/hamidweds/`. The Pages settings show the actual published URL.

All asset paths are relative, so this works under a repository subpath and with a custom domain. Details: [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [publishing source settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Contents and customization

- **Invitation text, date, contacts, and Maps link:** `index.html`.
- **Colors, spacing, typography, mobile layout, dark mode, and print layout:** `styles.css`.
- **Countdown date and the celebratory petal interaction:** `script.js`.
- **Calendar event:** `assets/hamid-walima.ics`. It uses UTC timestamps: 14:00–17:00 UTC equals 7:00–10:00 PM Pakistan Standard Time on 9 November 2026.
- **Original card:** `assets/invitation-card.jpeg`.
- **Garden artwork:** `assets/blue-garden.webp` and `assets/blue-garden-small.webp`. This is an atmospheric illustration, not an image of the actual venue.
- **Transparent floral decoration:** `assets/blue-florals.webp`.

If the event date changes, update the HTML, JavaScript, and calendar event together. The invitation remains readable with JavaScript disabled. The countdown changes to a welcome message during the reception and a thank-you afterward.

## Artwork and fonts

The new artwork was generated with the built-in image generation tool, then optimized to WebP, preserving transparency for the floral decoration.

- **Garden prompt:** “An exquisite contemporary watercolor and gouache Mughal garden celebration in fresh blue and white. An ivory scalloped-arch pavilion with cobalt floral tilework across a turquoise reflecting pool, white jasmine and blue hydrangeas, soft pink roses, flowering trees, two birds, delicate festoon lights and warm lanterns. Bright, airy, romantic, refined, and joyful. Portrait composition; no people, text, logos, borders, or mockup.” Saved as `assets/blue-garden.webp` and `assets/blue-garden-small.webp`.
- **Floral prompt:** “An isolated, graceful botanical corner spray of blue hydrangeas, cornflower-blue flowers, white jasmine, ivory roses, blush buds and fresh sage leaves. Fine watercolor and gouache detail, a flowing diagonal crescent with trailing stems, on a genuinely transparent background. No vase, text, border, or mockup.” Saved as `assets/blue-florals.webp`.

Fonts are self-hosted Cormorant Garamond, Jost, and a Bismillah-only subset of Noto Naskh Arabic. Icons are static SVGs from Phosphor’s light collection. See the license files in `assets/`.

## Verification

JavaScript and CSS syntax, local asset references, calendar times, countdown transitions, and petal animation behavior were checked locally. A live preview, visual browser testing, and Lighthouse could not run in the restricted build environment because local socket operations and browser launch were blocked. Open the page on desktop and a phone before publishing.
