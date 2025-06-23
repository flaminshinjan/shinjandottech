'use client';

import Link from 'next/link';
import Image from 'next/image';
import { User, MapPin, Calendar, Coffee, Rocket, Heart, Star, Award, ArrowRight, Code, Briefcase, Smartphone, TestTube, Target, Lightbulb, Globe, Users, Brain, TrendingUp, Database, Layers, Shield } from 'lucide-react';

const timeline = [
  {
    year: "2025",
    period: "Jan - Present",
    title: "Founding Software Engineer",
    company: "Indus",
    location: "Auckland, New Zealand • Remote",
    description: "Building the coolest fintech product ever, making investing possible for Kiwis and Aussies in Indian markets using Flutter and modern tech stack.",
    icon: Rocket,
    color: "from-orange-500 to-red-400"
  },
  {
    year: "2025",
    period: "Jan - Feb",
    title: "Backend Engineer",
    company: "museLIVE Inc.",
    location: "San Francisco Bay Area • Remote",
    description: "Built scalable backends and helped create mind activities for mental health wellness using Go, Flutter, and PostgreSQL.",
    icon: Heart,
    color: "from-pink-500 to-rose-400"
  },
  {
    year: "2023-2025",
    period: "Nov 2023 - Jan 2025",
    title: "Software Development Engineer",
    company: "Ionio",
    location: "Delaware, United States • Remote",
    description: "Designed UI for AI-based Shopping and Productivity Applications 30% faster. Integrated CC Avenue Payment Gateway and developed App Clips & Instant Apps for RetailGPT.",
    icon: Code,
    color: "from-purple-500 to-pink-400"
  },
  {
    year: "2023",
    period: "Jun - Oct",
    title: "SDE Intern",
    company: "Swift Money",
    location: "Pune, Maharashtra, India • Remote",
    description: "Designed and developed a comprehensive finance advisor mobile application focusing on user interface design and mobile app development.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-400"
  },
  {
    year: "2023",
    period: "Mar - May",
    title: "iOS Development Intern",
    company: "TechRange",
    location: "Bengaluru, Karnataka, India • Hybrid",
    description: "Started my professional journey testing iOS applications using XCTest Framework, learning concepts of unit testing and application reliability.",
    icon: TestTube,
    color: "from-emerald-500 to-teal-400"
  }
];

const values = [
  {
    title: "Innovation First",
    description: "I believe in pushing boundaries and exploring new technologies to create cutting-edge solutions.",
    icon: Rocket,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "User-Centered Design",
    description: "Every project starts with understanding the user's needs and creating experiences that truly matter.",
    icon: Heart,
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Quality & Performance",
    description: "I'm committed to writing clean, efficient code that scales and performs exceptionally well.",
    icon: Award,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and I stay ahead by constantly learning and adapting to new trends.",
    icon: Star,
    color: "from-purple-500 to-violet-400"
  }
];

const personalFacts = [
  { label: "Based in", value: "Kolkata, India", icon: MapPin },
  { label: "Experience", value: "3+ Years", icon: Calendar },
  { label: "Global Teams", value: "4 Countries", icon: Globe },
  { label: "Current Role", value: "Founding Engineer", icon: Rocket }
];

const achievements = [
  {
    title: "30% Performance Boost",
    description: "Improved UI design speed by 30% for AI-based applications at Ionio",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "15% Payment Efficiency",
    description: "Increased payment efficiency by 15% through CC Avenue Gateway integration",
    icon: Target,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "1000+ Daily Requests",
    description: "Built backend systems handling over 1,000 daily API requests with OTPLess auth",
    icon: Database,
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Cross-Platform Expert",
    description: "Developed native App Clips (iOS) and Instant Apps (Android) for enhanced UX",
    icon: Smartphone,
    color: "from-orange-500 to-red-400"
  }
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "Flutter", "SwiftUI", "TypeScript", "Tailwind CSS"],
    icon: Layers,
    color: "from-blue-500 to-cyan-400"
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Go", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
    icon: Database,
    color: "from-emerald-500 to-teal-400"
  },
  {
    category: "Mobile",
    technologies: ["Flutter", "Swift", "Kotlin", "React Native", "Firebase", "App Store"],
    icon: Smartphone,
    color: "from-purple-500 to-pink-400"
  },
  {
    category: "Tools & Cloud",
    technologies: ["Git", "Docker", "AWS", "Figma", "Xcode", "Android Studio"],
    icon: Shield,
    color: "from-orange-500 to-red-400"
  }
];

const philosophy = [
  {
    title: "Human-Centered Design",
    description: "Technology should solve real problems and improve people's lives, not complicate them.",
    icon: Users,
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Innovation Through Simplicity",
    description: "The best solutions are often the simplest ones. Complexity is the enemy of usability.",
    icon: Lightbulb,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Global Impact, Local Touch",
    description: "Building products that can scale globally while understanding local market needs.",
    icon: Globe,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly. Staying curious and adaptable is key to long-term success.",
    icon: Brain,
    color: "from-purple-500 to-violet-400"
  }
];

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Small Label */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <User className="w-4 h-4 text-[#F4C155]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  About Me
                </span>
              </div>

              {/* Hero Title */}
              <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground">
                MY STORY
              </h1>
              <div className="w-24 h-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-full"></div>

              {/* Description */}
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Hi, I&apos;m <span className="text-[#E85D4C] font-semibold">Shinjan Patra</span>, a passionate full-stack developer and founding software engineer who transforms ideas into reality. Currently building the future of fintech at <span className="text-[#F4C155] font-semibold">Indus</span>, making investing accessible for Kiwis and Aussies in Indian markets.
                </p>
                <p>
                  My superpower? Bridging the gap between complex technical challenges and intuitive user experiences. From <span className="text-[#E85D4C] font-semibold">handling 1000+ daily API requests</span> to <span className="text-[#E85D4C] font-semibold">improving UI performance by 30%</span>, I don&apos;t just write code—I engineer solutions that scale and make a real impact.
                </p>
                <p>
                  I&apos;ve had the privilege of working with teams across <span className="text-[#F4C155] font-semibold">4 countries</span>—from mental health wellness apps in San Francisco to AI-powered shopping platforms in Delaware. Each experience has shaped my global perspective on technology and human-centered design.
                </p>
                <p>
                  Beyond the screen, I&apos;m a coffee enthusiast ☕, quick learner who picks up new tech stacks in weeks, and someone who believes that the best solutions come from understanding both the code and the people who use it.
                </p>
              </div>

              {/* Personal Facts */}
              <div className="grid grid-cols-2 gap-4">
                {personalFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 rounded-xl flex items-center justify-center">
                      <fact.icon className="w-5 h-5 text-[#E85D4C]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{fact.label}</div>
                      <div className="font-semibold text-foreground">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about/skills"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
                >
                  <span>View My Skills</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white/5 border-2 border-white/10 text-foreground px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:border-[#E85D4C] hover:scale-105 transition-all"
                >
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative group">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group-hover:border-[#E85D4C]/30 transition-all duration-500">
                  <Image
                    src="/photo.jpg"
                    alt="Shinjan Patra - Full Stack Developer & Designer"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#F4C155] rounded-lg rotate-12 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              MY JOURNEY
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones that shaped my career as a developer and designer
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative flex items-start gap-6 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 group"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-12 top-20 w-0.5 h-16 bg-gradient-to-b from-[#E85D4C] to-[#F4C155] opacity-30"></div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 relative z-10`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-foreground">{item.year}</span>
                    <div className="w-8 h-0.5 bg-[#E85D4C]"></div>
                    <span className="text-sm font-semibold text-[#F4C155] uppercase tracking-wide">{item.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-[#E85D4C]" />
                    <span className="text-[#E85D4C] font-semibold">{item.company}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              KEY ACHIEVEMENTS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Measurable impact and results from my professional journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 group hover:scale-105"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{achievement.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              TECH STACK
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to build amazing digital experiences
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((stack, index) => (
              <div 
                key={index}
                className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <stack.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-muted-foreground hover:text-[#E85D4C] hover:border-[#E85D4C]/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              MY PHILOSOPHY
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Core beliefs that drive my approach to technology and design
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {philosophy.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              FUN FACTS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Some interesting tidbits about me beyond the code
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-8 bg-gradient-to-br from-[#E85D4C]/10 to-[#F4C155]/10 backdrop-blur-xl border border-white/10 rounded-3xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Coffee Enthusiast</h4>
              <p className="text-muted-foreground">I believe the best code is written with good coffee. Currently exploring different brewing methods!</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-3xl">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Quick Learner</h4>
              <p className="text-muted-foreground">I love diving into new technologies. Picked up Flutter and Go in just a few weeks for different projects!</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-500/10 to-teal-400/10 backdrop-blur-xl border border-white/10 rounded-3xl">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">Global Mindset</h4>
              <p className="text-muted-foreground">Working remotely with teams across 4 countries has taught me the value of cultural diversity in tech.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              MY VALUES
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide my work and shape every project I undertake
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
                Let&apos;s Create Something Amazing
              </h3>
              <p className="text-white/90 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                I&apos;m always excited to work on new projects and help bring innovative ideas to life. Whether you have a specific vision or need help defining one, let&apos;s discuss how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/works"
                  className="inline-flex items-center gap-3 bg-white text-[#E85D4C] px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-black/20 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:bg-white/10 transition-all"
                >
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
} 