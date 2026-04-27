🚀 Aperçu
👉 Dashboard personnel de pilotage patrimonial (Or / Argent / ETF)
📍 Vision temps réel + lecture de cycle (Ratio & BPGDM)
📊 Dashboard Or, Argent & ETF intelligent et évolutif
---
🧭 Description
Dashboard personnel de suivi patrimonial permettant de visualiser en
temps réel :
🟡 Portefeuille Or (Suisse & Privé)  
⚪ Portefeuille Argent (Suisse)  
📈 ETF Monde & Minières  
⚖️ Allocation globale et ratios  
🌡️ Lecture climatique du marché (Ratio Or/Argent + BPGDM)
---
🎨 Design System & UI
🎯 Centralisation des couleurs
Toutes les couleurs sont centralisées dans `:root`.
👉 Avantages : - Cohérence visuelle globale - Maintenance simplifiée -
Scalabilité UI
---
🌈 Synchronisation dynamique
Une source de vérité unique (`state`) pilote : - Couleurs UI -
Graphique - Badges - Donuts - Theme navigateur mobile
---
⚙️ Fonctionnalités
📊 Visualisation
Donuts dynamiques (Métaux / ETF)
Graphique 10 / 30 / 90 jours
Moyenne mobile (MM7)
Gradient dynamique
Tooltip détaillé
---
⚡ Données
Or & Argent → API live
ETF → Google Sheet
Historique → Google Sheet
BPGDM → Google Sheet
---
🧠 Intelligence
Ratio Or / Argent → cycle
BPGDM → timing
Signal combiné
---
📈 Performance
Total global
Variation
Gains € et %
---
🧭 Module Boussole
Aiguille dynamique
Zones climatiques
Transmission via URL
---
🏗️ Architecture
data.js → portefeuille
Sheet → historique
APIs → métaux
State centralisé
---
⚙️ Optimisations
Cache DOM
Architecture modulaire
Séparation logique / UI
---
🎯 Philosophie
Une boussole patrimoniale :
Lire → Comprendre → Ajuster → Tenir
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
