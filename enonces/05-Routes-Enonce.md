# Objectifs

Mettre en place des routes pour accueillir le visiteur, consulter son profil et de consulter la liste de ses voyages

# Niveau 1

- Mettre en place le module de routing dans le projet
- Créer un composant `summary` qui affiche ce qui a été créé dans les TP précédents
- Ajouter la balise `<router-outlet></router-outlet>` dans le composant `app.component.html`
- Rediriger la route par défaut vers la page `summary` et vérifier que tout fonctionne de nouveau
- Créer un composant `home` qui affiche un message de bienvenue et un bouton pour accèder à la page `summary`
- Rediriger désormaire la route par défaut vers la page `home`
- Ajouter une route vers la page `summary`
- Créer un composant `profile` qui affiche le nom de l'utilisateur (passé en paramètre)
- Ajouter un bouton dans le composant `header` pour visualiser le profil de l'utilisateur

# Niveau 2

- Créer un service stateful `user`
- Créer une méthode `login(username)` qui permet de se connecter avec un nom d'utilisateur
- Créer une méthode `getUsername()` qui permet de récupérer le nom d'utilisateur, si aucun nom d'utilisateur n'a été stocké, renvoyer une chaine de caractère vide
- Au click sur le bouton de la page `home`, appeler la méthode `login(username)` du service `user` pour se connecter avec le nom d'utilisateur `Jean`
- Afficher le nom d'utilisateur sur la page `header` (en utilisant la méthode `getUsername()` du service `UserService`) et passer ce paramètre à la navigation vers la page `profile`

# Niveau 3

- Créer un guard qui empêche la navigation vers les pages `summary` et `profile` si l'utilisateur n'est pas connecté et qui redirige vers la page home