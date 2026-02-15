# Gowri Shankar ChinthA – Portfolio Website

A modern, futuristic multi-page static portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean technical aesthetic with animated components, glass morphism effects, and responsive design.

## 🚀 Features

- **Multi-page Architecture**: Home, Architecture, Skills, Projects, Certifications, and Contact pages
- **Modern UI/UX**: Glass morphism design with neon accents and smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: Animated skill bars, project cards with tilt effects, and smooth transitions
- **Professional Branding**: GSC monogram with trademark symbol
- **Filter System**: Dynamic project filtering by category
- **External Links**: Support for GitHub repositories, live demos, and certificate verification

## 🛠 Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedSection.tsx
│   ├── AnimatedCounter.tsx
│   ├── Navbar.tsx
│   ├── ParticleBackground.tsx
│   ├── ScrollProgress.tsx
│   └── SkillBar.tsx
├── pages/              # Page components
│   ├── Index.tsx        # Home page
│   ├── Architecture.tsx # System architecture
│   ├── Skills.tsx       # Technical skills
│   ├── Projects.tsx     # Project portfolio
│   ├── Certifications.tsx # Certifications
│   ├── Contact.tsx      # Contact information
│   └── NotFound.tsx     # 404 page
├── assets/             # Static assets (resume, images)
└── main.tsx           # App entry point
```

## ⚙️ Customization Guide

### 🔹 Change Name / Brand

**Edit navbar component:**
```typescript
// src/components/Navbar.tsx
const CONFIG = {
  name: "YOUR_NAME",
  resumeFile: "/assets/Your_Resume.pdf",
};
```

**Update GSC monogram if needed:**
```typescript
// In the same file, modify the monogram display
<span className="text-primary font-light tracking-widest text-sm">
  YOUR_INITIALS
</span>
```

### 🔹 Update Resume

1. Replace the resume file inside:
   ```
   assets/Gowri_Shankar_ChinthA_Resume.pdf
   ```

2. If filename changes, update links in:
   - `src/components/Navbar.tsx` (CONFIG.resumeFile)
   - `src/pages/Index.tsx` (CONFIG.resumeFile)

### 🔹 Add New Project

1. Open `src/pages/Projects.tsx`
2. Duplicate any existing project object in the `projects` array
3. Update the properties:
   ```typescript
   {
     title: "Your Project Name",
     category: "Web|Backend|AI|System|Automation",
     stack: ["Tech1", "Tech2", "Tech3"],
     description: "Project description...",
     architecture: "Architecture details...",
     github: "https://github.com/your-repo",
     demo: "https://your-demo-url.com",
   }
   ```

4. To add a new category:
   - Add to `filters` array at the top of the file
   - Use the same category name in your project object

### 🔹 Edit Project Description

Inside the project card in `src/pages/Projects.tsx`:
```typescript
{
  title: "Project Title",
  description: "Your updated description here", // Modify this line
  // ... other properties
}
```

### 🔹 Add New Certification

1. Open `src/pages/Certifications.tsx`
2. Duplicate any existing certification object
3. Update the properties:
   ```typescript
   {
     title: "Certificate Name",
     authority: "Issuing Authority",
     date: "2024",
     description: "Certificate description...",
     externalLink: "https://drive.google.com/your-certificate", // Optional
   }
   ```

4. Replace certificate image in `assets/certificates/` (if using images)
5. Update "View Certificate" link with Google Drive URL (for external verification)

### 🔹 Update Skills

1. Open `src/pages/Skills.tsx`
2. Locate the desired category in the `categories` array
3. Add new skill object:
   ```typescript
   {
     name: "New Skill",
     pct: 85, // Percentage (0-100)
   }
   ```

4. For new categories, add a complete category object:
   ```typescript
   {
     name: "Category Name",
     icon: IconComponent, // Import from lucide-react
     skills: [
       { name: "Skill1", pct: 90 },
       { name: "Skill2", pct: 85 },
     ],
   }
   ```

### 🔹 Update Profile Picture

The portfolio includes a profile picture that appears in two forms:

1. **Large Profile Picture**: Circular profile image in the hero section
2. **Floating Profile Dot**: Small circular profile that appears in the top-left corner when scrolling

**To update your profile picture:**

1. Replace the profile image at:
   ```
   public/assets/profile.jpg
   ```

2. Supported formats: `.jpg`, `.jpeg`, `.png`
3. Recommended size: 400x400px for best quality
4. The image will be automatically cropped to circular shape

**How it works:**
- The profile picture is displayed prominently in the hero section
- When you scroll down (after 100px), a smaller version appears as a floating dot in the top-left corner
- Both images include a green online status indicator
- If the image fails to load, a fallback placeholder with "GS" initials will be shown

**Customization:**
```typescript
// In src/pages/Index.tsx
// Scroll threshold for showing the floating dot
setShowProfileDot(window.scrollY > 100);

// Profile dot size and position can be adjusted in the CSS classes
className="fixed top-6 left-6 z-50"
className="w-12 h-12 rounded-full"
```

### 🔹 Update Social Links

Open `src/pages/Contact.tsx` and update the href attributes:
```typescript
const CONFIG = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com",
};
```

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Configure GitHub Pages settings in repository

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository in Vercel
2. Vercel will automatically detect the React project
3. Deploy with zero configuration

### Manual Deployment
```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist folder contains the static files
# Upload to any static hosting service
```

## 🎨 Customization Tips

### Colors & Theme
- Modify primary colors in `tailwind.config.ts`
- Update CSS variables in `src/index.css`

### Animations
- Adjust animation timings in component files
- Modify Framer Motion variants for different effects

### Typography
- Update font families in `tailwind.config.ts`
- Modify text sizes and weights in component classes

## 📱 Responsive Breakpoints

The design uses Tailwind's default breakpoints:
- `sm`: 640px and up
- `md`: 768px and up  
- `lg`: 1024px and up
- `xl`: 1280px and up

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support regarding this portfolio template:
- Create an issue in the repository
- Contact the template author

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
