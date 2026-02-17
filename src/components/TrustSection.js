import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function TrustSection() {
  const trustPoints = [
    { icon: '✓', label: 'Structured 6-Month Engagement' },
    { icon: '✓', label: 'Transparent Performance Reporting' },
    { icon: '✓', label: 'Unified Accountability' },
    { icon: '✓', label: 'International Expertise' },
  ];

  return (
    <SectionWrapper background="bg-white">
      <FadeInOnScroll>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1F3B] mb-16 md:mb-20 text-center leading-tight">
          Why Organizations Trust Us
        </h2>
      </FadeInOnScroll>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <FadeInOnScroll key={index}>
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-md border border-gray-100 flex items-start gap-4 card-hover">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0B1F3B] flex items-center justify-center text-white font-bold text-xl md:text-2xl mt-1">
                  {point.icon}
                </div>
                <p className="text-lg md:text-xl font-semibold text-[#0B1F3B] leading-snug pt-1">
                  {point.label}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Testimonial */}
        <FadeInOnScroll>
          <div className="bg-white rounded-2xl p-10 md:p-14 shadow-md border border-gray-100 mb-16 md:mb-20">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
              "Their integrated approach transformed how we think about growth. Everything works together seamlessly. We've seen a 40% improvement in conversion rates within 4 months."
            </p>
            <div>
              <p className="text-lg font-bold text-[#0B1F3B]">Ahmed Al-Mansouri</p>
              <p className="text-gray-600">CEO, Real Estate Ventures UAE</p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Client Logos - 5 Column Grid */}
        <FadeInOnScroll>
          <div className="border-t border-gray-200 pt-12 md:pt-14">
            <p className="text-sm text-gray-500 text-center mb-8 uppercase tracking-wider font-bold">
              Trusted by Industry Leaders Across Regions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-300 rounded-lg h-24 md:h-28 flex items-center justify-center hover:opacity-100 opacity-60 transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">Client</p>
                    <p className="text-xs text-gray-500">Logo {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
