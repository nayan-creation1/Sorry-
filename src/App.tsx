/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Smile, MessageCircleHeart, ArrowRight, Send, User } from 'lucide-react';
import Typewriter from './components/Typewriter';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [page, setPage] = useState(0);
  const [response, setResponse] = useState<'love' | 'ok' | null>(null);

  const playClick = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const nextPage = () => {
    playClick();
    setPage(prev => prev + 1);
  };

  const handleResponse = (type: 'love' | 'ok') => {
    playClick();
    setResponse(type);
    setPage(4);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue">
      <FloatingHearts />
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {page === 0 && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center z-10 space-y-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-12 -right-12 text-pink-400"
              >
                <Sparkles size={40} />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bengali font-semibold text-pink-600 drop-shadow-sm">
                <Typewriter text="PRADATTA… একটু কথা ছিল 🙂" speed={150} />
              </h1>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              className="px-8 py-3 bg-pink-500 text-white rounded-full font-bengali text-xl shadow-lg shadow-pink-200 flex items-center gap-2 mx-auto hover:bg-pink-600 transition-colors"
            >
              দেখবি? 💖
            </motion.button>
          </motion.div>
        )}

        {page === 1 && (
          <motion.div
            key="sorry"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-center z-10 space-y-6 max-w-md"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-purple-400"
              >
                <MessageCircleHeart size={60} />
              </motion.div>
            </div>
            <div className="space-y-4 text-xl md:text-2xl font-bengali text-purple-700 leading-relaxed">
              <p><Typewriter text="ঠিক আছে, একটু ভুল হয়ে গেছে 😅" delay={0} /></p>
              <p><Typewriter text="তোকে রাগিয়ে দিতে চাইনি, honestly" delay={2000} /></p>
              <p><Typewriter text="রাগ করে থাকিস না তো 😕" delay={4000} /></p>
              <p><Typewriter text="এবার তো একটু হাস 🙂" delay={6000} /></p>
            </div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              className="mt-8 px-8 py-3 bg-purple-500 text-white rounded-full font-medium text-lg shadow-lg shadow-purple-200 flex items-center gap-2 mx-auto hover:bg-purple-600 transition-colors"
            >
              Next 👉
            </motion.button>
          </motion.div>
        )}

        {page === 2 && (
          <motion.div
            key="sweet"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="text-center z-10 space-y-6 max-w-md"
          >
            <div className="flex justify-center mb-4 gap-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-pink-500"
              >
                <Heart fill="currentColor" size={40} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="text-blue-400"
              >
                <Heart fill="currentColor" size={30} />
              </motion.div>
            </div>
            <div className="space-y-4 text-xl md:text-2xl font-bengali text-pink-700 leading-relaxed">
              <p><Typewriter text="তুই রাগ করলে একদম ভালো লাগে না 😄" delay={0} /></p>
              <p className="romantic-text text-3xl text-pink-600">
                <Typewriter text="I really like you PRADATTA ❤️" delay={2500} />
              </p>
              <p><Typewriter text="চল আবার আগের মতো কথা বলি 🙂" delay={5000} /></p>
            </div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              className="mt-8 px-8 py-3 bg-pink-400 text-white rounded-full font-medium text-lg shadow-lg shadow-pink-200 flex items-center gap-2 mx-auto hover:bg-pink-500 transition-colors"
            >
              Last 💌
            </motion.button>
          </motion.div>
        )}

        {page === 3 && (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center z-10 space-y-10"
          >
            <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none select-none overflow-hidden flex flex-wrap gap-8 p-4 justify-center items-center">
              {Array.from({ length: 50 }).map((_, i) => (
                <span key={i} className="text-pink-600 font-bold text-2xl whitespace-nowrap">I LOVE YOU ❤️</span>
              ))}
            </div>

            <div className="bg-white/40 backdrop-blur-md p-10 rounded-3xl border border-white/50 shadow-2xl space-y-6">
              <h2 className="text-3xl md:text-4xl font-bengali text-pink-700 leading-relaxed">
                Okay sorry 😅 PRADATTA<br />
                রাগটা ছেড়ে দে না 🙂<br />
                <span className="romantic-text text-5xl text-pink-600 block mt-4">I love you ❤️</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleResponse('love')}
                  className="px-6 py-4 bg-pink-500 text-white rounded-2xl font-semibold shadow-lg shadow-pink-200 flex items-center justify-center gap-2 hover:bg-pink-600 transition-colors"
                >
                  I LOVE YOU TOO 💖
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleResponse('ok')}
                  className="px-6 py-4 bg-blue-400 text-white rounded-2xl font-semibold shadow-lg shadow-blue-200 flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
                >
                  NO PROBLEM 😌
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {page === 4 && (
          <motion.div
            key="response"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center z-10 space-y-6"
          >
            {response === 'love' ? (
              <>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="text-pink-500 flex justify-center"
                >
                  <Heart fill="currentColor" size={100} />
                </motion.div>
                <h2 className="text-4xl font-bengali text-pink-700">
                  এই তো ঠিক 😄❤️
                </h2>
              </>
            ) : (
              <>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-blue-400 flex justify-center"
                >
                  <Smile size={100} />
                </motion.div>
                <h2 className="text-4xl font-bengali text-blue-700">
                  Good 🙂 আবার ঝগড়া না করি
                </h2>
              </>
            )}
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setPage(0)}
              className="text-gray-500 hover:text-pink-500 transition-colors flex items-center gap-2 mx-auto pt-8"
            >
              Restart 🔄
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="fixed bottom-4 left-0 w-full text-center text-pink-400/60 text-sm font-medium z-10">
        Made with love ❤️
      </footer>
    </div>
  );
}
