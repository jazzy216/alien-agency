# Alien Agency: The Party Line

A six-chapter illustrated webcomic featuring Buck and the Alien Agency. Includes 24 panels, chapter navigation, spoiler notes, and the original one-page strip.

## Read locally
Open `public/index.html` in a browser. Or run `python3 -m http.server 8000 --directory public` from this folder and visit http://localhost:8000.

## Push to GitHub
Create an empty GitHub repository. From the **extracted folder containing this README**, run the following, replacing YOUR-USERNAME and YOUR-REPO with your actual GitHub names:

```sh
git init -b main
git add .
git commit -m "Add Alien Agency webcomic"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Deploy with Vercel
Import the GitHub repository as a new Vercel project. Keep Root Directory at the **repository root** (the folder with vercel.json). Use the **Other** preset. The included configuration skips the build and serves **public** as the output directory. No dependencies or environment variables are needed. Click Deploy.

## Edit
- Story, captions, chapter titles and notes: `public/index.html`
- Colors, layout and lettering: `public/assets/comic.css`
- Chapter selection and reading position: `public/assets/reader.js`
- Artwork: `public/assets/panel-01.webp` through `panel-24.webp`, plus `original-strip.webp`

Deployment reference: https://vercel.com/docs/builds/configure-a-build

## Revised mystery
See STORY-AUDIT.md for the spoiler-filled editorial review. The optional recovery-fixture.json contains the synthetic bytes behind the puzzle. The original one-page strip is retained as bonus material.
