import { useState } from "react";
import {
  Send,
  Heart,
  MessageCircle,
  User,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";

function GoodwillMessage() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = { xs: 1, lg: 3 }

  const [testimonials, setTestimonials] = useState(() => {
    try {
      const stored = localStorage.getItem("wedding-testimonials");
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.map((t) => ({
          ...t,
          timestamp: new Date(t.timestamp),
        }));
      }
    } catch (error) {
      console.error("Error loading testimonials:", error);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "wedding-testimonials",
        JSON.stringify(testimonials)
      );
    } catch (error) {
      console.error("Error saving testimonials:", error);
    }
  }, [testimonials]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const getRandomColor = () => {
    return "bg-[#345237] text-slate-200";
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diffInHours = Math.floor((now - timestamp) / (1000 * 60 * 60));
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return timestamp.toLocaleDateString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      ["name", "message"].forEach((field) => {
        if (!formData[field]) {
          const el = document.getElementById(field);
          el.classList.add("ring-rose-300");
          setTimeout(() => el.classList.remove("ring-rose-300"), 600);
        }
      });
      return;
    }

    const newTestimonial = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      timestamp: new Date(),
      initials: getInitials(formData.name),
    };

    setTestimonials((prev) => [newTestimonial, ...prev]);
    const phone = "+2347041238582";
    const text = `Goodwill Message from ${formData.name}: \n\n${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setShowModal(true);
    setFormData({ name: "", message: "" });
  };

  const totalSlides = () => {
    const width = window.innerWidth;
    const items = width < 1024 ? itemsPerSlide.xs : itemsPerSlide.lg;
    return Math.ceil(testimonials.length / items);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides());
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides()) % totalSlides());
  };

  const getCurrentSlideItems = () => {
    const width = window.innerWidth;
    const items = width < 1024 ? itemsPerSlide.xs : itemsPerSlide.lg;
    const startIndex = currentSlide * items;
    return testimonials.slice(startIndex, startIndex + items);
  };

  useEffect(() => {
    const handleResize = () => {
      const newTotalSlides = totalSlides();
      if (currentSlide >= newTotalSlides) {
        setCurrentSlide(newTotalSlides - 1);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide, testimonials.length]);

  return (
    <>
      <section
        id="rsvp"
        className="relative bg-[#fdedad]"
        aria-label="Goodwill Message"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-20">
          <div className="rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 font-monte">
                  Goodwill Message
                </h2>
                <p className="mt-2 text-slate-600 text-sm">
                  We're so excited to celebrate with you. Send a message below.
                </p>
              </div>
              <div className="hidden sm:block">
                <Heart className="w-8 h-8 text-rose-400" />
              </div>
            </div>
            <div className="mt-6 space-y-5" aria-describedby="rsvp-hint">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-slate-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white ring-1 ring-slate-200 focus:ring-2 focus:ring-rose-300 outline-none px-4 py-3 text-sm placeholder:text-slate-400 transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white ring-1 ring-slate-200 focus:ring-2 focus:ring-rose-300 outline-none px-4 py-3 text-sm placeholder:text-slate-400 transition"
                  placeholder="Your RSVP or note for the couple?"
                ></textarea>
              </div>
              <p id="rsvp-hint" className="-mt-3 text-xs text-slate-500">
                Message will be displayed as testimonial and sent via WhatsApp.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-tr from-[#2B432D] to-[#0c130c] hover:from-[#345237] hover:to-[#598b5d] text-slate-200 shadow-lg shadow-black/10 ring-1 ring-white/30 hover:ring-white/50 transition-all"
                >
                  <Send size={16} color="#ebf2ec" /> Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fefaea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-[#598b5d]" />
              <span className="text-sm font-medium text-[#598b5d] uppercase tracking-wider">
                Messages from Loved Ones
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 font-monte">
              Goodwill Messages
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Beautiful messages from family and friends celebrating our love
              story
            </p>
            {testimonials.length > 0 && (
              <div className="mt-4 text-sm text-slate-500">
                {testimonials.length}{" "}
                {testimonials.length === 1 ? "message" : "messages"} received
              </div>
            )}
          </div>

          {testimonials.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">
                No messages yet. Be the first to send your wishes!
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides() }).map(
                    (_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-2">
                          {getCurrentSlideItems().map((testimonial) => (
                            <div
                              key={testimonial.id}
                              className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md hover:ring-slate-200 transition-all duration-300"
                            >
                              <div className="flex items-start gap-4">
                                <div
                                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${getRandomColor()}`}
                                >
                                  {testimonial.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-slate-900 truncate">
                                      {testimonial.name}
                                    </h3>
                                    <span className="text-xs text-slate-500 flex-shrink-0 ml-2">
                                      {formatTimeAgo(testimonial.timestamp)}
                                    </span>
                                  </div>
                                  <blockquote className="text-slate-700 text-sm leading-relaxed italic">
                                    "{testimonial.message}"
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {testimonials.length > itemsPerSlide.xs && (
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={prevSlide}
                    className="inline-flex items-center justify-center w-10 h-10 bg-white text-slate-700 rounded-full ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                    aria-label="Previous testimonials"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="inline-flex items-center justify-center w-10 h-10 bg-white text-slate-700 rounded-full ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                    aria-label="Next testimonials"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div
            className="relative z-10 w-full max-w-md rounded-2xl bg-white ring-1 ring-slate-200 shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-slate-900">
                Message Added!
              </h3>
            </div>
            <p className="mt-3 text-slate-600 text-sm">
              Your message has been added to our testimonials and WhatsApp
              opened with your message.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GoodwillMessage;
