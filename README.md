# The Neon Larks — Demo Band Site

A two-page website for **The Neon Larks**, a fictional band invented for this project. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

**Live site:** https://eemersonrosa.github.io/emerson-guimaraes-bandsite/

All content is original demo material: the band, bio, quotes, comments, venues, and contacts are made up, and every image is a hand-generated SVG (no stock photography).

## Pages

- **Biography** (`index.html`) — hero, about the band, gallery, and a comments section (add comments via the form; rendered with vanilla JS).
- **Shows** (`pages/shows.html`) — "latest single" card in the hero and a responsive shows table (column headers on tablet/desktop, labeled cards on mobile).

## Structure

```
├── index.html
├── pages/shows.html
├── styles/
│   ├── global.css   # fonts, variables, header, hero, footer
│   ├── bio.css      # biography page
│   └── shows.css    # shows page
├── scripts/
│   ├── index-page.js        # comments rendering + form
│   └── build-shows-page.js  # shows list rendering
└── assets/          # fonts, icons, images, logo (all original SVG artwork)
```

## Fonts

[Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans), used under the [SIL Open Font License](https://openfontlicense.org/).

Hosted on GitHub Pages from the `main` branch.
