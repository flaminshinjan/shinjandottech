'use client';

import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, ArrowRight, Heart, Code, Coffee } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

const socialLinks = [
  {
    href: 'https://github.com/flaminshinjan',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/shinjanpatra/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/flaminshinjanp',
    icon: Twitter,
    label: 'X (Twitter)',
  },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Projects' },
  { href: '/blogs', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { href: '/works?category=professional#web', label: 'Web Development' },
  { href: '/works?category=professional#mobile', label: 'Mobile Apps' },
  { href: '/works?category=professional#design', label: 'UI/UX Design' },
  { href: '/works?category=professional#backend', label: 'Backend Systems' },
  { href: '/contact', label: 'Consulting' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    // Load Cal.com script with mobile-responsive configuration
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});
      
      // Responsive layout configuration
      const isMobile = window.innerWidth < 768;
      const layoutConfig = isMobile ? "column_view" : "month_view";
      
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {
          "layout": layoutConfig,
          "theme": "auto"
        },
        calLink: "shinjan-patra-3ioff2/30min",
      });
      
      Cal.ns["30min"]("ui", {
        "hideEventTypeDetails": false,
        "layout": layoutConfig,
        "styles": {
          "branding": {
            "brandColor": "#E85D4C"
          }
        }
      });
      
      // Handle resize events for responsive layout
      window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth < 768;
        const newLayoutConfig = newIsMobile ? "column_view" : "month_view";
        
        if ((isMobile && !newIsMobile) || (!isMobile && newIsMobile)) {
          // Re-initialize with new layout if screen size category changed
          Cal.ns["30min"]("ui", {
            "layout": newLayoutConfig
          });
        }
      });
    `;
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  return (
    <footer className="relative bg-background border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-16 w-80 h-80 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Cal.com Scheduling Section - Full Width */}
      <div className="py-8 md:py-16 border-b border-white/10 relative z-10">
        <div className="container mx-auto px-4 text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3 md:mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Schedule a free consultation to discuss your project.
          </p>
        </div>
        
        {/* Cal.com Embed - Full Width & Responsive */}
        <div className="w-full">
          <div className="bg-white/5 backdrop-blur-xl border-y border-white/10">
            <div 
              style={{
                width:'100%', 
                height:'500px',
                overflow:'hidden'
              }} 
              id="my-cal-inline"
              className="min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Main Footer Content */}
        <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Bio Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-foreground mb-3">
                Shinjan Patra
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-full mb-4"></div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Full-stack developer and designer passionate about creating digital experiences that matter. 
                Currently building fintech solutions at Indus and helping startups bring their visions to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-[#E85D4C]" />
                <span className="text-sm">Chennai, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-[#E85D4C]" />
                <Link href="mailto:shinjanp.patra@gmail.com" className="text-sm hover:text-[#E85D4C] transition-colors">
                  shinjanp.patra@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-4 h-4 text-[#E85D4C]" />
                <Link href="/contact" className="text-sm hover:text-[#E85D4C] transition-colors">
                  Schedule a call
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-[#E85D4C] hover:border-[#E85D4C]/30 hover:bg-[#E85D4C]/5 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-[#E85D4C] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-muted-foreground hover:text-[#E85D4C] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">Stay Updated</h4>
              <p className="text-muted-foreground text-sm">
                Get notified about new projects, blog posts, and industry insights.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#E85D4C]/50 focus:bg-white/10 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white rounded-xl font-semibold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Shinjan Patra. Made with</span>
              <Heart className="w-4 h-4 text-[#E85D4C] fill-current" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-[#F4C155]" />
              <span>in India</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-[#E85D4C] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#E85D4C] transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#E85D4C]" />
                                 <Link 
                  href="https://github.com/flaminshinjan/shinjandottech" 
                  target="_blank"
                  className="hover:text-[#E85D4C] transition-colors"
                >
                  View Source
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 