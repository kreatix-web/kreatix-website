import {
  Zap,
  Layers,
  ShoppingCart,
  Check,
  ShieldCheck,
  Rocket,
  Crown,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Offering = {
  id: number;
  title: string;
  badge: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  image: string;
};

const offerings: Offering[] = [
  {
    id: 1,
    title: "Website in a day",
    badge: "Single‑page",
    description:
      "For fast‑moving owners and small local businesses that rely on Facebook pages. A polished single‑page site with multiple sections and optional contact/booking forms.",
    features: [
      "Single‑page application",
      "Multiple content sections",
      "Optional contact/booking forms",
      "Quick launch",
      "Perfect for Facebook uplift",
    ],
    icon: <Zap className="text-[#00E5CC]" size={28} />,
    image: "/images/template-concept-coffee-shop.jpg",
  },
  {
    id: 2,
    title: "Multi‑page",
    badge: "Up to 5 pages",
    description:
      "Everything in ‘Website in a day’, plus up to 5 pages with multiple sections per page for more depth and SEO coverage.",
    features: [
      "Up to 5 pages",
      "Section‑rich layouts",
      "SEO‑ready structure",
      "Fast and accessible",
    ],
    icon: <Layers className="text-[#00E5CC]" size={28} />,
    image: "/images/multipage.jpg",
  },
  {
    id: 3,
    title: "E‑commerce",
    badge: "Shop & CMS",
    description:
      "Multi‑page with product listings and product detail pages, sorting & filters. Connected to a CMS and payment gateway.",
    features: [
      "Product listing & detail pages",
      "Sorting & filters",
      "CMS‑managed content",
      "Shopping cart & checkout",
      "Payment gateway integration",
    ],
    icon: <ShoppingCart className="text-[#00E5CC]" size={28} />,
    image: "/images/ecommerce.jpg",
  },
];

export default function WorkSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-16 lg:py-24 px-6 bg-black">
      <div className="max-w-[1600px] mx-auto">
        <div
          className={`mb-14 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#00E5CC] mb-4">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
            Services
          </h2>
          <p className="text-white/60 max-w-2xl mt-4">
            Websites tailored to your business stage—from fast single‑page
            builds to multi‑page and full e‑commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className={`group cursor-pointer transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/2]">
                <img
                  src={offering.image}
                  alt={`Illustration for ${offering.title}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    {offering.icon}
                  </div>
                </div> */}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-[#00E5CC] tracking-wide">
                  {offering.badge}
                </p>
                <h3 className="text-2xl lg:text-3xl font-semibold group-hover:text-[#00E5CC] transition-colors duration-500">
                  {offering.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {offering.description}
                </p>
                <ul className="mt-2 space-y-2">
                  {offering.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white/80"
                    >
                      <Check size={16} className="mt-0.5 text-[#00E5CC]" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#00E5CC] hover:text-white transition-colors duration-300 mt-3"
                  aria-label={`Get started with ${offering.title}`}
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Support/Hosting plans blurb */}
        <div
          className={`mt-14 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0A1628]/70 to-white/[0.06] p-6 lg:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold">
                  Support & Hosting Plans
                </h4>
                <p className="text-white/60 mt-1">
                  Choose a plan that fits your pace—from essentials to growth
                  and pro-level care.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00E5CC]/10 text-[#00E5CC] border border-[#00E5CC]/30 hover:bg-[#00E5CC]/20 transition-colors duration-300 shrink-0"
              >
                Talk to us
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Essential */}
              <div className="group rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00E5CC]/10 border border-[#00E5CC]/20 flex items-center justify-center text-[#00E5CC]">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold">Essential</h5>
                    <p className="text-xs text-white/60">
                      Care + secure hosting
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" />{" "}
                    Managed hosting
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" /> Free
                    SSL & CDN
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" /> Weekly
                    backups
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" /> Email
                    support
                  </li>
                </ul>
              </div>

              {/* Growth */}
              <div className="group rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B9D]/10 border border-[#FF6B9D]/20 flex items-center justify-center text-[#FF6B9D]">
                    <Rocket size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold">Growth</h5>
                    <p className="text-xs text-white/60">
                      Faster support & staging
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" />{" "}
                    Priority support
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" /> Uptime
                    monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" />{" "}
                    Staging site
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" />{" "}
                    Monthly report
                  </li>
                </ul>
              </div>

              {/* Pro */}
              <div className="group rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00E5CC]/10 border border-[#00E5CC]/20 flex items-center justify-center text-[#00E5CC]">
                    <Crown size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold">Pro</h5>
                    <p className="text-xs text-white/60">Performance + SLA</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" /> 24/7
                    SLA
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" />{" "}
                    Advanced caching/CDN
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" />{" "}
                    Headless CMS support
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#00E5CC]" />{" "}
                    Quarterly strategy call
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
