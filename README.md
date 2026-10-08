# Adam Marcaida Jr. — Portfolio

Personal portfolio site, live at **https://AdamJr-26.github.io/portfolio/**.

Built with React 18, TypeScript, Vite and Tailwind CSS, with a few hand-picked libraries for character:
[rough.js](https://roughjs.com/) for the hand-drawn bits, [vanilla-tilt](https://micku7zu.github.io/vanilla-tilt.js/) for the skill honeycomb and [typewriter-effect](https://github.com/tameemsafi/typewriterjs) in the hero.

## Running it

```sh
npm install
npm run dev       # http://localhost:5173/portfolio/
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
npm run deploy    # build and publish dist/ to the gh-pages branch
```

## Editing content

All content lives in [`src/data/`](src/data) — no component changes needed:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, roles, tagline, about text, email, social links |
| `experience.ts` | Jobs and their achievements (screens are Cloudinary public IDs) |
| `projects.ts` | The featured project and the project grid |
| `skills.ts` | The skill honeycomb, row by row |
| `navigation.ts` | Section order shown in the nav |

Achievement screenshots are served from Cloudinary through [`src/lib/cloudinary.ts`](src/lib/cloudinary.ts), which resizes and picks the best format per browser.

## Structure

Components follow atomic design:

- `components/atoms` — small building blocks (headings, tags, portrait, rough.js shapes, reveal-on-scroll wrapper)
- `components/molecules` — cards, the gallery dialog, the nav bar, the skill detail panel
- `components/organisms` — page sections: Landing, About, Experiences, Projects, Skills, Contacts, Footer
- `components/pages` — the single `Home` page
