import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import FinalCTA from "@/components/FinalCTA";
import FloatingSocialNav from "@/components/FloatingSocialNav";
import { blogPosts } from "@/data/blogData";

export const metadata = {
    title: "Blog | IT Alliance - AI-Driven Marketing Insights",
    description: "Deep dives into AI marketing, performance strategies, and digital transformation. Thinking beyond clicks to deliver real business outcomes.",
};

export default function BlogIndex() {
    return (
        <main className="bg-[#0A0F1C] min-h-screen">
            <Navbar />
            
            <BlogHeader />

            <section className="pb-32">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
            <Footer />
            <FloatingSocialNav />
        </main>
    );
}
