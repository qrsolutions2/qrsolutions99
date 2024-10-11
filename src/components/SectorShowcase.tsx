import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const sectors = [
  {
    name: 'Property',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    description: 'Streamline property management and enhance buyer experiences with QR codes for virtual tours, property details, and instant contact information. Our QR solutions allow potential buyers to access comprehensive property information, view 360° tours, and even schedule viewings directly from for-sale signs or property listings.',
    expandedImage: 'https://images.unsplash.com/photo-1728661957380-0d1c3a3d7a7f?auto=format&fit=crop&q=80&w=1470&h=825'
  },
  {
    name: 'Bicycles',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Enhance customer experience and streamline inventory management in the bicycle industry with QR codes. Provide instant access to product specifications, maintenance guides, and even virtual test rides.',
    expandedImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Car Sales',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Revolutionize the car buying experience with QR codes. Provide instant access to vehicle history, specifications, and even schedule test drives directly from the showroom floor or online listings.',
    expandedImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Motorcycle',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Elevate the motorcycle shopping experience with QR codes. Offer quick access to bike specifications, performance data, and even virtual sound tests of different models.',
    expandedImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Enhance the luxury shopping experience in the jewelry industry with QR codes. Provide customers with detailed information about gemstone origins, craftsmanship, and care instructions.',
    expandedImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Construction',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    description: 'Improve site safety and project management in the construction industry with QR codes. Provide instant access to safety protocols, equipment manuals, and project timelines.',
    expandedImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
  },
];

const SectorShowcase: React.FC<{ id: string }> = ({ id }) => {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  const toggleSector = (sectorName: string) => {
    if (expandedSector === sectorName) {
      setExpandedSector(null);
    } else {
      setExpandedSector(sectorName);
    }
  };

  const closeSector = () => {
    setExpandedSector(null);
  };

  return (
    <section id={id} className="py-12 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Choose your sector</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className={`relative cursor-pointer transition-all duration-300 ${
                expandedSector && expandedSector !== sector.name ? 'opacity-30' : ''
              }`}
              onClick={() => toggleSector(sector.name)}
            >
              <img src={sector.image} alt={sector.name} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <span className="text-white text-lg font-semibold">{sector.name}</span>
              </div>
              {expandedSector === sector.name ? (
                <ChevronUp className="absolute bottom-2 right-2 text-white" />
              ) : (
                <ChevronDown className="absolute bottom-2 right-2 text-white" />
              )}
            </div>
          ))}
        </div>
      </div>
      {expandedSector && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={closeSector}>
          <div className="bg-white text-black rounded-lg max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeSector}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            {sectors.map((sector) => {
              if (sector.name === expandedSector) {
                return (
                  <div key={sector.name} className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{sector.name}</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={sector.name === 'Property' ? 'https://i.imgur.com/Yl2Yl7h.jpg' : sector.expandedImage}
                        alt={sector.name}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-gray-700 mb-4">{sector.description}</p>
                        <a
                          href="#plans"
                          onClick={(e) => {
                            closeSector();
                            smoothScroll(e);
                          }}
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                        >
                          Plans
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default SectorShowcase;