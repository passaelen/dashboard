# 📊 Dashboard Or, Argent & ETF

## 🧭 Description
Dashboard personnel de suivi patrimonial permettant de visualiser :

- 🟡 Portefeuille **Or (Suisse & Privé)**
- ⚪ Portefeuille **Argent (Suisse)**
- 📈 **ETF Monde & Minières**
- ⚖️ **Allocation globale et ratios**

👉 Application construite sur une **source de données centralisée (`data.js`)**

---

## ⚙️ Fonctionnalités

- 📊 Graphiques **donuts dynamiques**
- 🔄 Répartition automatique Or / Argent / ETF
- 📉 Calcul du **ratio Or / Argent**
- 💰 Suivi des **performances (€ et %)**
- 📈 Graphique d’évolution (10 jours)
- 🔗 Navigation vers pages détaillées :
  - 🇨🇭 Or Suisse  
  - 🇧🇪 Or Privé  
  - 🥈 Argent Suisse  

---

## 🌐 Accès

👉 https://passaelen.github.io/dashboard/

---

## 🧱 Structure

- `index.html` → Dashboard principal  
- `style.css` → Design & UI  
- `data.js` → **Source unique des données (cœur du système)**  
- `or-suisse.html` → Détail Or Suisse  
- `or-belgique.html` → Détail Or Privé  
- `argent-suisse.html` → Détail Argent Suisse  

---

## 🧠 Architecture

```text
DATA → STATE → CALCUL → RENDER
## Version
V1 stable (backup du 19/04/2026)

## À venir
- Amélioration animation donuts ETF
- Optimisation responsive mobile
- Ajout indicateurs complémentaires

## Notes
Projet personnel – non destiné à la production publique
## Notes
Projet personnel – non destiné à la production publique