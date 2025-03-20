export const PLANS = {
  arcade: {
    img: '/images/icon-arcade.svg',
    label: 'Arcade',
    pricing: {
      label: (option: 'monthly' | 'yearly'): string =>
        option === 'monthly' ? '$9/mo' : '$90/yr',
      value: (option: 'monthly' | 'yearly'): number =>
        option === 'monthly' ? 9 : 90
    }
  },
  advanced: {
    img: '/images/icon-advanced.svg',
    label: 'Advanced',
    pricing: {
      label: (option: 'monthly' | 'yearly'): string =>
        option === 'monthly' ? '$12/mo' : '$120/yr',
      value: (option: 'monthly' | 'yearly'): number =>
        option === 'monthly' ? 12 : 120
    }
  },
  pro: {
    img: '/images/icon-pro.svg',
    label: 'Pro',
    pricing: {
      label: (option: 'monthly' | 'yearly'): string =>
        option === 'monthly' ? '$15/mo' : '$150/yr',
      value: (option: 'monthly' | 'yearly'): number =>
        option === 'monthly' ? 15 : 150
    }
  }
} as const;

export const ADD_ONS = {
  'online-service': {
    label: 'Online service',
    description: 'Access to multiplayer games',
    pricing: {
      label: (option: 'monthly' | 'yearly'): string =>
        option === 'monthly' ? '+$1/mo' : '+$10/yr',
      value: (option: 'monthly' | 'yearly'): number =>
        option === 'monthly' ? 1 : 10
    }
  },
  'larger-storage': {
    label: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    pricing: {
      label: (option: 'monthly' | 'yearly'): string =>
        option === 'monthly' ? '+$2/mo' : '+$20/yr',
      value: (option: 'monthly' | 'yearly'): number =>
        option === 'monthly' ? 2 : 20
    }
  },
  'customizable-profile': {
    label: 'Customizable Profile',
    description: 'Custom theme on your profile',
    pricing: {
      label: (option: 'monthly' | 'yearly'): string =>
        option === 'monthly' ? '+$2/mo' : '+$20/yr',
      value: (option: 'monthly' | 'yearly'): number =>
        option === 'monthly' ? 2 : 20
    }
  }
} as const;
