import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Send } from 'lucide-react';

const ProposalChat = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const chatMessages = [
    {
      id: 1,
      sender: "him",
      text: "Did she know? NO 🤫",
      time: "8:32 PM"
    },
    {
      id: 2,
      sender: "him", 
      text: "Did I know? Of course! I planned it all 🥹 with the help of our friends",
      time: "8:32 PM"
    },
    {
      id: 3,
      sender: "him",
      text: "As beautiful as she is, I knew the ring 💍 will be perfect on her",
      time: "8:33 PM"
    },
    {
      id: 4,
      sender: "him",
      text: "As almost perfect as she is, I knew I had to make haste in making her mine 🤤",
      time: "8:33 PM"
    },
    {
      id: 5,
      sender: "narrator",
      text: "It was a beautiful evening, with light drizzles that sparkle and giggle while touching mother earth... ✨",
      time: "8:34 PM"
    },
    {
      id: 6,
      sender: "her",
      text: "Hello, good evening 😊",
      time: "8:35 PM"
    },
    {
      id: 7,
      sender: "him",
      text: "Hi dear good evening ❤️",
      time: "8:35 PM"
    },
    {
      id: 8,
      sender: "her",
      text: "Aren't you coming again? Let's meet them. It's getting late, it's drizzling and I fit sleep off ooo 😴",
      time: "8:36 PM"
    },
    {
      id: 9,
      sender: "him",
      text: "Don't worry, I'm coming. Rare, Kate and co are headed my way, so I want to join them 🚗",
      time: "8:36 PM"
    },
    {
      id: 10,
      sender: "her",
      text: "Ok, they just informed me that they are waiting for us. It's not proper to keep them waiting for too long ⏰",
      time: "8:37 PM"
    },
    {
      id: 11,
      sender: "him",
      text: "Wamless 😄",
      time: "8:37 PM"
    },
    {
      id: 12,
      sender: "narrator",
      text: "Little did she know... everyone else knew she was about to get a ring 💍😊",
      time: "8:38 PM"
    },
    {
      id: 13,
      sender: "her",
      text: "Hello, I'm outside the place 📍",
      time: "8:45 PM"
    },
    {
      id: 14,
      sender: "him",
      text: "I will be with you in a moment 🏃‍♂️",
      time: "8:45 PM"
    },
    {
      id: 15,
      sender: "her",
      text: "This place is nice! Don't you think things here will be too expensive? 💸",
      time: "8:50 PM"
    },
    {
      id: 16,
      sender: "him",
      text: "Let's try sip and paint 🎨🖌️",
      time: "8:51 PM"
    },
    {
      id: 17,
      sender: "her",
      text: "YES! 🎉 You think you're a maestro in our art world, I will surprise you by winning! 😤",
      time: "8:51 PM"
    },
    {
      id: 18,
      sender: "narrator",
      text: "Surprise me? She did 🙂🙂",
      time: "8:52 PM"
    },
    {
      id: 19,
      sender: "narrator",
      text: "Winning me? Well that began our journey of painting a perfect world through each other's eyes...",
      time: "8:53 PM"
    },
    {
      id: 20,
      sender: "narrator",
      text: "...and it was sealed with a ring 💍✨💕",
      time: "8:54 PM"
    }
  ];

  useEffect(() => {
    if (currentIndex < chatMessages.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, chatMessages[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, chatMessages.length]);

  const getSenderStyle = (sender) => {
    switch (sender) {
      case 'him':
        return 'bg-[#345237] text-white ml-auto';
      case 'her':
        return 'bg-gray-200 text-gray-800 mr-auto';
      case 'narrator':
        return 'bg-[#fdedad] rounded-sm text-black mx-auto text-center';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const getSenderName = (sender) => {
    switch (sender) {
      case 'him':
        return 'Him 💙';
      case 'her':
        return 'Her 💕';
      case 'narrator':
        return '✨ Story ✨';
      default:
        return '';
    }
  };

  return (
    <div className=" px-3 xl:px-0 py-14 lg:py-8 bg-[#fefaea]">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0c130c] to-[#345237] p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold text-lg">Love Story</h1>
                <p className="text-sm opacity-90">The Proposal Chronicles</p>
              </div>
            </div>
            <MessageCircle className="w-6 h-6" />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="flex flex-col space-y-1"
              >
                {message.sender !== 'narrator' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`text-xs font-medium ${
                      message.sender === 'him' ? 'text-right text-[#0c130c]' : 'text-left text-gray-600'
                    }`}
                  >
                    {getSenderName(message.sender)}
                  </motion.div>
                )}
                
                <motion.div
                  className={`max-w-xs rounded-2xl px-4 py-3 ${getSenderStyle(message.sender)} ${
                    message.sender === 'narrator' ? 'max-w-full rounded-full py-2 text-sm font-medium' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`text-xs text-gray-500 ${
                    message.sender === 'him' ? 'text-right' : 
                    message.sender === 'narrator' ? 'text-center' : 'text-left'
                  }`}
                >
                  {message.time}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Typing indicator when messages are still coming */}
          {currentIndex < chatMessages.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2 text-gray-500"
            >
              <div className="flex space-x-1">
                <motion.div
                  className="w-2 h-2 bg-[#EFBF04] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 bg-[#EFBF04] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 bg-[#EFBF04] rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <span className="text-sm">Story continues...</span>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder={currentIndex >= chatMessages.length ? "Share your love story..." : "Story in progress..."}
              className="flex-1 bg-transparent outline-none text-sm"
              disabled={currentIndex < chatMessages.length}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-[#EFBF04] rounded-full flex items-center justify-center text-white"
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="px-4 pb-2">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-[#EFBF04] h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentIndex / chatMessages.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center mt-1">
            {currentIndex}/{chatMessages.length} messages
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProposalChat;