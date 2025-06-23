'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Calendar, Users, Star, ArrowRight, Code, Smartphone, Palette, Zap, Award, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Platform",
    category: "web-development",
    type: "Full-Stack Web Application",
    description: "A comprehensive platform for tracking environmental impact and promoting sustainable practices with real-time analytics and community features.",
    image: "/projects/ecotrack.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: ["Real-time Analytics", "Community Platform", "AI Insights", "Mobile Responsive"],
    liveUrl: "https://ecotrack-demo.vercel.app",
    githubUrl: "https://github.com/shinjan/ecotrack",
    status: "Live",
    year: "2024",
    team: "Solo Project",
    duration: "3 months",
    featured: true
  },
  {
    id: 2,
    title: "FinanceFlow Mobile App",
    category: "mobile-apps",
    type: "React Native Mobile App",
    description: "Personal finance management app with AI-powered insights, expense tracking, and budget optimization features.",
    image: "/projects/financeflow.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "Expo"],
    features: ["AI Insights", "Expense Tracking", "Budget Planning", "Real-time Sync"],
    liveUrl: "https://apps.apple.com/app/financeflow",
    githubUrl: "https://github.com/shinjan/financeflow",
    status: "Live",
    year: "2024",
    team: "Team of 3",
    duration: "4 months",
    featured: true
  },
  {
    id: 3,
    title: "CreativeStudio Design System",
    category: "ui-design",
    type: "Design System & UI Kit",
    description: "Complete design system with 200+ components, comprehensive style guide, and developer handoff tools for creative agencies.",
    image: "/projects/creativestudio.jpg",
    technologies: ["Figma", "Design Tokens", "Storybook", "React", "Sass"],
    features: ["200+ Components", "Design Tokens", "Dark/Light Mode", "Documentation"],
    liveUrl: "https://creativestudio-ds.netlify.app",
    githubUrl: "https://github.com/shinjan/creativestudio-ds",
    status: "Live",
    year: "2023",
    team: "Design Lead",
    duration: "6 months",
    featured: true
  },
  {
    id: 4,
    title: "DevTools Extension",
    category: "web-development",
    type: "Browser Extension",
    description: "Chrome extension for developers with code analysis, performance monitoring, and debugging tools.",
    image: "/projects/devtools.jpg",
    technologies: ["JavaScript", "Chrome APIs", "Webpack", "Chart.js"],
    features: ["Code Analysis", "Performance Monitor", "Debug Tools", "Export Reports"],
    liveUrl: "https://chrome.google.com/webstore/detail/devtools-plus",
    githubUrl: "https://github.com/shinjan/devtools-extension",
    status: "Live",
    year: "2023",
    team: "Solo Project",
    duration: "2 months",
    featured: false
  },
  {
    id: 5,
    title: "TaskFlow Mobile",
    category: "mobile-apps",
    type: "Flutter Mobile App",
    description: "Team collaboration and project management app with real-time updates, file sharing, and progress tracking.",
    image: "/projects/taskflow.jpg",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    features: ["Real-time Collaboration", "File Sharing", "Progress Tracking", "Offline Mode"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.taskflow",
    githubUrl: "https://github.com/shinjan/taskflow-mobile",
    status: "Live",
    year: "2023",
    team: "Team of 2",
    duration: "5 months",
    featured: false
  },
  {
    id: 6,
    title: "MedCare Dashboard",
    category: "ui-design",
    type: "Healthcare Dashboard Design",
    description: "Comprehensive healthcare management dashboard for medical professionals with patient data visualization.",
    image: "/projects/medcare.jpg",
    technologies: ["Figma", "Adobe XD", "Principle", "Zeplin"],
    features: ["Patient Management", "Data Visualization", "Responsive Design", "Accessibility"],
    liveUrl: "https://medcare-dashboard.webflow.io",
    githubUrl: "",
    status: "Design Complete",
    year: "2023",
    team: "UI/UX Designer",
    duration: "3 months",
    featured: false
  }
];

const categories = [
  { id: 'all', label: 'All Works', count: projects.length, icon: Award },
  { id: 'web-development', label: 'Web Development', count: projects.filter(p => p.category === 'web-development').length, icon: Code },
  { id: 'mobile-apps', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile-apps').length, icon: Smartphone },
  { id: 'ui-design', label: 'UI/UX Design', count: projects.filter(p => p.category === 'ui-design').length, icon: Palette }
];

const stats = [
  { label: 'Projects Completed', value: '25+', icon: Award },
  { label: 'Happy Clients', value: '15+', icon: Users },
  { label: 'Years Experience', value: '3+', icon: Calendar },
  { label: 'Success Rate', value: '100%', icon: TrendingUp }
];

export default function WorksPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-bl from-emerald-500 to-cyan-400 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-[#E85D4C]/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/5 w-24 h-24 bg-[#F4C155]/10 rotate-12 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 border border-purple-500/30 rounded-full animate-pulse"></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            {/* Small Label */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <Award className="w-4 h-4 text-[#F4C155]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Portfolio
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-[clamp(4rem,12vw,16rem)] font-black leading-[0.75] tracking-tighter uppercase text-foreground mb-6">
              MY WORKS
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-full mx-auto mb-8"></div>

            {/* Description */}
            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-light mb-12">
              Showcasing innovative solutions, creative designs, and technical excellence across web development, mobile apps, and UI/UX design.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-[#E85D4C]/50 transition-all">
                    <stat.icon className="w-8 h-8 text-[#E85D4C]" />
                  </div>
                  <div className="text-2xl font-black text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.id === 'all' ? '/works' : `/works/${category.id}`}
                className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:border-[#E85D4C]/50 hover:bg-[#E85D4C]/10 transition-all duration-300"
              >
                <category.icon className="w-4 h-4 text-[#E85D4C] group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-foreground group-hover:text-[#E85D4C] transition-colors">{category.label}</span>
                <span className="px-2 py-1 bg-[#F4C155]/20 text-[#F4C155] rounded-full text-xs font-bold">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-3 h-3 bg-[#E85D4C] rounded-full"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Featured</span>
            </div>
            <h2 className="text-[clamp(2rem,6vw,8rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              SPOTLIGHT
            </h2>
          </div>

          <div className="grid gap-12">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid gap-8 items-center ${
                  index % 2 === 0 ? 'lg:grid-cols-12' : 'lg:grid-cols-12'
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'} relative group`}>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group-hover:border-[#E85D4C]/30 transition-all duration-500">
                    <div className="aspect-[16/10] bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Code className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-muted-foreground font-medium">Project Screenshot</div>
                      </div>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#F4C155] rounded-lg rotate-12 animate-float"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse opacity-80"></div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'} space-y-6`}>
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-[#E85D4C]/10 text-[#E85D4C] rounded-full text-sm font-bold uppercase tracking-wide">
                      {project.type}
                    </span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-bold uppercase">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-black leading-[0.9] tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-muted-foreground rounded-full text-sm font-medium hover:border-[#F4C155] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Year</div>
                      <div className="font-semibold text-foreground">{project.year}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Team</div>
                      <div className="font-semibold text-foreground">{project.team}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold text-foreground">{project.duration}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live</span>
                    </Link>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-foreground font-bold rounded-full hover:border-[#E85D4C] hover:scale-105 transition-all duration-300"
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

      {/* All Projects Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              ALL PROJECTS
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#E85D4C]/30 transition-all duration-500 hover:scale-[1.02] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              >
                {/* Project Image */}
                <div className="aspect-[16/10] bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-xl flex items-center justify-center mx-auto mb-3">
                      {project.category === 'web-development' && <Code className="w-8 h-8 text-white" />}
                      {project.category === 'mobile-apps' && <Smartphone className="w-8 h-8 text-white" />}
                      {project.category === 'ui-design' && <Palette className="w-8 h-8 text-white" />}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">Project Visual</div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#E85D4C] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-muted-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded text-xs font-bold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#E85D4C]/10 hover:bg-[#E85D4C]/20 rounded-lg flex items-center justify-center text-[#E85D4C] hover:scale-110 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-black leading-[0.8] tracking-tight text-white uppercase">
                Ready to Work Together?
              </h3>
              <p className="text-white/90 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Let&apos;s create something amazing together. I&apos;m always excited to take on new challenges and bring innovative ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-[#E85D4C] px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-black/20 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:bg-white/10 transition-all"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
} 