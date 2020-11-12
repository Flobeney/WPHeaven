<?php
//Fichier contenant les fonctions
include_once '../php/functions.php';

//Résultat à retourner
$res = array();

//Récupérer les données
$fav['idUser'] = filter_input(INPUT_POST, 'idUser', FILTER_VALIDATE_INT);
$fav['idImage'] = filter_input(INPUT_POST, 'idImage', FILTER_SANITIZE_STRING);

//Vérifier si le favoris existe
$res = checkFavExist($fav);

//Le favoris existe
if($res !== false){
    $res = true;
}

//JSON
header('Content-type: application/json');
echo json_encode($res);
?>
