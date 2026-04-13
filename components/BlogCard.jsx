"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-white/[0.15]">
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                    
                    {/* Image */}
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                            <Tag className="w-3 h-3 text-electric" />
                            {post.category}
                        </span>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 z-20">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-lg transition-all duration-500 group-hover:bg-electric group-hover:text-white group-hover:scale-110">
                            <ArrowUpRight className="h-5 w-5" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-4 text-[12px] text-slate-400">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-violet" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-violet" />
                            {post.author}
                        </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-electric leading-tight">
                        {post.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
