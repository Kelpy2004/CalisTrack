import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Bell, 
  User, 
  ArrowRight, 
  Play, 
  Users, 
  Clock, 
  PersonStanding,
  Quote,
  Timer
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 h-20 flex justify-between items-center">
      <div className="text-2xl font-black italic text-volt tracking-tighter cursor-pointer">
        CALISTRACK
      </div>
      
      <div className="hidden md:flex gap-8 items-center font-label uppercase tracking-widest font-bold text-xs">
        <a href="#" className="text-white/70 hover:text-volt transition-colors">Training</a>
        <a href="#" className="text-volt border-b-2 border-volt pb-1">Live</a>
        <a href="#" className="text-white/70 hover:text-volt transition-colors">Community</a>
        <a href="#" className="text-white/70 hover:text-volt transition-colors">About</a>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-white/70 hover:text-volt transition-colors">
          <Search size={20} />
        </button>
        <div className="flex gap-4">
          <button className="text-white/70 hover:text-volt transition-colors">
            <Bell size={20} />
          </button>
          <button className="text-white/70 hover:text-volt transition-colors">
            <User size={20} />
          </button>
        </div>
        <button className="bg-volt text-black font-label uppercase tracking-widest font-bold px-6 py-2 rounded-DEFAULT hover:bg-white transition-colors text-xs">
          Go Pro
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col md:flex-row items-center gap-16 min-h-[90vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(171,214,0,0.1),transparent_50%)] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10">
          <span className="w-2 h-2 rounded-full bg-volt shadow-[0_0_8px_rgba(171,214,0,0.8)]" />
          <span className="font-label text-[10px] tracking-widest text-white/80">PRECISION ENGINEERING</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white">
          MASTER YOUR <br />
          <span className="text-gradient">KINETIC</span> POTENTIAL.
        </h1>
        
        <p className="text-lg text-white/60 max-w-xl font-body leading-relaxed">
          CalisTrack is engineered for high-performance athletes who demand absolute discipline. 
          We fuse cutting-edge biomechanics tracking with world-class live coaching to shatter plateaus.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-volt text-black font-label text-xs tracking-widest font-bold px-8 py-4 rounded-DEFAULT hover:bg-white transition-colors"
          >
            START TRAINING
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass text-white font-label text-xs tracking-widest font-bold px-8 py-4 rounded-DEFAULT hover:bg-white/10 transition-colors"
          >
            VIEW MANIFESTO
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px]"
      >
        <div className="absolute -inset-10 bg-volt/10 blur-[120px] rounded-full -z-10" />
        <img 
          src="/images/handstand.png" 
          alt="Athlete in motion" 
          className="w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};

const LiveSessions = () => {
  const sessions = [
    {
      id: 1,
      title: "Handstand Mastery: Core Protocol",
      coach: "Marcus Thorne",
      viewers: "1.2K",
      image: "/images/ringpullup.png"
    },
    {
      id: 2,
      title: "Front Lever Mechanics & Holds",
      coach: "Elena Rostova",
      viewers: "845",
      image: "/images/bar-grip.png"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tight">LIVE SESSIONS</h2>
          <p className="text-white/50">Join elite coaches in real-time. Zero latency, maximum intensity.</p>
        </div>
        <button className="text-volt font-label text-xs font-bold tracking-widest flex items-center gap-2 hover:text-white transition-colors">
          VIEW ALL LIVE <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sessions.map((session, i) => (
          <motion.div 
            key={session.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-xl overflow-hidden glass aspect-video cursor-pointer"
          >
            <img 
              src={session.image} 
              alt={session.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <div className="bg-red-500 text-white font-label text-[10px] font-bold px-2 py-1 rounded-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
              </div>
              <div className="glass px-2 py-1 rounded-sm text-[10px] font-label font-bold flex items-center gap-1">
                <Users size={12} /> {session.viewers}
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-volt transition-colors">{session.title}</h3>
              <p className="text-white/60 text-sm flex items-center gap-2">
                <User size={14} className="text-volt" /> Coach {session.coach}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Schedule = () => {
  const items = [
    { time: "14:00", zone: "EST / TODAY", title: "Planche Progression Phase 2", duration: "45 Min", level: "Advanced" },
    { time: "18:30", zone: "EST / TODAY", title: "Dynamic Rings Flow", duration: "60 Min", level: "Intermediate" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <h2 className="text-2xl font-black text-white mb-8 border-l-4 border-volt pl-4">UPCOMING SCHEDULE</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-xl glass-card border border-white/5 hover:border-volt/50 transition-colors group"
          >
            <div className="flex items-center gap-8 mb-4 md:mb-0">
              <div className="w-24 shrink-0 text-center border-r border-white/10 pr-8">
                <div className="text-xl font-black text-volt">{item.time}</div>
                <div className="text-[10px] font-label font-bold text-white/40 tracking-wider uppercase">{item.zone}</div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-volt transition-colors">{item.title}</h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-white/40">
                  <span className="flex items-center gap-1"><Timer size={14} /> {item.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{item.level} Level</span>
                </div>
              </div>
            </div>
            <button className="glass px-6 py-2 rounded-DEFAULT font-label font-bold text-[10px] tracking-widest hover:bg-white hover:text-black transition-colors">
              SET REMINDER
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CommunityImpact = () => {
  const stats = [
    { label: "GLOBAL ATHLETES", value: "120K+" },
    { label: "HOURS LOGGED", value: "4.5M" },
    { label: "ELITE COACHES", value: "50+" }
  ];

  return (
    <section className="bg-surface-low border-t border-white/5 py-24 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="px-8 pt-8 md:pt-0 first:pt-0">
              <div className="text-6xl font-black text-white mb-2">{stat.value}</div>
              <div className="font-label text-[10px] font-bold tracking-widest text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "The live sessions bridged the gap between raw effort and actual technique. Getting real-time cues during a heavy static hold is unparalleled.",
              author: "David J.",
              tier: "Pro Tier"
            },
            {
              quote: "I've trained alone for years. The community aspect and the discipline the schedule enforces completely changed my trajectory.",
              author: "Sarah T.",
              tier: "Elite Tier"
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-obsidian border border-white/10 p-8 rounded-xl relative overflow-hidden group"
            >
              <Quote className="absolute top-4 right-4 h-16 w-16 text-white/5 -z-0 group-hover:text-volt/10 transition-colors" />
              <p className="text-lg text-white mb-8 relative z-10 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-surface-highest" />
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-volt text-xs font-label font-bold uppercase tracking-wider">{t.tier}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-xl font-black italic text-volt mb-2">CALISTRACK</div>
          <p className="text-[10px] font-label font-bold text-white/30 tracking-widest uppercase">
            © 2024 CALISTRACK. PRECISION & DISCIPLINE.
          </p>
        </div>
        <div className="flex gap-8 text-[10px] font-label font-bold text-white/30 tracking-widest uppercase">
          <a href="#" className="hover:text-volt transition-colors">Privacy</a>
          <a href="#" className="hover:text-volt transition-colors">Terms</a>
          <a href="#" className="hover:text-volt transition-colors">Support</a>
          <a href="#" className="hover:text-volt transition-colors">Careers</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-volt selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <LiveSessions />
        <Schedule />
        <CommunityImpact />
      </main>
      <Footer />
    </div>
  );
}



