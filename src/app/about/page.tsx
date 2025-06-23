'use client';

import Link from 'next/link';
import Image from 'next/image';
import { User, MapPin, Calendar, Coffee, Rocket, Heart, Star, Award, ArrowRight, Zap, Code, Palette } from 'lucide-react';

const timeline = [
  {
    year: "2021",
    title: "Started Freelancing",
    description: "Began my journey as a freelance developer, taking on small projects and learning the business side of tech.",
    icon: Rocket,
    color: "from-emerald-500 to-teal-400"
  },
  {
    year: "2022",
    title: "First Major Project",
    description: "Completed my first large-scale web application for a sustainability startup, solidifying my passion for meaningful tech.",
    icon: Star,
    color: "from-blue-500 to-cyan-400"
  },
  {
    year: "2023",
    title: "Design System Expertise",
    description: "Developed comprehensive design systems for multiple clients, merging my technical skills with design thinking.",
    icon: Palette,
    color: "from-purple-500 to-pink-400"
  },
  {
    year: "2024",
    title: "AI Integration Focus",
    description: "Embraced AI/ML technologies, building intelligent applications with OpenAI APIs and modern AI frameworks.",
    icon: Zap,
    color: "from-orange-500 to-red-400"
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
  { label: "Coffee Consumed", value: "∞ Cups", icon: Coffee },
  { label: "Projects Completed", value: "50+ Projects", icon: Code }
];

export default function AboutPage() {
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
                  Hi, I&apos;m <span className="text-[#E85D4C] font-semibold">Shinjan Patra</span>, a passionate full-stack developer and designer who believes technology should make the world a better place. My journey began with curiosity about how things work and evolved into a mission to create digital experiences that truly matter.
                </p>
                <p>
                  What sets me apart is my unique blend of technical expertise and design thinking. I don&apos;t just write code—I craft solutions that are both functionally robust and visually stunning. Whether it&apos;s building a complex web application or designing an intuitive user interface, I approach every project with the same level of passion and attention to detail.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community discussions. I believe in continuous learning and staying ahead of the curve in this ever-evolving field.
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

          <div className="grid gap-8 md:grid-cols-2">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-foreground">{item.year}</span>
                    <div className="w-8 h-0.5 bg-[#E85D4C]"></div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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