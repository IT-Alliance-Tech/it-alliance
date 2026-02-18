import SectionWrapper from './SectionWrapper';

export default function HeroSection() {
  return (
    <SectionWrapper spacing="py-32 md:py-40 lg:py-48" gradientOverlay={true}>
      <div className="text-center max-w-5xl mx-auto">
        <div className="animate-fadeInUp mb-8 md:mb-10">
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-[#0B1F3B] mb-6">
            Revenue Architecture Platform
          </span>
        </div>

        <h1 className="animate-fadeInUp text-6xl md:text-7xl font-semibold text-[#0B1F3B] mb-8 md:mb-10 leading-tight">
          Integrated Revenue Architecture for Predictable Scaling
        </h1>

        <p className="animate-fadeInUp text-xl md:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed font-light max-w-3xl mx-auto">
          Unified acquisition, intelligence, automation, and optimization into one measurable growth framework.
        </p>

        <p className="animate-fadeInUp text-lg text-gray-600 mb-14 md:mb-16 leading-relaxed max-w-2xl mx-auto">
          For growth-focused organizations in UAE & Malaysia seeking structured, predictable scaling.
        </p>

        <div className="animate-fadeInUp flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 md:mb-24">
          <button className="w-full sm:w-auto px-10 py-4 md:py-5 bg-[#0B1F3B] text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg text-lg">
            Schedule Strategic Consultation
          </button>
          <button className="w-full sm:w-auto px-10 py-4 md:py-5 border-2 border-gray-300 bg-white text-[#0B1F3B] font-semibold rounded-lg hover:border-[#0B1F3B] hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
            Explore Our Approach
          </button>
        </div>

        <div className="animate-fadeInUp border-t border-gray-200 pt-12 md:pt-16">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
            Trusted by industry leaders across regions
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
