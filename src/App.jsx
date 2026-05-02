import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const photos = [
  "/gallery/photo4.JPG",
  "/gallery/photo22.png",
  "/gallery/photo12.JPG",
  "/gallery/photo23.png",
  "/gallery/photo5.JPG",
  "/gallery/photo8.png",
];

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowScrollHint(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isOpen) {
    return (
      <div className="flex h-screen w-full flex-col justify-center items-center bg-stone-50 p-6 overscroll-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-center"
        >
          <h1 className="font-serif italic text-4xl text-stone-800 tracking-wide mb-4">Для тебя.</h1>
          <p className="font-sans text-stone-500 mb-12 tracking-wider uppercase text-xs">A special letter</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-stone-900 mx-auto hover:bg-stone-800 transition-colors"
          >
            <Heart className="w-6 h-6 text-stone-100 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 font-sans pb-24 overflow-x-hidden w-full max-w-[430px] mx-auto relative shadow-2xl">
      {/* Cover */}
      <section className="relative h-[85vh] w-full flex flex-col items-center justify-center p-8 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={photos[1]} 
            alt="Us" 
            className="w-full h-full object-cover opacity-70 blur-[1px]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-stone-50/50 to-stone-50" />
        </motion.div>
        
        <div className="z-10 text-center flex flex-col items-center mt-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif italic text-5xl mb-6 text-stone-800 leading-tight"
          >
            Моей<br />Любимой
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-[1px] h-16 bg-stone-400 mb-6"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-sm uppercase tracking-[0.2em] text-stone-600"
          >
            I love you more than words
          </motion.p>
        </div>

        <AnimatePresence>
          {showScrollHint && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-12 flex flex-col items-center text-stone-400"
            >
              <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-8 bg-stone-400"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Narrative blocks */}
      <section className="px-6 py-12 space-y-32">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={variants}
          className="flex flex-col items-center"
        >
          <p className="font-serif italic text-2xl text-center text-stone-800 leading-relaxed mb-10 px-4">
            "Каждый момент с тобой — это искусство, на которое я хочу любоваться вечно."
          </p>
          <div className="relative w-full aspect-[4/5] rounded-t-full overflow-hidden shadow-xl mb-6">
            <img src={photos[2]} alt="Our memory" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs uppercase tracking-widest text-stone-400">Memory lane</span>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={variants}
          className="flex flex-col items-end w-full"
        >
          <div className="flex w-full justify-between items-end mb-4 px-2">
            <span className="font-serif italic text-stone-400 text-lg">01.</span>
            <p className="font-sans text-sm tracking-wide text-stone-600 uppercase">Твоя улыбка</p>
          </div>
          <div className="w-[85%] aspect-square rounded-bl-[60px] overflow-hidden shadow-lg pl-0">
            <img src={photos[3]} alt="Your smile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={variants}
          className="flex flex-col items-start w-full"
        >
          <div className="flex w-full justify-between items-end mb-4 px-2">
            <p className="font-sans text-sm tracking-wide text-stone-600 uppercase">Наш вайб</p>
            <span className="font-serif italic text-stone-400 text-lg">02.</span>
          </div>
          <div className="w-[85%] aspect-[3/4] rounded-tr-[50px] overflow-hidden shadow-lg">
            <img src={photos[4]} alt="Our vibe" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={variants}
          className="w-full px-4 text-center mt-12"
        >
          <h2 className="font-serif italic text-3xl mb-8">Ты — мое всё</h2>
          <div className="w-full grid grid-cols-2 gap-2 mt-4">
            <img src={photos[0]} className="w-full aspect-square object-cover rounded-tl-3xl" alt="Collage 1" />
            <img src={photos[5]} className="w-full aspect-square object-cover rounded-br-3xl" alt="Collage 2" />
          </div>
        </motion.div>
      </section>

      {/* Footer / Outro */}
      <section className="px-8 pt-10 pb-20 mt-12 flex flex-col items-center justify-center text-center bg-stone-900 text-stone-50 rounded-t-[40px] mx-2">
        <Heart className="w-5 h-5 text-rose-300 mb-8" fill="currentColor" />
        <p className="font-serif text-lg leading-relaxed mb-6 font-light">
          Я люблю тебя. Не просто за то, какая ты, а за то, каким я становлюсь, когда ты рядом. Спасибо за то, что ты есть.
        </p>
        <div className="w-12 h-[1px] bg-stone-700 my-6"></div>
        <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Твой Котя</p>
      </section>
      
    </div>
  );
}