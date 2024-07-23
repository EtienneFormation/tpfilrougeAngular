# Objectifs

Mettre en place l'affichage conditionnel des différents composants de l'application

# Niveau 1

- Dans le composant `header`, ajouter un attribut `nomUtilisateur` de type `String` et lui donner une valeur par défaut avec votre prénom
- Afficher dans le composant `header` une phrase de bienvenue du type `Bienvenue <nomUtilisateur>`
- Dans le composant `carbon-footprint`, ajouter un attribut `distanceKm` de type `Number` et lui donner une valeur par défaut avec un nombre de kilomètres parcourus
- Dans le composant `carbon-footprint`, ajouter un attribut `consommationPour100Km` de type `Number` et lui donner une valeur par défaut avec un nombre de kilomètres parcourus
- Afficher dans le composant `carbon-footprint`, afficher la consommation pour 100 kms, le nombre de kilomètres et la consommation totale
- Afficher un message, dans une `div` ou un `span`, dans le composant `carbon-footprint` si la consommation pour 100 km est supérieure à 7 litres qui indique "Attention, votre consommation est élevée"
- Afficher un message, dans une `div` ou un `span`, dans le composant `carbon-footprint` si la consommation pour 100 km est inférieure à 4 litres qui indique "Félicitations, votre consommation est faible"
- Dans le composant `carbon-footprint`, afficher la consommation pour 100 km en rouge si elle est supérieure à 7 litres et en vert si elle est inférieure à 4 litres
- Ajouter une classe CSS `haute-distance` si la distance est supérieure à 500 km et une classe CSS `basse-distance` si la distance est inférieure à 100 km
- La classe `haute-distance` affiche un texte en gras et en vert, la classe `basse-distance` affiche un texte en gras et en rouge
- Ajouter un bouton `+100km` dans le composant `carbon-footprint` qui permet d'ajouter 100 km à la distance au clic sur ce bouton

# Niveau 2

- Dans le composant ``carbon-footprint`, ajouter un tableau qui contient les voyages suivants :
```typescript
    voyages = [
        { distanceKm: 50, consommationPour100Km: 5 },
        { distanceKm: 150, consommationPour100Km: 6 },
        { distanceKm: 250, consommationPour100Km: 7 },
        { distanceKm: 350, consommationPour100Km: 8 },
        { distanceKm: 450, consommationPour100Km: 9 }
    ]
```
- Afficher dans le composant `carbon-footprint` le tableau des voyages, sous le résumé du niveau 1
```html
<h2>Liste des voyages</h2>
<table>
    <thead>
        <tr>
            <th>Distance</th>
            <th>Consommation pour 100 kms</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let voyage of voyages">
            <td>{{ voyage.distanceKm }} km</td>
            <td>{{ voyage.consommationPour100Km }} L</td>
        </tr>
    </tbody>
</table>
```

# Niveau 3

- Ajouter un bouton `Générer voyage` qui ajouter un voyage dans le tableau `voyages` du composant `carbon-footprint` avec des valeurs aléatoires (mais réalistes)
- Remplacer les valeurs fixes `distanceKm` et `consommationPour100Km` par le total des voyages et la moyenne des consommations pour 100 km
- Dans le composant `footer`, ajouter un attribut `date` de type `Date` et lui donner une valeur par défaut avec la date du jour
- Afficher dans le composant `footer` la date du jour au format `JJ/MM/AAAA`, grâce à un pipe
- Dans le composant `carbon-footprint`, utiliser un pipe pour afficher au maximum deux chiffres après la virgule pour la consommation pour 100 km