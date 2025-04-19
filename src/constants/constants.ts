export const INITIAL_CATEGORIES = ['Food', 'Furniture', 'Accessory'];

export const API_ENDPOINTS = {
  CAT_FACTS: 'https://catfact.ninja/fact',
};

export const FEATURE_FLAGS = {
  USE_INDEXEDDB: process.env.USE_INDEXEDDB === 'true',
};
