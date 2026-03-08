# My Site — Legal & Support pages

This repository contains a lightweight static site you can publish to GitHub Pages to serve Privacy Policy, Terms of Service, FAQ, Contact and Support pages for your app.

How to publish

1. Create a new GitHub repository (or use an existing one) and push this folder as the repository root.
2. In the repository settings, under Pages, select Branch: main (or gh-pages) and save.
3. After a few minutes, your site will be available at: https://<your-username>.github.io/<your-repo>/

Local preview

To preview locally (requires Python):

```powershell
cd "c:\Users\User\Desktop\my site"
python -m http.server 8000
```

Open http://localhost:8000 in your browser.

Use in your app

- Privacy URL: https://<your-username>.github.io/<your-repo>/privacy.html
- Terms URL: https://<your-username>.github.io/<your-repo>/terms.html
- FAQ URL: https://<your-username>.github.io/<your-repo>/faq.html
- Contact URL: https://<your-username>.github.io/<your-repo>/contact.html
- Support URL: https://<your-username>.github.io/<your-repo>/support.html

Replace `<your-username>` and `<your-repo>` with your GitHub username and repository name.
