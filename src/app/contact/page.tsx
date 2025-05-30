import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Email</h2>
              <a
                href="mailto:hello@shinjan.tech"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                hello@shinjan.tech
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Phone</h2>
              <a
                href="tel:+1234567890"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Location</h2>
              <p className="text-gray-600 dark:text-gray-300">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out through any of the above channels. I typically respond within 24 hours.
            For professional connections, you can also find me on{' '}
            <a
              href="https://linkedin.com/in/shinjan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
} 