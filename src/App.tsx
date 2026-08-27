import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, Key, Search, TrendingUp, Building2, ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [userType, setUserType] = useState<'buyer' | 'seller' | null>(null);

  // Simple inner view to show routing
  if (userType === 'buyer') {
    return <PortalLayout title="Welcome Home, Buyer" onBack={() => setUserType(null)} />;
  }

  if (userType === 'seller') {
    return <PortalLayout title="Seller's Hub" onBack={() => setUserType(null)} />;
  }

  return (
    <div className="min-h-screen bg-warm-50 flex items-center justify-center p-6 text-warm-900 font-sans">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-warm-100 p-4 rounded-full text-warm-600 shadow-sm border border-warm-200">
              <Building2 className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-warm-800 tracking-tight">
            Welcome to HDB Direct
          </h1>
          <p className="text-lg md:text-xl text-warm-700/80 max-w-2xl mx-auto leading-relaxed">
            Your friendly, transparent guide to navigating the HDB resale market. Let's find out how we can help you today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <SelectionCard 
            icon={<Key className="w-8 h-8" />}
            title="I'm looking to buy"
            description="Find your dream flat, calculate affordability, and explore neighborhood amenities with ease."
            onClick={() => setUserType('buyer')}
            color="bg-orange-50 hover:bg-orange-100 border-orange-200"
            iconColor="text-orange-500 bg-orange-100"
          />
          <SelectionCard 
            icon={<TrendingUp className="w-8 h-8" />}
            title="I'm planning to sell"
            description="Understand current market trends, price your home right, and connect with serious buyers."
            onClick={() => setUserType('seller')}
            color="bg-rose-50 hover:bg-rose-100 border-rose-200"
            iconColor="text-rose-500 bg-rose-100"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 text-center text-warm-600/70 text-sm flex items-center justify-center gap-2"
        >
          <HeartHandshake className="w-4 h-4" />
          <span>Built with care to make housing simple.</span>
        </motion.div>
      </div>
    </div>
  );
}

function SelectionCard({ icon, title, description, onClick, color, iconColor }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`text-left p-8 rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-start gap-6 group ${color}`}
    >
      <div className={`p-4 rounded-2xl ${iconColor} transition-transform group-hover:scale-110 duration-300`}>
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
      </div>
      <div className="mt-auto pt-4 flex items-center text-gray-900 font-medium">
        <span>Get started</span>
        <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.button>
  );
}

// Placeholder inner layout
function PortalLayout({ title, onBack }: { title: string, onBack: () => void }) {
  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      <header className="bg-white border-b border-warm-200 px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-warm-100 rounded-full text-warm-600 transition-colors">
          <Home className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-warm-800">{title}</h2>
      </header>
      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block p-6 bg-white rounded-3xl border border-warm-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Portal Dashboard</h3>
            <p className="text-gray-500">The specific tools for this user type will load here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
