import { Search } from 'lucide-react';

const categories = [
  { name: 'Sports', count: '500+' },
  { name: 'Movies', count: '2000+' },
  { name: 'Kids', count: '150+' },
  { name: 'News', count: '300+' },
  { name: 'Documentary', count: '200+' },
  { name: 'Music', count: '100+' },
  { name: 'Adult', count: 'Optional' },
  { name: 'International', count: '5000+' },
];

const Channels = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Channel List</h1>
          <p className="text-gray-400">Explore our vast library of live TV channels and VOD content.</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <input 
            type="text" 
            placeholder="Search for a channel..." 
            className="w-full bg-gray-800 border border-gray-700 rounded-full py-4 px-6 pl-12 text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors text-center group cursor-pointer">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{cat.name}</h3>
              <p className="text-gray-500">{cat.count} Channels</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Channels;
