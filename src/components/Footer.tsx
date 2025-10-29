import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-black border-t border-white/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Kreatix</h3>
            <p className="text-white/60 leading-relaxed">
              Crafting digital experiences that inspire and transform.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-white/60">
              <li className="hover:text-white transition-colors duration-500 cursor-pointer">
                Brand Strategy
              </li>
              <li className="hover:text-white transition-colors duration-500 cursor-pointer">
                Web Design
              </li>
              <li className="hover:text-white transition-colors duration-500 cursor-pointer">
                Development
              </li>
              <li className="hover:text-white transition-colors duration-500 cursor-pointer">
                Digital Marketing
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-white/60">
              <li className="hover:text-white transition-colors duration-500 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition-colors duration-500 cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white transition-colors duration-500 cursor-pointer">
                Blog
              </li>
              <li className="hover:text-white transition-colors duration-500 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00E5CC] hover:bg-[#00E5CC]/10 transition-all duration-500 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00E5CC] hover:bg-[#00E5CC]/10 transition-all duration-500 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00E5CC] hover:bg-[#00E5CC]/10 transition-all duration-500 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00E5CC] hover:bg-[#00E5CC]/10 transition-all duration-500 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} Kreatix. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href="/privacy"
              className="hover:text-white transition-colors duration-500"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors duration-500"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
