💼 Portefeuille Dashboard
> Dashboard intelligent de pilotage patrimonial (Or / Argent / ETF)
---
🚀 Aperçu
📍 Vision temps réel
🧭 Lecture de cycle (Ratio Or/Argent + BPGDM)
📊 Visualisation claire et dynamique
📱 Expérience proche d'une app native
---
🧭 Description
Dashboard personnel permettant de suivre :
🟡 Or (Suisse & Privé)
⚪ Argent (Suisse)
📈 ETF (Monde / Minières / Juniors)
⚖️ Allocation globale
🌡️ Climat de marché
---
🧠 Architecture intelligente
Source         Rôle
---
API            Prix Or / Argent
Google Sheet   ETF + historique + BPGDM
JS interne     Calculs & signaux
URL            Transmission du ratio
---
🎨 Design System
🎯 Centralisation des couleurs
Toutes les couleurs sont définies dans `:root`.
✔ Cohérence totale  
✔ Maintenance simplifiée  
✔ Scalabilité UI
---
🌈 UI dynamique
Une source unique (`state`) pilote :
couleurs
graphique
badges
donuts
theme navigateur
---
📱 Theme dynamique
Couleur du navigateur synchronisée avec le marché :
``` js
updateThemeColor(color)
```
---
📊 Fonctionnalités
🔵 Donuts
Métaux (Or Suisse / Belgique / Argent)
ETF (Monde / Seniors / Juniors)
---
📈 Graphique
10 / 30 / 90 jours
Moyenne mobile (MM7)
Couleur dynamique
Gradient
Tooltip avancé
---
📊 KPI
Total global
Variation
Gains €
Performance %
---
⚡ Données
Type          Source
---
Or / Argent   API live
ETF           Google Sheet
Historique    Google Sheet
BPGDM         Google Sheet
---
🧠 Intelligence marché
1. Ratio Or / Argent
Lecture de cycle
Indépendant du court terme
---
2. BPGDM
Timing marché
Comportement ETF
---
3. Signal combiné
Signal   Action
---
🟢       Achat ETF
🔴       Vente
🔥       Priorité métaux
🔵       HOLD
---
🧭 Boussole
Aiguille dynamique
Zones climatiques
Ratio → angle
---
🔗 Transmission
``` url
boussole.html?ratio=61.54
```
✔ rapide  
✔ sans recalcul  
✔ partageable
---
🏗️ Architecture
`data.js` → portefeuille
Google Sheet → historique
APIs → prix
state → moteur central
---
📊 Graph
Chart.js
MM7
Gradient dynamique
Couleur adaptative
---
🛟 Résilience
Fallback API
Cache localStorage
Priorité Sheet
---
⚙️ Optimisations
Cache DOM
Architecture modulaire
Séparation logique / UI
---
🚀 Évolutions
Alertes
Snapshots
Multi-sources
Thèmes dynamiques
---
🎯 Philosophie
> Lire → Comprendre → Ajuster → Tenir
Ce dashboard est une boussole, pas un simple tracker.
---
📸 Screenshots
(à ajouter)
---
🧑‍💻 Auteur
Projet personnel -- pilotage patrimonial intelligent
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
