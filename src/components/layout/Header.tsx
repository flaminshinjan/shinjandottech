'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter, ChevronDown, Code, Smartphone, Palette, Eye, User, Mail, Zap, FileText, Cpu, Brush } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
  { href: '/blogs', label: 'BLOGS' },
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavItemClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 bg-[#E85D4C] transition-opacity duration-300 ${
        scrolled ? 'opacity-80' : 'opacity-100'
      }`} 
      ref={dropdownRef}
    >
      <div className="container mx-auto px-4">
        <div className="border border-[#8B3A2F]/30 rounded-xl py-2 px-4 my-2 bg-[#E85D4C]/90 backdrop-blur-sm">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="relative w-[60px] flex-shrink-0">
              <Image
                src="/shinjan.png"
                alt="Shinjan Patra Logo"
                width={60}
                height={24}
                className="w-auto h-auto"
                priority
              />
            </Link>

            {/* Main Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-6">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <button
                    onClick={() => handleNavItemClick(item.label)}
                    className="flex items-center gap-1 text-white text-xs font-medium tracking-wide hover:text-[#F4C155] transition-colors py-1"
                  >
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              ))}
            </nav>

            {/* Social Links - Right Aligned */}
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/shinjan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F4C155] text-[#E85D4C] hover:bg-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3 h-3" />
              </Link>
              <Link
                href="https://linkedin.com/in/shinjan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F4C155] text-[#E85D4C] hover:bg-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3" />
              </Link>
              <Link
                href="https://twitter.com/shinjan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F4C155] text-[#E85D4C] hover:bg-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Compact Dropdown Menus */}
        {activeDropdown && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1">
            {activeDropdown === 'WORKS' && (
              <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl overflow-hidden shadow-xl min-w-[280px]">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/works/web-development" className="group flex items-start gap-2 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200">
                      <Code className="w-4 h-4 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">Web Development</h4>
                        <p className="text-[10px] text-gray-600">React, Next.js, Node</p>
                      </div>
                    </Link>
                    <Link href="/works/mobile-apps" className="group flex items-start gap-2 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all duration-200">
                      <Smartphone className="w-4 h-4 text-green-600 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">Mobile Apps</h4>
                        <p className="text-[10px] text-gray-600">iOS & Android</p>
                      </div>
                    </Link>
                    <Link href="/works/ui-design" className="group flex items-start gap-2 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all duration-200">
                      <Palette className="w-4 h-4 text-purple-600 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">UI/UX Design</h4>
                        <p className="text-[10px] text-gray-600">Figma, Adobe XD</p>
                      </div>
                    </Link>
                    <Link href="/works" className="group flex items-start gap-2 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200">
                      <Eye className="w-4 h-4 text-orange-600 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">View All</h4>
                        <p className="text-[10px] text-gray-600">Complete portfolio</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'ABOUT' && (
              <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl overflow-hidden shadow-xl min-w-[240px]">
                <div className="p-4">
                  <div className="space-y-2">
                    <Link href="/about" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 transition-all duration-200">
                      <User className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">My Story</h4>
                        <p className="text-[10px] text-gray-600">Journey & experience</p>
                      </div>
                    </Link>
                    <Link href="/about/skills" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 transition-all duration-200">
                      <Zap className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">Skills & Tech</h4>
                        <p className="text-[10px] text-gray-600">Technologies I use</p>
                      </div>
                    </Link>
                    <Link href="/contact" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-rose-50 hover:to-rose-100 transition-all duration-200">
                      <Mail className="w-4 h-4 text-rose-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">Get In Touch</h4>
                        <p className="text-[10px] text-gray-600">Let&apos;s collaborate</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'BLOGS' && (
              <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl overflow-hidden shadow-xl min-w-[260px]">
                <div className="p-4">
                  <div className="space-y-2">
                    <Link href="/blogs" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 transition-all duration-200">
                      <FileText className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">All Articles</h4>
                        <p className="text-[10px] text-gray-600">Latest insights & tutorials</p>
                      </div>
                    </Link>
                    <Link href="/blogs/tech" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200">
                      <Cpu className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">Tech Deep Dives</h4>
                        <p className="text-[10px] text-gray-600">Code & development</p>
                      </div>
                    </Link>
                    <Link href="/blogs/design" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-violet-50 hover:to-violet-100 transition-all duration-200">
                      <Brush className="w-4 h-4 text-violet-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xs">Design Philosophy</h4>
                        <p className="text-[10px] text-gray-600">UI/UX thoughts</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
} 