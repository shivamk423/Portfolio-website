# 🔗 Portfolio Website - File Connections & Architecture

## 📁 Complete File Structure

```
portfolio-website/
│
├── index.html                 ← Main entry point
│   │
│   ├─→ css/style.css         ← All styles (linked in <head>)
│   │
│   └─→ js/                    ← Scripts (loaded at end of <body>)
│       ├── particles.js       ← Loaded first
│       ├── animations.js      ← Loaded second
│       └── main.js           ← Loaded third
│
├── assets/                    ← (Optional) Images folder
│
└── README.md                  ← Documentation

```

## 🔄 How Files Connect

```
┌─────────────────────────────────────────────────────────────┐
│                        BROWSER                               │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              index.html (Entry Point)               │    │
│  │                                                     │    │
│  │  <head>                                            │    │
│  │    └─> <link> ──────────┐                        │    │
│  │                          │                         │    │
│  │  <body>                  ↓                        │    │
│  │    └─> Content      ┌─────────────┐              │    │
│  │    └─> Scripts ────→│ css/        │              │    │
│  │         │            │ style.css   │←── Styles   │    │
│  │         │            └─────────────┘              │    │
│  │         │                                          │    │
│  │         ├──→ particles.js  ──→ Canvas Animation  │    │
│  │         ├──→ animations.js ──→ Scroll Effects    │    │
│  │         └──→ main.js       ──→ Core Functions    │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              RUNTIME EXECUTION                      │    │
│  │                                                     │    │
│  │  1. Load HTML                                      │    │
│  │  2. Load CSS (styles applied immediately)         │    │
│  │  3. Render content with styles                    │    │
│  │  4. Execute particles.js (background animation)   │    │
│  │  5. Execute animations.js (scroll effects)        │    │
│  │  6. Execute main.js (cursor, preloader, etc.)    │    │
│  │  7. Page fully interactive                        │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Component Interactions

### CSS → HTML
```
style.css
    ├── Defines classes
    ├── Sets animations
    └── Creates responsive breakpoints
           ↓
    Applied to HTML elements via class names
           ↓
    .hero, .stat-card, .expertise-card, etc.
```

### JavaScript → HTML
```
particles.js
    └── Targets: #particles-canvas
           └── Creates particle animation

animations.js
    ├── Targets: .counter (animates numbers)
    ├── Targets: .fade-in-section (scroll reveals)
    ├── Targets: .nav-links a (active highlighting)
    └── Targets: .progress-bar (scroll progress)

main.js
    ├── Targets: .cursor, .cursor-follower (custom cursor)
    ├── Targets: .preloader (loading screen)
    ├── Targets: a[href^="#"] (smooth scrolling)
    └── Creates: .scroll-to-top button
```

## 📊 Data Flow

```
User Action (scroll, click, hover)
    ↓
Browser Event (mousemove, scroll, click)
    ↓
JavaScript Event Listener
    ↓
DOM Manipulation
    ↓
CSS Transition/Animation
    ↓
Visual Feedback
```

## 🔑 Key Dependencies

### HTML Depends On:
- ✅ Google Fonts (external)
- ✅ css/style.css (local)
- ✅ js/*.js files (local)

### CSS Depends On:
- ✅ CSS Variables (:root)
- ✅ Google Fonts
- ✅ HTML class structure

### JavaScript Depends On:
- ✅ HTML elements (DOM)
- ✅ Modern browser APIs
- ✅ No external libraries

## 🎨 Style System

```
:root Variables
    ↓
Define colors, transitions
    ↓
Used throughout CSS
    ↓
Applied to components
    ↓
    ├── Base Styles
    ├── Component Styles  
    ├── Animation Keyframes
    └── Responsive Media Queries
```

## ⚡ JavaScript Module System

```
IIFE Pattern (Immediately Invoked Function Expression)
    ↓
Each JS file wrapped in:
(function() {
    'use strict';
    // Module code
})();
    ↓
Prevents global scope pollution
    ↓
Each module is independent
```

## 🔄 Event Flow

### Page Load Sequence
```
1. HTML parsed
2. CSS loaded and parsed
3. DOM constructed
4. CSS applied
5. JavaScript files loaded
6. DOMContentLoaded event
7. particles.js starts animation
8. animations.js sets up observers
9. main.js initializes cursor
10. window.load event
11. Preloader hidden
12. Page fully interactive
```

### User Scroll Sequence
```
User scrolls
    ↓
Scroll event fired
    ↓
Progress bar updated (animations.js)
    ↓
Section visibility checked (animations.js)
    ↓
Active nav updated (animations.js)
    ↓
Fade-in animations triggered (CSS)
```

### Hover Interaction
```
Mouse over element
    ↓
Mouseenter event
    ↓
Cursor expands (main.js)
    ↓
:hover styles applied (CSS)
    ↓
Transform/color transition (CSS)
```

## 📦 File Size & Load Order

```
Load Priority:
1. index.html     (25 KB)  ← Critical
2. style.css      (30 KB)  ← Critical (blocks render)
3. particles.js   (~3 KB)  ← High
4. animations.js  (~3 KB)  ← High  
5. main.js        (~2 KB)  ← High
6. Google Fonts   (varies) ← Async

Total: ~63 KB + fonts
```

## 🎯 Component Map

```
HEADER
├── Logo → main.js (scroll to top)
└── Navigation → main.js (smooth scroll)
                → animations.js (active state)

HERO
├── Stats → animations.js (counters)
└── Buttons → main.js (smooth scroll)

SECTIONS
├── Expertise → CSS (hover effects)
├── Skills → CSS (tag animations)
├── Experience → animations.js (reveal)
├── Projects → CSS (card effects)
└── Education → animations.js (reveal)

BACKGROUND
└── Canvas → particles.js (animation)

OVERLAYS
├── Cursor → main.js (position)
├── Progress → animations.js (width)
├── Preloader → main.js (hide)
└── Scroll-top → main.js (show/hide)
```

## 🔧 Modification Guide

### To Change Colors:
```
Edit: css/style.css
Find: :root { ... }
Change: --gold, --primary, etc.
```

### To Add Section:
```
1. Edit: index.html (add HTML)
2. Edit: css/style.css (add styles)
3. Edit: index.html nav (add link)
```

### To Modify Animations:
```
Edit: js/animations.js
Find: duration = 2000
Change: timing values
```

### To Change Particles:
```
Edit: js/particles.js
Find: particleCount = 80
Change: number of particles
```

## 🚀 Performance Tips

```
CSS
├── Uses CSS variables (fast)
├── Hardware-accelerated (transform, opacity)
└── Minimal reflows

JavaScript
├── Throttled scroll events (requestAnimationFrame)
├── IntersectionObserver (efficient)
└── Event delegation where possible

HTML
├── Semantic structure
├── Minimal DOM depth
└── Scripts at bottom (non-blocking)
```

## 📱 Responsive Behavior

```
Desktop (>1024px)
├── Full layout
├── Custom cursor
├── All animations
└── 3-column grids

Tablet (768-1024px)
├── 2-column grids
├── Custom cursor
├── All animations
└── Adjusted spacing

Mobile (<768px)
├── 1-column layout
├── No custom cursor
├── Simplified animations
└── Touch-optimized
```

---

**This diagram shows all file connections and how they work together!**
