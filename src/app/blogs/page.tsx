import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { Calendar, ArrowRight, Clock, Search, Filter, TrendingUp, Eye, BookOpen } from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/client";
import { SnakeGame } from "@/components/SnakeGame";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
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

const options = { next: { revalidate: 30 } };

const difficultyColors = {
  beginner: 'bg-green-500',
  intermediate: 'bg-yellow-500',
  advanced: 'bg-red-500',
};

const categoryColors = {
  frontend: 'bg-blue-500',
  backend: 'bg-purple-500',
  fullstack: 'bg-indigo-500',
  devops: 'bg-orange-500',
  mobile: 'bg-pink-500',
  'ai-ml': 'bg-teal-500',
  web3: 'bg-cyan-500',
  tutorial: 'bg-emerald-500',
  tips: 'bg-amber-500',
  career: 'bg-rose-500',
  tools: 'bg-gray-500',
  opinion: 'bg-violet-500',
};

export default async function BlogsPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const featuredPosts = posts.filter(post => post.featured);
  // const regularPosts = posts.filter(post => !post.featured);

  // Calculate total stats
  const totalPosts = posts.length;
  const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);
  const totalReadingTime = posts.reduce((sum, post) => sum + (post.readingTime || 0), 0);

  return (
    <div className="bg-background relative overflow-hidden transition-colors duration-300">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-bl from-emerald-500 to-cyan-400 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-[#E85D4C]/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/5 w-24 h-24 bg-[#F4C155]/10 rotate-12 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 border border-purple-500/30 rounded-full animate-pulse"></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Hero Section with Snake Game */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Blog Content */}
            <div className="space-y-8">
              {/* Small Label */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <BookOpen className="w-4 h-4 text-[#F4C155]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Digital Insights
                </span>
              </div>

              {/* Hero Title */}
              <div className="space-y-4">
                <h1 className="font-black text-[clamp(3rem,8vw,8rem)] leading-[0.75] tracking-tighter uppercase text-foreground">
                  BLOG
                </h1>
                <div className="w-32 h-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-full"></div>
              </div>

              {/* Supporting Text */}
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground font-light">
                Cutting-edge insights, deep dives into technology, and stories that shape the digital landscape.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-foreground mb-1">{totalPosts}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Articles</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-foreground mb-1">{totalViews.toLocaleString()}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Views</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-foreground mb-1">{totalReadingTime}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Min Read</div>
                </div>
              </div>

              {/* Search Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-[#F4C155]" />
                    <h3 className="text-lg font-bold text-foreground">Find Content</h3>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#E85D4C] focus:border-transparent transition-all"
                    />
                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground cursor-pointer hover:text-[#F4C155] transition-colors" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Frontend', 'Backend', 'AI/ML', 'Tutorial'].map((tag) => (
                      <button
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground hover:border-[#F4C155] transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Compact Snake Game */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                {/* Game Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Interactive Break</span>
                  </div>
                  <h2 className="text-2xl font-black text-foreground mb-2">SNAKE GAME</h2>
                  <p className="text-sm text-muted-foreground">Take a break from reading! Use arrow keys or WASD.</p>
                </div>

                {/* Compact Game Layout */}
                <SnakeGame />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#E85D4C] rounded-lg rotate-12 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts - Asymmetric Grid */}
      {featuredPosts.length > 0 && (
        <section className="relative py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-16">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-[#E85D4C] rounded-full"></div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Featured</span>
                </div>
                <h2 className="text-[clamp(2rem,6vw,8rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground">
                  SPOTLIGHT
                </h2>
              </div>
              
              <div className="flex items-center gap-3 text-[#F4C155]">
                <TrendingUp className="w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-wide">Hot Topics</span>
              </div>
            </div>

            {/* Asymmetric Featured Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <article
                  key={post._id}
                  className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#E85D4C]/30 transition-all duration-500 hover:scale-[1.02] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ${
                    index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'
                  }`}
                >
                                     {/* Featured Image */}
                   <div className={`${index === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'} bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 flex items-center justify-center relative`}>
                     {post.coverImage && urlFor(post.coverImage) ? (
                       <Image
                         src={urlFor(post.coverImage)?.width(800).height(600).url() || ''}
                         alt={post.title}
                         fill
                         className="object-cover"
                       />
                     ) : (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-muted-foreground font-medium">Featured Article</div>
                      </div>
                    )}
                    
                    {/* Overlay Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {post.difficulty && (
                        <span className={`px-3 py-1 ${difficultyColors[post.difficulty as keyof typeof difficultyColors] || 'bg-gray-500'} text-white rounded-full text-xs font-bold uppercase`}>
                          {post.difficulty}
                        </span>
                      )}
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      {post.readingTime && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      )}
                      {post.views && (
                        <div className="flex items-center gap-2">
                          <Eye className="w-3 h-3" />
                          <span>{post.views.toLocaleString()} views</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-foreground group-hover:text-[#E85D4C] transition-colors leading-tight ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      <Link href={`/blogs/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-[#F4C155]/10 text-[#F4C155] rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More */}
                    <Link
                      href={`/blogs/${post.slug.current}`}
                      className="inline-flex items-center gap-2 text-[#E85D4C] font-semibold hover:text-[#F4C155] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
              ALL ARTICLES
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the complete collection of insights, tutorials, and deep dives into technology
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article 
                key={post._id} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#E85D4C]/30 transition-all duration-500 hover:scale-[1.02] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              >
                                 {/* Article Image */}
                 <div className="aspect-[16/10] bg-gradient-to-br from-[#E85D4C]/20 to-[#F4C155]/20 flex items-center justify-center relative">
                   {post.coverImage && urlFor(post.coverImage) ? (
                     <Image
                       src={urlFor(post.coverImage)?.width(600).height(400).url() || ''}
                       alt={post.title}
                       fill
                       className="object-cover"
                     />
                   ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-muted-foreground text-sm font-medium">Article</div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${categoryColors[post.categories[0] as keyof typeof categoryColors] || 'bg-gray-500'} text-white rounded-full text-xs font-bold uppercase`}>
                        {post.categories[0]}
                      </span>
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#E85D4C] text-white rounded-full text-xs font-bold uppercase">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    {post.readingTime && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readingTime}m</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#E85D4C] transition-colors leading-tight">
                    <Link href={`/blogs/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag: string, index: number) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-white/5 text-muted-foreground rounded text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <Link
                      href={`/blogs/${post.slug.current}`}
                      className="text-[#E85D4C] font-semibold text-sm hover:text-[#F4C155] transition-colors"
                    >
                      Read More
                    </Link>
                    {post.views && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Eye className="w-3 h-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {posts.length >= 12 && (
            <div className="text-center mt-16">
              <button className="px-8 py-4 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}