import { useState } from 'react';
import PricingComponent from '../components/Pricing';
import OrderModal from '../components/OrderModal';

const Pricing = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsOrderOpen(true);
  };

  return (
    <div className="pt-10">
      <PricingComponent onSelectPlan={handleSelectPlan} />
      
      <OrderModal 
        isOpen={isOrderOpen} 
        onClose={() => setIsOrderOpen(false)} 
        plan={selectedPlan} 
      />
    </div>
  );
};

export default Pricing;
