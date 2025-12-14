const Terms = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p>We provide IPTV subscription services allowing you to access live TV channels and VOD content. The quality of the stream depends on your internet connection speed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Payment and Refund Policy</h2>
            <p>All payments are final. We offer a 24-hour trial period before purchase to ensure satisfaction. Refunds are only processed if the service is completely non-functional for more than 72 hours.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Usage Restrictions</h2>
            <p>You may not share your subscription credentials with others. One subscription is valid for one active connection at a time unless otherwise specified.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
