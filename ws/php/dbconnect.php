<?php
//Constantes
//Connexion à la db
define("DB_HOST", "yd6zf.myd.infomaniak.com");
define("DB_NAME", "yd6zf_wpheaven");
define("DB_USER", "yd6zf_wpheaven");
define("DB_PASSWORD", "pourWPHeaven2012");

//Connecteur pour ouvrir la connexion à la DB
function connecteur(){
    static $dbc = null;

    if ($dbc == null) {
        try{
            $dbc = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASSWORD);
        } catch (Exception $e) {
            echo 'Erreur : ' . $e->getMessage() . '<br/>';
            echo 'N° : ' . $e->getCode();
            die('Could not connect to MySQL');
        }
    }
    return $dbc;
}

?>
