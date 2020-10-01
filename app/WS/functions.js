//Constantes
const URL_WS = 'https://flobeney.ch/wpheaven/ws/';

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
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        body: formData,
    })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}