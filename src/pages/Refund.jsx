const Refund = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Refund Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7-Day Money-Back Guarantee</h2>
            <p className="leading-relaxed">
              At HyperCast, we want to ensure that you are 100% happy with our service. If you have any technical issues or are not satisfied with the premium quality of our streams, check the following policy steps. If we cannot resolve your issue within 7 days of purchase, we will provide a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Conditions for Refund</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The refund request must be made within 7 days of the original purchase date.</li>
              <li>We will first attempt to help you resolve any issues you are experiencing.</li>
              <li>Refunds are not applicable if your internet speed is slow or unstable (minimum 10Mbps required).</li>
              <li>Refunds are not issued for user errors or inability to set up the service on incompatible devices.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Processing Time</h2>
            <p>
              Once your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment (PayPal) within 5-10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Requesting a Refund</h2>
            <p>
              To request a refund, please contact our support team at <span className="text-blue-400">support@hypercast.com</span> with your Transaction ID and the email address used for purchase.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refund;
