# BAI GenZen Site - Astro Swiss Theme Implementation

## Project Overview
Building an Astro.js static site using Swiss design principles for Business Autonomy Intelligence landing page with conversational form integration.

**GitHub Repository**: https://github.com/adamking77/bai-site.git

## Technical Stack
- **Framework**: Astro
- **Components**: React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Swiss Theme Reference
- **Repository**: https://github.com/adamking77/astro-swiss-theme
- **Key Components**: QualificationForm, SimpleQualificationModal
- **Design Principles**: Minimalist, clean typography, generous whitespace, Swiss design language

## Content Structure (from Business Autonomy Intelligence.txt)
1. **Hero Section**: "The intelligence you need to design operations that actually work with your reality, not against it"
2. **Problem Section**: "Does This Sound Familiar?" (8 bullet points)
3. **Solution Section**: "What's Really Happening" + "How Business Autonomy Intelligence Works"
4. **CTA Section**: Strategic Intelligence Call with conversational form

## Conversational Form Fields
- Contact Information (Name, Company, Email, Phone, Best time)
- Strategic Assessment (7 detailed questions)
- Form should be multi-step, typeform-style with progress tracking

## Component Architecture Plan
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── ProblemSection.astro
│   │   ├── SolutionSection.astro
│   │   └── CTASection.astro
│   ├── forms/
│   │   ├── ConversationalForm.tsx
│   │   └── FormProgress.tsx
│   └── ui/
│       ├── Button.astro
│       └── Modal.tsx
├── layouts/
│   └── Layout.astro
└── pages/
    └── index.astro
```

## Design System
- **Typography**: Swiss-style clean typography
- **Colors**: Minimal palette (likely monochromatic with strategic accent)
- **Spacing**: Generous whitespace following Swiss design principles
- **Responsive**: Mobile-first approach

## Implementation Steps
1. Initialize Astro project
2. Set up Tailwind CSS and Framer Motion
3. Create base layout and components
4. Implement conversational form with progress tracking
5. Map BAI content to Swiss design components
6. Polish responsive design and animations

## Project Status
✅ Astro project initialized with TypeScript strict mode
✅ React integration added
✅ Tailwind CSS v4 integration added
✅ Framer Motion installed for animations
✅ Dependencies: React 19, TypeScript, Tailwind CSS 4

## Current Structure
```
/Users/adamking/vs-code-projects/bai_genzen_site/
├── Business Autonomy Intelligence.txt (content source)
├── CLAUDE.md (this reference file)
├── astro.config.mjs (React + Tailwind configured)
├── package.json (all dependencies installed)
├── src/
│   ├── pages/
│   │   └── index.astro (main landing page)
│   └── styles/
│       └── global.css (Tailwind base styles)
├── public/
│   └── favicon.svg
└── tsconfig.json (React JSX configured)
```

## Git Setup Commands
```bash
# Initialize and connect to GitHub (run once)
git init
git remote add origin https://github.com/adamking77/bai-site.git
git add .
git commit -m "Initial Astro project setup with Swiss theme integration"
git push -u origin main
```

## Next Steps - Run These Commands

**1. Install Dependencies (required)**
```bash
cd /Users/adamking/vs-code-projects/bai_genzen_site
npm install
```

**2. Start Development Server**
```bash
npm run dev
```

**3. View Site**
Open http://localhost:4321 in your browser

## Development Commands
```bash
# Development
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Current Status
✅ Swiss theme components implemented
✅ BAI content mapped to Swiss design sections
✅ Landing page with conversational form modal
✅ Dependencies added to package.json
⏳ Need to run `npm install` and `npm run dev`