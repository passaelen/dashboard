🚀 Aperçu

👉 Dashboard personnel de pilotage patrimonial (Or / Argent / ETF)

📍 Vision temps réel + lecture de cycle (Ratio & BPGDM)

📊 Dashboard Or, Argent & ETF intelligent et évolutif

🧭 Description

Dashboard personnel de suivi patrimonial permettant de visualiser en temps réel :

🟡 Portefeuille Or (Suisse & Privé)
⚪ Portefeuille Argent (Suisse)
📈 ETF Monde & Minières
⚖️ Allocation globale et ratios
🌡️ Lecture climatique du marché (Ratio Or/Argent + BPGDM)

🧠 Architecture hybride intelligente

⚡ API live → métaux (or & argent)
🧾 Google Sheet → ETF + historique + BPGDM
🧠 Calcul interne → ratio & signaux
🔗 URL state → transmission du ratio entre pages

👉 Une architecture pensée pour la robustesse + indépendance des sources

🎨 Design System & UI
🎯 Centralisation des couleurs

Toutes les couleurs sont centralisées dans :root :

:root {
  --or-suisse: #facc15;
  --or-belgique: #f59e0b;
  --argent: #9ca3af;

  --etf-monde: #38bdf8;
  --etf-seniors: #22c55e;
  --etf-juniors: #64748b;

  --perf-positive: #22c55e;
  --perf-negative: #ef4444;
}

👉 Avantages :

Cohérence visuelle globale
Maintenance simplifiée
Scalabilité UI
🌈 Synchronisation dynamique

Le dashboard repose sur une source de vérité unique (state) qui pilote :

Couleurs UI
Graphique
Badges
Donuts
Theme navigateur mobile (theme-color)

👉 Résultat : une interface cohérente et vivante

📱 Theme dynamique (mobile / PWA)

La couleur du navigateur s’adapte automatiquement :

updateThemeColor(color);

👉 Synchronisé avec :

état du marché
signaux visuels
⚙️ Fonctionnalités
📊 Visualisation
Donuts dynamiques
Métaux : Or Suisse / Or Belgique / Argent
ETF : Monde 🔵 / Seniors 🟢 / Juniors ⚪

👉 Couleurs synchronisées avec le design system

Graphique d’évolution
10 / 30 / 90 jours
Moyenne mobile (MM7)
Couleur adaptative (hausse / baisse)
Gradient dynamique
Tooltip détaillé (€ / Δ€ / %)
Allocation visuelle
🟡 Or
⚪ Argent
💎 Métaux
📊 ETF

👉 Lecture instantanée du portefeuille

⚡ Données en temps réel

🟡 Or → API live (€/g)
⚪ Argent → API live (€/g)
📈 ETF → Google Sheet (clôtures)
📊 Historique → Google Sheet
🧠 BPGDM → Google Sheet (live + fixé)

👉 Vision patrimoniale complète en €

🧠 Intelligence intégrée
⚖️ Ratio Or / Argent
Calcul live en €
Lecture de cycle long
📊 BPGDM
Indicateur comportemental
Timing ETF
🔀 Signal combiné

🟢 Achat ETF
🔴 Vente / rotation
🔥 Priorité métaux
🔵 HOLD

👉 Lecture cohérente, non prédictive

📈 Suivi de performance
Total global (live)
Variation vs clôture
Gains / pertes :
en €
en %

👉 Inclut :

variation prix
effet devise USD → EUR
🎛️ Interactions
Timeframe : 10J / 30J / 90J
Animations fluides (donuts + graph)
Hover tactile optimisé
Refresh manuel
Navigation multi-pages
🧭 Module Boussole

Visualisation du cycle via le ratio :

Aiguille dynamique
Mapping ratio → angle
Zones climatiques visuelles
🔗 Transmission intelligente
boussole.html?ratio=61.54

👉 Avantages :

Aucun recalcul
Ultra rapide
Partage possible
🏗️ Architecture
Sources
data.js → portefeuille
Google Sheet → historique + ETF + BPGDM
URL → transport du ratio
APIs → métaux + devise
⚙️ Logique
Métaux → prix live
ETF → Sheet
Ratio → calcul interne
Graph → historique enrichi
📊 Graphique
Chart.js
Moyenne mobile (MM7)
Gradient dynamique
Couleur liée à la tendance
🛟 Résilience
Priorité → Google Sheet
Fallback → cache / API
localStorage → ETF

👉 Système robuste face aux erreurs

🧠 Lecture du marché
1. Climat (Ratio)

❄️ Nord → accumulation Argent
⚖️ Pivot → préparation
🔥 Sud → rotation vers Or

2. Timing (BPGDM)
Bas → opportunités
Haut → prudence
3. Fusion

👉 Signal unique cohérent

🧭 Principe

Ratio = structure
BPGDM = timing

⚙️ Optimisations techniques
Cache DOM (setText)
Architecture modulaire :
renderKPI
renderAllocation
renderTables
renderDonuts
State centralisé
Séparation logique / UI
🚀 Évolutions possibles
Alertes automatiques
Snapshots partageables
Multi-sources validation
Historique enrichi
Thèmes dynamiques avancés
🎯 Philosophie

Ce dashboard est une boussole patrimoniale :

📍 Lire le marché
🧭 Comprendre les cycles
⚖️ Ajuster les allocations
🧠 Garder une vision long terme

📝 Notes
Métaux → temps réel
ETF → clôtures veille
Graph → historique Sheet
Allocation → dynamique
------------------------------------------------------------------------

📝 Notes personnelles

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
