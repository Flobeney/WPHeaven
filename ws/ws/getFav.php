<?php
//Fichier contenant les fonctions
include_once '../php/functions.php';

//Résultat à retourner
$res = array();

//Récupérer les données
$idUser = filter_input(INPUT_POST, 'idUser', FILTER_VALIDATE_INT);

$res = getFavUser($idUser);
$currentFav = array();

for ($i=0; $i < count($res); $i++) {
    //Récupérer les infos du wallpaper
    $currentFav = json_decode(file_get_contents(URL_API_DETAILS_WP . $res[$i]['idImage']))->data;
    //Supprimer les champs inutiles
    unset($currentFav->uploader);
    unset($currentFav->tags);
    //L'ajouter au résultat
    $res[$i] = $currentFav;
}

//JSON
header('Content-type: application/json');
echo json_encode($res);
?>
