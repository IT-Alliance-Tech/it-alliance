import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function WhySection() {
  const points = [
    { title: 'Marketing Agencies', description: 'Generate traffic' },
    { title: 'CRM Consultants', description: 'Configure software' },
    { title: 'Automation Vendors', description: 'Deploy tools' },
  ];

  return (
    <SectionWrapper background="bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1F3B] mb-16 md:mb-20 text-center leading-tight">
            Why IT Alliance AI
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
          {points.map((point, index) => (
            <FadeInOnScroll key={index}>
              <div className="bg-white border border-gray-100 rounded-lg p-8 md:p-10 shadow-md card-hover hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col justify-between">
                <div>
                  <p className="text-5xl font-bold text-[#0B1F3B] mb-4">0{index + 1}</p>
                  <h3 className="text-xl font-semibold text-[#0B1F3B] mb-3">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-medium">
                  {point.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll>
          <div className="bg-[#0B1F3B] rounded-lg p-10 md:p-14 shadow-lg text-white">
            <p className="text-2xl md:text-3xl font-semibold text-center leading-tight">
              We integrate acquisition, intelligence, automation, and optimization into one accountable revenue framework.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
