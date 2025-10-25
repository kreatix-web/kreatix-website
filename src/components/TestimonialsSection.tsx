import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Testimonial = {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "TechFlow Inc",
    role: "CEO",
    content:
      "Kreatix transformed our digital presence completely. Their attention to detail and creative approach exceeded all expectations.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Chen",
    company: "Innovate Labs",
    role: "CTO",
    content:
      "Working with Kreatix was an absolute pleasure. They understood our vision from day one and brought it to life with exceptional design.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Bright Future Co",
    role: "Marketing Director",
    content:
      "The level of professionalism and creativity Kreatix brings is unmatched. Our new website has significantly increased engagement.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "David Park",
    company: "Momentum Digital",
    role: "Founder",
    content:
      "Kreatix doesn't just build websites, they create experiences. Their strategic approach and stunning designs have helped us stand out.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    company: "NextGen Solutions",
    role: "VP of Marketing",
    content:
      "The team at Kreatix delivered beyond our expectations. Their innovative designs and seamless execution made our project a huge success.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "James Wilson",
    company: "Creative Studios",
    role: "Creative Director",
    content:
      "Working with Kreatix was a game-changer. Their ability to translate our ideas into stunning visual experiences is truly remarkable.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const visibleCards = 3;
  const totalCards = testimonials.length;

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 px-6 bg-gradient-to-b from-black via-[#0A1628] to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00E5CC] rounded-full filter blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF6B9D] rounded-full filter blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#00E5CC] mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            What our clients say
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the amazing clients
            we've had the pleasure to work with
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Cards Track */}
          <div
            className="flex gap-6 mb-8 px-1"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem-4px)] lg:w-[calc(33.333%-1rem-4px)]"
              >
                <div
                  className={`bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:from-white/10 hover:to-white/5 transition-all duration-500 h-full ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote size={32} className="text-[#00E5CC]/50" />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00E5CC]/30">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#00E5CC]">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-white/60">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#00E5CC]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
