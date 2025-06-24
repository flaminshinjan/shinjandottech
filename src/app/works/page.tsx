'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, Github, Calendar, Users, Smartphone, Award, TrendingUp, Briefcase, Heart, Globe } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  websiteUrl?: string;
  githubUrl: string;
  status: string;
  year: string;
  team: string;
  duration: string;
  featured: boolean;
  company?: string;
}

const projects: Project[] = [
  // Professional Projects
  {
    id: 1,
    title: "Indus: Invest In India From NZ",
    category: "professional",
    type: "FinTech Mobile Application",
    description: "Mobile investment platform enabling Kiwi residents to invest directly in Indian markets with seamless KYC, best-in-class FX rates, and access to 500+ Indian mutual funds.",
    image: "/projects/indus.jpg",
    technologies: ["Flutter", "Express.js", "Node.js", "JavaScript", "TypeScript", "Figma"],
    features: ["Seamless KYC Process", "Direct Bank Transfers", "500+ Mutual Funds", "SEBI Approved"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.indus.investments",
    websiteUrl: "https://indus.nz",
    githubUrl: "",
    status: "Live",
    year: "2025",
    team: "Founding Software Engineer",
    duration: "6+ months",
    featured: true,
    company: "Indus Limited"
  },
  {
    id: 2,
    title: "Quabble: Daily Mental Health",
    category: "professional",
    type: "Mental Health Mobile App",
    description: "Comprehensive mental wellness app featuring mind workouts, personalized routines, mood tracking, and anonymous community support with a cute companion guide.",
    image: "/projects/quabble.jpg",
    technologies: ["Go", "Flutter", "PostgreSQL", "Cloud Applications", "Back-End Web Development"],
    features: ["Mind Workouts", "Mood Tracking", "Anonymous Community", "Cute Companion Guide"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.museLIVE.quabbleapp",
    websiteUrl: "https://muselive.com",
    githubUrl: "",
    status: "Live",
    year: "2025",
    team: "Backend Engineer",
    duration: "2 months",
    featured: true,
    company: "museLIVE Inc."
  },
  {
    id: 3,
    title: "AI Shopping & Productivity Applications",
    category: "professional",
    type: "E-commerce AI Platform",
    description: "Designed UI for AI based Shopping and Productivity Applications 30% faster, significantly improving UX and usability. Integrated CC Avenue Payment Gateway, increasing transaction success rates by 15%.",
    image: "/projects/ionio.jpg",
    technologies: ["SwiftUI", "Java", ".NET Framework", "Android Development", "Firebase", "Node.js", "iOS Development", "React Native", "Flutter"],
    features: ["AI-Powered Shopping", "Payment Gateway Integration", "Cross-Platform Development", "State Management"],
    liveUrl: "https://ionio.ai",
    websiteUrl: "https://ionio.ai",
    githubUrl: "",
    status: "Live",
    year: "2024",
    team: "Software Development Engineer",
    duration: "1 year 3 months",
    featured: true,
    company: "Ionio"
  },
  {
    id: 4,
    title: "RetailGPT Mobile Apps",
    category: "professional",
    type: "Retail Mobile Applications",
    description: "Developed App Clips in SwiftUI and Instant Apps in Kotlin for RetailGPT, improving user conversion rates by over 30%. Integrated REST APIs managing over 1,000 requests daily.",
    image: "/projects/retailgpt.jpg",
    technologies: ["SwiftUI", "Kotlin", "REST APIs", "OTPLess Authentication", "Mobile Application Design"],
    features: ["App Clips & Instant Apps", "REST API Integration", "OTPLess Authentication", "User Conversion Optimization"],
    liveUrl: "",
    websiteUrl: "https://retailgpt.ai",
    githubUrl: "",
    status: "Live",
    year: "2024",
    team: "Software Development Engineer",
    duration: "Part of Ionio role",
    featured: false,
    company: "Ionio"
  },
  {
    id: 5,
    title: "Finance Advisor Mobile App",
    category: "professional",
    type: "FinTech Mobile Application",
    description: "Designed and developed a comprehensive finance advisor application focusing on user interface design and mobile application development during internship.",
    image: "/projects/swiftmoney.jpg",
    technologies: ["Flutter", "User Interface Design", "Mobile Application Development", "Design", "MongoDB"],
    features: ["Financial Advice Algorithms", "User-Friendly Interface", "Cross-Platform Mobile App", "Database Integration"],
    liveUrl: "",
    websiteUrl: "https://swiftmoney.in",
    githubUrl: "",
    status: "Live",
    year: "2023",
    team: "SDE Intern",
    duration: "5 months",
    featured: false,
    company: "Swift Money"
  },
  {
    id: 6,
    title: "iOS Application Testing Suite",
    category: "professional",
    type: "Mobile Testing Framework",
    description: "Comprehensive testing of existing iOS applications utilizing unit testing concepts and XCTest Framework to ensure application reliability and performance.",
    image: "/projects/techrange.jpg",
    technologies: ["Swift", "XCTest Framework", "iOS Development", "Software Testing", "Test Automation", "Xcode", "AWS"],
    features: ["Unit Testing Implementation", "XCTest Framework Usage", "Application Reliability Testing", "Performance Optimization"],
    liveUrl: "",
    websiteUrl: "https://techrange.org",
    githubUrl: "",
    status: "Completed",
    year: "2023",
    team: "iOS Development Intern",
    duration: "3 months",
    featured: false,
    company: "TechRange"
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length, icon: Award },
  { id: 'professional', label: 'Professional Work', count: projects.filter(p => p.category === 'professional').length, icon: Briefcase }
];

const stats = [
  { label: 'Total Projects', value: '6+', icon: Award },
  { label: 'Companies Worked', value: '5+', icon: Briefcase },
  { label: 'Years Experience', value: '3+', icon: Calendar },
  { label: 'Success Rate', value: '100%', icon: TrendingUp }
];

function WorksContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Set initial category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && ['professional'].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      router.push('/works');
    } else {
      router.push(`/works?category=${categoryId}`);
    }
  };
  
  const featuredProjects = projects.filter(project => project.featured);
  // const professionalProjects = projects.filter(project => project.category === 'professional');
  // const personalProjects = projects.filter(project => project.category === 'personal');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-background relative overflow-hidden transition-colors duration-300">
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
              A showcase of professional projects from leading tech companies, delivering real-world impact and technical excellence across mobile, web, and AI platforms.
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
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`group flex items-center gap-3 px-6 py-3 backdrop-blur-md border rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-[#E85D4C]/20 border-[#E85D4C] text-[#E85D4C]'
                    : 'bg-white/5 border-white/10 hover:border-[#E85D4C]/50 hover:bg-[#E85D4C]/10'
                }`}
              >
                <category.icon className={`w-5 h-5 transition-colors ${
                  activeCategory === category.id 
                    ? 'text-[#E85D4C]' 
                    : 'text-[#F4C155] group-hover:text-[#E85D4C]'
                }`} />
                <span className={`text-sm font-bold transition-colors ${
                  activeCategory === category.id 
                    ? 'text-[#E85D4C]' 
                    : 'text-foreground group-hover:text-[#E85D4C]'
                }`}>
                  {category.label}
                </span>
                <span className="text-xs text-muted-foreground bg-white/10 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,6vw,8rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              FEATURED WORKS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Highlighting the most impactful projects from my professional portfolio
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-20">
            {featuredProjects.map((project) => (
              <article 
                key={project.id} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 flex items-center justify-center relative">
                      <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-xl flex items-center justify-center mx-auto mb-3">
                      {project.category === 'professional' ? (
                        <Briefcase className="w-8 h-8 text-white" />
                      ) : (
                        <Heart className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium capitalize">{project.category} Project</div>
                </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase ${
                      project.status === 'Live' ? 'bg-green-500/80' :
                      project.status === 'In Development' ? 'bg-blue-500/80' : 'bg-gray-500/80'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 backdrop-blur-sm text-white rounded-full text-xs font-bold ${
                      project.category === 'professional' ? 'bg-purple-500/80' : 'bg-pink-500/80'
                    }`}>
                      {project.category === 'professional' ? 'WORK' : 'PERSONAL'}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-[#E85D4C] transition-colors leading-tight">
                    {project.title}
                  </h2>

                  {project.company && (
                    <div className="text-sm text-[#F4C155] font-semibold mb-3">
                      @ {project.company}
                    </div>
                  )}

                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-[#E85D4C]/10 text-[#E85D4C] rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-white/5 text-muted-foreground rounded-md text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.category === 'professional' ? (
                        <>
                          {project.websiteUrl && (
                            <Link
                              href={project.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#F4C155] font-semibold text-sm hover:text-[#E85D4C] transition-colors"
                            >
                              <Globe className="w-4 h-4" />
                              <span>Website</span>
                            </Link>
                          )}
                          {project.liveUrl && (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors"
                            >
                              <Smartphone className="w-4 h-4" />
                              <span>App</span>
                            </Link>
                          )}
                        </>
                      ) : (
                        <>
                          {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#F4C155] font-semibold text-sm hover:text-[#E85D4C] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                              <span>Live</span>
                    </Link>
                          )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-muted-foreground font-semibold text-sm hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Link>
                    )}
                        </>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.duration}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered Projects Section */}
      {activeCategory !== 'all' && (
        <section className="relative py-20 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                {activeCategory === 'professional' ? (
                  <Briefcase className="w-8 h-8 text-[#E85D4C]" />
                ) : (
                  <Heart className="w-8 h-8 text-[#E85D4C]" />
                )}
                <h3 className="text-3xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
                  {activeCategory === 'professional' ? 'PROFESSIONAL WORK' : 'PERSONAL PROJECTS'}
                </h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {activeCategory === 'professional' 
                  ? 'Projects delivered for leading companies in FinTech, Mental Health Tech, E-commerce, and Mobile Development'
                  : 'Passion projects and experimental work showcasing creativity, learning, and personal interests'
                }
              </p>
          </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.filter(p => !p.featured).map((project) => (
                <article 
                key={project.id} 
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className={`aspect-[16/9] flex items-center justify-center relative ${
                    project.category === 'professional' 
                      ? 'bg-gradient-to-br from-purple-600/20 to-blue-500/20' 
                      : 'bg-gradient-to-br from-pink-600/20 to-rose-500/20'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      project.category === 'professional'
                        ? 'bg-gradient-to-br from-purple-600 to-blue-500'
                        : 'bg-gradient-to-br from-pink-600 to-rose-500'
                    }`}>
                      {project.category === 'professional' ? (
                        <Briefcase className="w-6 h-6 text-white" />
                      ) : (
                        <Heart className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 backdrop-blur-sm text-white rounded-lg text-xs font-bold ${
                        project.status === 'Live' ? 'bg-green-500/80' :
                        project.status === 'In Development' ? 'bg-blue-500/80' : 'bg-gray-500/80'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{project.team}</span>
                  </div>
                </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#E85D4C] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {project.company && (
                      <div className="text-sm text-[#F4C155] font-semibold mb-3">
                        @ {project.company}
                      </div>
                    )}

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                          key={index}
                          className={`px-2 py-1 rounded-md text-xs ${
                            project.category === 'professional'
                              ? 'bg-purple-500/10 text-purple-400'
                              : 'bg-pink-500/10 text-pink-400'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.category === 'professional' ? (
                          <>
                            {project.websiteUrl && (
                              <Link
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F4C155] font-semibold text-sm hover:text-[#E85D4C] transition-colors"
                              >
                                Website
                              </Link>
                            )}
                            {project.liveUrl && (
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors"
                              >
                                App
                              </Link>
                            )}
                          </>
                        ) : (
                          <>
                            {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                                className="text-[#F4C155] font-semibold text-sm hover:text-[#E85D4C] transition-colors"
                      >
                                Live
                      </Link>
                            )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                                className="text-muted-foreground font-semibold text-sm hover:text-foreground transition-colors"
                        >
                                Code
                        </Link>
                      )}
                          </>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
      )}

            {/* All Projects Section - Shows when "All Projects" is selected */}
      {activeCategory === 'all' && (
        <section className="relative py-20 border-t border-white/10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
                ALL PROJECTS
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete showcase of professional work and personal projects
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.filter(p => !p.featured).map((project) => (
                <article 
                  key={project.id} 
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className={`aspect-[16/9] flex items-center justify-center relative ${
                    project.category === 'professional' 
                      ? 'bg-gradient-to-br from-purple-600/20 to-blue-500/20' 
                      : 'bg-gradient-to-br from-pink-600/20 to-rose-500/20'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      project.category === 'professional'
                        ? 'bg-gradient-to-br from-purple-600 to-blue-500'
                        : 'bg-gradient-to-br from-pink-600 to-rose-500'
                    }`}>
                      {project.category === 'professional' ? (
                        <Briefcase className="w-6 h-6 text-white" />
                      ) : (
                        <Heart className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 backdrop-blur-sm text-white rounded-lg text-xs font-bold ${
                        project.status === 'Live' ? 'bg-green-500/80' :
                        project.status === 'In Development' ? 'bg-blue-500/80' : 'bg-gray-500/80'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 backdrop-blur-sm text-white rounded-lg text-xs font-bold ${
                        project.category === 'professional' ? 'bg-purple-500/80' : 'bg-pink-500/80'
                      }`}>
                        {project.category === 'professional' ? 'WORK' : 'PERSONAL'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#E85D4C] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {project.company && (
                      <div className="text-sm text-[#F4C155] font-semibold mb-3">
                        @ {project.company}
                      </div>
                    )}

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 rounded-md text-xs ${
                            project.category === 'professional'
                              ? 'bg-purple-500/10 text-purple-400'
                              : 'bg-pink-500/10 text-pink-400'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.category === 'professional' ? (
                          <>
                            {project.websiteUrl && (
                              <Link
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F4C155] font-semibold text-sm hover:text-[#E85D4C] transition-colors"
                              >
                                Website
                              </Link>
                            )}
                            {project.liveUrl && (
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors"
                              >
                                App
                              </Link>
                            )}
                          </>
                        ) : (
                          <>
                            {project.liveUrl && (
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F4C155] font-semibold text-sm hover:text-[#E85D4C] transition-colors"
                              >
                                Live
                </Link>
                            )}
                            {project.githubUrl && (
                <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground font-semibold text-sm hover:text-foreground transition-colors"
                              >
                                Code
                </Link>
                            )}
                          </>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

export default function WorksPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-2xl mx-auto mb-4 animate-pulse"></div>
          <p className="text-muted-foreground">Loading works...</p>
        </div>
      </div>
    }>
      <WorksContent />
    </Suspense>
  );
} 