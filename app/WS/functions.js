//Librairies
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Constantes

//Liens
const URL_WS = 'https://flobeney.ch/wpheaven/ws/';
const URL_API = 'https://wallhaven.cc/api/v1/';

//Dimensions de l'appareil
export const HEIGHT_SCREEN = Dimensions.get("screen").height;
export const WIDTH_SCREEN = Dimensions.get("screen").width;
const PGCD_SCREEN_DIMENSIONS = pgcd(HEIGHT_SCREEN, WIDTH_SCREEN);
//Ratio de l'appareil
const RATIO = (WIDTH_SCREEN / PGCD_SCREEN_DIMENSIONS).toString() + 'x' + (HEIGHT_SCREEN / PGCD_SCREEN_DIMENSIONS).toString();

//Constantes couleurs des onglets lors du focus ou non
export const COLOR_NOT_FOCUSED = '#b7b7b7';
export const COLOR_FOCUSED = '#000';

//Messages d'erreur
export const TEXT_FILL_ALL = 'Please fill in all values';

//Navigateur "Stack" (écran qui peuvent s'empiler)
export const Stack = createStackNavigator();
//Navigateur "Tab" (onglet en bas de l'application)
export const Tab = createBottomTabNavigator();

// Données de recherches
export const CATEGORY_GENERAL = "100";
export const CATEGORY_PEOPLE = "001";
export const CATEGORY_GENERAL_AND_PEOPLE = "101";

export const SORTING_DATE = 'date_added';
export const SORTING_RELEVANCE = 'relevance';
export const SORTING_RANDOM = 'random';
export const SORTING_VIEWS = 'views';
export const SORTING_FAVORITES = 'favorites';
export const SORTING_TOPLIST = 'toplist';

export const ORDER_DESC = 'desc';
export const ORDER_ASC = 'asc';
//Fonctions

//Calcul du PGCD
function pgcd(nbOne, nbTwo){
	//Si le 2ème chiffre est 0 (division impossible)
	if(nbTwo == 0){
		return Math.abs(nbOne);
	}
	var temp = nbOne % nbTwo;
	if(temp == 0){
		//Un pgcd n'a pas de signe
		return Math.abs(nbTwo);
	}
	return pgcd(nbTwo, temp);
}

//Vérifier que tout les éléments d'un objet sont différents de null
export function nothingEmpty(obj){
    var res = true;
    Object.values(obj).forEach(function(item){
        if(item == ''){
            res = false;
        }
    })

    return res;
}

//Trimer toutes les valeurs d'un objet
export function trimValues(obj){
    const res = Object.fromEntries(
        Object.entries(obj)
        .map(([ key, val ]) => [ key, val.trim() ])
    );
    return res;
}

//Wallhaven

//Récupérer les derniers fonds d'écran en fonction du ratio de l'écran de l'utilisateur
export function getLastWP(){
	//Lien
	var link = URL_API + 'search?ratios=' + RATIO;
	//Appel fetch
	return fetch(link, {
		method: 'GET',
		headers: {
            Accept: 'application/json', //type de retour
		}
	})
	.then((response) => response.json())
    .catch((error) => console.error(error));
}

//Récupérer les fonds d'écran similaires en fonction du ratio de l'écran de l'utilisateur
export function getSimilarWP(id){
	//Lien
	var link = URL_API + 'search?q=like:' + id + '&ratios=' + RATIO;
	//Appel fetch
	return fetch(link, {
		method: 'GET',
		headers: {
            Accept: 'application/json', //type de retour
		}
	})
	.then((response) => response.json())
    .catch((error) => console.error(error));
}

export function searchWP(tag,color,owner,category, page, order, sorting){
    //lien
    var link = setAPISearchLink(tag,color,owner,category, page,order,sorting);
    //Appel fetch
    return fetch(link, {
		method: 'GET',
		headers: {
            Accept: 'application/json', //type de retour
		}
	})
	.then((response) => response.json())
    .catch((error) => console.error(error));
}

//Return the link of the search
function setAPISearchLink(tag,color,owner,category, page=1, order, sorting){
    var link = URL_API + 'search?page=' + page;
    if(color != null){
        link += '&color=' + color;  
    }
    
    if(category != null){
        link += '&categories=' + category;
    }
    if(order != null){
        link+= '&order='+order;
    }
    if(sorting != null){
        link += '&sorting' + sorting;
    }
    if(owner != null || tag != null){
        link += '&q=';
        if(tag != null){
            link += tag;
        }
        if(owner != null){
            link += '@' + owner;
        }        
    }
    return link;
}
//SQL

//Utilisateur (connexion, inscription)

//Connexion
export function login(user){
    //Lien
    var link = URL_WS + 'login.php';
    //FormData
    var formData = new FormData();
    //Ajouter les données
    formData.append('pseudo', user.pseudo);
    formData.append('pwd', user.pwd);
    //Appel fetch
    return fetch(link, {
        method: 'POST',
        headers: {
            Accept: 'application/json', //type de retour
            'Content-Type': 'multipart/form-data' //type d'envoie
        },
        body: formData, //Requete
    })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

//Inscription
export function signUp(user){
    //Lien
    var link = URL_WS + 'signUp.php';
    //FormData
    var formData = new FormData();
    //Ajouter les données
    formData.append('pseudo', user.pseudo);
    formData.append('email', user.email);
    formData.append('pwd', user.pwd);
    //Appel fetch
    return fetch(link, {
        method: 'POST',
        headers: {
            Accept: 'application/json', //type de retour
            'Content-Type': 'multipart/form-data' //type d'envoie
        },
        body: formData, //Requete
    })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

//Favoris

//Récupérer les favoris de l'utilisateur
export function getFav(idUser){
	//Lien
	var link = URL_WS + 'getFav.php';
	//FormData
	var formData = new FormData();
	//Ajouter les données
	formData.append('idUser', idUser);
	//Appel fetch
	return fetch(link, {
		method: 'POST',
		headers: {
			Accept: 'application/json', //type de retour
			'Content-Type': 'multipart/form-data' //type d'envoie
		},
		body: formData, //Requete
	})
	.then((response) => response.json())
	.catch((error) => console.error(error));
}

//Checker si le favoris existe
export function checkFav(fav){
	//Lien
	var link = URL_WS + 'checkFav.php';
	//FormData
	var formData = new FormData();
	//Ajouter les données
	formData.append('idUser', fav.idUser);
	formData.append('idImage', fav.idImage);
	//Appel fetch
	return fetch(link, {
		method: 'POST',
		headers: {
			Accept: 'application/json', //type de retour
			'Content-Type': 'multipart/form-data' //type d'envoie
		},
		body: formData, //Requete
	})
	.then((response) => response.json())
	.catch((error) => console.error(error));
}

//Toggle le favoris
export function toggleFav(fav){
	//Lien
	var link = URL_WS + 'toggleFav.php';
	//FormData
	var formData = new FormData();
	//Ajouter les données
	formData.append('idUser', fav.idUser);
	formData.append('idImage', fav.idImage);
	//Appel fetch
	return fetch(link, {
		method: 'POST',
		headers: {
			Accept: 'application/json', //type de retour
			'Content-Type': 'multipart/form-data' //type d'envoie
		},
		body: formData, //Requete
	})
	.then((response) => response.json())
	.catch((error) => console.error(error));
}