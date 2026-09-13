# Suiball in Next.js

An editable Next.js 16.3.5 / React 19.3.0 migration of the public landing page at https://www.suiball.com/.

## Run locally

Use Node.js 22 or newer; `.nvmrc` selects Node.js 24. From a fresh checkout:

```sh
git clone https://github.com/Nuel-osas/bal-test.git
cd bal-test
npm ci
npm run dev
```

Open http://127.0.0.1:3001. Changes to the files in `src/` update the development preview. For a production preview, run `npm run build` followed by `npm start` instead. Both commands bind only to this computer.

The required images, fonts, videos and vendor scripts are included under `public/assets/`. No original capture directory is required to run the app. On macOS, `Start Preview.command` also installs dependencies when absent and starts the development server.

## Where to edit

| File or folder | What it controls |
| --- | --- |
| `src/app/page.tsx` | Page composition and section order |
| `src/app/layout.tsx` | Page title, description, document and global CSS |
| `src/components/Navigation.tsx` | Desktop/mobile navigation and external links |
| `src/components/sections/Hero.tsx` | Hero assets, introduction and call to action |
| `src/components/sections/` | Fourteen named sections, including features, security, Bitcoin, NFT and preorder content |
| `src/components/Footer.tsx` | Footer content |
| `src/app/globals.css` | Original styles and responsive breakpoints |
| `public/assets/` | Local images, fonts, videos and vendor scripts |
| `src/components/SiteRuntime.tsx` | Ordered vendor loading after React hydration |
| `public/suiball-interactions.js` | Smooth scrolling and custom text reveals, with mount/disposal functions |

The page is rendered from ordinary editable TSX components. It does not embed the live site in an iframe or serve a captured HTML document as the page. Add a route by creating, for example, `src/app/about/page.tsx` with a default React component export. The existing visual runtime targets the landing page; new routes with different interactions should use their own client components and lifecycle handling.

## What is preserved

The migration retains the original Webflow styles and Webflow/GSAP animation libraries, including the interaction IDs that connect the markup to animation timelines. Custom smooth scrolling and text reveals are mounted after hydration and disposed through React's effect lifecycle. The retained vendor engine is an intentional part of this first migration; those timelines have not all been rewritten as independently authored React animations.

103 source assets (about 13.8 MB) are stored locally. There are no runtime fetches of the original HTML, and no external asset requests were observed in the initial desktop check with external access blocked. Preorder, claim and social buttons retain their external destinations. They open the official services; no checkout, wallet connection, claim backend or financial transaction service was copied or implemented.

Source-specific changes:

- Asset names normalize encoded spaces and slashes so they work with Next.js static serving.
- Two broken `your.cdn` media placeholders were removed. The working robot WebM remains.
- An invisible Spline canvas and its scripts were omitted. Its parent was `display:none` and the canvas measured zero by zero on both desktop and mobile in the source. This removes unused 3D execution, not a visible 3D recreation.
- Invalid nonbreaking whitespace in one source CSS rule was normalized for the Next.js CSS compiler.
- Fonts are served locally without the original Google WebFont loader.
- External new-tab links include `noopener noreferrer`.
- Search indexing is disabled for this local recreation.

The original design, content, assets and vendor code retain their ownership and licensing. This folder does not contain the Webflow Designer project or the original site's private services.

## Verification

```sh
npm run build
npm run typecheck
# Keep a local production or development server running, then:
npm run verify
```

The optional browser comparison uses installed Google Chrome and accesses the live Suiball site. It defaults to the macOS Chrome path; set `CHROME_PATH` to your Chrome/Chromium executable on other systems, or `PREVIEW_URL` to target another local port. Run `npm run report` after a successful comparison to generate `evidence/comparison.html`. Generated evidence is ignored by Git.

Run the production build before the standalone type check in a fresh clone so Next.js can generate its route types. GitHub Actions runs the build and type check on Node.js 22 and 24; it does not depend on the live source site.

The validator compares the hero, Sui overview, features and Bitcoin sections on desktop and mobile, tests the six desktop anchor links, checks video readiness, and records local browser errors and failed/external requests. It writes originals, local screenshots, differences and a JSON report to `evidence/verification/`.

Comparisons wait for fonts/entrance animations, pause videos at one second, and pause infinite CSS animations at a fixed time. Pixelmatch uses threshold 0.15 and excludes antialiasing differences. Timed scroll effects can still vary; screenshots cover selected states, not every frame or browser. The original has no mobile hamburger menu; its mobile navigation consists of the logo, preorder button and social link.

### Recorded migration verification

The production build and TypeScript check passed. All six desktop section links reached their targets. All three videos loaded locally on desktop and mobile. No external asset requests, failed local responses or JavaScript runtime errors were recorded during these browser checks.

Eight screenshot comparisons ranged from 0% to 0.133% differing pixels above the comparison threshold. This does not mean every animation frame is identical. The validation took 47.736 seconds. The [recorded verification summary](docs/verification-summary.json) preserves those observations without machine-specific paths. The original screenshots and full local reports are not included in this repository; rerun verification to generate new evidence.

## Capture provenance

[The asset manifest](docs/asset-manifest.json) maps the included files to their original public URLs and records the migration adaptations.

The local migration workspace retained an initial downloader attempt under `capture/`, plus original HTML and inspection data under `evidence/`. These intermediate artifacts are excluded from Git. That attempt's 5.457-second measurement includes known unresolved resources and is **not** a timing claim for a complete replica or the Next.js migration. The migration corrected those asset paths, obtained the needed assets and generated the TSX separately. Development, compilation and visual validation are additional work.

`scripts/migrate.mjs` records the one-time conversion and requires those separately obtained capture and original HTML inputs. It is not part of setup or the build. Re-running it overwrites generated components and should only be used when deliberately regenerating from the original capture. Edit the TSX directly for ongoing development. The reusable capture tool lives in [D-j-View](https://github.com/Nuel-osas/D-j-View).
