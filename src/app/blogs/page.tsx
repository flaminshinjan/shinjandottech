import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { Calendar, ArrowRight, Clock, Tag, Star, Search, Filter, TrendingUp, Eye, BookOpen, Zap, Layers } from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/client";

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
  const regularPosts = posts.filter(post => !post.featured);

  // Calculate total stats
  const totalPosts = posts.length;
  const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);
  const totalReadingTime = posts.reduce((sum, post) => sum + (post.readingTime || 0), 0);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
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

      {/* Hero Section - Extreme Typography Contrast */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
            {/* Left Side - Extreme Typography */}
            <div className="lg:col-span-7 space-y-8">
              {/* Small Label */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <BookOpen className="w-4 h-4 text-[#F4C155]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Digital Insights
                </span>
              </div>

              {/* Hero Title - Extreme Scale */}
              <div className="space-y-4">
                <h1 className="font-black text-[clamp(4rem,12vw,16rem)] leading-[0.75] tracking-tighter uppercase text-foreground">
                  BLOG
                </h1>
                <div className="w-32 h-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-full"></div>
              </div>

              {/* Supporting Text */}
              <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-2xl font-light">
                Cutting-edge insights, deep dives into technology, and stories that shape the digital landscape.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 max-w-lg">
                <div className="text-center">
                  <div className="text-3xl font-black text-foreground mb-1">{totalPosts}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-foreground mb-1">{totalViews.toLocaleString()}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-foreground mb-1">{totalReadingTime}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Min Read</div>
                </div>
              </div>
            </div>

            {/* Right Side - Floating Search Card */}
            <div className="lg:col-span-5 lg:col-start-9">
              <div className="relative">
                {/* Glassmorphism Search Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Search className="w-6 h-6 text-[#F4C155]" />
                      <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">Find Content</h3>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#E85D4C] focus:border-transparent transition-all"
                      />
                      <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground cursor-pointer hover:text-[#F4C155] transition-colors" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Frontend', 'Backend', 'AI/ML', 'Tutorial'].map((tag) => (
                        <button
                          key={tag}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground hover:border-[#F4C155] transition-all"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#E85D4C] rounded-lg rotate-12 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts - Asymmetric Grid */}
      {featuredPosts.length > 0 && (
        <section className="relative py-20">
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
              {featuredPosts.slice(0, 2).map((post, index) => {
                const coverImageUrl = post.coverImage
                  ? urlFor(post.coverImage)?.width(1200).quality(90).url()
                  : null;

                return (
                  <article 
                    key={post._id} 
                    className={`group ${index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'} ${index === 1 ? 'lg:row-span-2' : ''}`}
                  >
                    <Link href={`/blogs/${post.slug.current}`} className="block">
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#E85D4C]/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                        {/* Cover Image */}
                        {coverImageUrl && (
                          <div className="relative overflow-hidden">
                            <Image
                              src={coverImageUrl}
                              alt={post.coverImage?.alt || post.title}
                              width={800}
                              height={600}
                              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            
                            {/* Floating Star Badge */}
                            <div className="absolute top-6 left-6">
                              <div className="flex items-center gap-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-full px-4 py-2 shadow-lg">
                                <Star className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-bold uppercase tracking-wide">Featured</span>
                              </div>
                            </div>

                            {/* Views Counter */}
                            {post.views && (
                              <div className="absolute top-6 right-6">
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                                  <Eye className="w-4 h-4 text-white" />
                                  <span className="text-white text-sm font-bold">{post.views}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                        
                        <div className="p-8 lg:p-12">
                          {/* Categories */}
                          <div className="flex items-center gap-3 mb-6 flex-wrap">
                            {post.categories?.slice(0, 2).map((category: string) => (
                              <span
                                key={category}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide text-white transition-all hover:scale-105 ${
                                  categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500'
                                }`}
                              >
                                {category}
                              </span>
                            ))}
                            {post.difficulty && (
                              <span
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide text-white transition-all hover:scale-105 ${
                                  difficultyColors[post.difficulty as keyof typeof difficultyColors]
                                }`}
                              >
                                {post.difficulty}
                              </span>
                            )}
                          </div>
                          
                          {/* Title with Extreme Scale */}
                          <h3 className={`font-black leading-[0.9] tracking-tight text-foreground mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#E85D4C] group-hover:to-[#F4C155] group-hover:bg-clip-text transition-all duration-300 ${
                            index === 0 ? 'text-[clamp(1.5rem,4vw,4rem)]' : 'text-[clamp(1.25rem,3vw,2.5rem)]'
                          }`}>
                            {post.title}
                          </h3>
                          
                          {/* Excerpt */}
                          {post.excerpt && (
                            <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-light line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                          
                          {/* Meta Info */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={post.publishedAt} className="text-sm font-medium">
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </time>
                              </div>
                              
                              {post.readingTime && (
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-sm font-medium">{post.readingTime} min</span>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-3 text-[#F4C155] group-hover:gap-4 transition-all">
                              <span className="font-bold uppercase tracking-wide text-sm">Read</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
            </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts - Floating Cards Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {regularPosts.length > 0 ? (
            <>
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
                  <Layers className="w-4 h-4 text-[#F4C155]" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Latest</span>
                </div>
                
                <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
                  ARTICLES
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                  Deep dives into technology, innovative solutions, and insights that push boundaries.
                </p>
              </div>
              
              {/* Floating Cards Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post, index) => {
                  const coverImageUrl = post.coverImage
                    ? urlFor(post.coverImage)?.width(800).quality(90).url()
                    : null;

                  return (
                    <article 
                      key={post._id} 
                      className="group relative"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Link href={`/blogs/${post.slug.current}`} className="block">
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#E85D4C]/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.05] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_50px_100px_-20px_rgba(232,93,76,0.3)]">
                          {/* Cover Image */}
                          {coverImageUrl && (
                            <div className="relative overflow-hidden">
                              <Image
                                src={coverImageUrl}
                                alt={post.coverImage?.alt || post.title}
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              
                              {/* Post Number */}
                              <div className="absolute top-4 left-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-2xl flex items-center justify-center shadow-lg">
                                  <span className="text-white font-black text-sm">
                                    {String(index + 1).padStart(2, '0')}
                                  </span>
                                </div>
                              </div>

                              {/* Views */}
                              {post.views && (
                                <div className="absolute top-4 right-4">
                                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                                    <Eye className="w-3 h-3 text-white" />
                                    <span className="text-white text-xs font-bold">{post.views}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          
                          <div className="p-6 lg:p-8">
                            {/* Categories */}
                            {post.categories && post.categories.length > 0 && (
                              <div className="flex items-center gap-2 mb-4 flex-wrap">
                                {post.categories.slice(0, 2).map((category: string) => (
                                  <span
                                    key={category}
                                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white transition-all hover:scale-105 ${
                                      categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500'
                                    }`}
                                  >
                                    {category}
                                  </span>
                                ))}
                                {post.difficulty && (
                                  <span
                                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white transition-all hover:scale-105 ${
                                      difficultyColors[post.difficulty as keyof typeof difficultyColors]
                                    }`}
                                  >
                                    {post.difficulty}
                                  </span>
                                )}
                              </div>
                            )}
                            
                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl font-black leading-tight text-foreground mb-4 group-hover:text-[#F4C155] transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            
                            {/* Excerpt */}
                            {post.excerpt && (
                              <p className="text-muted-foreground mb-6 leading-relaxed text-sm font-light line-clamp-3">
                                {post.excerpt}
                              </p>
                            )}

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                              <div className="flex items-center gap-2 mb-6 flex-wrap">
                                <Tag className="w-3 h-3 text-muted-foreground" />
                                <div className="flex gap-2 flex-wrap">
                                  {post.tags.slice(0, 3).map((tag: string) => (
                                    <span key={tag} className="text-xs text-muted-foreground hover:text-[#F4C155] transition-colors cursor-pointer font-medium">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {/* Meta Info */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                              <div className="flex items-center gap-4 text-muted-foreground text-xs">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <time dateTime={post.publishedAt} className="font-medium">
                                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric'
                                    })}
                                  </time>
                                </div>
                                
                                {post.readingTime && (
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span className="font-medium">{post.readingTime}m</span>
                                  </div>
                                )}
                              </div>
                              
                              <div className="flex items-center gap-2 text-[#F4C155] group-hover:gap-3 transition-all">
                                <span className="text-xs font-bold uppercase tracking-wide">Read</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 max-w-2xl mx-auto shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <div className="w-24 h-24 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-black text-foreground mb-6 uppercase tracking-tight">Coming Soon</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light mb-8">
                  Incredible content is being crafted. Get ready for deep technical insights and innovative solutions.
                </p>
                <div className="flex items-center justify-center gap-3 text-[#F4C155]">
                  <Zap className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wide text-sm">Stay Tuned</span>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#E85D4C] rounded-xl rotate-12 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section - Extreme Contrast */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E85D4C] via-[#F4C155] to-[#E85D4C]"></div>
        
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-black/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg animate-float"></div>
          <div className="absolute top-20 right-1/4 w-16 h-16 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
          <div className="space-y-8">
            {/* Small Label */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 rounded-full">
              <Star className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Newsletter</span>
            </div>
            
            {/* Extreme Typography */}
            <h2 className="text-[clamp(3rem,8vw,12rem)] font-black leading-[0.7] tracking-tighter uppercase text-white">
              STAY
              <br />
              UPDATED
            </h2>
            
            <p className="text-white/90 text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
              Get exclusive insights, early access to cutting-edge content, and join a community of digital innovators.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex flex-col lg:flex-row gap-4 max-w-2xl mx-auto mt-12">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-8 py-6 rounded-2xl border-2 border-white/20 outline-none text-black placeholder:text-black/60 bg-white/95 backdrop-blur-sm focus:bg-white focus:scale-[1.02] transition-all text-lg font-medium"
              />
              <button className="bg-black text-white px-12 py-6 rounded-2xl font-bold uppercase tracking-wide hover:bg-white/10 hover:text-white hover:scale-[1.02] transition-all duration-300 shadow-xl border-2 border-black hover:border-white/30">
                Subscribe
              </button>
            </div>
            
            <p className="text-white/70 text-sm font-medium">
              No spam. Unsubscribe anytime. Privacy respected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}