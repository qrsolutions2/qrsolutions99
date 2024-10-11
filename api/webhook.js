// ... previous code remains unchanged

const getMaxCampaigns = (planName) => {
  const planMap = {
    'VIP': 500,
    'Ultimate Plan – 250': 250,
    'Pro Plan – 75': 75,
    'Standard Plan – 50': 50,
    'Growth Plan – 35': 35,
    'Basic Plan – 10': 10,
    'Starter Plan – 20': 20,
  };
  return planMap[planName] || 10;
};

// ... rest of the file remains unchanged