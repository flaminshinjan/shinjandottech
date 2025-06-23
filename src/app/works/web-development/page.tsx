'use client';

import Link from 'next/link';
import { ExternalLink, Github, Calendar, ArrowLeft, Code, Globe, Database, Zap } from 'lucide-react';

const webProjects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Platform",
    description: "A comprehensive platform for tracking environmental impact and promoting sustainable practices with real-time analytics and community features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Chart.js"],
    features: ["Real-time Analytics", "Community Platform", "AI Insights", "Mobile Responsive", "Dashboard", "User Authentication"],
    liveUrl: "https://ecotrack-demo.vercel.app",
    githubUrl: "https://github.com/shinjan/ecotrack",
    status: "Live",
    year: "2024",
    complexity: "Advanced",
    duration: "3 months"
  },
  {
    id: 2,
    title: "DevTools Extension",
    description: "Chrome extension for developers with code analysis, performance monitoring, and debugging tools.",
    technologies: ["JavaScript", "Chrome APIs", "Webpack", "Chart.js", "CSS3", "HTML5"],
    features: ["Code Analysis", "Performance Monitor", "Debug Tools", "Export Reports", "Real-time Updates", "Customizable UI"],
    liveUrl: "https://chrome.google.com/webstore/detail/devtools-plus",
    githubUrl: "https://github.com/shinjan/devtools-extension",
    status: "Live",
    year: "2023",
    complexity: "Intermediate",
    duration: "2 months"
  },
  {
    id: 3,
    title: "Portfolio Website v2",
    description: "Modern portfolio website built with Next.js featuring glassmorphism design, dark mode, and smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Vercel"],
    features: ["Responsive Design", "Dark/Light Mode", "Blog System", "Contact Form", "SEO Optimized", "Fast Loading"],
    liveUrl: "https://shinjan.dev",
    githubUrl: "https://github.com/shinjan/portfolio-v2",
    status: "Live",
    year: "2024",
    complexity: "Intermediate",
    duration: "1 month"
  },
  {
    id: 4,
    title: "E-commerce Dashboard",
    description: "Admin dashboard for e-commerce platforms with inventory management, sales analytics, and order processing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Stripe API"],
    features: ["Inventory Management", "Sales Analytics", "Order Processing", "Real-time Updates", "Payment Integration", "User Management"],
    liveUrl: "https://ecommerce-admin-demo.vercel.app",
    githubUrl: "https://github.com/shinjan/ecommerce-dashboard",
    status: "Live",
    year: "2023",
    complexity: "Advanced",
    duration: "4 months"
  },
  {
    id: 5,
    title: "Weather App PWA",
    description: "Progressive Web App for weather forecasting with offline capabilities and location-based services.",
    technologies: ["Vue.js", "PWA", "Service Workers", "Weather API", "Geolocation", "LocalStorage"],
    features: ["Offline Mode", "Push Notifications", "Location Services", "7-day Forecast", "Multiple Cities", "Dark Mode"],
    liveUrl: "https://weather-pwa-demo.netlify.app",
    githubUrl: "https://github.com/shinjan/weather-pwa",
    status: "Live",
    year: "2023",
    complexity: "Intermediate",
    duration: "6 weeks"
  }
];

const stats = [
  { label: 'Web Projects', value: '15+', icon: Globe },
  { label: 'Technologies', value: '20+', icon: Code },
  { label: 'Databases', value: '5+', icon: Database },
  { label: 'APIs Built', value: '10+', icon: Zap }
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-bl from-emerald-500 to-teal-400 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        {/* Code-themed Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-blue-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/5 w-24 h-24 bg-[#F4C155]/10 rotate-12 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 border border-emerald-500/30 rounded-full animate-pulse"></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <Link 
              href="/works" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#E85D4C] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Works</span>
            </Link>
          </div>

          <div className="text-center mb-16">
            {/* Small Label */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <Code className="w-4 h-4 text-[#F4C155]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Web Development
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.75] tracking-tighter uppercase text-foreground mb-6">
              WEB PROJECTS
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-8"></div>

            {/* Description */}
            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-light mb-12">
              Full-stack web applications, progressive web apps, and modern websites built with cutting-edge technologies and best practices.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-blue-500/50 transition-all">
                    <stat.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-2xl font-black text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {webProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              >
                {/* Project Visual */}
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-muted-foreground font-medium">Web Application</div>
                  </div>
                  
                  {/* Floating Code Elements */}
                  <div className="absolute top-4 left-4 text-blue-400/30 font-mono text-xs">{'<html>'}</div>
                  <div className="absolute top-4 right-4 text-cyan-400/30 font-mono text-xs">{'</>'}</div>
                  <div className="absolute bottom-4 left-4 text-emerald-400/30 font-mono text-xs">{'{ }'}</div>
                  <div className="absolute bottom-4 right-4 text-purple-400/30 font-mono text-xs">{'[ ]'}</div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-bold uppercase ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.complexity === 'Advanced' 
                          ? 'bg-red-500/10 text-red-400' 
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {project.complexity}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-muted-foreground rounded-full text-sm font-medium hover:border-blue-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    {project.features.length > 4 && (
                      <div className="mt-2 text-xs text-blue-400 font-medium">
                        +{project.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/10">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Year</div>
                      <div className="font-semibold text-foreground">{project.year}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold text-foreground">{project.duration}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live</span>
                    </Link>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-foreground font-bold rounded-full hover:border-blue-500 hover:scale-105 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              TECH STACK
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use for web development projects
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { category: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'], color: 'from-blue-500 to-cyan-400' },
              { category: 'Backend', techs: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'], color: 'from-emerald-500 to-teal-400' },
              { category: 'Tools', techs: ['Git', 'Docker', 'Webpack', 'Vite', 'ESLint'], color: 'from-purple-500 to-pink-400' },
              { category: 'Cloud', techs: ['Vercel', 'Netlify', 'AWS', 'Firebase', 'Supabase'], color: 'from-orange-500 to-red-400' }
            ].map((stack, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${stack.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.techs.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-[#E85D4C] rounded-full"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
} 