## 🚀 Aperçu

👉 Dashboard personnel de pilotage patrimonial (Or / Argent / ETF)

📍 Vision temps réel + lecture de cycle (Ratio & BPGDM)

---

# 📊 Dashboard Or, Argent & ETF

---

## 🧭 Description

Dashboard personnel de suivi patrimonial permettant de visualiser en temps réel :

- 🟡 Portefeuille Or (Suisse & Privé)
- ⚪ Portefeuille Argent (Suisse)
- 📈 ETF Monde & Minières
- ⚖️ Allocation globale et ratios
- 🌡️ Lecture climatique du marché (Ratio Or/Argent + BPGDM)

👉 Architecture hybride intelligente :

- ⚡ API live → métaux (or & argent)
- 🧾 Google Sheet → ETF + historique + BPGDM
- 🧠 Calcul interne → ratio & signaux
- 🔗 URL state → transmission du ratio entre pages

---

## ⚙️ Fonctionnalités

### 📊 Visualisation

- Donuts dynamiques :
  - Métaux (Or Suisse / Or Privé / Argent)
  - ETF (Monde 🔵 / Minières 🟢 / Juniors ⚪)

👉 Couleurs harmonisées entre donuts et légendes (cohérence visuelle totale)

- Graphique d'évolution :
  - 10 / 30 / 90 jours
  - Moyenne mobile (MM7)
  - Couleur dynamique (hausse / baisse)
  - Tooltip détaillé (€ / Δ€ / %)

- Allocation visuelle (pills UI) :
  - 🟡 Or
  - ⚪ Argent
  - 💎 Métaux
  - 📊 ETF

👉 Lecture rapide et claire de la structure du portefeuille

---

## ⚡ Données en temps réel

- 🟡 Or → API live (converti en €)
- ⚪ Argent → API live (converti en €)
- 📈 ETF → clôture (Google Sheet)
- 📊 Historique → Google Sheet
- 🧠 BPGDM → Google Sheet (live + fixé)

👉 Toutes les valeurs sont exprimées en € (vision patrimoniale réelle)

---

## 🧠 Intelligence intégrée

- Calcul du ratio Or / Argent (basé sur prix €)

- Signal marché combiné :
  - Ratio → climat macro
  - BPGDM → timing ETF

- Messages dynamiques :
  - Zones (Nord / Transition / Chaud / Extrême)
  - Actions suggérées

---

## 📈 Suivi de performance

- Total global (live)
- Variation vs dernière clôture

- Gains / pertes :
  - Par actif
  - En €
  - En %

👉 Les % KPI intègrent :
- Variation du prix
- Effet devise USD → EUR

➡️ Représentation réelle de la performance portefeuille

---

## 🎛️ Interactions

- Timeframe : 10J / 30J / 90J
- Hover tactile fluide
- Animations (graph + donuts)
- Refresh manuel
- Navigation multi-pages

---

## 🧭 Module Boussole

Nouvelle page dédiée à la lecture visuelle du cycle :

- 🧭 Affichage du ratio sous forme d'aiguille
- Mapping dynamique ratio → angle
- Zones visuelles (Nord / Sud / Transition)
- Calibration manuelle précise

### 🔗 Transmission intelligente

boussole.html?ratio=61.54

👉 Avantages :
- Aucun recalcul
- Aucune dépendance externe
- Navigation rapide
- Partage possible

---

## 🏗️ Architecture

### Sources de données

- `data.js` → portefeuille
- Google Sheet → historique + ETF + BPGDM
- URL → transport du ratio

### APIs utilisées

- Gold API (XAU / XAG)
- Exchange Rate API (USD → EUR)

---

## ⚙️ Logique

- Métaux → prix live USD convertis en €/g
- ETF → valorisation via Sheet
- Total → Métaux + ETF
- Ratio → calcul live
- Boussole → affichage via URL

---

## 📊 Graphique

- Chart.js
- Timeframe dynamique
- Moyenne mobile (MM7)
- Couleur adaptative

---

## 🛟 Résilience des données

### BPGDM

- Source principale → Google Sheet
- Source secondaire → fallback cache

👉 Sécurisation automatique des données

---

## 🧠 Intelligence & Lecture du Marché

### 🧭 1. Climat macro (Ratio)

- ❄️ Nord → accumulation Argent
- ⚖️ Pivot → préparation
- 🔥 Sud → rotation vers Or

---

### 📊 2. Timing (BPGDM)

- Zones basses → opportunités ETF
- Zones hautes → prudence

---

### ⚖️ 3. Signal combiné

- 🟢 Achat ETF
- 🔴 Vente
- 🔥 Métaux prioritaires
- 🔵 HOLD

---

### 🧭 4. Boussole visuelle

- Mapping ratio → angle
- Lecture intuitive

---

### 🧠 5. Principe fondamental

- Ratio = structure
- BPGDM = timing

👉 Objectif :
Ne pas subir le marché, mais s’y positionner avec cohérence.

---

## ⚙️ Optimisations techniques

- Cache DOM (`setText`)
- Architecture modulaire
- State centralisé
- Cache localStorage (ETF)
- Séparation logique / affichage

---

## 🎨 Gestion des couleurs

- Centralisation complète dans `couleurs.css`
- Cohérence UI entre donuts, légendes et graph
- Maintenance simplifiée
- Prêt pour évolution (thèmes futurs)

---

## 🚀 Évolutions possibles

- 📩 Alertes automatiques
- 📸 Snapshots partageables
- 🔄 Multi-sources
- 📊 Historique enrichi
- 📱 Optimisation mobile

---

## 🎯 Philosophie

Ce dashboard est une boussole patrimoniale.

- 📍 Lire
- 🧭 Comprendre
- ⚖️ Ajuster
- 🧠 Anticiper

---

## 📝 Notes personnelles

-   Total global = métaux (API live) + ETF (clôtures Sheet)

-   KPI (%) :

    -   comparaison prix live vs clôture Sheet
    -   inclut effet devise

-   Donuts :

    -   Métaux → temps réel (API)
    -   ETF → clôture Sheet

-   Graphique :

    -   basé sur historique Sheet

-   Bloc Métaux :

    -   100% temps réel

-   Bloc ETF :

    -   basé sur clôtures veille

-   Allocation :

    -   calculée dynamiquement en temps réel
