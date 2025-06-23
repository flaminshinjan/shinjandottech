'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter, ChevronDown, Code, Eye, User, Mail, Zap, FileText, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from '@/components/common/ThemeToggle';

const navItems = [
  { 
    href: '/works', 
    label: 'WORKS',
    icon: Code,
    submenu: [
      { href: '/works', label: 'All Projects', icon: Eye, desc: 'Complete portfolio showcase' },
      { href: '/works?category=professional', label: 'Professional Work', icon: Code, desc: 'Company projects & clients' },
      { href: '/works?category=personal', label: 'Personal Projects', icon: Zap, desc: 'Side projects & experiments' }
    ]
  },
  { 
    href: '/about', 
    label: 'ABOUT',
    icon: User,
    submenu: [
      { href: '/about', label: 'My Story', icon: User, desc: 'Journey & experience' },
      { href: '/about/skills', label: 'Skills & Tech', icon: Zap, desc: 'Technologies I use' },
      { href: '/contact', label: 'Get In Touch', icon: Mail, desc: 'Let\'s collaborate' }
    ]
  },
  { 
    href: '/blogs', 
    label: 'BLOGS',
    icon: FileText,
    submenu: [
      { href: '/blogs', label: 'All Articles', icon: FileText, desc: 'Latest insights & tutorials' }
    ]
  }
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`} 
      ref={dropdownRef}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className={`relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 ${
          scrolled ? 'py-3 px-6' : 'py-4 px-8'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/shinjan.png"
                    alt="Shinjan Patra"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                    priority
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F4C155] rounded-full animate-pulse"></div>
              </div>
              <div className="hidden md:block">
                <div className="text-lg font-black text-foreground group-hover:text-[#E85D4C] transition-colors">
                  SHINJAN
                </div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                  Software Cook
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <button
                    onClick={() => handleNavItemClick(item.label)}
                    className="flex items-center gap-2 px-6 py-3 text-foreground font-bold text-sm tracking-wide uppercase hover:text-[#E85D4C] transition-all duration-300 group rounded-2xl hover:bg-white/5"
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === item.label ? 'rotate-180 text-[#F4C155]' : ''
                    }`} />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="https://github.com/flaminshinjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#E85D4C] hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shinjanpatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#F4C155] hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="https://x.com/flaminshinjanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#E85D4C] hover:scale-110 transition-all duration-300"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-foreground hover:border-[#E85D4C] transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Dropdown Menus */}
          {activeDropdown && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50">
              {navItems.find(item => item.label === activeDropdown)?.submenu && (
                <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] min-w-[320px]">
                  <div className="p-6">
                    <div className="grid gap-2">
                      {navItems.find(item => item.label === activeDropdown)?.submenu?.map((subItem) => (
                        <Link 
                          key={subItem.href}
                          href={subItem.href} 
                          className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#E85D4C]/10 hover:to-[#F4C155]/10 transition-all duration-300"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <subItem.icon className="w-5 h-5 text-[#E85D4C]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground group-hover:text-[#E85D4C] transition-colors text-sm">
                              {subItem.label}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                              {subItem.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-4">
              <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-4 mb-6">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-2xl text-foreground font-bold text-sm uppercase tracking-wide hover:bg-gradient-to-r hover:from-[#E85D4C]/10 hover:to-[#F4C155]/10 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5 text-[#E85D4C]" />
                        <span>{item.label}</span>
                      </Link>
                      
                      {/* Mobile Submenu */}
                      <div className="ml-8 mt-2 space-y-2">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-center gap-3 p-2 rounded-xl text-muted-foreground text-xs uppercase tracking-wide hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <subItem.icon className="w-3 h-3" />
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Social Links */}
                <div className="flex items-center gap-3 justify-center pt-4 border-t border-border/50">
                  <Link
                    href="https://github.com/flaminshinjan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#E85D4C] transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/shinjanpatra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#F4C155] transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://x.com/flaminshinjanp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#E85D4C] transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
} 