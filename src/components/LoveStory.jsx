import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Diamond } from "lucide-react";

function LoveStory() {
  const [openPanel, setOpenPanel] = useState(null);

  const stories = [
    {
      id: "panel-1",
      title: "How We Met",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-hand-heart-icon lucide-hand-heart"
        >
          <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
          <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
          <path d="m2 15 6 6" />
          <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
        </svg>
      ),
      content:
        "We crossed paths at a cozy bookshop, reaching for the same novel. A shared smile led to coffee, then conversations that stretched for hours, and a feeling that we had found home in each other.",
    },
    {
      id: "panel-2",
      title: "Our First Date",
      icon: <Sparkles />,
      content:
        "We wandered through the city at dusk, sharing stories, laughter, and a scoop of pistachio gelato. Every step felt like a promise that the best was yet to come.",
    },
    {
      id: "panel-3",
      title: "The Proposal",
      icon: <Diamond />,
      content:
        "Under a canopy of twinkling lights, with the soft sound of waves, Alex asked, and Emma said yes—surrounded by the quiet magic of a moment that felt perfectly ours.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="story"
      className="relative"
      aria-label="Our Love Story"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="md:w-5/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 font-playfair">
              Our Love Story
            </h2>
            <p className="mt-3 text-slate-600">
              A few moments from a lifetime of little miracles.
            </p>
            <span className="flex items-center justify-center md:items-start md:justify-start">
              <svg
                width="130"
                height="36"
                viewBox="0 0 130 36"
                fill="none"
                className="mt-6 text-red-500/60"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M3 18c18-16 34-16 52 0 18 16 34 16 52 0"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="2 6"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  d="M65 14c-1-4 4-7 7-3 2 2 1 5-2 7-2 2-3 2-5 4-2-2-3-2-5-4-3-2-4-5-2-7 3-4 8-1 7 3Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="md:w-7/12 space-y-4">
            {stories.map((story) => (
              <motion.article
                key={story.id}
                className="rounded-xl bg-white ring-1 ring-slate-200/70 p-4 sm:p-5 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full cursor-pointer flex items-center justify-between gap-4"
                  onClick={() =>
                    setOpenPanel(openPanel === story.id ? null : story.id)
                  }
                  aria-expanded={openPanel === story.id}
                  aria-controls={story.id}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-rose-50 ring-1 ring-rose-100 flex items-center justify-center">
                      {story.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium tracking-tight text-slate-900 font-playfair">
                      {story.title}
                    </h3>
                  </div>
                  <motion.i
                    data-lucide="chevron-down"
                    className="w-5 h-5 text-slate-500"
                    animate={{ rotate: openPanel === story.id ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                  ></motion.i>
                </button>
                <AnimatePresence>
                  {openPanel === story.id && (
                    <motion.div
                      id={story.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-slate-600">{story.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default LoveStory;
