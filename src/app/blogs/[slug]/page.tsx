import React from 'react';
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Tag, Star, Github, Twitter, Linkedin, Mail } from "lucide-react";

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

// Custom components for PortableText
const components = {
  block: {
    h1: ({children}: {children?: React.ReactNode}) => (
      <h1 className="text-4xl font-bold text-white mb-6 mt-8">{children}</h1>
    ),
    h2: ({children}: {children?: React.ReactNode}) => (
      <h2 className="text-3xl font-bold text-white mb-4 mt-8">{children}</h2>
    ),
    h3: ({children}: {children?: React.ReactNode}) => (
      <h3 className="text-2xl font-semibold text-white mb-4 mt-6">{children}</h3>
    ),
    h4: ({children}: {children?: React.ReactNode}) => (
      <h4 className="text-xl font-semibold text-white mb-3 mt-4">{children}</h4>
    ),
    normal: ({children}: {children?: React.ReactNode}) => (
      <p className="text-gray-300 mb-4 leading-relaxed text-lg">{children}</p>
    ),
    blockquote: ({children}: {children?: React.ReactNode}) => (
      <blockquote className="border-l-4 border-[#F4C155] pl-6 my-6 italic text-gray-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: {children?: React.ReactNode}) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300 ml-4">
        {children}
      </ul>
    ),
    number: ({children}: {children?: React.ReactNode}) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({children}: {children?: React.ReactNode}) => <li className="mb-1">{children}</li>,
    number: ({children}: {children?: React.ReactNode}) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({children}: {children?: React.ReactNode}) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({children}: {children?: React.ReactNode}) => (
      <em className="italic text-[#F4C155]">{children}</em>
    ),
    code: ({children}: {children?: React.ReactNode}) => (
      <code className="bg-zinc-800 text-[#F4C155] px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({value, children}: {value?: {href?: string}, children?: React.ReactNode}) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F4C155] hover:text-white underline transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({value}: {value: {alt?: string, caption?: string} & SanityImageSource}) => {
      const imageUrl = urlFor(value)?.width(800).height(450).url();
      return imageUrl ? (
        <div className="my-8">
          <img
            src={imageUrl}
            alt={value.alt || "Blog image"}
            className="w-full rounded-2xl shadow-lg"
          />
          {value.caption && (
            <p className="text-center text-gray-500 text-sm mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      ) : null;
    },
    codeBlock: ({value}: {value: {filename?: string, code: string, language?: string}}) => (
      <div className="my-6">
        {value.filename && (
          <div className="bg-zinc-800 px-4 py-2 rounded-t-xl border-b border-zinc-700">
            <p className="text-gray-400 text-sm font-mono">{value.filename}</p>
          </div>
        )}
        <pre className={`bg-zinc-800 p-6 overflow-x-auto ${value.filename ? 'rounded-b-xl' : 'rounded-xl'}`}>
          <code className="text-[#F4C155] text-sm font-mono">
            {value.code}
          </code>
        </pre>
        {value.language && (
          <p className="text-gray-500 text-xs mt-2 text-right">
            Language: {value.language}
          </p>
        )}
      </div>
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
    ? urlFor(post.coverImage)?.width(1200).height(600).url()
    : null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#E85D4C] to-black">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {coverImageUrl && (
              <div className="mb-8">
                <img
                  src={coverImageUrl}
                  alt={post.coverImage?.alt || post.title}
                  className="w-full aspect-video rounded-3xl object-cover shadow-2xl"
                />
              </div>
            )}

            <div className="text-center">
              {/* Categories and Featured Badge */}
              <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
                {post.featured && (
                  <div className="flex items-center gap-1 bg-[#F4C155] text-black px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                )}
                {post.categories?.map((category: string) => (
                  <span
                    key={category}
                    className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500'
                    }`}
                  >
                    {category}
                  </span>
                ))}
                {post.difficulty && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      difficultyColors[post.difficulty as keyof typeof difficultyColors]
                    }`}
                  >
                    {post.difficulty}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {post.excerpt}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex items-center justify-center gap-6 text-white/70 mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                {post.readingTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                )}

                {post.author?.name && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>by {post.author.name}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-white/70" />
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="text-white/70 text-sm">
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
        <section className="py-8 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-6 bg-black rounded-3xl p-6">
                {post.author.avatar && (
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={urlFor(post.author.avatar)?.width(64).height(64).url() || ''}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-1">{post.author.name}</h3>
                  {post.author.bio && (
                    <p className="text-gray-400 text-sm mb-3">{post.author.bio}</p>
                  )}
                  <div className="flex items-center gap-4">
                    {post.author.github && (
                      <a
                        href={post.author.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {post.author.twitter && (
                      <a
                        href={post.author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {post.author.linkedin && (
                      <a
                        href={post.author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {post.author.email && (
                      <a
                        href={`mailto:${post.author.email}`}
                        className="text-gray-400 hover:text-white transition-colors"
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

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-3xl p-8 md:p-12">
              <div className="prose prose-lg prose-invert max-w-none">
                {Array.isArray(post.body) && post.body.length > 0 ? (
                  <PortableText value={post.body} components={components} />
                ) : (
                  <div className="text-gray-300 leading-relaxed space-y-6">
                    <p className="text-xl text-[#F4C155] font-medium">
                      This post is ready to display rich content from Sanity Studio.
                    </p>
                    <p>
                      The content will be rendered here using PortableText with custom styling 
                      that matches your site&apos;s theme. You can now create posts in Sanity Studio 
                      with rich text, images, code blocks, and more.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Last Updated */}
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  Last updated: {new Date(post.updatedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {post.relatedPosts.slice(0, 3).map((relatedPost: {_id: string, title: string, slug: {current: string}, excerpt?: string, coverImage?: SanityImageSource, publishedAt: string}) => {
                  const relatedImageUrl = relatedPost.coverImage
                    ? urlFor(relatedPost.coverImage)?.width(400).height(200).url()
                    : null;

                  return (
                    <article key={relatedPost._id} className="group">
                      <Link href={`/blogs/${relatedPost.slug.current}`} className="block">
                        <div className="bg-black rounded-3xl overflow-hidden hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.02]">
                          {relatedImageUrl && (
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={relatedImageUrl}
                                alt={relatedPost.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#F4C155] transition-colors">
                              {relatedPost.title}
                            </h3>
                            {relatedPost.excerpt && (
                              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {relatedPost.excerpt}
                              </p>
                            )}
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                              <Calendar className="w-3 h-3" />
                              <time dateTime={relatedPost.publishedAt}>
                                {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </time>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#E85D4C] to-[#F4C155]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Want to Read More?
          </h2>
          <p className="text-black/80 mb-8 max-w-md mx-auto">
            Check out more articles and insights on my blog
          </p>
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors"
          >
            <span>View All Posts</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
} 