'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, MessageCircle, Calendar, Coffee, Clock, Globe } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Best for project inquiries and business matters",
    value: "hello@shinjan.tech",
    href: "mailto:hello@shinjan.tech",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "For urgent matters and quick discussions",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Chat about tech, projects, or just say hi",
    value: "shinjan#1234",
    href: "https://discord.com/users/shinjan",
    color: "from-purple-500 to-violet-400"
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a 30-minute consultation",
    value: "calendly.com/shinjan",
    href: "https://calendly.com/shinjan",
    color: "from-orange-500 to-red-400"
  }
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    username: "@shinjan",
    href: "https://github.com/shinjan",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    username: "in/shinjan",
    href: "https://linkedin.com/in/shinjan",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    name: "Twitter",
    username: "@shinjan_dev",
    href: "https://twitter.com/shinjan_dev",
    color: "hover:text-sky-400"
  }
];

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM IST" },
  { day: "Sunday", hours: "Available for urgent matters" }
];

const responseStats = [
  { label: "Average Response", value: "< 2 Hours", icon: Clock },
  { label: "Time Zone", value: "IST (UTC+5:30)", icon: Globe },
  { label: "Languages", value: "English, Hindi", icon: MessageCircle },
  { label: "Coffee Meetings", value: "Always Welcome", icon: Coffee }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-blue-600 to-purple-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-bl from-emerald-500 to-cyan-400 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-[#E85D4C]/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/5 w-24 h-24 bg-[#F4C155]/10 rotate-12 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 border border-purple-500/30 rounded-full animate-pulse"></div>
        
        {/* Contact Elements */}
        <div className="absolute top-1/4 left-1/6 text-blue-400/20 text-xl">@</div>
        <div className="absolute bottom-1/4 right-1/6 text-emerald-400/20 text-xl">📧</div>
        <div className="absolute top-3/4 left-1/3 text-purple-400/20 text-xl">💬</div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            {/* Small Label */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <MessageCircle className="w-4 h-4 text-[#F4C155]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Get In Touch
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.75] tracking-tighter uppercase text-foreground mb-6">
              LET&apos;S CONNECT
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-full mx-auto mb-8"></div>

            {/* Description */}
            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-light mb-12">
              Ready to bring your ideas to life? I&apos;m always excited to discuss new projects, creative collaborations, and innovative solutions.
            </p>

            {/* Response Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {responseStats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-[#E85D4C]/50 transition-all">
                    <stat.icon className="w-8 h-8 text-[#E85D4C]" />
                  </div>
                  <div className="text-sm font-black text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              REACH OUT
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your preferred way to connect. I&apos;m responsive across all channels.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-6 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-[#E85D4C]/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#E85D4C] transition-colors">{method.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{method.description}</p>
                  <div className="text-foreground font-semibold group-hover:text-[#F4C155] transition-colors">{method.value}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              SEND MESSAGE
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Prefer a direct message? Fill out the form below and I&apos;ll get back to you soon.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:border-[#E85D4C] focus:outline-none transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:border-[#E85D4C] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:border-[#E85D4C] focus:outline-none transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder-muted-foreground focus:border-[#E85D4C] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links & Working Hours */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 uppercase tracking-wide">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#E85D4C]/30 transition-all duration-300 group ${social.color}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.username}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 uppercase tracking-wide">Availability</h3>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                    <span className="font-semibold text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-[#E85D4C]/10 to-[#F4C155]/10 border border-[#E85D4C]/20 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#E85D4C]" />
                  <span className="font-bold text-foreground">Based in Kolkata, India</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Open to remote work and international collaborations. Available for meetings across different time zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
} 