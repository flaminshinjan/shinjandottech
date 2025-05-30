import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

const navItems = [
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
  { href: '/awards', label: 'AWARDS' },
];

export function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="bg-[#E85D4C] border border-[#8B3A2F] rounded-2xl py-2 px-6">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="relative w-[100px]">
              <Image
                src="/shinjan.png"
                alt="Shinjan Patra Logo"
                width={100}
                height={40}
                className="w-auto h-auto"
                priority
              />
            </Link>

            {/* Main Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white text-sm font-medium tracking-wide hover:text-[#F4C155] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Social Links - Right Aligned */}
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/shinjan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F4C155] text-[#E85D4C] hover:bg-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://linkedin.com/in/shinjan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F4C155] text-[#E85D4C] hover:bg-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://twitter.com/shinjan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F4C155] text-[#E85D4C] hover:bg-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 