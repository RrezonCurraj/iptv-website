import { Check } from 'lucide-react';

const plans = [
  {
    duration: '1 Month',
    price: '15',
    features: ['Stable Performance', 'SD, HD, FHD, 4K', '+19K Live TVs', '+90K VODs', 'Sports, News, Shows...', 'Supports all devices', 'EPG & Catch-Up', '7/7 Support'],
    recommended: false
  },
  {
    duration: '3 Months',
    price: '35',
    features: ['Stable Performance', 'SD, HD, FHD, 4K', '+19K Live TVs', '+90K VODs', 'Sports, News, Shows...', 'Supports all devices', 'EPG & Catch-Up', '7/7 Support'],
    recommended: false
  },
  {
    duration: '6 Months',
    price: '60',
    features: ['Stable Performance', 'SD, HD, FHD, 4K', '+19K Live TVs', '+90K VODs', 'Sports, News, Shows...', 'Supports all devices', 'EPG & Catch-Up', '7/7 Support'],
    recommended: true
  },
  {
    duration: '12 Months',
    price: '100',
    features: ['Stable Performance', 'SD, HD, FHD, 4K', '+19K Live TVs', '+90K VODs', 'Sports, News, Shows...', 'Supports all devices', 'EPG & Catch-Up', '7/7 Support'],
    recommended: false
  },
  {
    duration: '24 Months',
    price: '180',
    features: ['Stable Performance', 'SD, HD, FHD, 4K', '+19K Live TVs', '+90K VODs', 'Sports, News, Shows...', 'Supports all devices', 'EPG & Catch-Up', '7/7 Support'],
    recommended: false
  }
];

const Pricing = ({ onSelectPlan }) => {
  return (
    <section className="py-20 bg-gray-900" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect subscription package for your needs. Instant activation and money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-800 rounded-2xl p-6 border ${
                plan.recommended ? 'border-blue-500 shadow-blue-500/20 shadow-lg scale-105 z-10' : 'border-gray-700 hover:border-gray-600'
              } transition-all duration-300 flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Best Value
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.duration}</h3>
                <div className="flex justify-center items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">€{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-blue-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.recommended 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
