# Scènes photographiques

L’application attend des photographies cohérentes d’un seul et même bureau. Les fichiers sont facultatifs : tant qu’une image n’est pas déclarée, l’interface affiche un emplacement clairement identifié, sans image de stock ni contenu fictif.

## Emplacements et cadrages

| Clé de scène | Fichier conseillé | Composition |
| --- | --- | --- |
| `office` | `office-overview.avif` | Vue d’ensemble horizontale du bureau premium, fenêtre et lumière naturelle visibles, double écran avec environnements de programmation, clavier, souris, livres, documents et smartphone. Garder les objets à hauteur des hotspots de la scène d’accueil. |
| `desk` | `desk-detail.avif` | Même bureau, rapprochement sur le plateau et les accessoires, angle naturel légèrement en plongée. |
| `computer` | `computer-detail.avif` | Même bureau, écrans et poste de travail en focus, affichage de code crédible et non lisible comme une fausse marque. |
| `books` | `books-detail.avif` | Même bureau, cadrage des livres techniques et éléments de formation. |
| `documents` | `documents-detail.avif` | Même bureau, cadrage des documents, carnet et éléments professionnels. |
| `phone` | `phone-detail.avif` | Même bureau, smartphone et accessoires personnels dans le contexte du bureau. |

## Recommandations de livraison

- Exporter en AVIF ou WebP, profil sRGB, sans métadonnées personnelles.
- Vue d’ensemble : 2400 × 1500 px minimum (ratio 8:5), idéalement 2880 × 1800 px.
- Détails : 1800 × 1350 px minimum (ratio 4:3), idéalement 2400 × 1800 px.
- Prévoir des prises de vue réellement réalisées dans le même espace : mobilier, objets, proportions, heure et direction de lumière constants. Utiliser un vrai changement de point de vue entre les scènes (plan large d’ensemble, puis gros plans à hauteur et en plongée légère); un zoom logiciel seul ne remplace pas ces angles.
- Garder les objets principaux dans la zone centrale pour préserver le cadrage sur mobile.
- Enregistrer les fichiers dans ce dossier puis renseigner leurs chemins dans `js/scenes.js`. L’interface ne charge que la scène visitée et précharge la prochaine scène utile.
- Les hotspots de la vue d’ensemble sont placés en coordonnées pourcentuelles dans `js/scenes.js`; ajuster `x` et `y` aux photographies finales. Les caméras de chaque détail (point focal et facteur de zoom distincts pour bureau et mobile) se règlent dans `camera`.

Les formes géométriques visibles dans l’emplacement d’attente ne sont pas des images de remplacement : elles indiquent uniquement la disposition prévue. Elles disparaissent dès qu’une photographie de scène est configurée.
