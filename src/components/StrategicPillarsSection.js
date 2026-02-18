import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function StrategicPillarsSection() {
  const pillars = [
    {
      title: 'Performance Marketing',
      description: 'Structured campaigns across Meta, Google, LinkedIn, and YouTube with cost-efficiency governance.',
      icon: '📊',
    },
    {
      title: 'SEO & Organic Growth',
      description: 'Search positioning aligned with lead generation strategy and long-term acquisition.',
      icon: '🔍',
    },
    {
      title: 'CRM & Revenue Intelligence',
      description: 'Pipeline structuring, lifecycle tracking, and data-driven performance visibility.',
      icon: '🎯',
    },
    {
      title: 'Automation & Workflows',
      description: 'Response-time improvement, follow-up consistency, and operational discipline.',
      icon: '⚙️',
    },
  ];

  return (
    <SectionWrapper background="bg-gray-50">
      <FadeInOnScroll>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1F3B] mb-16 md:mb-20 text-center leading-tight">
          Strategic Pillars
        </h2>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {pillars.map((pillar, index) => (
          <FadeInOnScroll key={index}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100 card-hover hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-[#0B1F3B] mb-4 leading-snug">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
