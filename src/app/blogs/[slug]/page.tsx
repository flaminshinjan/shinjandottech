import React from 'react';
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, Share2, Bookmark, ArrowLeft, Twitter, Linkedin, Github, Mail, ArrowRight, Star, User } from 'lucide-react';
import Link from 'next/link';
import { CodeBlock } from '@/components/CodeBlock';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  updatedAt,
  body,
  excerpt,
  coverImage,
  author,
  categories,
  tags,
  difficulty,
  readingTime,
  featured,
  seo,
  relatedPosts[]->{
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt
  }
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

// Custom components for PortableText with modern design
const components = {
  block: {
    h1: ({children}: {children?: React.ReactNode}) => (
      <h1 className="text-[clamp(2rem,6vw,5rem)] font-black leading-[0.9] tracking-tight text-foreground mb-8 mt-12">{children}</h1>
    ),
    h2: ({children}: {children?: React.ReactNode}) => (
      <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-black leading-[0.9] tracking-tight text-foreground mb-6 mt-10">{children}</h2>
    ),
    h3: ({children}: {children?: React.ReactNode}) => (
      <h3 className="text-[clamp(1.25rem,3vw,2rem)] font-bold text-foreground mb-4 mt-8">{children}</h3>
    ),
    h4: ({children}: {children?: React.ReactNode}) => (
      <h4 className="text-xl font-bold text-foreground mb-3 mt-6">{children}</h4>
    ),
    normal: ({children}: {children?: React.ReactNode}) => (
      <p className="text-muted-foreground mb-6 leading-relaxed text-lg font-light">{children}</p>
    ),
    blockquote: ({children}: {children?: React.ReactNode}) => (
      <blockquote className="relative bg-white/5 backdrop-blur-md border-l-4 border-[#F4C155] rounded-r-2xl p-8 my-8 italic">
        <div className="absolute top-4 left-4 w-2 h-2 bg-[#E85D4C] rounded-full"></div>
        <div className="text-muted-foreground text-lg font-light">{children}</div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: {children?: React.ReactNode}) => (
      <ul className="space-y-3 mb-6 ml-8">
        {children}
      </ul>
    ),
    number: ({children}: {children?: React.ReactNode}) => (
      <ol className="space-y-3 mb-6 ml-8">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({children}: {children?: React.ReactNode}) => (
      <li className="flex items-start gap-3">
        <div className="w-2 h-2 bg-[#F4C155] rounded-full mt-3 flex-shrink-0"></div>
        <span className="text-muted-foreground text-lg font-light">{children}</span>
      </li>
    ),
    number: ({children}: {children?: React.ReactNode}) => (
      <li className="text-muted-foreground text-lg font-light">{children}</li>
    ),
  },
  marks: {
    strong: ({children}: {children?: React.ReactNode}) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({children}: {children?: React.ReactNode}) => (
      <em className="italic text-[#F4C155] font-medium">{children}</em>
    ),
    code: ({children}: {children?: React.ReactNode}) => (
      <code className="bg-white/10 border border-white/20 text-[#F4C155] px-3 py-1 rounded-lg text-sm font-mono font-semibold">
        {children}
      </code>
    ),
    link: ({value, children}: {value?: {href?: string}, children?: React.ReactNode}) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F4C155] hover:text-[#E85D4C] underline underline-offset-4 transition-colors font-medium"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({value}: {value: {alt?: string, caption?: string} & SanityImageSource}) => {
      const imageUrl = urlFor(value)?.quality(90).url();
      return imageUrl ? (
        <div className="my-12 group">
          <div className="bg-background/30 backdrop-blur-md border border-border/30 rounded-3xl p-6 hover:border-[#E85D4C]/30 transition-all duration-500">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={imageUrl}
                alt={value.alt || "Blog image"}
                width={800}
                height={600}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </div>
            {value.caption && (
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                {value.caption}
              </p>
            )}
          </div>
        </div>
      ) : null;
    },
    codeBlock: ({value}: {value: {filename?: string, code: string, language?: string}}) => (
      <CodeBlock value={value} />
    ),
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: resolvedParams.slug },
    options
  );

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage)?.width(1400).quality(95).url()
    : null;

  return (
    <div className="bg-background relative overflow-hidden transition-colors duration-300">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 left-16 w-80 h-80 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 left-1/4 w-24 h-24 border border-[#E85D4C]/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-1/5 w-16 h-16 bg-[#F4C155]/10 rounded-full animate-pulse"></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back Navigation */}
          <div className="mb-12">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center group-hover:border-[#F4C155] transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="font-medium">Back to Articles</span>
            </Link>
          </div>

          {/* Side by Side Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Image */}
            <div className="relative group">
              {coverImageUrl && (
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:border-[#E85D4C]/30 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image
                      src={coverImageUrl}
                      alt={post.coverImage?.alt || post.title}
                      width={1400}
                      height={1050}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              )}
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#E85D4C] rounded-xl rotate-12 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse opacity-60"></div>
            </div>

            {/* Right Column - Title and Meta */}
            <div className="space-y-6">
              {/* Categories and Meta */}
              <div className="flex items-center gap-3 flex-wrap">
                {post.featured && (
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white px-4 py-2 rounded-full shadow-lg">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wide">Featured</span>
                  </div>
                )}
                {post.categories?.map((category: string) => (
                  <span
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide text-white ${
                      categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500'
                    }`}
                  >
                    {category}
                  </span>
                ))}
                {post.difficulty && (
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide text-white ${
                      difficultyColors[post.difficulty as keyof typeof difficultyColors]
                    }`}
                  >
                    {post.difficulty}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[0.9] tracking-tight">
                {post.title}
              </h1>
              
              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#E85D4C]" />
                  <time dateTime={post.publishedAt} className="font-medium">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                {post.readingTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F4C155]" />
                    <span className="font-medium">{post.readingTime} min read</span>
                  </div>
                )}

                {post.author?.name && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">by {post.author.name}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E85D4C] to-[#F4C155] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <Bookmark className="w-4 h-4" />
                  <span>Save Article</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-foreground font-bold rounded-full hover:border-[#E85D4C] hover:scale-105 transition-all duration-300">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-white/5 backdrop-blur-md border border-white/10 text-muted-foreground rounded-full hover:border-[#F4C155] transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      {post.author && (
        <section className="relative py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <div className="flex items-start gap-6">
                {post.author.avatar && (
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#F4C155]">
                    <Image
                      src={urlFor(post.author.avatar)?.width(80).height(80).url() || ''}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-black text-foreground mb-2">{post.author.name}</h3>
                  {post.author.bio && (
                    <p className="text-muted-foreground mb-4 font-light leading-relaxed">{post.author.bio}</p>
                  )}
                  <div className="flex items-center gap-4">
                    {post.author.github && (
                      <a
                        href={post.author.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#F4C155]/20 transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {post.author.twitter && (
                      <a
                        href={post.author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#F4C155]/20 transition-all"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {post.author.linkedin && (
                      <a
                        href={post.author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#F4C155]/20 transition-all"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {post.author.email && (
                      <a
                        href={`mailto:${post.author.email}`}
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#F4C155]/20 transition-all"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Section - Full Width */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <article>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-16 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <PortableText value={post.body} components={components} />
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="relative py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
                <ArrowRight className="w-4 h-4 text-[#F4C155]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Related</span>
              </div>
              
              <h2 className="text-[clamp(2rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter uppercase text-foreground mb-6">
                MORE ARTICLES
              </h2>
            </div>

            {/* Related Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {post.relatedPosts.slice(0, 3).map((relatedPost: SanityDocument, index: number) => {
                const relatedCoverImageUrl = relatedPost.coverImage
                  ? urlFor(relatedPost.coverImage)?.width(600).quality(90).url()
                  : null;

                return (
                  <article 
                    key={relatedPost._id} 
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link href={`/blogs/${relatedPost.slug.current}`} className="block">
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#E85D4C]/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.05] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                        {/* Cover Image */}
                        {relatedCoverImageUrl && (
                          <div className="relative overflow-hidden">
                            <Image
                              src={relatedCoverImageUrl}
                              alt={relatedPost.coverImage?.alt || relatedPost.title}
                              width={600}
                              height={400}
                              className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h3 className="text-lg font-black leading-tight text-foreground mb-3 group-hover:text-[#F4C155] transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          
                          {relatedPost.excerpt && (
                            <p className="text-muted-foreground mb-4 leading-relaxed text-sm font-light line-clamp-3">
                              {relatedPost.excerpt}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 text-muted-foreground text-xs">
                              <Calendar className="w-3 h-3" />
                              <time dateTime={relatedPost.publishedAt} className="font-medium">
                                {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </time>
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
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-gradient-to-br from-[#E85D4C] to-[#F4C155] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-[clamp(1.5rem,4vw,3rem)] font-black leading-[0.8] tracking-tight text-white uppercase">
                Enjoyed This Article?
              </h3>
              <p className="text-white/90 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Join the community and get notified when new content drops. No spam, just pure value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-3 bg-white text-[#E85D4C] px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
                >
                  <span>More Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="inline-flex items-center gap-3 bg-black/20 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:bg-white/10 transition-all">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 