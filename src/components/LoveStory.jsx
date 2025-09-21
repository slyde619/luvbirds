import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

function LoveStory() {
  const [currentStory, setCurrentStory] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const stories = [
    {
      title: "How We Met",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#EAAC31]"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      content: [
        "Every love journey comes with a story and ours isn't the conventional kind of story. We first cross paths in 2019 in the most unexpected way. I had arrived at his school (AKSU) for a quiz competition and little did I know I would meet the man that will capture my heart years later. We were in the same department and as the vice president of the department, he was one of the organizers of the interschool competition.",
        "After the event, we had a little chit chat and exchanged contacts.. (We just friendzone each other and turn to status viewers till I lost his contact). Fast forward to six years later, I had completely forgotten about him even though we were still friends on Facebook. He had earlier reached out to my best friend in March to confirm if I was single and she tally meant to be.",
        "I must say it's been an amazing 5 months with him, 5 months of love. 6 Years ago, we were just random strangers who just met once, 5 months ago, we became acquaintance, 5 Months down the line, we are lovers, and soon going to do forever... Most times we find love in the most unexpected ways and I'm glad I would be doing this life journey with my lover"
      ]
    },
    {
      title: "Our First Date",
      icon: <Sparkles className="text-[#EAAC31]" />,
      content: [
        "He fixed a date for us to meet on 1st May, 2025 and that was a game changer. We met again for the second time in 6 years, and I must say, it was love at second sight indeed.. The spark was undeniable and when he finally asked me out, I already knew I would give him a chance.",
        "Truly, love has a way of finding it's way back at the end. I do not like to rush into things but with him it was why delay what is actually meant to be. I must say it's been an amazing 5 months with him, 5 months of love. 6 Years ago, we were just random strangers who just met once, 5 months ago, we became acquaintance, 5 Months down the line, we are lovers, and soon going to do forever... Most times we find love in the most unexpected ways and I'm glad I would be doing this life journey with my lover."
      ]
    }
  ];

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const newStory = Math.min(Math.floor(latest * stories.length), stories.length - 1);
      setCurrentStory(newStory);
    });
  }, [scrollYProgress, stories.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      id="story"
      className="relative min-h-screen bg-[#fefaea]"
      aria-label="Our Love Story"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Header Section */}
          <div className="md:w-5/12 text-center md:text-left">
            <motion.h2 
              className="text-4xl md:text-5xl font-semibold text-[#02022a] font-monte"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Love Story
            </motion.h2>
            <motion.p 
              className="mt-4 text-md text-slate-600"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A few moments from a lifetime of little miracles.
            </motion.p>
            
            {/* Decorative Element */}
            <motion.div 
              className="flex items-center justify-center md:justify-start mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <svg
                width="130"
                height="36"
                viewBox="0 0 130 36"
                fill="none"
                className="text-[#fbd43c]"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                  d="M3 18c18-16 34-16 52 0 18 16 34 16 52 0"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="2 6"
                />
                <motion.path
                  initial={{ pathLength: 0, scale: 0 }}
                  whileInView={{ pathLength: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
                  d="M65 14c-1-4 4-7 7-3 2 2 1 5-2 7-2 2-3 2-5 4-2-2-3-2-5-4-3-2-4-5-2-7 3-4 8-1 7 3Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="currentColor"
                  strokeLinejoin="round"
                  style={{ transformOrigin: "65px 18px" }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Stories Section */}
          <div className="md:w-7/12" ref={containerRef}>
            {/* Scrollable Stories Container */}
            <div 
              className="h-[70vh] md:h-[80vh] overflow-y-auto pr-2"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#2B432D transparent',
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  width: 6px;
                }
                div::-webkit-scrollbar-track {
                  background: transparent;
                }
                div::-webkit-scrollbar-thumb {
                  background-color: rgb(244 63 94 / 0.2);
                  border-radius: 3px;
                  transition: background-color 0.2s ease;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background-color: rgb(244 63 94 / 0.4);
                }
              `}</style>
              
              <div className="space-y-12 pb-8">
                {stories.map((story, index) => {
                  const isInView = useInView(containerRef, { 
                    margin: "-20% 0px -20% 0px" 
                  });
                  
                  return (
                    <motion.div
                      key={index}
                      className={`rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/70 p-6 md:p-8 shadow-lg transition-all duration-500 ${
                        currentStory === index ? 'ring-rose-200 shadow-rose-100/50' : ''
                      }`}
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true, margin: "-30px" }}
                      whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Story Header */}
                      <motion.div 
                        className="flex items-center gap-4 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      >
                        <motion.div 
                          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#fefaea] flex items-center justify-center shadow-sm"
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {story.icon}
                        </motion.div>
                        <h3 
                          className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900"
                        >
                          {story.title}
                        </h3>
                      </motion.div>
                      
                      {/* Story Content */}
                      <div className="space-y-4">
                        {story.content.map((paragraph, paragraphIndex) => (
                          <motion.p 
                            key={paragraphIndex}
                            className="text-slate-600 lg:leading-relaxed text-base lg:text-lg font-normal"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.6, 
                              delay: index * 0.1 + paragraphIndex * 0.1 + 0.3,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true, margin: "-30px" }}
                            
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
        </div>
        </div>
      </div>
    </motion.section>
  );
}

export default LoveStory;