import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Tag, ArrowRight, Share2, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import FloatingSocialNav from "@/components/FloatingSocialNav";
import ReadingProgress from "@/components/ReadingProgress";
import { blogPosts } from "@/data/blogData";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | IT Alliance Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Get related posts (excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.slug !== slug)
        .slice(0, 2);

    // Calculate reading time (approx 200 words per minute)
    const wordCount = post.content.reduce((acc, block) => acc + (block.text?.split(/\s+/).length || 0), 0);
    const readingTime = Math.ceil(wordCount / 200) || 1;

    return (
        <main className="bg-[#0A0F1C] min-h-screen selection:bg-electric/30">
            <Navbar />
            <ReadingProgress />

            {/* Cinematic Immersive Hero */}
            <section className="relative py-16 md:py-24 flex items-center overflow-hidden">
                {/* Background Image with Blur */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover opacity-20 blur-3xl scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-transparent to-[#0A0F1C]" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1 space-y-8">
                            <Link 
                                href="/blog" 
                                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                            >
                                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Back to Insights
                            </Link>

                            <div className="space-y-5">
                                <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 backdrop-blur-md">
                                    <Tag className="w-3 h-3 text-cyan-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">{post.category}</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                                    {post.title.split(':').map((part, i) => (
                                        <span key={i} className={i === 1 ? "block text-gradient mt-1" : ""}>
                                            {part}{i === 0 && part.includes('?') ? '' : (i === 0 && post.title.includes(':') ? ':' : '')}
                                        </span>
                                    ))}
                                </h1>

                                <div className="flex flex-wrap items-center gap-6 pt-2 text-[12px] text-slate-300">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric via-violet to-cyan-500 border border-white/20 flex items-center justify-center text-[9px] font-bold text-white uppercase shadow-glow-sm">
                                            ITA
                                        </div>
                                        <div className="flex flex-col leading-tight">
                                            <span className="font-bold text-white uppercase tracking-wider">Expert Insights</span>
                                            <span className="text-slate-500 text-[10px]">{post.author}</span>
                                        </div>
                                    </div>
                                    <div className="h-8 w-px bg-white/10 hidden sm:block" />
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5 text-violet" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-cyan-400" />
                                            <span>{readingTime} min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Immersive Image Frame */}
                        <div className="order-1 lg:order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl glass-light">
                                <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-transparent z-10 pointer-events-none" />
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content with Sticky Elements */}
            <section className="pb-32 relative">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* Sidebar */}
                        <aside className="lg:w-16 shrink-0 lg:block hidden">
                            <div className="sticky top-32 flex flex-col gap-6 items-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 transform mb-4">
                                    Share Insights
                                </p>
                                {[
                                    { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]" },
                                    { icon: Linkedin, href: "#", color: "hover:text-[#0A66C2]" },
                                    { icon: Facebook, href: "#", color: "hover:text-[#1877F2]" },
                                    { icon: Share2, href: "#", color: "hover:text-electric" }
                                ].map((item, i) => (
                                    <a 
                                        key={i} 
                                        href={item.href} 
                                        className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 transition-all duration-300 ${item.color} hover:bg-white/[0.08] hover:border-white/20`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </aside>

                        {/* Content Container */}
                        <div className="flex-1 max-w-[840px]">
                            <div className="relative p-8 md:p-14 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl">
                                {/* Content Renderer */}
                                <div className="prose prose-invert prose-slate max-w-none 
                                    prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
                                    prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
                                    prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-slate-200
                                    prose-p:text-lg md:prose-p:text-xl prose-p:leading-relaxed prose-p:text-slate-400 prose-p:mb-8
                                    prose-li:text-lg md:prose-li:text-xl prose-li:text-slate-400 prose-li:mb-2
                                    prose-strong:text-white prose-strong:font-bold
                                ">
                                    {post.content.map((block, idx) => {
                                        if (block.type === "h2") return <h2 key={idx}>{block.text}</h2>;
                                        if (block.type === "h3") return <h3 key={idx}>{block.text}</h3>;
                                        if (block.type === "p") return <p key={idx}>{block.text}</p>;
                                        if (block.type === "list") {
                                            return (
                                                <ul key={idx} className="space-y-4 mb-10 list-none pl-0">
                                                    {block.items.map((item, i) => (
                                                        <li key={i} className="flex gap-4 items-start">
                                                            <div className="mt-3 w-2 h-2 rounded-full bg-gradient-to-r from-electric to-violet shrink-0 shadow-glow-sm" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                
                                {/* Article Footer */}
                                <div className="mt-20 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric/20 to-violet/20 border border-white/10 flex items-center justify-center text-electric">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Written by</p>
                                            <p className="text-white font-bold text-lg">{post.author}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4 md:hidden">
                                        {/* Mobile Social */}
                                        {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                                            <span key={i} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400">
                                                <Icon className="w-4 h-4" />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Reading */}
                            <div className="mt-32">
                                <div className="flex items-center justify-between mb-10">
                                    <h2 className="text-3xl font-black text-white">Continue <span className="text-gradient">Reading</span></h2>
                                    <Link href="/blog" className="text-sm font-bold text-electric hover:underline flex items-center gap-2 group">
                                        View all insights <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {relatedPosts.map((rPost, i) => (
                                        <Link key={i} href={`/blog/${rPost.slug}`} className="group block h-full">
                                            <div className="relative h-64 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-white/20">
                                                <Image src={rPost.image} alt={rPost.title} fill className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent" />
                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-2 block">{rPost.category}</span>
                                                    <h3 className="text-lg font-bold text-white leading-tight">{rPost.title}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />
            <Footer />
            <FloatingSocialNav />
        </main>
    );
}
