'use client';

import Link from "next/link";
import { Calendar, ArrowLeft, Clock, Star, Code, Cpu, Database, Zap, GitBranch, Terminal, Layers } from "lucide-react";


// Mock data for demonstration - replace with actual Sanity data
const mockTechPosts = [
  {
    _id: "1",
    title: "Building Scalable APIs with Node.js and GraphQL",
    slug: { current: "scalable-apis-nodejs-graphql" },
    publishedAt: "2024-01-15",
    excerpt: "Learn how to build high-performance, scalable APIs using Node.js and GraphQL with advanced patterns and best practices.",
    difficulty: "Advanced",
    readingTime: 12,
    tags: ["Node.js", "GraphQL", "API Design", "Performance"],
    featured: true,
    views: 2500
  },
  {
    _id: "2",
    title: "React Server Components: A Deep Dive",
    slug: { current: "react-server-components-deep-dive" },
    publishedAt: "2024-01-10",
    excerpt: "Exploring the architecture, benefits, and implementation details of React Server Components in modern applications.",
    difficulty: "Advanced",
    readingTime: 15,
    tags: ["React", "Next.js", "Server Components", "Architecture"],
    featured: true,
    views: 3200
  },
  {
    _id: "3",
    title: "Database Optimization Strategies for High-Traffic Apps",
    slug: { current: "database-optimization-strategies" },
    publishedAt: "2024-01-05",
    excerpt: "Advanced techniques for optimizing database performance, including indexing strategies, query optimization, and caching.",
    difficulty: "Expert",
    readingTime: 18,
    tags: ["PostgreSQL", "MongoDB", "Performance", "Optimization"],
    featured: false,
    views: 1800
  },
  {
    _id: "4",
    title: "Microservices Architecture with Docker and Kubernetes",
    slug: { current: "microservices-docker-kubernetes" },
    publishedAt: "2024-01-01",
    excerpt: "Complete guide to building and deploying microservices using containerization and orchestration technologies.",
    difficulty: "Advanced",
    readingTime: 20,
    tags: ["Docker", "Kubernetes", "Microservices", "DevOps"],
    featured: false,
    views: 2100
  },
  {
    _id: "5",
    title: "Advanced TypeScript Patterns for Large Applications",
    slug: { current: "advanced-typescript-patterns" },
    publishedAt: "2023-12-28",
    excerpt: "Exploring advanced TypeScript patterns, generics, and type system features for building maintainable large-scale applications.",
    difficulty: "Advanced",
    readingTime: 14,
    tags: ["TypeScript", "Patterns", "Architecture", "Best Practices"],
    featured: false,
    views: 1950
  },
  {
    _id: "6",
    title: "WebAssembly: The Future of Web Performance",
    slug: { current: "webassembly-web-performance" },
    publishedAt: "2023-12-25",
    excerpt: "Deep dive into WebAssembly, its use cases, performance benefits, and how to integrate it into modern web applications.",
    difficulty: "Expert",
    readingTime: 16,
    tags: ["WebAssembly", "Performance", "C++", "Rust"],
    featured: false,
    views: 1600
  }
];

const techStats = [
  { label: 'Tech Articles', value: '25+', icon: Code },
  { label: 'Code Examples', value: '100+', icon: Terminal },
  { label: 'Avg Reading Time', value: '12 min', icon: Clock },
  { label: 'Total Views', value: '50K+', icon: Star }
];

const techCategories = [
  { name: "Frontend", icon: Code, count: 8, color: "from-blue-500 to-cyan-400" },
  { name: "Backend", icon: Database, count: 12, color: "from-emerald-500 to-teal-400" },
  { name: "DevOps", icon: GitBranch, count: 6, color: "from-orange-500 to-red-400" },
  { name: "AI/ML", icon: Cpu, count: 4, color: "from-purple-500 to-pink-400" },
  { name: "Performance", icon: Zap, count: 7, color: "from-yellow-500 to-orange-400" },
  { name: "Architecture", icon: Layers, count: 9, color: "from-violet-500 to-purple-400" }
];

export default async function TechBlogsPage() {
  // In a real app, you would fetch from Sanity
  // const posts = await client.fetch<SanityDocument[]>(TECH_POSTS_QUERY);
  const posts = mockTechPosts;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-bl from-emerald-500 to-teal-400 rounded-full blur-3xl opacity-15"></div>
        </div>
        
        {/* Tech-themed Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border-2 border-blue-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/5 w-24 h-24 bg-cyan-400/10 rotate-12 animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-16 border border-purple-500/30 rounded-full animate-pulse"></div>
        
        {/* Code Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Blogs</span>
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Tech Deep Dives
              </span>
            </div>

            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.75] tracking-tighter uppercase text-foreground mb-6">
              TECH ARTICLES
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-8"></div>

            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-light mb-12">
              In-depth technical articles, tutorials, and insights into modern software development, architecture patterns, and emerging technologies.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {techStats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-md border border-border/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-blue-500/50 transition-all">
                    <stat.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-2xl font-black text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="relative py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
              TECH CATEGORIES
            </h2>
            <p className="text-muted-foreground">Browse articles by technology focus</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {techCategories.map((category, index) => (
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
              FEATURED ARTICLES
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our most popular and in-depth technical content
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            {posts.filter(post => post.featured).map((post) => (
              <article 
                key={post._id} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">Tech Article</div>
                  </div>
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase ${
                      post.difficulty === 'Expert' ? 'bg-red-500/80' :
                      post.difficulty === 'Advanced' ? 'bg-orange-500/80' : 'bg-blue-500/80'
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

                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-blue-500 transition-colors leading-tight">
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
                        className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blogs/${post.slug.current}`}
                    className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* All Tech Articles */}
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-black text-foreground mb-4 uppercase tracking-tight">
              ALL TECH ARTICLES
            </h3>
            <p className="text-muted-foreground">Complete collection of technical deep dives</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.filter(post => !post.featured).map((post) => (
              <article 
                key={post._id} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 backdrop-blur-sm text-white rounded-lg text-xs font-bold ${
                      post.difficulty === 'Expert' ? 'bg-red-500/80' :
                      post.difficulty === 'Advanced' ? 'bg-orange-500/80' : 'bg-blue-500/80'
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

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors leading-tight">
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
                        className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blogs/${post.slug.current}`}
                      className="text-blue-500 font-semibold text-sm hover:text-blue-400 transition-colors"
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