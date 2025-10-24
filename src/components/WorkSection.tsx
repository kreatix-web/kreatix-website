import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    id: 1,
    title: 'Momentum',
    category: 'Brand & Digital',
    description: 'Next-generation fitness platform',
    image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Ethereal',
    category: 'E-commerce',
    description: 'Luxury fashion marketplace',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Nexus',
    category: 'SaaS Platform',
    description: 'AI-powered analytics dashboard',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function WorkSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" ref={ref} className="py-16 lg:py-24 px-6 bg-black">
      <div className="max-w-[1600px] mx-auto">
        <div
          className={`mb-20 lg:mb-32 transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#00E5CC] mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5]">
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-[#00E5CC] tracking-wide">
                  {project.category}
                </p>
                <h3 className="text-2xl lg:text-3xl font-semibold group-hover:text-[#00E5CC] transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
