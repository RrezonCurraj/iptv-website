import { Link } from 'react-router-dom';
import { Play, Monitor, Smartphone, Tv } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20 pb-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-blue-300 text-sm font-medium tracking-wide">
            {import.meta.env.VITE_HERO_BADGE || "#1 Rated SaaS Platform"}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Seamless Streaming. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Limitless Entertainment.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
           {import.meta.env.VITE_HERO_DESC || "Experience the future of digital content delivery. Scalable, secure, and built for performance."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#pricing" 
            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-600/25"
          >
            <Play size={20} fill="currentColor" />
            Get Started
          </a>
          <a 
            href="#how-it-works" 
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold rounded-xl border border-gray-700 transition-colors"
          >
            How It Works
          </a>
        </div>

        {/* Device Compatibility */}
        <div className="border-t border-gray-800/50 pt-10">
          <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider font-semibold">Works on all your devices</p>
          <div className="flex justify-center gap-8 text-gray-400">
            <div className="flex flex-col items-center gap-2 hover:text-white transition-colors">
              <Tv size={28} />
              <span className="text-xs">Smart TV</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-white transition-colors">
              <Monitor size={28} />
              <span className="text-xs">PC/Laptop</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-white transition-colors">
              <Smartphone size={28} />
              <span className="text-xs">Mobile</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;