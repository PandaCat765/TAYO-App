# TAYO Prototype

Static prototype for GitHub Pages.

## Files

- `index.html` - page structure
- `styles.css` - visual design and light/dark mode
- `app.js` - prototype data, filters, matching logic, map links, and interactions

## Publish On GitHub Pages

1. Create a GitHub repository.
2. Upload these files to the repository root.
3. Go to `Settings` -> `Pages`.
4. Set source to `Deploy from a branch`.
5. Choose `main` branch and `/root`.
6. Save.

GitHub will give you a live link after it finishes deploying.

## Updating The Live Site

After changing files on your Mac:

```bash
git add .
git commit -m "Update TAYO prototype"
git push
```

GitHub Pages will redeploy automatically.

## Notes

Current-location directions work best on GitHub Pages because it uses HTTPS, which browsers require for geolocation.
