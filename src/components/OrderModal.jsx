import { useState } from 'react';
import { X, CheckCircle, Loader2, ArrowLeft } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const OrderModal = ({ plan, isOpen, onClose }) => {
  const [step, setStep] = useState('form'); // form, payment, processing, success
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [referenceCode, setReferenceCode] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);

  if (!isOpen || !plan) return null;

  // Initial Form Submit -> Go to Payment
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep('payment');
  };

  // PayPal: Create Order
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: `${plan.duration} IPTV Subscription`,
          amount: {
            value: plan.price,
            currency_code: "USD" // Testing USD to fix Sandbox error
          },
        },
      ],
    });
  };

  // PayPal: On Approve (Success)
  const onApprove = async (data, actions) => {
    setStep('processing');
    try {
        const order = await actions.order.capture();
        handleOrderCompletion(order);
    } catch (error) {
        console.error("PayPal Capture Error:", error);
        alert("PayPal Error Details: " + JSON.stringify(error, null, 2)); // Show Real Error
    }
  };

  const handleOrderCompletion = (paypalOrder) => {
    console.log("PayPal Order Captured:", paypalOrder);
    
    // Generate Reference Code
    const code = 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // 1. Send Email (Fire and Forget)
    // We do NOT wait for this to finish to show success to the user.
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        plan: `${plan.duration} Plan`,
        price: plan.price,
        referenceCode: code,
        transactionId: paypalOrder.id
      })
    })
    .then(async (res) => {
      const isJson = res.headers.get('content-type')?.includes('application/json');
      const data = isJson ? await res.json() : null;
      if (!res.ok) {
        console.error('Email API Error:', (data && data.message) || res.status);
      } else {
        console.log('Email Sent Successfully:', data);
      }
    })
    .catch(err => console.error('Email Network Error:', err));

    // 2. Show Success Screen (Delayed slightly for UX)
    setTimeout(() => {
      setReferenceCode(code);
      setOrderDetails({
        id: paypalOrder.id,
        payer: paypalOrder.payer,
        plan: plan,
        contact: formData
      });
      setStep('success');
      console.log("Order details displayed to user.");
    }, 1500);
  };

  const reset = () => {
    setStep('form');
    setFormData({ email: '', phone: '' });
    setOrderDetails(null);
    onClose();
  };

  return (
    <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, currency: "USD" }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="bg-gray-800 rounded-2xl w-full max-w-md border border-gray-700 shadow-2xl overflow-hidden relative">
          {/* Close Button */}
          <button 
            onClick={reset}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-6">
            
            {/* STEP 1: FORM */}
            {step === 'form' && (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">Complete Order</h3>
                <p className="text-gray-400 mb-6">
                  You selected the <span className="text-blue-400 font-bold">{plan.duration}</span> plan for <span className="text-white font-bold">€{plan.price}</span>.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <p className="text-xs text-gray-500 mt-1">We will send the playlist code here.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+1 234 567 890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors mt-4"
                  >
                    Continue to Payment
                  </button>
                </form>
              </>
            )}

            {/* STEP 2: PAYMENT */}
            {step === 'payment' && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <button onClick={() => setStep('form')} className="text-gray-400 hover:text-white">
                     <ArrowLeft size={20} />
                  </button>
                  <h3 className="text-2xl font-bold text-white">Payment Method</h3>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Plan</span>
                    <span className="text-white font-semibold">{plan.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl">
                    <span className="text-gray-400">Total</span>
                    <span className="text-blue-400 font-bold">€{plan.price}</span>
                  </div>
                </div>

                {/* TEST MODE ONLY: Simulate Success Button */}
                {import.meta.env.VITE_PAYPAL_CLIENT_ID === 'test' && (
                  <button
                    onClick={() => {
                        setStep('processing');
                        handleOrderCompletion({
                            id: 'TEST-' + Math.floor(Math.random() * 100000),
                            payer: {
                                name: { given_name: 'Test', surname: 'User' },
                                email_address: formData.email
                            }
                        });
                    }}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg mb-4"
                  >
                    🚧 TEST MODE: Simulate Success (No Payment)
                  </button>
                )}

                <div className="text-center">
                  <PayPalButtons 
                    style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
                    fundingSource="paypal"
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={(err) => {
                      console.error("PayPal Error:", err);
                      // Handle error (optional UI update)
                    }}
                  />
                  <p className="text-xs text-gray-500 mt-4">
                    Secure payment processed by PayPal. 
                    <br/>We do not store your financial details.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3: PROCESSING */}
            {step === 'processing' && (
              <div className="text-center py-12">
                <Loader2 size={48} className="text-blue-500 animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white">Verifying Payment...</h3>
                <p className="text-gray-400 mt-2">Please do not close this window.</p>
                <p className="text-xs text-gray-500 mt-4">Generating your secure playlist...</p>
              </div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 'success' && (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Payment Successful!</h3>
                <p className="text-gray-300 mb-6">
                  We have received your order.
                </p>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-6 border border-gray-700 text-left">
                  <div className="flex justify-between mb-2">
                     <span className="text-gray-500 text-sm">Amount Paid</span>
                     <span className="text-white font-bold">€{plan.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                     <span className="text-gray-500 text-sm">Transaction ID</span>
                     <span className="text-white font-mono text-xs">{orderDetails?.id || 'PENDING'}</span>
                  </div>
                  <div className="border-t border-gray-800 my-2 pt-2">
                    <p className="text-sm text-gray-400 text-center mb-1">Reference Code</p>
                    <p className="text-xl font-mono font-bold text-center text-blue-400">{referenceCode}</p>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-200">
                    <strong>Order sent to dispatch!</strong><br/>
                    Check your email <b>{formData.email}</b>. Your playlist will arrive shortly.
                  </p>
                </div>

                <button
                  onClick={reset}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default OrderModal;
