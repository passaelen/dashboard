const DATA = {
  portfolio: {
    or_suisse_g: 338.68,
    or_belgique_g: 130.62,
    argent_g: 6155.50,

    or_suisse_cost: 19722.90,
    or_belgique_cost: 8467.05,
    argent_cost: 3664.04
  },

  etf: {
    monde: { parts: 11, buy: 1734.64 },
    seniors: { parts: 23, buy: 1815.32 },
    juniors: { parts: 0, buy: 0 },
    or: { parts: 1, buy: 354.22},
    argent: { parts: 7, buy: 369.09},
    petrole: { parts: 8, buy: 384.17}
  }
};

// ⚠️ IMPORTANT
// Les parts ETF sont gérées ici (source de vérité)
// Le Google Sheet doit être mis à jour pour rester cohérent avec l’historique
