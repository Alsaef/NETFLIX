import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    { name: "Mobile", res: "480p", price: "2.99", features: ["Fair video quality", "For your phone or tablet"] },
    { name: "Basic", res: "720p", price: "3.99", features: ["Good video quality", "For your phone, tablet, laptop and TV"] },
    { name: "Standard", res: "1080p", price: "7.99", features: ["Great video quality", "For your phone, tablet, laptop and TV"] },
    { name: "Premium", res: "4K + HDR", price: "9.99", features: ["Best video quality", "Immersive sound (spatial audio)", "For your phone, tablet, laptop and TV"], popular: true },
  ];

  return (
    <div className="px-12 py-16 bg-black">
      <h2 className="text-3xl font-bold mb-8">A Plan To Suit Your Needs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative p-6 rounded-xl border ${plan.popular ? 'border-primary bg-gradient-to-br from-purple-900/40 to-black' : 'border-white/10 bg-gradient-to-br from-blue-900/20 to-black'}`}>
            {plan.popular && (
              <span className="absolute -top-3 right-4 bg-primary text-white text-xs py-1 px-3 rounded-full font-bold">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-gray-400 mb-4">{plan.res}</p>
            <ul className="space-y-3 mb-8 min-h-[120px]">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-300">
                  <FaCheck className="text-primary mt-1 shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold">USD {plan.price} <span className="text-sm font-normal text-gray-500">/mo</span></p>
          </div>
        ))}
      </div>
      
      {/* Footer Call to Action from image */}
      <div className="mt-12 text-center">
        <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between mb-8 max-w-5xl mx-auto">
            <p className="text-sm text-gray-400 italic">Read about Netflix Free TV shows and movies and watch bonus videos on Tudum.com.</p>
        </div>
        <button className="btn btn-primary btn-lg px-12 rounded-md">Join Now</button>
      </div>
    </div>
  );
};

export default Pricing;