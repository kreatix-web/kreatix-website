import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { sql, type ContactSubmission } from "../lib/neon";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const submission: ContactSubmission = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Insert contact submission using Neon
      await sql(
        "INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3)",
        [submission.name, submission.email, submission.message]
      );

      setSubmitted(true);
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
        setShowToast(false);
      }, 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 lg:py-24 px-6 bg-black relative"
    >
      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-6 left-0 right-0 mx-auto sm:left-auto sm:right-6 sm:mx-0 z-50 animate-fade-in-up w-[calc(100%-3rem)] sm:w-auto max-w-md px-6 sm:px-0">
          <div className="bg-gradient-to-r from-[#00E5CC] to-[#00D4BB] text-black px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
            <CheckCircle2 size={24} className="flex-shrink-0" />
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm opacity-90">We'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

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
                className="w-full bg-transparent border border-white/20 rounded-lg py-4 px-4 text-lg focus:outline-none focus:border-[#00E5CC] transition-colors duration-500 placeholder:text-white/30"
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
                className="w-full bg-transparent border border-white/20 rounded-lg py-4 px-4 text-lg focus:outline-none focus:border-[#00E5CC] transition-colors duration-500 placeholder:text-white/30"
                placeholder="your@email.com"
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/50 mb-3 group-focus-within:text-[#00E5CC] transition-colors duration-500"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="w-full bg-transparent border border-white/20 rounded-lg py-4 px-4 text-lg focus:outline-none focus:border-[#00E5CC] transition-colors duration-500 placeholder:text-white/30 resize-none"
                placeholder="Tell us about your project..."
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
