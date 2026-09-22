# Team Website + GitHub Pages

This project is a Vite multi-page React site deployed to GitHub Pages.

## Website Iteration 1

In this iteration, the team implemented the primary assignment requirements.

- Added a Home/Landing section (kept intentionally minimal for future content)
- Added a Presentations section with an embedded Google Slides iframe
- Added a Team Bio section with six member entries
- Added an image and short third-person bio for each team member
- Updated the layout to be readable, presentable, and professional on desktop and mobile

## Website Iteration 2

This section tracks updates made after the initial assignment requirements.

- Updated the Presentations iframe to use the new Google Slides link
- Added a styled "Download Presentation PDF" button in the Presentations section
- Updated the download button to use Google Slides PDF export for automatic latest-version downloads
- Kept a local backup copy of the presentation PDF in `public/files/`
- Populated the Home/Landing section with Elevator Pitch, Problem Description, Customer and End User, and Solution Statement content
- Refined Home/Landing text to a more formal, professional tone for submission readiness
- Added a new References section for project source tracking and citation placeholders
- Added a new Glossary section with initial TAM, SAM, and SOM definitions
- Added named institutional footer links for Old Dominion University and the ODU Computer Science Department
- Reordered navigation and section flow so Team Bio appears before References and Glossary
- Added a Not One More Vet citation to the References section with professional formatting
- Replaced the temporary placeholder text with a finalized mission statement under the page title

### Add Future Iteration 2 Changes

- Add each new change as a bullet point under this section
- Keep entries short and specific (what changed and where, if helpful)
- Added a Labs placeholder page and header navigation link
- Moved every primary navigation destination to an extensionless, independently built route
- Standardized shared UI, styles, data, and page entrypoints under `src/`
- Added a Vite production build and GitHub Pages deployment workflow

## Files

- `src/pages/` (route HTML documents and page entry modules)
- `src/components/` (shared React components)
- `src/data/` (navigation and team data)
- `src/styles/` (shared site styles)
- `src/app/` (React mounting utilities)
- `public/images/` (team member photos)
- `public/files/` (downloadable project files)
- `vite.config.js` (multi-page production build)
- `.github/workflows/pages.yml` (GitHub Pages deployment)

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Build the production site with the GitHub Pages repository base:

```bash
npm run build -- --base /take-the-lead/
```

The generated site is written to `dist/`.


