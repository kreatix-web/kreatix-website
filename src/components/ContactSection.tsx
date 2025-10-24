import { useState } from "react";
import { Send } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { sql, type ContactSubmission } from "../lib/neon";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const submission: ContactSubmission = {
        name: formData.name,
        email: formData.email,
      };

      // Insert contact submission using Neon
      await sql(
        "INSERT INTO contact_submissions (name, email) VALUES ($1, $2)",
        [submission.name, submission.email]
      );

      setSubmitted(true);
      setFormData({ name: "", email: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-48 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#00E5CC] mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Let's create something
            <br />
            extraordinary together
          </h2>
          <p className="text-lg text-white/60">
            Drop us a line and we'll get back to you within 24 hours
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="space-y-6">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/50 mb-3 group-focus-within:text-[#00E5CC] transition-colors duration-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-[#00E5CC] transition-colors duration-500 placeholder:text-white/30"
                placeholder="Your full name"
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/50 mb-3 group-focus-within:text-[#00E5CC] transition-colors duration-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-[#00E5CC] transition-colors duration-500 placeholder:text-white/30"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm animate-fade-in-up">{error}</p>
          )}

          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="group relative w-full sm:w-auto px-12 py-5 bg-[#00E5CC] hover:bg-[#00D4BB] text-black font-medium tracking-wide rounded-full transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
            >
              {submitted ? (
                "Message Sent!"
              ) : isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
