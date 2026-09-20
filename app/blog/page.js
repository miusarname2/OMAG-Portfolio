"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { BLOG_POSTS, getAllCategories } from "@/lib/posts";
import { Search, Calendar, Clock, Tag, ArrowRight, BookOpen } from "lucide-react";

export default function BlogListingPage() {
  const { t, language, mounted } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!mounted) return null;

  const currentLang = language || "es";
  const categories = getAllCategories();

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const title = post.title[currentLang] || post.title["es"];
    const excerpt = post.excerpt[currentLang] || post.excerpt["es"];
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  return (
    <div className="w-full min-h-screen relative z-10 selection:bg-indigo-500/30 bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-200">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-24">
        {/* Blog Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-cyan-400 mb-4 border border-indigo-200 dark:border-indigo-500/30">
            <BookOpen className="w-3.5 h-3.5" /> Blog & Tech Notes
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
            {t("blog_title")}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t("blog_subtitle")}
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("search_posts")}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white shadow-sm placeholder:text-slate-400 text-sm transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-slate-200/70 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t("all_categories")}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-slate-200/70 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post Card (if no search active) */}
        {!searchQuery && selectedCategory === "all" && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 grid grid-cols-1 md:grid-cols-12 backdrop-blur-md">
              <div className={`md:col-span-6 bg-gradient-to-br ${featuredPost.coverGradient} p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[260px]`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <div className="relative z-10">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                </div>
                <div className="relative z-10 text-white mt-8">
                  <div className="flex items-center gap-4 text-xs font-medium text-white/80 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime[currentLang]}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors mb-4 leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title[currentLang]}
                    </Link>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {featuredPost.excerpt[currentLang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full border border-indigo-500/30"
                    />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {featuredPost.author.name}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-cyan-400 hover:gap-2 transition-all"
                  >
                    {t("read_more")} <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col bg-white/60 dark:bg-slate-800/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-white/10"
              >
                {/* Gradient Header */}
                <div className={`w-full aspect-[16/9] bg-gradient-to-br ${post.coverGradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <span className="self-start bg-black/30 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-white/90 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime[currentLang]}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 bg-white dark:bg-transparent">
                  <h3 className="text-lg font-extrabold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title[currentLang]}
                    </Link>
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {post.excerpt[currentLang]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-xs font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full border border-indigo-500/20"
                      />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {post.author.name}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      {t("read_more")} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/40 dark:bg-slate-800/20 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-slate-600 dark:text-slate-400 text-base">
              {t("no_posts_found")}
            </p>
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800">
        <p>© {new Date().getFullYear()} Oscar M Alvarez G. All rights reserved.</p>
      </footer>
    </div>
  );
}
