# Journal de bord
## 27 août 2020
* Brainstorming pour trouver des idées de projet

## 03 septembre 2020

* Établissement du cahier des charges

## 17 septembre 2020

* Présentation et validation du cahier des charges
* Création du poster
* Création de la base de données pour le web service

## 24 septembre 2020

* Mise en place des environnements de travail
* Découpage du début de l'application en tâches
* Commencement de l'application React Native

## 01 octobre 2020

* Ajout de Redux et de Redux Persist
    * Permet d'avoir un état global, des données peuvent être sauvées puis récupérée (si l'utilisateur est connecté par exemple)
    * Le dossier "Store" contient les fichiers pour le Store et la persistance
    * Store : état global
    * Persister le Store : permet de garder les données même lorsque l'app est fermée
    * Le fichier App.js est le point d'entrée de l'application. Il contient le code nécessaire pour persister le Store, ainsi que le container pour la navigation. Il pointe directement sur Index.js
    * Index.js a donc accès au Store. Il peut savoir s'il l'utilisateur est connecté, et donc afficher la navigation appropriée
* Création de la navigation en fichiers séparés
    * Le dossier "Navigation" contient les fichiers pour créer les navigations adéquate
* Création de la page de login
    * Ajout d'un module pour gérer correctement les Inputs qui sont dans une ScrollView
        * De base, un Input dans une ScrollView ne réagit pas correctement; il peut arriver que le clavier viennent cacher l'Input en question, sans possibilité de scroll plus bas pour afficher l'Input. Le module permet de régler ce problème
*  Ajout d'une icône de chargement