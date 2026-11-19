# Ruicheng Bao — Academic Website

A bilingual English–Chinese academic website for Ruicheng Bao. English is the
default language. The site includes About, selected and complete publications,
Presentations, Research Trajectories seminars, and CV views. A downloadable PDF CV and its TeX source are
included in `public/cv/`.

## Edit content

- `app/page.tsx` contains the homepage navigation and bilingual publication/presentation data.
- `app/Seminars.tsx` contains the bilingual Research Trajectories introduction and programme.
- `app/globals.css` contains the visual system and responsive layouts.
- `app/layout.tsx` contains the site metadata used by the hosted application.
- `cv/Ruicheng_Bao_CV.tex` is the editable CV source.

Publication and event entries are plain TypeScript objects near the top of
`app/page.tsx`, so routine updates do not require layout changes.

### Research Trajectories

Share `/seminars/` for English or `/seminars/?lang=zh` for Chinese. To announce a
talk, add an entry to `talks` in `app/Seminars.tsx` and upload its poster PDF
and WebP thumbnail to `github/public/seminars/`. Use the meeting's Beijing
calendar date (`YYYY-MM-DD`); once confirmed, set `startsAt` to an ISO
timestamp with its UTC offset. The page converts it to each city's local
clock time for that date. A talk moves into the archive the day after it
takes place. Add `recordingUrl` to its existing entry to show the replay link.

## GitHub Pages — automatic publishing

The repository includes a GitHub Actions workflow at
`.github/workflows/deploy-pages.yml`. Every push to `main` automatically builds
and publishes the website, so there is no separate manual release step.

For the first publication only, open **Settings → Pages** in the GitHub
repository and set **Source** to **GitHub Actions**. For a personal root site,
name the repository `<github-username>.github.io`.

To test the same static build locally:

```bash
npm run build:github
```

This writes the publishable site to `docs/`. The generated assets use relative
paths, so the build works both as a personal root site and under a repository
subpath.

## Routine updates

1. Edit publication, presentation, CV, or bilingual copy in `app/page.tsx`.
2. If the CV changed, edit `cv/Ruicheng_Bao_CV.tex`, compile it with XeLaTeX,
   and replace `public/cv/Ruicheng_Bao_CV.pdf` and the downloadable TeX copy.
3. Commit and push to `main`. GitHub Actions publishes the new version
   automatically.

For a small text correction, GitHub's browser editor is enough: edit the file,
choose **Commit changes**, and wait for the green deployment check. For larger
updates, use a branch or pull request so the change can be reviewed before it
goes live.

## Local development

Install dependencies with `npm ci`, then start the development server with:

```bash
npm run dev
```

The project requires Node.js 22.13 or newer.
