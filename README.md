# Tajul Islam Tarek — Portfolio

A modern, responsive personal portfolio website built with React, Tailwind CSS v4, and Framer Motion.

## ✨ Features

- **Dark theme** with cyan/purple gradient accents and glassmorphism cards
- **Smooth animations** powered by Framer Motion (scroll-triggered, hover, spring physics)
- **Custom cursor** with interactive hover effects
- **Responsive design** — fully optimized for mobile, tablet, and desktop
- **Achievement gallery** with multi-image lightbox and keyboard navigation
- **Project showcase** with thumbnails, filters, and expandable descriptions
- **Competitive programming** highlights with profile links
- **Contact section** with direct email, social links, and downloadable CV

## 🛠️ Tech Stack

- **React 18** — Component-based UI
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v4** — Utility-first styling with custom theme
- **Framer Motion** — Declarative animations
- **React Icons** — Icon library

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TajulTarek/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, Achievements, Contact
│   └── ui/           # Reusable components (Button, ProjectCard, etc.)
├── data/             # Personal info, projects, skills, achievements
├── hooks/            # Custom React hooks
├── utils/            # Animation variants
├── App.jsx
├── main.jsx
└── index.css         # Tailwind theme & custom utilities
```

## 📸 Adding Images

- **Project thumbnails:** Place screenshots in `public/images/projects/`
- **Achievement photos:** Place photos in `public/images/achievements/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
