💼 Dashboard Or, Argent & ETF

🚀 Aperçu

👉 Dashboard personnel de pilotage patrimonial (Or / Argent / ETF).

📍 Vision patrimoniale actualisée, suivi des performances et lecture des cycles de marché.

🧭 Un outil centralisé pour suivre son patrimoine, comprendre les mouvements du marché et piloter ses stratégies d'investissement.

---

📊 Dashboard Or, Argent & ETF

🧭 Description

Dashboard personnel de suivi patrimonial permettant de visualiser :

- 🟡 Portefeuille Or (Suisse & Belgique)
- ⚪ Portefeuille Argent (Suisse)
- 📈 ETF Monde
- ⛏️ ETF Minières Seniors & Juniors
- 🟡 ETF Or
- ⚪ ETF Argent
- 🛢️ ETF Pétrole
- ⚖️ Allocation globale et répartition des actifs
- 🌡️ Lecture climatique du marché (Ratio Or/Argent)
- 📊 Indicateurs de marché (Score & Momentum)
- 📉 BPGDM et signaux combinés

👉 Architecture hybride :

- ⚡ API live → métaux précieux
- 🧾 Google Sheets → ETF, historique et indicateurs
- 🔗 API TwelveData via proxy serveur → secours pour les prix ETF
- 🧠 Calculs internes → valorisation, performances, ratios et signaux
- 💾 localStorage → cache et résilience
- 🧭 URL state → transmission du ratio entre pages

---

⚙️ Fonctionnalités

📊 1. Tableau de bord patrimonial

Total global

- Valorisation totale du portefeuille
- Métaux + ETF
- Variation en euros par rapport à la dernière clôture
- Variation en pourcentage
- Indicateur visuel positif / négatif

Indicateurs KPI

- 🟡 Valorisation totale Or
- ⚪ Valorisation totale Argent
- ⚖️ Ratio Or / Argent
- Variation des cours des métaux par rapport à leur dernière clôture historique disponible

Répartition patrimoniale

Deux donuts dynamiques :

Métaux

- Or Suisse
- Or Belgique
- Argent Suisse

ETF

- Monde
- Seniors
- Juniors
- Or
- Argent
- Pétrole

👉 Affichage des pourcentages et des montants.

👉 Donuts interactifs : toucher le centre permet d'afficher le détail des valorisations.

👉 Allocation globale calculée dynamiquement.

---

⚡ 2. Données en temps réel

Métaux précieux

Sources :

- Gold API → XAU / XAG
- ExchangeRate API → conversion USD vers EUR

Calculs :

- Prix de l'or en €/g
- Prix de l'argent en €/g
- Valorisation des stocks physiques
- Ratio Or / Argent calculé en temps réel

Particularité :

La valorisation de l'argent physique intègre un coefficient de revente de 0,965 afin de tenir compte de la décote retenue dans le modèle patrimonial.

ETF

Source principale :

- Google Sheets → dernières clôtures enregistrées.

Source secondaire :

- Proxy serveur Vercel "/api/etf-prices"
- TwelveData → récupération des prix ETF en secours.

ETF suivis :

Catégorie| Actif
🌍 Monde| ETF Monde
⛏️ Seniors| Minières aurifères
🚀 Juniors| Minières juniors
🟡 Or| ETF Or
⚪ Argent| ETF Argent
🛢️ Pétrole| ETF Pétrole

👉 Les ETF sont valorisés en euros.

👉 Les prix de clôture issus de Google Sheets restent prioritaires lorsque les données sont disponibles.

---

📈 3. Graphique d'évolution patrimoniale

Graphique dynamique basé sur l'historique Google Sheets.

Timeframes

- 10 jours
- 30 jours
- 90 jours
- 180 jours

Fonctionnalités

- 📈 Évolution de la valorisation globale
- Moyenne mobile MM7
- Couleur dynamique selon la tendance
- Animation graphique
- Tooltip détaillé
- Variation en euros
- Variation en pourcentage
- Identification des journées d'achat
- Marqueurs visuels animés pour les achats
- Détail des achats dans les tooltips
- Agrandissement plein écran par interaction tactile

👉 Le graphique permet de suivre l'évolution du patrimoine et de replacer les achats dans leur contexte historique.

---

🧠 4. Intelligence intégrée

Le dashboard combine plusieurs indicateurs pour proposer une lecture structurée du marché.

⚖️ Ratio Or / Argent

Le ratio est calculé à partir des prix des métaux convertis en euros.

Il constitue l'indicateur structurel de la stratégie Or / Argent.

Zones climatiques

- ❄️ Hibernation
- 🧊 Zone Nord
- 🌤️ Transition
- ☀️ Zone chaude
- 🔥 Très chaud
- 🚨 Extrême

Lecture stratégique

- Ratio élevé → accumulation progressive d'argent.
- Zone de transition → préparation à l'arbitrage.
- Ratio faible → rotation progressive de l'argent vers l'or.

👉 Le ratio permet de suivre le cycle relatif entre les deux métaux.

📊 BPGDM

Indicateur de momentum des sociétés minières aurifères.

Sources :

- Google Sheets → valeur live et historique.
- Historique de secours en cas d'indisponibilité de la valeur live.

Lecture stratégique

- Zones basses → opportunités potentielles sur les minières.
- Zones intermédiaires → conservation et observation.
- Zones hautes → prudence et allègement éventuel.

Seuils utilisés dans les signaux :

- ≤ 5 : achat massif potentiel.
- ≤ 3 : achat ultra-agressif potentiel.
- ≥ 60 : allègement éventuel des Juniors.
- ≥ 70 : signal de vente potentiel des Seniors.

🌡️ Score marché

Indicateur synthétique permettant de situer le contexte général du marché.

Cinq niveaux :

Score| Lecture
< 0,10| 🚨 Stress extrême
< 0,25| 🔻 Marché faible
< 0,50| ⚖️ Marché équilibré
< 0,75| 🔺 Marché solide
≥ 0,75| 🔥 Marché en excès

📉 Momentum

Mesure la pression directionnelle du marché.

- Pression haussière forte
- Pression haussière
- Neutre
- Pression baissière
- Pression baissière forte

Le score et le momentum sont issus de Google Sheets.

🧠 Signal combiné

Le dashboard combine :

- Ratio Or / Argent → climat macro et arbitrage des métaux.
- BPGDM → timing potentiel sur les ETF miniers.

Signaux affichés :

- 🟢 Achat Seniors / Juniors
- 🟡 Achat Seniors
- 🔴 Vente Seniors vers ETF Monde
- 🟠 Allègement Juniors
- 🔥 Rotation Argent vers Or
- ⚖️ Transition métaux
- 🔵 HOLD global
- 📊 Marché neutre

👉 Le système applique une hiérarchie de règles pour déterminer le signal affiché.

Les signaux constituent une aide à la lecture du marché et non des ordres d'investissement automatiques.

---

🧭 5. Module Boussole

Page indépendante dédiée à la lecture visuelle du ratio Or / Argent.

Fonctionnalités :

- Affichage du ratio sous forme d'aiguille.
- Mapping dynamique ratio → angle.
- Zones climatiques.
- Calibration manuelle.
- Transmission du ratio depuis le dashboard.

Transmission URL

"boussole.html?ratio=61.54"

Avantages :

- Aucun recalcul du ratio dans la transmission.
- Aucune dépendance externe pour transmettre la valeur.
- Navigation rapide.
- Possibilité de partage du lien.

---

📊 6. Suivi des performances

Métaux physiques

Pour chaque position :

- Quantité détenue.
- Prix spot en €/g.
- Valorisation.
- Gain ou perte en euros.
- Performance en pourcentage.

ETF

Pour chaque position :

- Nombre de parts.
- Prix de référence.
- Valorisation.
- Gain ou perte en euros.
- Performance en pourcentage.

Performance globale

- Valorisation totale.
- Variation par rapport à la dernière clôture historique.
- Écart en euros.
- Écart en pourcentage.

👉 Les performances individuelles sont calculées à partir des capitaux d'achat enregistrés dans "data.js".

---

🎛️ 7. Interactions et ergonomie

- 🔄 Actualisation manuelle.
- 🎯 Mode Focus.
- 📱 Interface responsive.
- Donuts interactifs.
- Animations des répartitions.
- Graphique tactile.
- Agrandissement plein écran.
- Navigation multi-pages.
- Tooltips détaillés.
- Mise en évidence des performances positives et négatives.
- Marqueurs des achats sur le graphique.

---

🏗️ 8. Architecture technique

Sources de données

Source| Utilisation
"data.js"| Quantités, capitaux investis et portefeuille
"achats.js"| Historique des achats et marqueurs
Google Sheets| Historique, ETF, BPGDM, score et momentum
Gold API| Prix XAU / XAG
ExchangeRate API| Conversion USD → EUR
TwelveData| Prix ETF via proxy serveur
localStorage| Cache des données

Fichiers principaux

- "index.html" → dashboard principal et logique de calcul.
- "data.js" → données patrimoniales.
- "achats.js" → historique des achats.
- "couleurs.css" → centralisation des couleurs.
- "style.css" → interface et présentation.
- "boussole.html" → module Boussole.
- "api/etf-prices.js" → proxy ETF.
- "sw.js" → service worker.
- "manifest.json" → configuration PWA.
- "birthday.js" → script complémentaire.

Bibliothèques

- Chart.js → graphiques.
- JavaScript natif → calculs et interactions.
- CSS → interface, animations et donuts.

---

🔐 9. Sécurité API

Les prix ETF de secours passent par un endpoint serveur :

"/api/etf-prices"

La clé TwelveData est stockée dans une variable d'environnement :

"TWELVEDATA_API_KEY"

Configuration Vercel :

1. Ajouter la variable d'environnement.
2. Déployer le projet.
3. Vérifier le fonctionnement du proxy.

⚠️ Ne jamais placer la clé API dans "index.html" ou "data.js".

---

🛟 10. Résilience et gestion du cache

Le dashboard utilise plusieurs mécanismes de cache.

Historique Google Sheets

- Cache localStorage.
- Durée de validité : 5 minutes.
- Fallback sur les données en cache si nécessaire.

Prix ETF

- Cache localStorage.
- Durée de validité : 30 minutes.
- Priorité Google Sheets.
- Secours via le proxy TwelveData.
- Valeurs de secours pour certains prix si les données API sont invalides.

Chargement

- Récupération parallèle des données historiques et des cours des métaux.
- Gestion des erreurs.
- Indicateur visuel de chargement.
- Actualisation manuelle.
- Protection contre les appels simultanés à "init()".

👉 Objectif : maintenir une continuité d'affichage et limiter les dépendances aux services externes.

---

📱 11. Progressive Web App (PWA)

Le dashboard intègre les éléments suivants :

- "manifest.json"
- "sw.js"
- Icône dédiée.
- Couleur de thème dynamique.
- Enregistrement du service worker.

👉 Architecture prévue pour une utilisation proche d'une application mobile.

---

⚙️ 12. Optimisations techniques

- Cache DOM avec "setText()".
- State centralisé.
- Séparation des fonctions de calcul et de rendu.
- Cache localStorage.
- Chargement parallèle des données.
- Gestion des erreurs API.
- Animations avec requestAnimationFrame.
- Réduction des mises à jour DOM inutiles.
- Centralisation des couleurs CSS.
- Proxy serveur pour la clé API TwelveData.

---

🎨 13. Gestion des couleurs

Centralisation dans "couleurs.css".

Variables dédiées :

- Or Suisse.
- Or Belgique.
- Argent.
- ETF Monde.
- ETF Seniors.
- ETF Juniors.
- ETF Or.
- ETF Argent.
- ETF Pétrole.
- Performances positives et négatives.
- Zones du marché.
- Graphique et tooltip.
- BPGDM.

👉 Cohérence visuelle entre les donuts, les légendes, les indicateurs et les graphiques.

---

🚀 14. Évolutions possibles

- 📩 Alertes automatiques.
- 📸 Snapshots partageables.
- 🔄 Sources de données complémentaires.
- 📊 Historique enrichi.
- 📱 Optimisation mobile supplémentaire.
- 📈 Analyse avancée des performances.
- 📊 Suivi comparatif des différentes stratégies.

---

🎯 Philosophie

Ce dashboard est une boussole patrimoniale personnelle.

Il ne s'agit pas simplement de consulter des cours, mais de comprendre la structure du patrimoine et les cycles de marché.

Ses quatre principes :

- 📍 Lire.
- 🧭 Comprendre.
- ⚖️ Ajuster.
- 🧠 Anticiper.

Principe fondamental

Ratio = Structure

BPGDM = Timing

Score = Contexte de marché

Momentum = Direction et pression

👉 Objectif : ne pas subir le marché, mais s'y positionner avec cohérence.

---

📝 Notes personnelles

- Total global = métaux (API live) + ETF (Google Sheets en priorité).
- Métaux = valorisation en temps réel.
- Argent physique = coefficient de revente de 0,965.
- ETF = valorisation selon les dernières clôtures disponibles.
- Proxy TwelveData = solution de secours.
- BPGDM = valeur live avec historique de secours.
- Score et momentum = données Google Sheets.
- Donuts métaux = valorisation live.
- Donuts ETF = valorisation selon les prix de référence disponibles.
- Graphique = historique Google Sheets.
- Performance = valorisation actuelle comparée au capital d'achat enregistré.
- Ratio = calcul dynamique en euros.
- Boussole = transmission du ratio par URL.

---

Projet : Dashboard personnel Or / Argent / ETF

Architecture : JavaScript / HTML / CSS / Google Sheets / Vercel / Chart.js

Finalité : Pilotage patrimonial et lecture stratégique des cycles de marché.