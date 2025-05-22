import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://github.com/shinjan',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/shinjan',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/shinjan',
    icon: Twitter,
    label: 'Twitter',
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Shinjan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 