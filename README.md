📊 Dashboard Or, Argent & ETF

---

🧭 Description

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

⚙️ Fonctionnalités

📊 Visualisation

- Donuts dynamiques :
  
  - Métaux (Or Suisse / Or Privé / Argent)
  - ETF (Monde 🔵 / Minières 🟢 / Juniors ⚪)

👉 Couleurs harmonisées entre donuts et légendes (cohérence visuelle totale)

- Graphique d’évolution :
  
  - 10 / 30 / 90 jours
  - Moyenne mobile (MM7)
  - Couleur dynamique (hausse / baisse)
  - Tooltip détaillé (€ / Δ€ / %)

---

⚡ Données en temps réel

- 🟡 Or → API live (converti en €)
- ⚪ Argent → API live (converti en €)
- 📈 ETF → clôture (Google Sheet)
- 📊 Historique → Google Sheet
- 🧠 BPGDM → Google Sheet (live + fixé)

👉 Toutes les valeurs sont exprimées en € (vision patrimoniale réelle)

---

🧠 Intelligence intégrée

- Calcul du ratio Or / Argent (basé sur prix €)

- Signal marché combiné :
  
  - Ratio → climat macro
  - BPGDM → timing ETF

- Messages dynamiques :
  
  - Zones (Nord / Transition / Chaud / Extrême)
  - Actions suggérées

---

📈 Suivi de performance

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

🎛️ Interactions

- Timeframe : 10J / 30J / 90J
- Hover tactile fluide
- Animations (graph + donuts)
- Refresh manuel
- Navigation multi-pages

---

🧭 Module Boussole

Nouvelle page dédiée à la lecture visuelle du cycle :

- 🧭 Affichage du ratio sous forme d’aiguille
- Mapping dynamique ratio → angle
- Zones visuelles (Nord / Sud / Transition)
- Calibration manuelle précise (centre + angle + longueur)

🔗 Transmission intelligente

Le ratio est transmis via l’URL :

boussole.html?ratio=61.54

👉 Avantages :

- Aucun recalcul
- Aucune dépendance externe
- Navigation rapide et fiable
- Partage possible (snapshot de marché)

---

🏗️ Architecture

Sources de données

- "data.js" → portefeuille (quantités & coûts)
- Google Sheet → historique + ETF + BPGDM
- URL → transport du ratio entre pages

---

APIs utilisées

- Gold API (XAU / XAG)
- Exchange Rate API (USD → EUR)

---

⚙️ Logique

- Métaux → prix live USD convertis en €/g
- ETF → valorisation via Sheet
- Total → Métaux + ETF
- Ratio → calcul live (€/€)
- Boussole → affichage via URL (sans recalcul)

---

📊 Graphique

- Chart.js
- Slice dynamique (timeframe)
- Moyenne mobile intégrée
- Couleur adaptative (trend)

---

🛟 Résilience des données

BPGDM

- Source principale → Google Sheet (live + fixée)
- Source secondaire (backup) → scraping StockCharts

👉 Usage :

- Backup uniquement (non prioritaire)
- Validation possible entre sources
- Sécurisation contre panne ou absence de données

---

🧠 Intelligence & Lecture du Marché

Le dashboard ne se limite pas à afficher des données :
il interprète le marché via une double lecture structurée.

---

🧭 1. Climat macro (Ratio Or / Argent)

Le ratio agit comme une boussole de cycle :

- ❄️ Nord → accumulation Argent
- ⚖️ Zone pivot → préparation des arbitrages
- 🔥 Sud → rotation Argent → Or

👉 Le ratio définit le contexte global, indépendant du bruit court terme.

---

📊 2. Timing marché (BPGDM)

Le BPGDM apporte une lecture comportementale :

- Zones basses → opportunités ETF (accumulation)
- Zones hautes → prudence / rotation

👉 Il agit comme un indicateur de timing, complémentaire au ratio.

---

⚖️ 3. Signal combiné

Les deux indicateurs sont fusionnés pour produire un signal opérationnel unique :

- 🟢 Achat ETF (si BPGDM bas + climat favorable)
- 🔴 Vente / rotation (si BPGDM élevé)
- 🔥 Priorité métaux (si ratio bas)
- 🔵 HOLD (zone neutre)

👉 Le système ne donne pas une prédiction, mais une lecture cohérente du moment.

---

🧭 4. Boussole visuelle

Une représentation graphique du ratio permet une lecture immédiate :

- Aiguille dynamique (mapping ratio → angle)
- Zones visuelles (Nord / Sud / Transition)
- Lecture intuitive du cycle

👉 Permet de comprendre sans lire.

---

🧠 5. Principe fondamental

Le système repose sur une séparation claire :

- Ratio → structure de cycle
- BPGDM → timing d’intervention

👉 Objectif :

« Ne pas subir le marché, mais s’y positionner avec cohérence. »

---

🚀 Évolutions possibles

- 📩 Alertes automatiques (ex : ratio 50)
- 📸 Snapshots de cycle (URL partageable)
- 🔄 Multi-sources de validation
- 📊 Historique enrichi des signaux

---

🎯 Philosophie

Ce dashboard est une boussole patrimoniale, pas un simple tracker.

- 📍 Lire le marché
- 🧭 Comprendre les cycles
- ⚖️ Ajuster les allocations
- 🧠 Garder une vision long terme

---
📝 Notes personnelles

- Total global = additionne les métaux en temps réel (via API) et les ETF sur leur dernière clôture reprise dans le sheet.

- KPI (%) = comparent le prix actuel de l’or et de l’argent (temps réel via API) à leur dernière clôture enregistrée dans le sheet.

- Donuts = calculés en temps réel :
  Métaux → basés sur les prix live (API)
  ETF → basés sur les clôtures reprises dans le sheet

- Graphique = basé sur les valeurs de clôture reprises dans le sheet.

- Bloc Métaux Précieux = entièrement calculé en temps réel via API.

- Bloc ETF = affiché sur base des valeurs de clôture de la veille.
