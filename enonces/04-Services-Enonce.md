# Objectifs

Mettre en place un service permettant de calculer l'empreinte carbone d'un voyage en voiture

# Niveau 1

- Créer un service `carbon-footprint-compute` qui permet de calculer l'empreinte carbone d'un voyage en voiture
- Enregistrer ce service dans le module `app.module.ts`
- Déplacer le tableau de voyage du composant `carbon-footprint` vers le service `carbon-footprint-compute`
- Créer une méthode `getVoyages()` qui renvoie un tableau de voyages
- Créer une méthode `addVoyage(voyage)` qui ajoute un voyage au tableau
- Injecter le service `carbon-footprint-compute` dans le composant `carbon-footprint`
- Appeler la méthode `getVoyages()` dans le composant `carbon-footprint` pour récupérer la liste des voyages
- Appeler la méthode `addVoyage(voyage)` dans le composant `carbon-footprint` pour ajouter un voyage aléatoire

# Niveau 2

- Créer une méthode `getResumeVoyages()` qui renvoie un objet composé de deux valeurs : la distance totale en km et la consommation moyenne
- Alimenter les attributs `distanceKm` et `consommationPour100Km` en appelant la méthode `getResumeVoyages()` dans le composant `carbon-footprint`

# Niveau 3

- Ajouter pour chaque voyage, un attribut `quantiteCO2`, dans le service `carbon-footprint-compute` (avec des valeurs arbitraires dans un premier temps)
- Afficher cette quantité de CO2 dans le composant `carbon-footprint`
- Retourner la quantité totale de CO2 dans la méthode `getResumeVoyages()` grâce à un attribut `quantiteCO2Totale`
- Afficher cette quantité totale de CO2 dans le composant `carbon-footprint`
- Calculer la quantité de CO2 par voyage avec la formule suivante : `quantiteCO2 = (distanceKm * consommationPour100Km) / 100 * 2.3`