import React from 'react';
import { Check } from 'lucide-react';

const features = [
  'Real-time QR code generation',
  'Customizable QR code designs',
  'Analytics and tracking',
  'Bulk QR code creation',
  'Dynamic QR codes',
  'Integration with popular marketing tools',
  'Mobile-friendly interface',
  'Secure data management'
];

const Dashboard: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">The Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://placehold.co/600x400" alt="Dashboard Preview" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;