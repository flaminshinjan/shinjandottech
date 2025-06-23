'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Code, Palette, Rocket, ArrowRight, Star, Users, Coffee, Zap, Github, Linkedin, Twitter, Award, Target, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E85D4C] via-[#E85D4C] to-[#F4C155] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#F4C155]/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-10 w-8 h-8 bg-[#F4C155]/30 rounded-full animate-pulse"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 right-1/3 w-24 h-24 border-2 border-white/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 right-1/4 w-16 h-16 border-2 border-[#F4C155]/20 rotate-12 animate-bounce"></div>
        </div>
        
        <section className="relative z-10 pb-20">
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

                {/* Name with stagger animation */}
                <div className="space-y-2 mb-6">
                  <h1 className="font-['Impact'] text-white text-[6rem] md:text-[8rem] leading-[0.8] tracking-tight animate-slide-up">
                    SHINJAN
                  </h1>
                  <h1 className="font-['Impact'] text-white text-[6rem] md:text-[8rem] leading-[0.8] tracking-tight animate-slide-up-delay">
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

      {/* Featured Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#E85D4C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E85D4C]/20 transition-colors">
                <Users className="w-8 h-8 text-[#E85D4C]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#F4C155]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F4C155]/20 transition-colors">
                <Award className="w-8 h-8 text-[#F4C155]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600 text-sm">Awards Won</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#E85D4C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E85D4C]/20 transition-colors">
                <Coffee className="w-8 h-8 text-[#E85D4C]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Cups of Coffee</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#F4C155]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F4C155]/20 transition-colors">
                <Target className="w-8 h-8 text-[#F4C155]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#E85D4C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#F4C155]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I Do Best
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specializing in modern web technologies and creating exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-all duration-500 group hover:scale-105 hover:shadow-2xl border border-zinc-800 hover:border-[#E85D4C]/30">
              <div className="w-16 h-16 bg-[#E85D4C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E85D4C] transition-colors">Development</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Full-stack development with modern frameworks like React, Next.js, and Node.js. 
                Building scalable and performant applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#E85D4C]/10 text-[#E85D4C] rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-[#E85D4C]/10 text-[#E85D4C] rounded-full text-xs">Next.js</span>
                <span className="px-3 py-1 bg-[#E85D4C]/10 text-[#E85D4C] rounded-full text-xs">TypeScript</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-all duration-500 group hover:scale-105 hover:shadow-2xl border border-zinc-800 hover:border-[#F4C155]/30">
              <div className="w-16 h-16 bg-[#F4C155] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                <Palette className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F4C155] transition-colors">Design</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Creating beautiful and intuitive user interfaces with a focus on user experience 
                and modern design principles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs">Figma</span>
                <span className="px-3 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs">Adobe XD</span>
                <span className="px-3 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs">Tailwind</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-all duration-500 group hover:scale-105 hover:shadow-2xl border border-zinc-800 hover:border-gradient-to-r hover:border-[#E85D4C]/30">
              <div className="w-16 h-16 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-[#E85D4C] group-hover:to-[#F4C155] group-hover:bg-clip-text group-hover:text-transparent transition-all">Innovation</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Always exploring new technologies and approaches to solve complex problems 
                and deliver cutting-edge solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-[#E85D4C]/10 to-[#F4C155]/10 text-orange-400 rounded-full text-xs">AI/ML</span>
                <span className="px-3 py-1 bg-gradient-to-r from-[#E85D4C]/10 to-[#F4C155]/10 text-orange-400 rounded-full text-xs">Web3</span>
                <span className="px-3 py-1 bg-gradient-to-r from-[#E85D4C]/10 to-[#F4C155]/10 text-orange-400 rounded-full text-xs">Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Creative Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From concept to completion, here's how I bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#E85D4C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                <Lightbulb className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F4C155] rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ideation</h3>
              <p className="text-gray-600">Understanding your vision and brainstorming creative solutions</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F4C155] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                <Palette className="w-10 h-10 text-black" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E85D4C] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600">Creating wireframes and prototypes that bring concepts to life</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#E85D4C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                <Code className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F4C155] rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600">Building robust, scalable solutions with clean, efficient code</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F4C155] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                <Rocket className="w-10 h-10 text-black" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E85D4C] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch</h3>
              <p className="text-gray-600">Deploying your project and ensuring everything runs perfectly</p>
            </div>
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
            Let's collaborate and bring your ideas to life. I'm always excited to work on new projects and challenges.
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
