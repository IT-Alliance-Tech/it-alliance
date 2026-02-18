import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function ProblemSection() {
  return (
    <SectionWrapper background="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1F3B] mb-16 md:mb-20 text-center leading-tight">
            Most Businesses Have a System Fragmentation Problem
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
          <FadeInOnScroll>
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-md hover:shadow-lg card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold text-[#0B1F3B] mb-3">→</p>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Leads are generated — but not structured.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-md hover:shadow-lg card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold text-[#0B1F3B] mb-3">→</p>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                CRM exists — but lacks intelligence.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-md hover:shadow-lg card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold text-[#0B1F3B] mb-3">→</p>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Follow-ups depend on manual effort.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-md hover:shadow-lg card-hover transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold text-[#0B1F3B] mb-3">→</p>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Operations work in isolation.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        <FadeInOnScroll>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-100 rounded-xl p-10 md:p-12">
            <p className="text-sm uppercase tracking-widest font-bold text-red-600 mb-3">
              The Consequence
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[#0B1F3B] leading-tight">
              Revenue leakage, operational chaos, and unpredictable growth.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
