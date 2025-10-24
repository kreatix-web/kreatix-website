import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E5CC] via-[#0A1628] to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5CC] rounded-full filter blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B9D] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-6 lg:mb-8 text-balance leading-[0.95] opacity-0 animate-fade-in-scale">
            Crafting Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00E5CC]">
              Experiences
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/60 font-light tracking-wide max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Award-winning web agency building products that people love
          </p>
        </div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-all duration-700 group opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown
          size={24}
          className="animate-bounce group-hover:translate-y-1 transition-transform duration-500"
        />
      </a>
    </section>
  );
}
