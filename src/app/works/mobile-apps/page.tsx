'use client';

import Link from 'next/link';
import { ExternalLink, Github, ArrowLeft, Smartphone, Download, Users, Star, PlayCircle } from 'lucide-react';

const mobileProjects = [
  {
    id: 1,
    title: "FinanceFlow - Personal Finance",
    description: "Personal finance management app with AI-powered insights, expense tracking, and budget optimization features.",
    technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "Expo", "Firebase"],
    features: ["AI Insights", "Expense Tracking", "Budget Planning", "Real-time Sync", "Biometric Auth", "Dark Mode"],
    platform: "iOS & Android",
    downloads: "10K+",
    rating: "4.8",
    liveUrl: "https://apps.apple.com/app/financeflow",
    githubUrl: "https://github.com/shinjan/financeflow",
    status: "Live",
    year: "2024",
    complexity: "Advanced",
    duration: "4 months"
  },
  {
    id: 2,
    title: "TaskFlow - Team Collaboration",
    description: "Team collaboration and project management app with real-time updates, file sharing, and progress tracking.",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions", "FCM", "SQLite"],
    features: ["Real-time Collaboration", "File Sharing", "Progress Tracking", "Offline Mode", "Push Notifications", "Team Chat"],
    platform: "Android",
    downloads: "5K+",
    rating: "4.6",
    liveUrl: "https://play.google.com/store/apps/details?id=com.taskflow",
    githubUrl: "https://github.com/shinjan/taskflow-mobile",
    status: "Live",
    year: "2023",
    complexity: "Advanced",
    duration: "5 months"
  },
  {
    id: 3,
    title: "FitTracker - Health & Fitness",
    description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
    technologies: ["React Native", "Redux", "HealthKit", "Google Fit", "Chart.js", "AWS"],
    features: ["Workout Plans", "Nutrition Tracking", "Progress Analytics", "Social Feed", "Wearable Sync", "Goal Setting"],
    platform: "iOS & Android",
    downloads: "25K+",
    rating: "4.9",
    liveUrl: "https://fittracker-app.com",
    githubUrl: "https://github.com/shinjan/fittracker",
    status: "Live",
    year: "2023",
    complexity: "Advanced",
    duration: "6 months"
  },
  {
    id: 4,
    title: "StudyMate - Learning Assistant",
    description: "Educational app for students with flashcards, study plans, and progress tracking with AI recommendations.",
    technologies: ["Ionic", "Angular", "Capacitor", "SQLite", "ML Kit", "Cordova"],
    features: ["Smart Flashcards", "Study Plans", "Progress Tracking", "AI Recommendations", "Offline Study", "Spaced Repetition"],
    platform: "iOS & Android",
    downloads: "8K+",
    rating: "4.7",
    liveUrl: "https://studymate-app.com",
    githubUrl: "https://github.com/shinjan/studymate",
    status: "Live",
    year: "2023",
    complexity: "Intermediate",
    duration: "3 months"
  }
];

const stats = [
  { label: 'Mobile Apps', value: '8+', icon: Smartphone },
  { label: 'Total Downloads', value: '50K+', icon: Download },
  { label: 'Avg Rating', value: '4.7★', icon: Star },
  { label: 'Active Users', value: '15K+', icon: Users }
];

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-bl from-green-500 to-emerald-400 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        {/* Mobile-themed Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-purple-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/5 w-24 h-24 bg-[#F4C155]/10 rotate-12 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 border border-pink-500/30 rounded-full animate-pulse"></div>
        
        {/* Mobile Phone Shapes */}
        <div className="absolute top-1/4 left-1/6 w-8 h-16 bg-purple-500/10 rounded-lg"></div>
        <div className="absolute bottom-1/4 right-1/6 w-6 h-12 bg-pink-500/10 rounded-md rotate-12"></div>
        
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
              <Smartphone className="w-4 h-4 text-[#F4C155]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Mobile Development
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.75] tracking-tighter uppercase text-foreground mb-6">
              MOBILE APPS
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mx-auto mb-8"></div>

            {/* Description */}
            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-light mb-12">
              Native and cross-platform mobile applications built with React Native, Flutter, and modern mobile development frameworks.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-400/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-purple-500/50 transition-all">
                    <stat.icon className="w-8 h-8 text-purple-500" />
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
            {mobileProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              >
                {/* Project Visual */}
                <div className="aspect-[16/10] bg-gradient-to-br from-purple-500/20 to-pink-400/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-muted-foreground font-medium">Mobile Application</div>
                  </div>
                  
                  {/* Mobile UI Elements */}
                  <div className="absolute top-4 left-4 w-12 h-20 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm"></div>
                  <div className="absolute top-4 right-4 w-10 h-16 bg-white/10 border border-white/20 rounded-md backdrop-blur-sm"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-white/20 rounded-full"></div>
                  
                  {/* Platform Badge */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 backdrop-blur-sm rounded-full text-xs font-bold uppercase border border-purple-500/30">
                      {project.platform}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 backdrop-blur-sm rounded-full text-xs font-bold">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{project.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-sm font-bold text-foreground mb-1">{project.downloads}</div>
                      <div className="text-xs text-muted-foreground">Downloads</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-muted-foreground rounded-full text-sm font-medium hover:border-purple-400 transition-colors"
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
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    {project.features.length > 4 && (
                      <div className="mt-2 text-xs text-purple-400 font-medium">
                        +{project.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Year</div>
                      <div className="font-semibold text-foreground">{project.year}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold text-foreground">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Complexity</div>
                      <div className={`font-semibold ${
                        project.complexity === 'Advanced' ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                        {project.complexity}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg flex-1 justify-center"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Download</span>
                    </Link>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-foreground font-bold rounded-full hover:border-purple-500 hover:scale-105 transition-all duration-300"
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
              Mobile development frameworks and tools I use to build amazing apps
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                category: 'Frameworks', 
                techs: ['React Native', 'Flutter', 'Ionic', 'Expo', 'Capacitor'], 
                color: 'from-purple-500 to-pink-400' 
              },
              { 
                category: 'Languages', 
                techs: ['JavaScript', 'TypeScript', 'Dart', 'Swift', 'Kotlin'], 
                color: 'from-blue-500 to-cyan-400' 
              },
              { 
                category: 'Backend', 
                techs: ['Firebase', 'Node.js', 'MongoDB', 'GraphQL', 'REST APIs'], 
                color: 'from-emerald-500 to-teal-400' 
              },
              { 
                category: 'Tools', 
                techs: ['Xcode', 'Android Studio', 'Flipper', 'Detox', 'CodePush'], 
                color: 'from-orange-500 to-red-400' 
              }
            ].map((stack, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${stack.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <Smartphone className="w-6 h-6 text-white" />
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