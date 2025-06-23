'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Code, Palette, Rocket, ArrowRight, Star, Users, Coffee, Zap, Github, Linkedin, Twitter, Award, Target, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#E85D4C]/10 to-[#F4C155]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-bl from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-gradient-to-tr from-green-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute bottom-40 right-1/5 w-16 h-16 bg-[#F4C155]/10 rounded-full animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E85D4C] via-[#E85D4C] to-[#F4C155] relative overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-32 right-1/4 w-16 h-16 border-2 border-[#F4C155]/20 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              {/* Left Content - Text */}
              <div className="z-10">
                {/* Top Label with animation */}
                <div className="flex items-center gap-2 mb-4 animate-fade-in">
                  <div className="w-2 h-2 bg-[#F4C155] rounded-full animate-pulse"></div>
                  <h2 className="text-[#F4C155] text-xs tracking-[0.3em] font-medium uppercase">
                    Software Cook
                  </h2>
                </div>

                {/* Extreme Typography - Design System */}
                <div className="space-y-2 mb-6">
                  <h1 className="text-white text-[clamp(3rem,8vw,10rem)] font-black leading-[0.85] tracking-tighter animate-slide-up uppercase">
                    SHINJAN
                  </h1>
                  <h1 className="text-white text-[clamp(3rem,8vw,10rem)] font-black leading-[0.85] tracking-tighter animate-slide-up-delay uppercase">
                    PATRA
                  </h1>
                </div>

                {/* Description with fade-in */}
                <p className="text-white/90 text-lg font-light leading-relaxed mb-8 max-w-lg animate-fade-in-delay">
                  Crafting digital experiences with a perfect blend of creativity and technical expertise. 
                  Turning ideas into reality, one line of code at a time.
                </p>

                {/* Enhanced Stats with animations */}
                <div className="flex items-center gap-8 mb-8">
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold text-white group-hover:text-[#F4C155] transition-colors">50+</div>
                    <div className="text-[#F4C155] text-sm">Projects</div>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold text-white group-hover:text-[#F4C155] transition-colors">3+</div>
                    <div className="text-[#F4C155] text-sm">Years Exp</div>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold text-white group-hover:text-[#F4C155] transition-colors">100%</div>
                    <div className="text-[#F4C155] text-sm">Passion</div>
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/works"
                    className="inline-flex items-center bg-[#F4C155] text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-white transition-all duration-300 group hover:scale-105 hover:shadow-lg"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-[#E85D4C] transition-all duration-300 hover:scale-105"
                  >
                    About Me
                  </Link>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-8">
                  <span className="text-white/70 text-sm">Follow me:</span>
                  <div className="flex gap-3">
                    <Link href="https://github.com" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                      <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    </Link>
                    <Link href="https://linkedin.com" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                      <Linkedin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    </Link>
                    <Link href="https://twitter.com" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
                      <Twitter className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Content - Enhanced 3D Illustration */}
              <div className="relative lg:-mr-20 perspective-2000">
                <div 
                  className="group transition-all duration-700 ease-out transform-gpu hover:scale-105"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src="/shinjan.png"
                    alt="Shinjan Patra 3D Illustration"
                    width={1000}
                    height={1000}
                    className="w-full h-auto select-none transition-transform duration-700 ease-out group-hover:translate-y-[-2%] group-hover:translate-x-[2%]"
                    priority
                    draggable="false"
                  />
                  
                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-10 -left-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-20 -right-5 w-12 h-12 bg-[#F4C155] rounded-full flex items-center justify-center animate-float-delay">
                    <Palette className="w-6 h-6 text-black" />
                  </div>
                  <div className="absolute top-1/3 -right-8 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center animate-bounce">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-1/3 -left-5 w-8 h-8 bg-[#F4C155]/80 rounded-full flex items-center justify-center animate-ping">
                    <Star className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Featured Stats Section - Glassmorphism */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-8 lg:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-110 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-[#E85D4C]/50 transition-all">
                  <Users className="w-10 h-10 text-[#E85D4C]" />
                </div>
                <div className="text-[clamp(2rem,4vw,4rem)] font-black text-foreground mb-2 leading-none">25+</div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Happy People</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F4C155]/20 to-[#E85D4C]/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-[#F4C155]/50 transition-all">
                  <Award className="w-10 h-10 text-[#F4C155]" />
                </div>
                <div className="text-[clamp(2rem,4vw,4rem)] font-black text-foreground mb-2 leading-none">5+</div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Awards Won</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-purple-500/50 transition-all">
                  <Coffee className="w-10 h-10 text-purple-500" />
                </div>
                <div className="text-[clamp(2rem,4vw,4rem)] font-black text-foreground mb-2 leading-none">500+</div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Cups of Coffee</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-green-500/50 transition-all">
                  <Target className="w-10 h-10 text-green-500" />
                </div>
                <div className="text-[clamp(2rem,4vw,4rem)] font-black text-foreground mb-2 leading-none">100%</div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section - Modern Bold Design */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Extreme Typography Header */}
          <div className="text-center mb-20">
            <h2 className="text-[clamp(3rem,8vw,12rem)] font-black leading-[0.85] tracking-tighter uppercase text-foreground mb-6">
              WHAT I DO
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Transforming ideas into digital reality through innovative development, stunning design, and cutting-edge technology solutions. 
              Every project is crafted with precision, passion, and a relentless pursuit of excellence.
            </p>
            
            {/* Floating achievement badges */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="bg-background/20 backdrop-blur-md border border-border/30 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E85D4C] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">3+ Years Experience</span>
              </div>
              <div className="bg-background/20 backdrop-blur-md border border-border/30 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F4C155] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">50+ Projects Completed</span>
              </div>
              <div className="bg-background/20 backdrop-blur-md border border-border/30 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">100% Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Full-Stack Development - Reduced Size */}
            <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-6 lg:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:border-[#E85D4C]/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:rotate-3 flex-shrink-0">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#E85D4C] transition-colors uppercase tracking-tight">
                    Full-Stack Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    Building complete web applications with modern frameworks. From responsive frontends to robust APIs.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-[#E85D4C]/10 text-[#E85D4C] rounded-full text-xs font-medium">React</span>
                    <span className="px-2 py-1 bg-[#E85D4C]/10 text-[#E85D4C] rounded-full text-xs font-medium">Next.js</span>
                    <span className="px-2 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs font-medium">Node.js</span>
                    <span className="px-2 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs font-medium">Python</span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    Frontend • Backend • Database • DevOps
                  </div>
                </div>
              </div>
            </div>

            {/* AI/ML & Agent Development */}
            <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-6 lg:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:rotate-3 flex-shrink-0">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors uppercase tracking-tight">
                    AI/ML & Agent Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    Creating intelligent systems and autonomous agents using cutting-edge AI technologies and machine learning models.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs font-medium">TensorFlow</span>
                    <span className="px-2 py-1 bg-pink-500/10 text-pink-500 rounded-full text-xs font-medium">PyTorch</span>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-medium">OpenAI</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-medium">LangChain</span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    Machine Learning • NLP • Computer Vision • Automation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* UI/UX Design Card */}
            <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:border-[#F4C155]/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4C155] to-[#E85D4C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#F4C155] transition-colors uppercase tracking-tight">
                UI/UX Design
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Crafting intuitive user experiences with pixel-perfect designs that captivate users and drive engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs">Figma</span>
                <span className="px-2 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs">Adobe XD</span>
                <span className="px-2 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs">Prototyping</span>
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                User Research • Wireframing • Visual Design
              </div>
            </div>

            {/* Mobile Development Card */}
            <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors uppercase tracking-tight">
                Mobile Development
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Building native and cross-platform mobile applications with seamless performance and engaging user interfaces.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">React Native</span>
                <span className="px-2 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-xs">Flutter</span>
                <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">Swift</span>
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                iOS • Android • Cross-Platform • PWA
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:border-emerald-500/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald-500 transition-colors uppercase tracking-tight">
                Cloud & DevOps
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Implementing scalable cloud infrastructure and automated deployment pipelines for reliable application delivery.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs">AWS</span>
                <span className="px-2 py-1 bg-teal-500/10 text-teal-500 rounded-full text-xs">Docker</span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">Kubernetes</span>
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                Deployment • Scaling • Monitoring • Security
              </div>
            </div>
          </div>



          {/* Additional Services Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Performance Optimization */}
            <div className="bg-background/20 backdrop-blur-md border border-border/20 rounded-2xl p-6 group hover:bg-background/30 hover:border-green-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-tight">Performance</h4>
              <p className="text-muted-foreground text-sm mb-3">Optimizing applications for lightning-fast loading speeds and seamless user experiences.</p>
              <div className="text-xs text-green-500 font-medium uppercase tracking-wide">Speed • Efficiency • Optimization</div>
            </div>

            {/* SEO & Analytics */}
            <div className="bg-background/20 backdrop-blur-md border border-border/20 rounded-2xl p-6 group hover:bg-background/30 hover:border-orange-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-tight">SEO & Analytics</h4>
              <p className="text-muted-foreground text-sm mb-3">Boosting visibility and tracking performance with advanced SEO strategies and analytics.</p>
              <div className="text-xs text-orange-500 font-medium uppercase tracking-wide">Visibility • Tracking • Growth</div>
            </div>

            {/* Consultation */}
            <div className="bg-background/20 backdrop-blur-md border border-border/20 rounded-2xl p-6 group hover:bg-background/30 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-tight">Consultation</h4>
              <p className="text-muted-foreground text-sm mb-3">Strategic guidance for digital transformation and technology adoption decisions.</p>
              <div className="text-xs text-purple-500 font-medium uppercase tracking-wide">Strategy • Planning • Implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(3rem,6vw,8rem)] font-black leading-[0.85] tracking-tighter uppercase text-foreground mb-6">
              CLIENT LOVE
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take my word for it - hear what my clients have to say about working together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F4C155] text-[#F4C155]" />
                ))}
              </div>
                             <p className="text-muted-foreground leading-relaxed mb-6 italic">
                 &quot;Shinjan delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise are outstanding.&quot;
               </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">John Smith</div>
                  <div className="text-sm text-muted-foreground">CEO, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F4C155] text-[#F4C155]" />
                ))}
              </div>
                             <p className="text-muted-foreground leading-relaxed mb-6 italic">
                 &quot;Working with Shinjan was a game-changer for our business. The mobile app he built increased our user engagement by 300%.&quot;
               </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Maria Johnson</div>
                  <div className="text-sm text-muted-foreground">Founder, StartupX</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F4C155] text-[#F4C155]" />
                ))}
              </div>
                             <p className="text-muted-foreground leading-relaxed mb-6 italic">
                 &quot;The AI solution Shinjan developed revolutionized our workflow. Professional, efficient, and incredibly talented developer.&quot;
               </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DL</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">David Lee</div>
                  <div className="text-sm text-muted-foreground">CTO, InnovateLab</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(3rem,6vw,8rem)] font-black leading-[0.85] tracking-tighter uppercase text-foreground mb-6">
              MY PROCESS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to completion, here&apos;s how I transform your ideas into digital reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                <Lightbulb className="w-12 h-12 text-white" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-background border-2 border-[#E85D4C] rounded-full flex items-center justify-center">
                  <span className="text-[#E85D4C] text-sm font-bold">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Discovery</h3>
              <p className="text-muted-foreground leading-relaxed">Understanding your vision, goals, and requirements through detailed consultation</p>
              
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#E85D4C]/30 to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="text-center group relative">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                <Palette className="w-12 h-12 text-white" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-background border-2 border-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-purple-500 text-sm font-bold">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">Creating wireframes, prototypes, and technical architecture plans</p>
              
              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="text-center group relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                <Code className="w-12 h-12 text-white" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-background border-2 border-green-500 rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-sm font-bold">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Development</h3>
              <p className="text-muted-foreground leading-relaxed">Building robust, scalable solutions with cutting-edge technologies</p>
              
              <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-500/30 to-transparent"></div>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-[#F4C155] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                <Rocket className="w-12 h-12 text-white" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-background border-2 border-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 text-sm font-bold">4</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">Launch</h3>
              <p className="text-muted-foreground leading-relaxed">Deploying, testing, and optimizing for peak performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(3rem,6vw,8rem)] font-black leading-[0.85] tracking-tighter uppercase text-foreground mb-6">
              TECH STACK
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leveraging the latest technologies to build future-ready solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Tech items */}
            {[
              { name: 'React', color: 'from-blue-400 to-blue-600' },
              { name: 'Next.js', color: 'from-gray-700 to-black' },
              { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
              { name: 'Python', color: 'from-yellow-400 to-blue-500' },
              { name: 'Node.js', color: 'from-green-500 to-green-700' },
              { name: 'PostgreSQL', color: 'from-blue-600 to-blue-800' },
              { name: 'MongoDB', color: 'from-green-400 to-green-600' },
              { name: 'AWS', color: 'from-orange-400 to-orange-600' },
              { name: 'Docker', color: 'from-blue-500 to-blue-700' },
              { name: 'TensorFlow', color: 'from-orange-500 to-orange-700' },
              { name: 'Figma', color: 'from-purple-500 to-pink-500' },
              { name: 'Tailwind', color: 'from-teal-400 to-teal-600' }
            ].map((tech, index) => (
              <div key={index} className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 hover:border-[#E85D4C]/30">
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <div className="w-6 h-6 bg-white/20 rounded-md"></div>
                </div>
                <h4 className="font-semibold text-foreground text-sm">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(3rem,6vw,8rem)] font-black leading-[0.85] tracking-tighter uppercase text-foreground mb-6">
              FAQ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Common questions about working together
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                                 question: "What&apos;s your development process like?",
                answer: "I follow a structured 4-step process: Discovery, Strategy, Development, and Launch. Each phase includes regular communication and feedback to ensure we're aligned throughout the project."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! I offer post-launch support packages including bug fixes, updates, performance monitoring, and feature enhancements to keep your project running smoothly."
              },
              {
                question: "Can you work with my existing team?",
                answer: "Absolutely! I collaborate seamlessly with in-house teams, designers, and other developers. I'm experienced in agile methodologies and modern development workflows."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-background/30 backdrop-blur-xl border border-border/30 rounded-2xl p-8 group hover:border-[#E85D4C]/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[#E85D4C] transition-colors">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-black/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Start Something Amazing?
          </h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your ideas to life. I&apos;m always excited to work on new projects and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-all duration-300 group hover:scale-105 hover:shadow-xl"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/works"
              className="inline-flex items-center border-2 border-black text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.1s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 3s ease-in-out infinite 1.5s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
