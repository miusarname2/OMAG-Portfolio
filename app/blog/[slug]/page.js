"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { getPostBySlug, BLOG_POSTS } from "@/lib/posts";
import { Calendar, Clock, ArrowLeft, Share2, Check, Copy } from "lucide-react";

export default function BlogPostPage({ params }) {
  const { t, language, mounted } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!mounted) return null;

  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const currentLang = language || "es";
  const postContent = post.content[currentLang] || post.content["es"];
  const postTitle = post.title[currentLang] || post.title["es"];
  const postExcerpt = post.excerpt[currentLang] || post.excerpt["es"];

  // Related posts
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Basic Markdown Content Renderer for rich presentation
  const renderContent = (content) => {
    const lines = content.trim().split("\n");
    let elements = [];
    let inCodeBlock = false;
    let codeContent = [];
    let codeLanguage = "";

    lines.forEach((line, index) => {
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${index}`} className="my-6 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 text-slate-100 shadow-lg">
              <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{codeLanguage || "code"}</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400">Snippet</span>
              </div>
              <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono leading-relaxed text-indigo-200">
                <code>{codeContent.join("\n")}</code>
              </pre>
            </div>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeLanguage = line.replace("```", "").trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="text-2xl font-extrabold mt-10 mb-5 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="ml-6 list-disc my-2 text-slate-700 dark:text-slate-300 leading-relaxed">
            {line.replace("- ", "")}
          </li>
        );
      } else if (line.trim() !== "") {
        elements.push(
          <p key={index} className="my-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="w-full min-h-screen relative z-10 selection:bg-indigo-500/30 bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-200">
      <Navbar isArticle={true} />

      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-24">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Metadata Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-cyan-400 border border-indigo-200 dark:border-indigo-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" /> {post.readTime[currentLang]}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              {postTitle}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 italic border-l-4 border-indigo-500 pl-4 py-1 mb-8">
              {postExcerpt}
            </p>

            {/* Author & Share Bar */}
            <div className="flex items-center justify-between py-4 border-y border-slate-200 dark:border-slate-800 my-8">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full border-2 border-indigo-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">{t("link_copied")}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{t("share_article")}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Article Banner Gradient Header */}
          <div className={`w-full h-48 md:h-64 rounded-2xl bg-gradient-to-br ${post.coverGradient} shadow-xl mb-12 p-8 flex items-end relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-white">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {renderContent(postContent)}
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
              Artículos relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(rel => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group p-6 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all shadow-sm hover:shadow-lg"
                >
                  <span className="text-xs font-bold text-indigo-500 dark:text-cyan-400 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold mt-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {rel.title[currentLang]}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </motion.article>
      </main>

      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800">
        <p>© {new Date().getFullYear()} Oscar M Alvarez G. All rights reserved.</p>
      </footer>
    </div>
  );
}
