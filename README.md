# Developer Expertise Visualizer

A modern web application that visualizes developer contribution data from software projects in an interactive and user-friendly way. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Interactive Data Visualization**: Beautiful charts showing developer contributions using Recharts
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean interface with particle background effects
- **Cross-Browser Compatible**: Works seamlessly across all major browsers
- **SEO Optimized**: Complete meta tags and social media sharing support
- **Performance Optimized**: Fast loading with Next.js 16 and TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts for data visualization
- **UI Effects**: React TSParticles for background animation
- **Deployment**: Vercel-ready

## 📱 Responsive Breakpoints

- Mobile: 320px+
- Small Mobile: 640px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sheriffdeenakindele-lgtm/Developer_Expertise_Visualizer.git
   cd Developer_Expertise_Visualizer
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the development server**:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production

```bash
# Build the application
yarn build

# Start the production server
yarn start
```

## 🚀 Deployment to Vercel

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure build settings

3. **Deploy**:
   - Vercel will automatically build and deploy your application
   - Your app will be available at `https://your-app-name.vercel.app`

## 📦 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation header
│   │   └── ParticleBackground.jsx  # Animated background
│   ├── section/             # Page sections
│   │   ├── aboutDEV.tsx     # About section
│   │   ├── contact.tsx      # Contact information
│   │   └── DeveloperChart.tsx  # Data visualization
│   ├── shared/              # Shared utilities
│   ├── data/                # Static data files
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page component
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # SEO sitemap
│   └── robots.ts            # SEO robots file
public/                      # Static assets
```

## 🎯 Key Features

### Data Visualization
- Interactive bar charts showing developer contributions
- Smart name formatting for better readability
- Responsive chart sizing for all devices
- Custom tooltips with detailed information

### User Experience
- Smooth scrolling navigation
- Touch-friendly mobile interactions
- Loading optimizations
- Cross-browser compatibility

### SEO & Performance
- Complete meta tags for social sharing
- Sitemap and robots.txt generation
- Optimized images and assets
- Fast loading times

## 👨‍💻 Author

**Sheriffdeen Akindele**
- Frontend Developer passionate about intelligent UI design
- Specialized in software visualization and research-driven web automation
- GitHub: [@sheriffdeenakindele-lgtm](https://github.com/sheriffdeenakindele-lgtm)

## 🎓 Academic Context

This project was developed as part of a research proposal for the MSc in Computer Science program at the University of Lethbridge, supervised by Prof. John Anvik. It explores interactive visualization for software maintenance research and serves as a foundation for future AI-assisted expertise recommendation systems.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sheriffdeenakindele-lgtm/Developer_Expertise_Visualizer/issues).

---

**Live Demo**: [https://developer-expertise-visualizer.vercel.app](https://developer-expertise-visualizer.vercel.app)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
