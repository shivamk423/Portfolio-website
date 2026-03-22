# Portfolio-website-
SHivam Portfolio website
# Shivam Kumar Singh - Portfolio Website

A modern, interactive portfolio website showcasing expertise in Business Analysis, Digital Analytics, and Data Science.

## 📁 File Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and animations
├── js/
│   ├── particles.js       # Particle background animation
│   ├── animations.js      # Scroll animations and counters
│   └── main.js           # Core functionality (cursor, preloader, etc.)
├── assets/               # (Optional) For images and other assets
└── README.md            # This file
```

## 🚀 Quick Start

### Option 1: Direct Use
Simply open `index.html` in any modern web browser.

### Option 2: Local Server (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

## 📦 Components Breakdown

### HTML Structure (`index.html`)
- **Header**: Sticky navigation with smooth scroll
- **Hero Section**: Introduction with animated stats
- **About**: Professional summary with highlights
- **Expertise**: Three core competency areas
- **Skills**: Technical skills organized by category
- **Experience**: Timeline of work history
- **Projects**: Featured project showcases
- **Education**: Academic credentials
- **Contact**: Multiple contact methods
- **Footer**: Copyright and credentials

### CSS Architecture (`css/style.css`)
- **Variables**: CSS custom properties for theming
- **Base Styles**: Reset and global styles
- **Components**: Modular component styles
- **Animations**: Keyframe animations and transitions
- **Responsive**: Mobile-first responsive design

### JavaScript Modules

#### `js/particles.js`
- Creates floating particle background
- Draws connection lines between nearby particles
- Handles canvas resizing

#### `js/animations.js`
- Animated counters for statistics
- Scroll-triggered reveal animations
- Active navigation highlighting
- Progress bar updates

#### `js/main.js`
- Custom cursor functionality
- Preloader animation
- Smooth scrolling
- Scroll-to-top button
- Utility functions

## ✨ Features

### Interactive Elements
- ✅ Custom cursor with hover effects
- ✅ Particle background with network connections
- ✅ Animated number counters
- ✅ Scroll progress indicator
- ✅ Smooth section transitions
- ✅ Timeline with pulsing connectors
- ✅ Hover effects on all interactive elements

### Performance
- ✅ Optimized animations (60fps)
- ✅ Throttled scroll events
- ✅ Lazy-loaded animations
- ✅ Minimal dependencies (only Google Fonts)
- ✅ Clean, semantic HTML

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: 1024px, 768px, 480px
- ✅ Touch-friendly on mobile
- ✅ Adaptive layouts

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #1a1a2e;
    --gold: #d4af37;
    --text-light: #f0f0f0;
    /* ... */
}
```

### Content
All content is in `index.html`. Update text, links, and information directly in the HTML.

### Animations
Adjust timing in `js/animations.js`:
```javascript
const duration = 2000; // Counter animation duration
```

### Particles
Modify particle count in `js/particles.js`:
```javascript
const particleCount = 80; // Number of particles
```

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📱 Mobile Support

- Custom cursor disabled on mobile
- Touch-optimized interactions
- Responsive layouts
- Optimized animations

## 🔧 Dependencies

- **Google Fonts**: Cormorant Garamond & Work Sans
- **No JavaScript libraries**: Pure vanilla JS

## 📊 Performance Metrics

- **Load Time**: ~1.5-2 seconds
- **HTML**: 25KB
- **CSS**: ~30KB
- **JS**: ~8KB total (3 files)
- **FPS**: Consistent 60fps

## 🚀 Deployment

### GitHub Pages
1. Create repository
2. Upload all files
3. Settings → Pages → Enable
4. Access at `username.github.io`

### Netlify
1. Drag and drop folder
2. Instant deployment

### Vercel
1. Import from GitHub
2. Auto-deploy on push

## 📝 File Connections

### How Files Work Together

1. **index.html** loads:
   - `css/style.css` (all styles)
   - `js/particles.js` (runs first - background)
   - `js/animations.js` (scroll effects)
   - `js/main.js` (core functionality)

2. **CSS** (`style.css`):
   - Defines all visual styles
   - Uses CSS variables for theming
   - Includes responsive breakpoints
   - Contains keyframe animations

3. **JavaScript execution order**:
   - `particles.js`: Creates canvas background
   - `animations.js`: Sets up observers and counters
   - `main.js`: Handles cursor and navigation

## 🎯 Key Sections Explained

### Hero Section
- Displays name and title
- Shows 4 animated stat cards
- Includes CTA buttons
- Features professional badges

### Timeline
- Vertical timeline with connectors
- Hover effects on each item
- Responsive grid layout
- Pulsing timeline dots

### Projects
- Card-based layout
- Tag system for technologies
- Hover animations
- Visual placeholders for images

### Contact
- Multiple contact methods
- Social links (LinkedIn, GitHub)
- Email and phone
- Hover effects on links

## 💡 Tips for Best Results

1. **Use a local server** for best experience
2. **Modern browser** recommended (Chrome/Firefox)
3. **Enable JavaScript** for full functionality
4. **Desktop view** shows all features (custom cursor, etc.)

## 🐛 Troubleshooting

### Animations not working
- Ensure JavaScript is enabled
- Use a local server (not file://)
- Check browser console for errors

### Fonts not loading
- Check internet connection
- Google Fonts may be blocked

### Mobile issues
- Clear browser cache
- Use modern mobile browser
- Custom cursor auto-disabled on mobile

## 📞 Contact Information

- **Email**: shivamk423@gmail.com
- **LinkedIn**: [linkedin.com/in/shivamk423](https://www.linkedin.com/in/shivamk423/)
- **GitHub**: [github.com/shivamk423](https://github.com/shivamk423)
- **Phone**: +91 7405439641

## 📄 License

All rights reserved © 2026 Shivam Kumar Singh

---

**Built with**: HTML5 • CSS3 • Vanilla JavaScript
**Last Updated**: February 2026
