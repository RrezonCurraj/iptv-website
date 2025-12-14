import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 via-black/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 mb-60">
        <div className="max-w-2xl mx-auto">
          <h1 className="mb-4 text-5xl md:text-6xl font-bold leading-tight">Hello there</h1>
          <p className="mb-8 text-lg md:text-xl text-gray-200">
            Welcome to the best IPTV service provider. High quality, no buffering.
          </p>
          <Link to="/pricing" className="primary-button inline-block">           
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;