# Example App — Support & Legal Static Site

This repository contains a small static site suitable for GitHub Pages. It includes screens for:

- Privacy Policy
- Terms of Service / EULA
- Data Collection & Consent
- FAQ / Help
- Contact Support

Files
- `index.html` — Home / hub
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Service / EULA
- `data.html` — Data Collection & Consent
- `faq.html` — FAQ / Help
- `contact.html` — Contact Support with a small contact form
- `assets/styles.css` — Styles
- `assets/script.js` — Small client script (year fill + contact form fallback)

How to publish to GitHub Pages
1. Create a new GitHub repository (e.g. `example-app-legal`).
2. Commit and push the contents of this `site` folder to the repository's `main` branch (or `gh-pages` branch).

If you push to `main` and want Pages from the root:
- In GitHub: Settings → Pages → Source → choose `main` branch and `/ (root)` folder → Save.
- GitHub will publish to `https://<your-username>.github.io/<repo>/` (or to `<username>.github.io` for a repository named `<username>.github.io`).

Contact form handling
- The included contact form uses a mailto fallback (opens the user's mail client). To collect messages server-side, use a form service:
  - Formspree: create a form endpoint and set `<form action="https://formspree.io/f/<your-id>" method="POST">`.
  - Netlify Forms: add `data-netlify="true"` to the form and deploy on Netlify.

Customization
- Replace placeholder content (company name, support email) in the HTML files.
- Update legal text with your legal team.

Notes
- This is a plain static site (no server). Keep sensitive flows (invoices, account settings) on your authenticated app.

License
- Use and adapt as you like.
