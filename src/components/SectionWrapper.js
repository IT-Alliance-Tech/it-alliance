export default function SectionWrapper({
  children,
  className = "",
  background = "bg-white",
  spacing = "py-28 md:py-32",
  gradientOverlay = false,
  fullWidth = true,
}) {
  const sectionClass = `${background} ${spacing} ${gradientOverlay ? "relative overflow-hidden" : ""}`;
  
  return (
    <section className={sectionClass}>
      {gradientOverlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 opacity-30 pointer-events-none"></div>
      )}
      <div className={`relative z-10 max-w-[1300px] lg:max-w-[1400px] mx-auto px-6 md:px-8 ${className}`}>
        {children}
      </div>
    </section>
  );
}
