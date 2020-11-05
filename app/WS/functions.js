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
export const TEXT_FILL_ALL = 'Veuillez remplir toutes les valeurs';

//Navigateur "Stack" (écran qui peuvent s'empiler)
export const Stack = createStackNavigator();
//Navigateur "Tab" (onglet en bas de l'application)
export const Tab = createBottomTabNavigator();

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

//SQL

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