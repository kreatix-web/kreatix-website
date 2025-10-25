import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function IntroSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="intro"
      ref={ref}
      className="py-16 lg:py-24 px-6 bg-black"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-center text-balance transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          We design and build digital products that{' '}
          <span className="font-semibold text-[#00E5CC]">transform businesses</span>{' '}
          and create lasting impact in the digital landscape
        </h2>
      </div>
    </section>
  );
}
