'use client';

import Link from 'next/link';
import { ExternalLink, Eye, ArrowLeft, Palette, Monitor, Figma, Users, Award, Layers } from 'lucide-react';

const designProjects = [
  {
    id: 1,
    title: "CreativeStudio Design System",
    description: "Complete design system with 200+ components, comprehensive style guide, and developer handoff tools for creative agencies.",
    technologies: ["Figma", "Design Tokens", "Storybook", "React", "Sass", "Adobe XD"],
    features: ["200+ Components", "Design Tokens", "Dark/Light Mode", "Documentation", "Developer Handoff", "Responsive Guidelines"],
    category: "Design System",
    client: "CreativeStudio Agency",
    deliverables: "Design System, Component Library, Style Guide",
    liveUrl: "https://creativestudio-ds.netlify.app",
    githubUrl: "https://github.com/shinjan/creativestudio-ds",
    status: "Live",
    year: "2023",
    duration: "6 months",
    team: "Design Lead"
  },
  {
    id: 2,
    title: "MedCare Healthcare Dashboard",
    description: "Comprehensive healthcare management dashboard for medical professionals with patient data visualization and appointment scheduling.",
    technologies: ["Figma", "Adobe XD", "Principle", "Zeplin", "InVision", "Maze"],
    features: ["Patient Management", "Data Visualization", "Responsive Design", "Accessibility", "Real-time Updates", "Multi-language"],
    category: "Dashboard Design",
    client: "MedCare Solutions",
    deliverables: "UI Design, Prototypes, User Testing",
    liveUrl: "https://medcare-dashboard.webflow.io",
    githubUrl: "",
    status: "Design Complete",
    year: "2023",
    duration: "3 months",
    team: "UI/UX Designer"
  },
  {
    id: 3,
    title: "EcoTrack Mobile App Design",
    description: "Mobile app design for environmental tracking platform with modern, eco-friendly interface and engaging user experience.",
    technologies: ["Figma", "Principle", "ProtoPie", "Sketch", "Adobe Illustrator"],
    features: ["Eco-friendly Design", "Gamification", "Progress Tracking", "Social Features", "Interactive Charts", "Onboarding Flow"],
    category: "Mobile App Design",
    client: "EcoTrack Inc.",
    deliverables: "Mobile App Design, Prototypes, Icons",
    liveUrl: "https://ecotrack-design.figma.com",
    githubUrl: "",
    status: "In Development",
    year: "2024",
    duration: "4 months",
    team: "Lead Designer"
  },
  {
    id: 4,
    title: "FinTech Banking Interface",
    description: "Modern banking interface design with focus on security, accessibility, and seamless user experience for digital banking.",
    technologies: ["Figma", "Adobe XD", "After Effects", "Principle", "Maze"],
    features: ["Security-first Design", "Accessible Interface", "Transaction Flow", "Biometric Integration", "Dark Mode", "Micro-interactions"],
    category: "Web App Design",
    client: "SecureBank Digital",
    deliverables: "Web App Design, User Flows, Animations",
    liveUrl: "https://securebank-ui.webflow.io",
    githubUrl: "",
    status: "Live",
    year: "2023",
    duration: "5 months",
    team: "Senior Designer"
  },
  {
    id: 5,
    title: "E-learning Platform Redesign",
    description: "Complete redesign of e-learning platform focusing on user engagement, course discovery, and learning progress visualization.",
    technologies: ["Figma", "Framer", "Lottie", "Adobe Illustrator", "Photoshop"],
    features: ["Course Discovery", "Progress Tracking", "Interactive Learning", "Video Player UI", "Community Features", "Responsive Design"],
    category: "Platform Redesign",
    client: "LearnHub Education",
    deliverables: "Complete Redesign, Prototypes, User Research",
    liveUrl: "https://learnhub-redesign.framer.website",
    githubUrl: "",
    status: "Live",
    year: "2023",
    duration: "4 months",
    team: "UX/UI Designer"
  }
];

const stats = [
  { label: 'Design Projects', value: '12+', icon: Palette },
  { label: 'Components Created', value: '500+', icon: Layers },
  { label: 'Happy Clients', value: '8+', icon: Users },
  { label: 'Design Awards', value: '3', icon: Award }
];

export default function UIDesignPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-pink-600 to-rose-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-bl from-violet-500 to-purple-400 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        {/* Design-themed Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-pink-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/5 w-24 h-24 bg-[#F4C155]/10 rotate-12 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 border border-violet-500/30 rounded-full animate-pulse"></div>
        
        {/* Design Tool Shapes */}
        <div className="absolute top-1/4 left-1/6 w-12 h-8 bg-pink-500/10 rounded"></div>
        <div className="absolute bottom-1/4 right-1/6 w-8 h-8 bg-violet-500/10 rounded-full rotate-12"></div>
        <div className="absolute top-3/4 left-1/4 w-6 h-16 bg-rose-500/10 rounded-full"></div>
        
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
              <Palette className="w-4 h-4 text-[#F4C155]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                UI/UX Design
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.75] tracking-tighter uppercase text-foreground mb-6">
              DESIGN WORKS
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 to-violet-400 rounded-full mx-auto mb-8"></div>

            {/* Description */}
            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-light mb-12">
              User-centered design solutions, design systems, and digital experiences that combine aesthetics with usability.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-violet-400/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-pink-500/50 transition-all">
                    <stat.icon className="w-8 h-8 text-pink-500" />
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
          <div className="grid gap-8 md:grid-cols-2">
            {designProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-pink-500/30 transition-all duration-500 hover:scale-[1.02] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              >
                {/* Project Visual */}
                <div className="aspect-[16/10] bg-gradient-to-br from-pink-500/20 to-violet-400/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-violet-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Palette className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-muted-foreground font-medium">Design Project</div>
                  </div>
                  
                  {/* Design Elements */}
                  <div className="absolute top-4 left-4 w-16 h-12 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rotate-45"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-12 bg-white/15 rounded-full"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 backdrop-blur-sm rounded-full text-xs font-bold uppercase border border-pink-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-bold uppercase ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : project.status === 'In Development'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-pink-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Client & Role */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Client</div>
                      <div className="font-semibold text-foreground text-sm">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Role</div>
                      <div className="font-semibold text-foreground text-sm">{project.team}</div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Design Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tool) => (
                        <span 
                          key={tool}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-muted-foreground rounded-full text-sm font-medium hover:border-pink-400 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    {project.features.length > 4 && (
                      <div className="mt-2 text-xs text-pink-400 font-medium">
                        +{project.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Deliverables</h4>
                    <p className="text-sm text-muted-foreground">{project.deliverables}</p>
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
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-400 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg flex-1 justify-center"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Design</span>
                    </Link>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-foreground font-bold rounded-full hover:border-pink-500 hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Site</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              DESIGN PROCESS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My approach to creating user-centered design solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                step: '01', 
                title: 'Research', 
                description: 'User interviews, competitor analysis, and market research to understand the problem space.',
                color: 'from-pink-500 to-rose-400' 
              },
              { 
                step: '02', 
                title: 'Ideation', 
                description: 'Brainstorming sessions, sketching, and exploring different design concepts and solutions.',
                color: 'from-violet-500 to-purple-400' 
              },
              { 
                step: '03', 
                title: 'Design', 
                description: 'Creating wireframes, mockups, and high-fidelity designs with attention to detail.',
                color: 'from-blue-500 to-cyan-400' 
              },
              { 
                step: '04', 
                title: 'Test & Iterate', 
                description: 'User testing, feedback collection, and iterative improvements to optimize the experience.',
                color: 'from-emerald-500 to-teal-400' 
              }
            ].map((process, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-black text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              DESIGN TOOLS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Software and tools I use to bring design ideas to life
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                category: 'Design', 
                tools: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Illustrator'], 
                color: 'from-pink-500 to-rose-400' 
              },
              { 
                category: 'Prototyping', 
                tools: ['Principle', 'ProtoPie', 'Framer', 'InVision', 'Marvel'], 
                color: 'from-violet-500 to-purple-400' 
              },
              { 
                category: 'User Testing', 
                tools: ['Maze', 'Hotjar', 'UserTesting', 'Lookback', 'Optimal Workshop'], 
                color: 'from-blue-500 to-cyan-400' 
              },
              { 
                category: 'Handoff', 
                tools: ['Zeplin', 'Avocode', 'Storybook', 'Abstract', 'GitHub'], 
                color: 'from-emerald-500 to-teal-400' 
              }
            ].map((toolset, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${toolset.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <Figma className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{toolset.category}</h3>
                <div className="space-y-2">
                  {toolset.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-[#E85D4C] rounded-full"></div>
                      <span>{tool}</span>
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