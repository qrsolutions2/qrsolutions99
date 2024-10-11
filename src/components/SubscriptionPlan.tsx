import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SubscriptionPlanProps {
  name: string;
  price: number;
  maxQRCodes: number;
  icon: LucideIcon;
  onSubscribe: () => void;
  loading: boolean;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({ name, price, maxQRCodes, icon: Icon, onSubscribe, loading }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full">
      <div className="flex items-center mb-2">
        <Icon className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
      <p className="text-2xl font-bold text-blue-600 mb-2">£{price}<span className="text-sm text-gray-500">/month</span></p>
      <p className="text-sm text-gray-600 mb-4">Up to {maxQRCodes} QR Codes</p>
      <button
        onClick={onSubscribe}
        disabled={loading}
        className="mt-auto bg-blue-600 text-white text-sm rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {loading ? 'Processing...' : 'Subscribe'}
      </button>
    </div>
  );
};

export default SubscriptionPlan;