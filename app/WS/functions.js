//Constantes
const URL_WS = 'https://flobeney.ch/wpheaven/ws/';

//Constantes couleurs des onglets lors du focus ou non
export const COLOR_NOT_FOCUSED = '#b7b7b7';
export const COLOR_FOCUSED = '#000';

//Messages d'erreur
export const TEXT_FILL_ALL = 'Veuillez remplir toutes les valeurs';

//Fonctions

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