'use client';

import Link from 'next/link';
import { ArrowLeft, Code, Smartphone, Palette, Database, Cloud, Zap, Award, TrendingUp, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React.js", level: 95, experience: "3+ years" },
      { name: "Next.js", level: 90, experience: "2+ years" },
      { name: "TypeScript", level: 88, experience: "2+ years" },
      { name: "Vue.js", level: 85, experience: "2+ years" },
      { name: "Tailwind CSS", level: 92, experience: "2+ years" },
      { name: "JavaScript ES6+", level: 95, experience: "3+ years" }
    ]
  },
  {
    title: "Backend Development", 
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Node.js", level: 90, experience: "3+ years" },
      { name: "Python", level: 85, experience: "2+ years" },
      { name: "PostgreSQL", level: 88, experience: "2+ years" },
      { name: "MongoDB", level: 85, experience: "2+ years" },
      { name: "Express.js", level: 90, experience: "3+ years" },
      { name: "GraphQL", level: 80, experience: "1+ years" }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "React Native", level: 88, experience: "2+ years" },
      { name: "Flutter", level: 82, experience: "1+ years" },
      { name: "Expo", level: 85, experience: "2+ years" },
      { name: "iOS Development", level: 75, experience: "1+ years" },
      { name: "Android Development", level: 78, experience: "1+ years" },
      { name: "Ionic", level: 80, experience: "1+ years" }
    ]
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "from-pink-500 to-rose-400",
    skills: [
      { name: "Figma", level: 92, experience: "3+ years" },
      { name: "Adobe XD", level: 85, experience: "2+ years" },
      { name: "User Research", level: 80, experience: "2+ years" },
      { name: "Prototyping", level: 88, experience: "3+ years" },
      { name: "Design Systems", level: 90, experience: "2+ years" },
      { name: "Wireframing", level: 90, experience: "3+ years" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-red-400",
    skills: [
      { name: "AWS", level: 80, experience: "2+ years" },
      { name: "Vercel", level: 90, experience: "2+ years" },
      { name: "Docker", level: 78, experience: "1+ years" },
      { name: "Firebase", level: 85, experience: "2+ years" },
      { name: "Git/GitHub", level: 95, experience: "3+ years" },
      { name: "CI/CD", level: 75, experience: "1+ years" }
    ]
  },
  {
    title: "AI/ML & Emerging Tech",
    icon: Cpu,
    color: "from-violet-500 to-purple-400",
    skills: [
      { name: "OpenAI APIs", level: 85, experience: "1+ years" },
      { name: "LangChain", level: 80, experience: "1+ years" },
      { name: "TensorFlow", level: 75, experience: "1+ years" },
      { name: "Python ML", level: 78, experience: "1+ years" },
      { name: "Agent Development", level: 82, experience: "1+ years" },
      { name: "Prompt Engineering", level: 88, experience: "1+ years" }
    ]
  }
];

const stats = [
  { label: 'Technologies', value: '25+', icon: Code },
  { label: 'Years Experience', value: '3+', icon: Award },
  { label: 'Projects Built', value: '50+', icon: TrendingUp },
  { label: 'Skills Mastered', value: '30+', icon: Zap }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-blue-600 to-purple-500 rounded-full blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#E85D4C] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to About</span>
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <Zap className="w-4 h-4 text-[#F4C155]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Technical Expertise
              </span>
            </div>

            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.75] tracking-tighter uppercase text-foreground mb-6">
              SKILLS & TECH
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-full mx-auto mb-8"></div>

            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-light mb-12">
              A comprehensive overview of my technical skills, tools, and expertise across the full stack of modern development.
            </p>

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

      {/* Skills Categories */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              EXPERTISE AREAS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My technical proficiency across different domains of software development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground text-sm">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{skill.experience}</span>
                          <span className="text-xs font-bold text-[#E85D4C]">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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
