//Constantes
const URL_WS = 'https://flobeney.ch/wpheaven/ws/';

//Constantes couleurs des onglets lors du focus ou non
export const COLOR_NOT_FOCUSED = '#b7b7b7';
export const COLOR_FOCUSED = '#000';

//Fonctions

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