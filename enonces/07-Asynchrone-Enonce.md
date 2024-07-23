# Objectifs

Mettre en place des promesses pour rendre asynchrone les interactions avec le service `carbon-footprint-compute` et le service `user` pour préparer le terrain pour les appels API

# Niveau 1

- Modifier le service `user` pour que les méthodes `login` et `getUsername` retournent une promesse
- Modifier le composant `header` pour attendre la réponse de la promesse avant d'afficher le nom de l'utilisateur
- Modifier le composant `home` pour attendre la réponse de la promesse avant de rediriger l'utilisateur
- Modifier le guard `user.guard.ts` pour attendre la réponse de la promesse avant de vérifier la valorisation de l'utilisateur

# Niveau 2

- Modifier le service `carbon-footprint-compute` pour que les méthodes `getVoyages`, `addVoyage` et `getResumeVoyages` retournent une promesse
- Chercher les références à ces méthodes dans le projet et modifier le code pour attendre la réponse de la promesse avant de continuer

# Niveau 3

- Créer deux interfaces pour encapsuler les données des voyages et des résumés de voyages
- Grâce à la fonction `setTimeout`, simuler un appel API qui prend 5s dans la méthode `getVoyages()` du service `carbon-footprint-compute` et afficher un message de chargement en attendant la réponse