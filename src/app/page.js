'use client';
import Image from 'next/image'; 
import React, { useEffect, useState } from 'react';
import { db } from './firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Zap, ShoppingCart, Search, Menu, X, Cpu } from 'lucide-react';

// --- CSS FOR GLITCH & CRT EFFECTS ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&display=swap');
  .font-cyber { font-family: 'Orbitron', sans-serif; }
  .font-tech { font-family: 'Rajdhani', sans-serif; }
  .scanlines {
    background: linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,0) 50%,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.2));
    background-size: 100% 4px;
    position: fixed; pointer-events: none; inset: 0; z-index: 90;
  }
  .glitch-hover:hover { animation: glitch 0.3s infinite; }
  @keyframes glitch {
    0% { text-shadow: 2px 0 #ff00ea, -2px 0 #00eaff; }
    25% { text-shadow: -2px 0 #ff00ea, 2px 0 #00eaff; }
    50% { text-shadow: 2px 0 #ff00ea, -2px 0 #00eaff; }
    75% { text-shadow: -2px 0 #ff00ea, 2px 0 #00eaff; }
    100% { text-shadow: 2px 0 #ff00ea, -2px 0 #00eaff; }
  }
`;

export default function UltimateStore() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile Menu State

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "games"));
        setGames(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setTimeout(() => setLoading(false), 2000); 
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden relative">
      <style>{globalStyles}</style>
      <div className="scanlines"></div>
      
      {/* BACKGROUND NEON GLOWS */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#bf00ff] rounded-full opacity-5"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00f0ff] rounded-full opacity-5"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 px-6 py-5 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer z-50">
          <div className="w-10 h-10 bg-gradient-to-br from-[#bf00ff] to-[#00f0ff] rounded flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="font-cyber text-lg md:text-2xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            CYBER<span className="text-[#00f0ff]">STORE</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-tech text-lg tracking-wide text-gray-400">
          {['GAMES', 'HARDWARE', 'COMMUNITY'].map((item) => (
            <a key={item} href="#" className="hover:text-[#00f0ff] hover:shadow-[0_0_15px_#00f0ff] transition-all duration-300">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-6 z-50">
          <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <div className="relative group">
            <ShoppingCart className="w-5 h-5 text-gray-400 hover:text-[#bf00ff] cursor-pointer" />
            <span className="absolute -top-3 -right-3 w-5 h-5 bg-[#bf00ff] rounded-sm text-[10px] flex items-center justify-center font-bold">0</span>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['GAMES', 'HARDWARE', 'COMMUNITY', 'PROFILE'].map((item) => (
              <a key={item} href="#" className="font-cyber text-3xl text-white hover:text-[#00f0ff] tracking-widest">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-10 px-4 max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block border border-[#00f0ff] bg-[#00f0ff]/10 text-[#00f0ff] px-4 py-1 font-cyber text-[10px] md:text-xs tracking-[0.3em] mb-6 rounded">
            SYSTEM ONLINE_
          </div>
          <h1 className="font-cyber text-4xl md:text-8xl font-black uppercase mb-6 leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#bf00ff] to-[#00f0ff]">
              Future
            </span>
            <span className="block text-white">Gaming</span>
          </h1>
          <p className="font-tech text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Access the neural network. Download experiences directly to your cortex.
          </p>
          <button className="bg-[#00f0ff] text-black font-cyber font-bold px-8 py-3 md:px-10 md:py-4 uppercase tracking-wider hover:bg-white hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all skew-x-[-10deg]">
             Initialize
          </button>
        </motion.div>
      </header>

      {/* --- GAME GRID --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-32 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] w-10 bg-[#bf00ff]"></div>
          <h2 className="font-cyber text-2xl md:text-3xl font-bold uppercase">Database Entries</h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-[450px] bg-[#111] border border-white/5 rounded-xl animate-pulse flex items-center justify-center">
                <span className="font-cyber text-[#00f0ff] text-xs animate-bounce">LOADING ASSETS...</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="h-[300px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#bf00ff]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  
                  <Image 
                      src={game.image || "https://images.unsplash.com/photo-1550745165-9bc0b252726f"} 
                      alt={game.title}
                      fill={true} // <--- This is the magic. It fills the container automatically.
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#bf00ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <span className="font-cyber text-white text-lg font-bold truncate pr-4">{game.title}</span>
                    <span className="font-tech text-[#00f0ff] text-xl font-bold">{game.price}</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 relative z-10">
                    <span className="text-xs font-bold text-gray-500 uppercase border border-gray-700 px-2 py-1 rounded group-hover:border-[#00f0ff] group-hover:text-[#00f0ff] transition-colors">
                      {game.category || "RPG"}
                    </span>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00f0ff] hover:text-black hover:border-[#00f0ff] transition-all">
                      <Zap className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#050505] py-10 text-center relative overflow-hidden">
        <p className="text-gray-600 font-tech text-xs">© 2026 SYSTEM ARCHITECTURE.</p>
      </footer>
    </div>
  );
}