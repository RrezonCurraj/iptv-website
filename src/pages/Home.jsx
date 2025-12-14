import { useState } from 'react';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import Support from '../components/Support';
import OrderModal from '../components/OrderModal';

const Home = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsOrderOpen(true);
  };

  return (
    <div>
      <Hero />
      <HowItWorks />
      <Pricing onSelectPlan={handleSelectPlan} />
      <Support />
      
      <OrderModal 
        isOpen={isOrderOpen} 
        onClose={() => setIsOrderOpen(false)} 
        plan={selectedPlan} 
      />
    </div>
  );
};

export default Home;
