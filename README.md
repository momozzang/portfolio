# Moses Kim — Portfolio

Personal branding site (English default + Korean toggle). Static, no build step.

## Edit content

All content lives in **`data.js`**. Each text field accepts `{ en, ko }`; the header
toggle switches language. No code changes needed to update the site.

## Run locally

Open `index.html` directly in a browser, or serve it:

```sh
python -m http.server 8000
# http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo (e.g. `portfolio`) and push this folder.
2. GitHub → Settings → Pages → **Deploy from a branch** → `main` / root.
3. Live at `https://<your-username>.github.io/portfolio/`.

Works on Cloudflare Pages / Netlify / Vercel too (no build command, publish dir = repo root).

## Files

| File | Purpose |
| --- | --- |
| `data.js` | All content — edit this |
| `index.html` | Page shell |
| `styles.css` | Styling |
| `app.js` | Renders `data.js` into the page |
