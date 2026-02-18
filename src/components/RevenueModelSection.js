import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function RevenueModelSection() {
  const steps = [
    'Paid Acquisition & SEO',
    'Lead Capture & Structuring',
    'CRM Intelligence',
    'Automated Follow-Up',
    'Sales Conversion',
    'Continuous Scaling',
  ];

  return (
    <SectionWrapper background="bg-[#0B1F3B] text-white">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 md:mb-20 text-center leading-tight">
            Revenue Architecture Flow
          </h2>
        </FadeInOnScroll>

        {/* Desktop view - horizontal */}
        <FadeInOnScroll>
          <div className="hidden lg:grid grid-cols-6 gap-4 mb-16">
            {steps.map((step, index) => (
              <div key={index} className={`${index === 0 ? 'col-span-1' : index === steps.length - 1 ? 'col-span-1' : 'col-span-1'}`}>
                <div className="bg-[#132A4A] rounded-lg p-6 md:p-8 shadow-md text-center h-full flex flex-col justify-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <p className="text-xs font-bold uppercase tracking-wide mb-2 text-gray-300">Step {index + 1}</p>
                  <p className="text-base font-semibold">{step}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-center py-4 text-2xl text-gray-600">→</div>
                )}
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Mobile view - vertical stacked */}
        <FadeInOnScroll>
          <div className="lg:hidden space-y-4 md:space-y-6">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="bg-[#132A4A] rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <p className="text-xs font-bold uppercase tracking-wide mb-2 text-gray-300">Step {index + 1}</p>
                  <p className="text-lg md:text-xl font-semibold">{step}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-center py-3 text-3xl text-gray-700">↓</div>
                )}
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
