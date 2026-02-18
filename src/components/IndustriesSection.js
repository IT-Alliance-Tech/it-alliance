import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function IndustriesSection() {
  const industries = [
    { name: 'Real Estate & Property', icon: '🏢' },
    { name: 'Healthcare & Clinics', icon: '⚕️' },
    { name: 'Education & Coaching', icon: '🎓' },
    { name: 'Professional Services', icon: '💼' },
    { name: 'E-commerce Brands', icon: '🛍️' },
  ];

  return (
    <SectionWrapper background="bg-gray-50">
      <FadeInOnScroll>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1F3B] mb-6 md:mb-8 text-center leading-tight">
          Industries We Serve
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-16 md:mb-20 max-w-3xl mx-auto leading-relaxed">
          For companies generating active inquiries and seeking system optimization.
        </p>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {industries.map((industry, index) => (
          <FadeInOnScroll key={index}>
            <div className="bg-white border border-gray-100 rounded-lg p-8 md:p-10 shadow-md text-center card-hover hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-4">{industry.icon}</div>
              </div>
              <p className="text-lg font-semibold text-[#0B1F3B]">
                {industry.name}
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
