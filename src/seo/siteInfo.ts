// src/seo/siteInfo.ts
const PROD_URL = import.meta.env.VITE_PROD_URL || '';

export const organization = {
  name: 'Dark Web Technologies',
  url: PROD_URL,
  logo: `${PROD_URL}/logo.png`,
};

export const website = {
  name: 'Dark Web Technologies',
  url: PROD_URL,
};
