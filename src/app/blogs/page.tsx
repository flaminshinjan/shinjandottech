import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { Calendar, ArrowRight, Clock, Tag, Star, User } from "lucide-react";
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
  featured
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

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#E85D4C] to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-['Impact'] text-white mb-6 tracking-tight">
            BLOG
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Thoughts, insights, and stories from the world of technology, design, and innovation
          </p>
          <div className="w-20 h-1 bg-[#F4C155] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-6 h-6 text-[#F4C155]" />
              <h2 className="text-3xl font-bold text-white">Featured Posts</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {featuredPosts.slice(0, 2).map((post) => {
                const coverImageUrl = post.coverImage
                  ? urlFor(post.coverImage)?.width(600).height(300).url()
                  : null;

                return (
                  <article 
                    key={post._id} 
                    className="group bg-black rounded-3xl overflow-hidden hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-zinc-800"
                  >
                    <Link href={`/blogs/${post.slug.current}`} className="block">
                      {/* Cover Image */}
                      {coverImageUrl && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={coverImageUrl}
                            alt={post.coverImage?.alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="p-8">
                        {/* Categories and Difficulty */}
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          {post.categories?.slice(0, 2).map((category: string) => (
                            <span
                              key={category}
                              className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                                categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500'
                              }`}
                            >
                              {category}
                            </span>
                          ))}
                          {post.difficulty && (
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                                difficultyColors[post.difficulty as keyof typeof difficultyColors]
                              }`}
                            >
                              {post.difficulty}
                            </span>
                          )}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F4C155] transition-colors leading-tight">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        {post.excerpt && (
                          <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-gray-500 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </time>
                            </div>
                            
                            {post.readingTime && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime} min read</span>
                              </div>
                            )}

                            {post.author?.name && (
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{post.author.name}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 text-[#F4C155] group-hover:gap-3 transition-all">
                            <span className="text-sm font-medium">Read More</span>
                            <ArrowRight className="w-4 h-4" />
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

      {/* Regular Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {regularPosts.length > 0 ? (
            <>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Latest Articles
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {regularPosts.map((post, index) => {
                  const coverImageUrl = post.coverImage
                    ? urlFor(post.coverImage)?.width(400).height(200).url()
                    : null;

                  return (
                    <article 
                      key={post._id} 
                      className="group bg-zinc-900 rounded-3xl overflow-hidden hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    >
                      <Link href={`/blogs/${post.slug.current}`} className="block">
                        {/* Cover Image */}
                        {coverImageUrl && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={coverImageUrl}
                              alt={post.coverImage?.alt || post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="p-6">
                          {/* Post Number */}
                          <div className="text-[#F4C155] text-sm font-mono mb-3">
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          {/* Categories */}
                          {post.categories && post.categories.length > 0 && (
                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                              {post.categories.slice(0, 2).map((category: string) => (
                                <span
                                  key={category}
                                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                                    categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500'
                                  }`}
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4C155] transition-colors leading-tight">
                            {post.title}
                          </h3>
                          
                          {/* Excerpt */}
                          {post.excerpt && (
                            <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2 text-sm">
                              {post.excerpt}
                            </p>
                          )}

                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex items-center gap-1 mb-4 flex-wrap">
                              <Tag className="w-3 h-3 text-gray-500" />
                              {post.tags.slice(0, 3).map((tag: string) => (
                                <span key={tag} className="text-xs text-gray-500">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Meta Info */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-gray-500 text-xs">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <time dateTime={post.publishedAt}>
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </time>
                              </div>
                              
                              {post.readingTime && (
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{post.readingTime}m</span>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2 text-[#F4C155] group-hover:gap-3 transition-all">
                              <ArrowRight className="w-4 h-4" />
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
              <div className="bg-zinc-900 rounded-3xl p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-[#E85D4C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No Posts Yet</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm working on some amazing content. Check back soon for insights on technology, design, and innovation!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[#E85D4C] to-[#F4C155]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Stay Updated
          </h2>
          <p className="text-black/80 mb-8 max-w-md mx-auto">
            Get notified when I publish new articles and insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-none outline-none text-black placeholder-black/60"
            />
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}