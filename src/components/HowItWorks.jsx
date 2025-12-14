import { Mail, Download, Tv, PlayCircle } from 'lucide-react';

const steps = [
  {
    icon: <Mail size={32} />,
    title: 'Check Your Email',
    description: 'Within 24 hours of purchase, you will receive an email containing your unique playlist credentials (M3U URL, Username, Password).'
  },
  {
    icon: <Download size={32} />,
    title: 'Download App',
    description: 'Download an IPTV player on your device. We recommend IPTV Smarters Pro, TiviMate, or XCIPTV.'
  },
  {
    icon: <Tv size={32} />,
    title: 'Connect',
    description: 'Open the app and enter the login details provided in your email to connect to our server.'
  },
  {
    icon: <PlayCircle size={32} />,
    title: 'Start Watching',
    description: 'Browse thousands of channels and VOD content instantly. Enjoy buffer-free streaming!'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-800" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started in minutes. Follow these simple steps to enjoy premium entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-700 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-blue-500 border border-gray-700 mb-6 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
