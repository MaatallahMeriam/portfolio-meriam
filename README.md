# Meriam Maatallah - Professional Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing full-stack development expertise and software engineering projects.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Comprehensive Sections**:
  - Hero section with professional introduction
  - About section highlighting core competencies
  - Experience timeline with detailed work history
  - Skills showcase with technology proficiency
  - Projects portfolio with key achievements
  - Education background
  - Professional certifications
  - Contact information with social links

## Technology Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── sections/           # Portfolio sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── Navigation.tsx      # Main navigation component
│   └── Footer.tsx          # Footer component
└── public/                 # Static assets
```

## Customization

### Updating Personal Information

All personal information is stored in the component files. To update:

1. **Contact Info**: Edit `components/sections/Contact.tsx`
2. **Experience**: Edit `components/sections/Experience.tsx`
3. **Projects**: Edit `components/sections/Projects.tsx`
4. **Skills**: Edit `components/sections/Skills.tsx`
5. **Social Links**: Update URLs in `Hero.tsx`, `Contact.tsx`, and `Footer.tsx`

### Color Scheme

The portfolio uses a professional blue-teal gradient color scheme. To customize colors, modify the Tailwind classes in the components:

- Primary: `blue-600`, `blue-500`
- Secondary: `teal-600`, `teal-500`
- Background: `slate-50`, `slate-100`
- Text: `slate-900`, `slate-700`

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navigation.tsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## Performance Optimizations

- Static page generation for optimal performance
- Optimized images and assets
- Code splitting for faster initial load
- Smooth animations with CSS transitions
- Responsive design for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available for personal use.

## Contact

**Meriam Maatallah**
- Email: mkdmeriam22@gmail.com
- LinkedIn: [Maatallah Meriam](https://www.linkedin.com/in/Maatallah%20Meriam)
- GitHub: [MaatallahMeriam](https://github.com/MaatallahMeriam)
- Portfolio: [https://portfolio-meriam.vercel.app](https://portfolio-meriam.vercel.app)

---

Built with Next.js, TypeScript, and Tailwind CSS
