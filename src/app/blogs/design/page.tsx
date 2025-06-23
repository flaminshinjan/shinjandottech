'use client';

import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { Calendar, ArrowLeft, Clock, Tag, Star, Palette, Eye, Users, TrendingUp, Heart, Brush, Layers } from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/client";

const DESIGN_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && "design" in categories[]->slug.current
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt, 
  excerpt,
  coverImage,
  author,
  categories,
  tags,
  difficulty,
  readingTime,
  featured,
  views
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Mock data for demonstration - replace with actual Sanity data
const mockDesignPosts = [
  {
    _id: "1",
    title: "The Psychology of Color in Modern Web Design",
    slug: { current: "psychology-color-web-design" },
    publishedAt: "2024-01-15",
    excerpt: "Exploring how color theory and psychology can influence user behavior and create more engaging digital experiences.",
    difficulty: "Intermediate",
    readingTime: 8,
    tags: ["Color Theory", "Psychology", "Web Design", "UX"],
    featured: true,
    views: 3200
  },
  {
    _id: "2",
    title: "Designing for Accessibility: A Complete Guide",
    slug: { current: "designing-accessibility-complete-guide" },
    publishedAt: "2024-01-12",
    excerpt: "Comprehensive guide to creating inclusive designs that work for users with disabilities, following WCAG guidelines.",
    difficulty: "Advanced",
    readingTime: 15,
    tags: ["Accessibility", "WCAG", "Inclusive Design", "UX"],
    featured: true,
    views: 2800
  },
  {
    _id: "3",
    title: "Micro-interactions: Adding Delight to User Interfaces",
    slug: { current: "micro-interactions-user-interfaces" },
    publishedAt: "2024-01-08",
    excerpt: "How subtle animations and micro-interactions can enhance user experience and create memorable digital products.",
    difficulty: "Intermediate",
    readingTime: 10,
    tags: ["Micro-interactions", "Animation", "UI Design", "UX"],
    featured: false,
    views: 2100
  },
  {
    _id: "4",
    title: "Design Systems: Building Consistent User Experiences",
    slug: { current: "design-systems-consistent-experiences" },
    publishedAt: "2024-01-05",
    excerpt: "Creating and maintaining design systems that scale across teams and products while ensuring consistency.",
    difficulty: "Advanced",
    readingTime: 12,
    tags: ["Design Systems", "Consistency", "Scalability", "Team Collaboration"],
    featured: false,
    views: 1950
  },
  {
    _id: "5",
    title: "Mobile-First Design: Beyond Responsive Layouts",
    slug: { current: "mobile-first-design-responsive" },
    publishedAt: "2024-01-01",
    excerpt: "Strategies for creating mobile-first designs that prioritize performance and user experience on all devices.",
    difficulty: "Intermediate",
    readingTime: 9,
    tags: ["Mobile Design", "Responsive", "Performance", "UX"],
    featured: false,
    views: 1750
  },
  {
    _id: "6",
    title: "The Art of Minimalism in Digital Design",
    slug: { current: "art-minimalism-digital-design" },
    publishedAt: "2023-12-28",
    excerpt: "Understanding minimalist design principles and how to apply them effectively in modern digital interfaces.",
    difficulty: "Beginner",
    readingTime: 7,
    tags: ["Minimalism", "Clean Design", "White Space", "Visual Hierarchy"],
    featured: false,
    views: 1600
  }
];

const designStats = [
  { label: 'Design Articles', value: '20+', icon: Palette },
  { label: 'Design Tips', value: '100+', icon: Brush },
  { label: 'Avg Reading Time', value: '10 min', icon: Clock },
  { label: 'Total Views', value: '35K+', icon: Eye }
];

const designCategories = [
  { name: "UI Design", icon: Palette, count: 8, color: "from-pink-500 to-rose-400" },
  { name: "UX Research", icon: Users, count: 6, color: "from-purple-500 to-violet-400" },
  { name: "Color Theory", icon: Eye, count: 5, color: "from-orange-500 to-pink-400" },
  { name: "Typography", icon: TrendingUp, count: 7, color: "from-blue-500 to-purple-400" },
  { name: "Accessibility", icon: Heart, count: 4, color: "from-emerald-500 to-cyan-400" },
  { name: "Design Systems", icon: Layers, count: 9, color: "from-violet-500 to-purple-400" }
];

export default async function DesignBlogsPage() {
  // In a real app, you would fetch from Sanity
  // const posts = await client.fetch<SanityDocument[]>(DESIGN_POSTS_QUERY);
  const posts = mockDesignPosts;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-purple-600 to-violet-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-bl from-orange-500 to-pink-400 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        {/* Design-themed Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-pink-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/5 w-24 h-24 bg-purple-400/10 rotate-12 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 border border-rose-500/30 rotate-45 animate-pulse"></div>
        
        {/* Creative Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Blogs</span>
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <Brush className="w-4 h-4 text-pink-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Design Insights
              </span>
            </div>

            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.75] tracking-tighter uppercase text-foreground mb-6">
              DESIGN BLOG
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full mx-auto mb-8"></div>

            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-light mb-12">
              Creative insights, design trends, and UX/UI best practices for crafting exceptional digital experiences and beautiful interfaces.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {designStats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-400/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-pink-500/50 transition-all">
                    <stat.icon className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="text-2xl font-black text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Categories */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
              DESIGN TOPICS
            </h2>
            <p className="text-muted-foreground">Explore articles by design discipline</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {designCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{category.name}</h3>
                <div className="text-xs text-muted-foreground">{category.count} articles</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              FEATURED INSIGHTS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our most popular design articles and creative insights
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            {posts.filter(post => post.featured).map((post) => (
              <article 
                key={post._id} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-pink-500/20 to-rose-400/20 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">Design Article</div>
                  </div>
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase ${
                      post.difficulty === 'Advanced' ? 'bg-orange-500/80' :
                      post.difficulty === 'Intermediate' ? 'bg-purple-500/80' : 'bg-green-500/80'
                    }`}>
                      {post.difficulty}
                    </span>
                  </div>

                  {/* Views Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-bold">
                      {post.views?.toLocaleString()} views
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-pink-500 transition-colors leading-tight">
                    <Link href={`/blogs/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags?.slice(0, 4).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-pink-500/10 text-pink-500 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blogs/${post.slug.current}`}
                    className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-pink-400 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* All Design Articles */}
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-black text-foreground mb-4 uppercase tracking-tight">
              ALL DESIGN ARTICLES
            </h3>
            <p className="text-muted-foreground">Complete collection of design insights and tutorials</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.filter(post => !post.featured).map((post) => (
              <article 
                key={post._id} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-pink-500/20 to-rose-400/20 flex items-center justify-center relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-400 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 backdrop-blur-sm text-white rounded-lg text-xs font-bold ${
                      post.difficulty === 'Advanced' ? 'bg-orange-500/80' :
                      post.difficulty === 'Intermediate' ? 'bg-purple-500/80' : 'bg-green-500/80'
                    }`}>
                      {post.difficulty}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric"
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime}m</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-pink-500 transition-colors leading-tight">
                    <Link href={`/blogs/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags?.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-pink-500/10 text-pink-500 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blogs/${post.slug.current}`}
                      className="text-pink-500 font-semibold text-sm hover:text-pink-400 transition-colors"
                    >
                      Read More
                    </Link>
                    <span className="text-xs text-muted-foreground">
                      {post.views?.toLocaleString()} views
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 