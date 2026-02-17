import SectionWrapper from './SectionWrapper';
import FadeInOnScroll from './FadeInOnScroll';

export default function AIEnhancedSection() {
  const features = [
    { icon: '🤖', title: 'Lead Qualification', description: 'Intelligent logic for scoring and prioritization.' },
    { icon: '📧', title: 'Follow-up Sequencing', description: 'Optimal timing and messaging for every touchpoint.' },
    { icon: '📈', title: 'Performance Monitoring', description: 'Real-time insights on campaign effectiveness.' },
    { icon: '⚡', title: 'Workflow Automation', description: 'Data-driven triggers for seamless operations.' },
  ];

  return (
    <SectionWrapper background="bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1F3B] mb-16 md:mb-20 text-center leading-tight">
            AI-Enhanced Workflow Intelligence
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <FadeInOnScroll key={index}>
              <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-md border border-gray-100 text-center card-hover hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-[#0B1F3B] mb-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll>
          <div className="bg-[#0B1F3B] rounded-xl p-10 md:p-14 shadow-lg text-white text-center">
            <p className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
              Artificial intelligence is embedded within the architecture — enhancing efficiency without disrupting operational stability.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
              <p className="text-2xl font-semibold">
                AI supports the system.
              </p>
              <p className="hidden md:block text-3xl font-light opacity-50">|</p>
              <p className="text-3xl font-semibold">
                The system drives growth.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionWrapper>
  );
}
