# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite-based portfolio website project for job hunting purposes. The project uses vanilla JavaScript with no frameworks and focuses on HTML/CSS fundamentals. **The reference folder has been deleted and all content has been integrated into the main project.**

## Current Status (2025-01-17)

✅ **Completed (Major Update - Innovation Garage Multi-page Portfolio):**
- **Site Rebranding**: Changed from "BugFix Web Page" to "Innovation Garage"
- **Hero Section Transformation**: 
  - Background image changed to `pexels-mikebirdy-190537.jpg` (garage theme)
  - Hero text updated to "Innovation Garage" + "成果物とアイデアの保管庫"
  - Industrial/garage aesthetic with sepia filters and metallic styling
- **Skills & Strengths Modern Design**: 
  - Enhanced card design with gradient backgrounds and hover effects
  - Industrial color scheme (#495057 grays instead of purple)
  - Upper-case typography with letter spacing for garage feel
- **Multi-page Architecture Complete**:
  - `web-apps.html` - Web Applications showcase with real project links
  - `ml-projects.html` - Machine Learning projects (Kaggle/SIGNATE)
  - `github-repos.html` - GitHub repositories collection
  - All pages with simplified hero sections (compact headers vs full-screen)
- **Contact Section Overhaul**: 
  - Removed complex contact form
  - Simple GitHub profile link integration (https://github.com/ueno-cmd)
  - Minimal footer with copyright only
- **Real Project Integration**:
  - AIメモアプリ: https://ai-memo-app.pages.dev/ + GitHub
  - プロジェクトマッチングプラットフォーム: GitHub link + demo
  - 知人向けポートフォリオサイト: https://portfolio-site01.pages.dev/ + GitHub
- **Visual Enhancements**:
  - Project cards with dummy images (400x250px for featured, 400x200px for others)
  - Color-coded technology tags and category labels
  - Professional card layouts with live demo + GitHub buttons

🔧 **Project Structure (Multi-page):**
- `index.html` - Main Innovation Garage homepage
- `web-apps.html` - Web Applications portfolio (4 projects with images)
- `ml-projects.html` - Machine Learning projects showcase  
- `github-repos.html` - GitHub repositories gallery with stats
- `src/style.css` - Industrial/garage themed styles with gradients
- `public/assets/images/` - Skill icons + project placeholder images

🎨 **Design System Updated (Industrial/Garage Theme):**
- **Color Palette**: Industrial grays (#495057, #343a40) instead of purple
- **Typography**: Upper-case headings with letter-spacing for technical feel
- **UI Elements**: Gradient buttons with inset shadows, metallic appearance
- **Background**: Sepia-filtered hero with industrial overlay gradients
- **Cards**: Enhanced with project images, color-coded tags, hover animations

📋 **Ready for Production:**
- Multi-page navigation fully functional
- Real project links integrated and tested
- Responsive design across all pages
- GitHub profile integration complete
- Industrial garage aesthetic applied consistently

## Content Details

### About Me Section
- **Profile:** Data and AI passionate engineer applicant
- **Skills:** Machine Learning (Kaggle/SIGNATE), Web Development (4 client sites, 3 personal), Data Processing (SQL), Cloud Services
- **Values:** "Guide people in困difficult situations to a state where they can demonstrate their abilities through data organization and analysis"
- **Goal:** Contributing to career challenges of people in their 20s using data science technology

### Skills & Strengths Section  
1. **⚙️ Technical Skills** - Python, JavaScript, SQL, Machine Learning tech stack
2. **🚀 Project Results** - Web development and data analysis competition experience
3. **🧩 Problem Solving** - Root cause identification and improvement proposals
4. **📚 Learning Enthusiasm** - Continuous learning of new technologies and tools

## Development Commands

- `npm run dev` - Start development server with hot reloading (port 3000)
- `npm run build` - Build production version
- `npm run preview` - Preview production build locally
- `npx wrangler deploy` - Deploy to Cloudflare Workers

## Deployment Setup

- **Cloudflare Workers** ready for static site deployment
- **Vite** configured for development and production builds
- **Assets** properly organized for CDN delivery

## Technical Architecture

### HTML Structure (Current)
- **Hero section** with Pexels background image and overlay effect
- **Fixed header** with glass-morphism design and smooth navigation
- **About Me** section with profile image and detailed self-introduction
- **Skills & Strengths** grid (4-column layout, mobile responsive)
- **Blog cards** (3-column grid) - Ready for GitHub/Kaggle showcase
- **Contact form** with table layout - Ready for job hunting contact info
- **Footer** with map and company placeholder

### CSS Architecture
- Uses semantic CSS with clear component separation
- Responsive design with mobile-first approach (768px breakpoint)
- Modern design elements: glass-morphism, shadows, gradients
- Color scheme: Primary #757fb5 (purple-blue), complementary grays
- Grid system: `.grid`, `.grid-col-2/3/4` for flexible layouts
- Component styles: `.section`, `.header`, `.hero`, `.about`, `.feature`, `.card`

### JavaScript Functionality
- **Smooth scrolling** navigation between sections
- **Form submission** handling with user feedback
- **ES6 modules** structure via Vite
- Event listeners for navigation and form interactions

## Design System

### Color Palette
- **Primary:** #757fb5 (Brand purple-blue)
- **Text:** #333 (Dark gray)
- **Background:** #fff (White), #f0f0f0 (Light gray sections)
- **Accents:** rgba() values for transparency effects

### Typography
- **Font:** 'Noto Sans JP' for Japanese text compatibility
- **Sizes:** Responsive scaling (120px hero → 50px mobile)
- **Weights:** Normal (400), Bold (700)

### Assets
- **Images:** Pexels hero background, placeholder profile/skill icons
- **Icons:** Emoji-based skill representations (⚙️🚀🧩📚)
- **Structure:** `/public/assets/` for static files, `/src/` for bundled assets

## Card Design System Philosophy

### Project Card Layout Requirements
- **All project cards must have identical large size** for visual consistency
- **2-column grid layout** for all project sections (Web Apps, ML Projects, GitHub Repos)
- **Elevated card design** with white background, shadows, and hover effects to stand out from page background
- **Consistent spacing** between cards for balanced visual hierarchy

### Project Card Technical Specifications
- **Card Size**: Large format using `grid-col-2` with `grid-container-featured` class
- **Image Dimensions**: 400x250px for all project cards (no small variants)
- **Card Background**: White with `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1)`
- **Hover Effects**: `translateY(-5px)` with enhanced shadow
- **Border Radius**: 12px for modern appearance
- **Padding**: 30px for content area

### Layout Consistency Rules
- **Webアプリケーション**: 2 projects in 1 row, 2 columns
- **Webサイト制作実績**: 4 projects in 2 rows, 2 columns each
- **ML Projects**: Featured projects in 2 columns, others in single column
- **GitHub Repos**: Language-based sections with appropriate column counts

### Visual Hierarchy
- All project cards should appear "floating" above the background
- Consistent gap spacing between cards (40px)
- Technology tags and buttons follow same styling patterns
- Project labels use color-coding for categorization

## Recent Updates (2025-01-17)

### Card Layout System Overhaul
- **Issue**: Project cards were displaying inconsistently - some as small 4-column layout, others with mixed styling
- **Root Cause**: CSS Grid system was using flexbox with incomplete flex-wrap configuration, causing layout collapse
- **Solution**: Complete migration from flexbox to CSS Grid system

### Technical Changes Applied
- **CSS Grid Implementation**:
  ```css
  .grid {
    display: grid;
    gap: 20px;
    justify-content: center;
  }
  .grid-col-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-col-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-col-4 { grid-template-columns: repeat(4, 1fr); }
  ```

- **Project Card Styling Standardized**:
  - White background with `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1)`
  - 12px border radius for modern appearance
  - Hover effects with translateY(-5px) and enhanced shadows
  - Consistent 250px image height and 30px padding

- **Layout Consistency Achieved**:
  - 🚀 Webアプリケーション: 2 projects in 1 row, 2 columns
  - 🌐 Webサイト制作実績: 4 projects in 2 rows, 2 columns each
  - All cards now display at identical large sizes
  - Proper visual hierarchy with elevated card design

### Responsive Design Updates
- Mobile breakpoint (768px): All grids collapse to single column
- `grid-template-columns: 1fr` for mobile devices
- Maintained card styling and spacing on all screen sizes

## Known Issues & Fixes Applied
- ✅ HTML parser error with quotes fixed (「」 instead of "<>")
- ✅ Vite configuration simplified for stable development
- ✅ Asset paths corrected for proper loading
- ✅ Responsive design tested and working
- ✅ **CSS Grid layout system implemented** - Fixed inconsistent card sizing
- ✅ **Project card visual hierarchy established** - Elevated white cards with shadows
- ✅ **Layout consistency across all portfolio pages** - 2-column grid for featured projects