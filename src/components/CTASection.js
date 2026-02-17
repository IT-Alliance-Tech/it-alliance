import FadeInOnScroll from './FadeInOnScroll';

export default function CTASection() {
  return (
    <section className="bg-[#132A4A] text-white py-28 md:py-32 border-b-8 border-[#08172A]">
      <div className="max-w-[1300px] lg:max-w-[1400px] mx-auto px-6 md:px-8 text-center">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 md:mb-10 leading-tight">
              Ready to Build Your Revenue System?
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 md:mb-16 leading-relaxed font-light">
              Let's discuss how to eliminate revenue leakage and scale predictably.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 md:px-12 py-4 md:py-5 bg-white text-[#132A4A] font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                Book Consultation
              </button>
              <button className="px-10 md:px-12 py-4 md:py-5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#132A4A] transition-all duration-300 text-lg hover:shadow-lg hover:scale-105">
                Learn More
              </button>
            </div>

            <p className="text-gray-400 text-lg mt-10 leading-relaxed">
              30-minute strategic assessment • Zero-commitment • Tailored recommendations
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
