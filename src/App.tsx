import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import SectorShowcase from './components/SectorShowcase';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import SubscriptionPlans from './components/SubscriptionPlans';
import Dashboard from './components/Dashboard';
import Extras from './components/Extras';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HowItWorks id="how-it-works" />
        <SectorShowcase id="sectors" />
        <SubscriptionPlans id="plans" />
        <Dashboard id="dashboard" />
        <Extras id="extras" />
        <FAQ id="faq" />
        <ContactForm id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;