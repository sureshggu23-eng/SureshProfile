# Suresh G — Developer Portfolio

A responsive dark React + TypeScript + Vite portfolio.

## Run locally

1. Install Node.js (use a current LTS release).
2. Open this folder in VS Code.
3. Open the terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
npm run preview
```

## Important files

- `src/components/HeroSection.tsx` — navigation, introduction and typing animation.
- `src/components/AboutSection.tsx` — about content.
- `src/components/ProjectsSection.tsx` — project descriptions and preview visuals.
- `src/components/SkillsSection.tsx` — skill groups.
- `src/components/ExperienceSection.tsx` — education and certifications.
- `src/components/ContactSection.tsx` — contact links and footer.
- `src/index.css` — all visual styles and responsive breakpoints.
- `public/resume.pdf` — downloadable resume. Replace with your latest PDF using the same filename.
- `public/profile.jpg` — profile image. Replace with your preferred professional photo using the same filename.

## Replace project preview graphics with real screenshots

The project preview panels in `ProjectsSection.tsx` are CSS illustrations, not captured application screenshots. To use real screenshots, put image files in `public/projects/` and replace each `<ProjectVisual type="..." />` with an image such as:

```tsx
<img className="project-screenshot" src="/projects/suspicious-activity.png" alt="Suspicious activity detection application output" />
```

Then add `.project-screenshot { display:block; width:100%; height:230px; object-fit:cover; }` to `src/index.css`.

## Before publishing

- Verify the resume is current.
- Confirm the public phone number and email are correct.
- Replace the illustrative project panels with genuine screenshots.
- Replace generic GitHub profile links with the exact repository URLs for each project when available.
