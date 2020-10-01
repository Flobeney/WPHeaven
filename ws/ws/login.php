<?php
//Fichier contenant les fonctions
include_once '../php/functions.php';

//Résultat à retourner
$res = array();

//Récupérer les données
$user['pseudo'] = filter_input(INPUT_POST, 'pseudo', FILTER_SANITIZE_STRING);
$user['pwd'] = hash('sha256', getSaltUser($pseudo) . filter_input(INPUT_POST, 'pwd', FILTER_SANITIZE_STRING));

//Essaie de connecter l'utilisateur
$res = login($user);

//JSON
header('Content-type: application/json');
echo json_encode($res);
?>
