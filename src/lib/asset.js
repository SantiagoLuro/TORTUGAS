// src/lib/asset.js
export const asset = (p) =>
  import.meta.env.BASE_URL + (p?.startsWith('img/') ? p : p);
