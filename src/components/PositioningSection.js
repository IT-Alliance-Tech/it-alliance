import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function PositioningSection() {
  const pillars = [
    'Performance Marketing',
    'Search Engine Optimization',
    'CRM Infrastructure',
    'Automation Workflows',
    'Sales Process Governance',
  ];

  return (
    <SectionWrapper background="bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1F3B] mb-16 md:mb-20 text-center leading-tight">
            We Engineer Revenue Systems, Not Campaigns
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 md:p-16 mb-16 md:mb-20 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.slice(0, -1).map((pillar, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#0B1F3B] mt-3"></div>
                  <p className="text-base text-gray-700 font-medium leading-relaxed">
                    {pillar}
                  </p>
                </div>
              ))}
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#0B1F3B] mt-3"></div>
                <p className="text-base text-gray-700 font-medium leading-relaxed">
                  {pillars[4]}
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border-t-4 border-b-4 border-[#0B1F3B] py-10 md:py-12 space-y-4 text-center">
            <p className="text-xl md:text-2xl font-semibold text-[#0B1F3B]">
              No disconnected vendors
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[#0B1F3B]">
              No fragmented tools
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[#0B1F3B]">
              One integrated system
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
