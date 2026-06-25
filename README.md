# TAYO Editable Prototype

This is the source version for co-building the TAYO prototype before exporting it into one shareable HTML file.

## Files

- `index.html` controls the page structure, filters, buttons, and visible text.
- `styles.css` controls the visual design.
- `app.js` controls the event data, filters, matching logic, details modal, map pins, saved/interested state, archive state, and onboarding demo.
- `build-shareable.js` exports everything into one HTML file for easy sending or submission.

## How to Preview

Open `index.html` in a browser.

For a more realistic preview, run a local server from this folder:

```bash
python3 -m http.server 8788
```

Then open:

```text
http://127.0.0.1:8788/
```

## Where to Edit Events

Edit the `events` array in `app.js`.

Each event uses:

- `type`: `social` or `org`
- `energy`: `chill`, `outgoing`, or `both`
- `area`: `north`, `central`, `south`, or `outside`
- `interests`: tags used by the filters and match score

The current prototype includes 40 events synced across Home, Quick Match, Events, and Map.

When an event is marked Interested or Pass, it leaves the recommendation queue. Passed events move to Archive and can be restored.

## GitHub Pages Version

The `../../tayo-github-pages` folder contains the same website files for upload to GitHub Pages:

- `index.html`
- `styles.css`
- `app.js`
- `picture-needed-list.md`

After editing this source folder, copy those files into `../../tayo-github-pages` before pushing to GitHub.

## Export One Shareable HTML

From this folder, run:

```bash
node build-shareable.js
```

The exported file will be created at:

```text
dist/tayo-prototype-shareable.html
```

Send that file when someone only needs to test the prototype. Use this source folder when teammates need to edit the prototype with you.
