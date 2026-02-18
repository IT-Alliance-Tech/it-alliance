import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function EngagementModelSection() {
  const phases = [
    {
      title: 'Infrastructure & Data Stabilization',
      description: 'CRM alignment, funnel structuring, workflow setup.',
      number: '1',
    },
    {
      title: 'Optimization & Calibration',
      description: 'Campaign refinement, response efficiency, performance visibility.',
      number: '2',
    },
    {
      title: 'Scalable Performance',
      description: 'Conversion refinement, reporting governance, operational maturity.',
      number: '3',
    },
  ];

  return (
    <SectionWrapper background="bg-gray-50">
      <FadeInOnScroll>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1F3B] mb-16 md:mb-20 text-center leading-tight">
          6-Month Engagement Model
        </h2>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {phases.map((phase, index) => (
          <FadeInOnScroll key={index}>
            <div className="bg-white rounded-xl border-t-4 border-t-[#0B1F3B] p-8 md:p-10 shadow-md hover:shadow-lg transition-all duration-300 card-hover h-full flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#0B1F3B] text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-6 text-xl md:text-2xl font-bold">
                  {phase.number}
                </div>
                <h3 className="text-xl font-semibold text-[#0B1F3B] mb-3">
                  Phase {phase.number}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {phase.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
