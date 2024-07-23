# Objectifs

Mettre en place des formulaires pour permettre à l'utilisateur de se logger, de saisir de nouveaux voyages et de renseigner son profil.

# Niveau 1

- Ajouter un formulaire sur le composant `home` qui permet à l'utilisateur de saisir un login et un mot de passe, en utilisant simplement des directives ngModel et click sur le bouton `Accéder à mon profil` (ou un ngSubmit sur le formulaire)
- Le login doit faire au moins trois caractères, le mot de passe au moins 6 caractères (faire un controle de surface basique, sans validateur)
- Changer l'intitulé du bouton `Accéder à mon profil` en `Se connecter` et vérifier l'intégrité des données saisies avant la redirection.
- Si des erreurs existent dans le formulaire, afficher un message d'erreur en dessous du formulaire expliquant la raison de l'erreur (toujours sans validateur)

# Niveau 2

- Ajouter un formulaire sur le composant `carbon-footprint-form` qui permet à l'utilisateur de saisir un nouveau voyage
- Un voyage est une distance (> 0), une consommation pour 100 kms (> 0) et une date
- Appeler la méthode `addVoyage` du service `CarbonFootprintComputeService` pour ajouter le voyage


# Niveau 3

- Ajouter une liste déroulant avec le type de voyage `voiture`, `train` ou `avion` dans le composant `carbon-footprint-form`
- Dans le cas d'un voyage en voiture, on demande la consommation pour 100 kms, pas dans le cas d'un voyage en train ou en avion
- Modifier la formule de calcul du service `carbon-footprint-compute` pour calculer l'empreinte carbone en fonction du type de voyage est la suivante :
    - `voiture` : `quantiteCO2 = (distanceKm * consommationPour100Km) / 100 * 2.3`
    - `train` : `quantiteCO2 = distanceKm * 0.03`
    - `avion` : `quantiteCO2 = distanceKm * 0.2`

