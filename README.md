# Portfolio — J. Exaucé Jackson LOUNTADILADIO

Portfolio web immersif à navigation photographique, sans moteur 3D ni dépendance applicative. Le français est la langue initiale; le bouton de langue bascule instantanément entre français et anglais.

## Lancer le site

Servir ce dossier avec un serveur HTTP statique (les modules JavaScript ES ne sont pas pris en charge par tous les navigateurs depuis `file://`). Par exemple, avec Python installé :

```powershell
python -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000`.

## Architecture

- `index.html` : structure, chargement et interface principale.
- `styles.css` : mise en page responsive, mouvement et variables de thème configurables en tête de fichier.
- `js/content.js` : traductions, contenus de sections et navigation section/scène.
- `js/scenes.js` : chemins d’images, textes alternatifs et positions des hotspots.
- `js/app.js` : navigation, transitions, préchargement, langue et préférences de mouvement.
- Le tableau mural présente les compétences techniques; les deux écrans sont réservés aux projets. Le hotspot Expertise ouvre le tableau et Projets ouvre le poste informatique.
- Le cadre placé à droite de la fenêtre présente les langues du profil; elles ne figurent plus avec les certifications.
- `J. Exaucé Jackson LOUNTADILADIO.pdf` : CV téléchargeable; les certifications de `Certifications/` sont consultables depuis la rubrique Formation.
- `Proof of work/` : captures associées aux projets; une image s’affiche par défaut, un bouton permet de déplier les suivantes et les images sont chargées à la demande.
- `assets/brand/exauce-jackson-logo.png` : version recadrée du logo source placé à la racine, utilisée dans l’en-tête sans déformation ni texte redondant.
- `assets/brand/loading-logo.png` : version recadrée du logo secondaire `The-1.PNG`, utilisée sur l’écran de chargement; le fichier source reste à la racine.
- `assets/scenes/README.md` : cadrages, dimensions et consignes pour les photographies du bureau.

Le contenu professionnel reprend les informations du CV fourni. [L’ancien portfolio](https://exaucejacksonl.netlify.app) sert uniquement à compléter les réalisations avec le projet MCCAT E-Stage. Les photographies du bureau seront ajoutées séparément.

## Ajouter les photographies

Suivre les compositions et dimensions de [assets/scenes/README.md](./assets/scenes/README.md), enregistrer les images AVIF ou WebP dans `assets/scenes/`, puis renseigner leurs chemins dans `js/scenes.js`. Les photographies doivent représenter le même bureau. Ajuster les coordonnées des hotspots à la vue panoramique. Les scènes sont chargées à la demande; l’image d’accueil est préchargée au démarrage et la prochaine scène utile est préchargée avant la transition.

Les variables CSS de thème facilitent l’adaptation ultérieure de l’identité visuelle, sans changer le contenu ni la logique de navigation.
