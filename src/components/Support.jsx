import { Send, MessageCircle } from 'lucide-react';

const Support = () => {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-400">
              We are here to assist you. Contact us via the form below or use Telegram for faster, anonymous support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea rows="4" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Telegram / Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Telegram Support</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  For the fastest response and complete anonymity, please contact us on Telegram. We are available 24/7.
                </p>
                <a 
                  href="https://t.me/yourtelegramhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat on Telegram
                </a>
              </div>

              <div className="p-6">
                <h4 className="text-white font-bold mb-2">Why Telegram?</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Encrypted & Secure messaging</li>
                  <li>• No phone number sharing required</li>
                  <li>• Instant notifications</li>
                  <li>• Direct file sharing for playlists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
