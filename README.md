# Devesh's Portfolio - React Version

A modern, animated portfolio website built with React and Framer Motion.

## Features

- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🎨 Clean, minimal aesthetic with Inter font
- 🚀 Component-based architecture for easy customization
- ⚡ Fast and performant

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

## Customization

### Update Your Content

1. **Hero Section** - Edit `src/components/Hero.js`
   - Update your name, tagline, current company, and bio

2. **Projects** - Edit `src/components/Projects.js`
   - Update the `projectsData` array with your projects
   - Add tags, titles, descriptions, and impact metrics

3. **About** - Edit `src/components/About.js`
   - Write your story and background

4. **Experience** - Edit `src/components/Experience.js`
   - Update the `experienceData` array with your work history

5. **Contact** - Edit `src/components/Contact.js`
   - Update your email and social media links

### Customize Animations

All animations use Framer Motion. You can customize them by:

- Adjusting `duration`, `delay`, and `ease` in transition objects
- Changing `opacity`, `x`, `y` values in variants
- Adding new animation effects from [Framer Motion docs](https://www.framer.com/motion/)

### Color Scheme

Edit CSS variables in `src/App.css`:
```css
:root {
  --bg-primary: #FAFAFA;
  --text-primary: #1A1A1A;
  --text-secondary: #666666;
  --text-muted: #999999;
  --border: #E5E5E5;
}
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.js/css
│   ├── Hero.js/css
│   ├── Projects.js/css
│   ├── About.js/css
│   ├── Experience.js/css
│   ├── Contact.js/css
│   └── Footer.js/css
├── App.js
├── App.css
└── index.js
```

## Technologies Used

- React 18
- Framer Motion (animations)
- CSS3
- Google Fonts (Inter)

## Performance

- Code splitting with React lazy loading (can be added)
- Optimized animations with Framer Motion
- Minimal dependencies for fast load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this for your own portfolio!
