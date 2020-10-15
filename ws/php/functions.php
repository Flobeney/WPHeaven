<?php
//Fichier contenant le connecteur pour la DB
include_once 'dbconnect.php';

//Début des fonctions SQL

//Fonctions SELECT

function getSaltUser($pseudo){
    $req = "SELECT salt FROM `user`
    WHERE pseudo = :pseudo";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':pseudo' => $pseudo));
    return $sth->fetch(PDO::FETCH_ASSOC)['salt'];
}

function login($user){
    $req = "SELECT idUser
    FROM user
    WHERE pseudo = :pseudo
    AND pwd = :pwd";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':pseudo' => $user['pseudo'], ':pwd' => $user['pwd']));
    $array = $sth->fetch(PDO::FETCH_ASSOC);
    return ($array == false ? false : $array['idUser']);
}

function checkEmailNotExist($email){
    $req = "SELECT email
    FROM user
    WHERE email = :email";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':email' => $email));
    $array = $sth->fetch(PDO::FETCH_ASSOC);
    return $array === false;
}

function checkPseudoNotExist($pseudo){
    $req = "SELECT pseudo
    FROM user
    WHERE pseudo = :pseudo";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':pseudo' => $pseudo));
    $array = $sth->fetch(PDO::FETCH_ASSOC);
    return $array === false;
}

//Fin fonctions SELECT

//Fonctions CREATE

function createUser($user){
    $req = "INSERT INTO `user` (`idUser`, `pseudo`, `email`, `pwd`, `salt`)
    VALUES (null, :pseudo, :email, :pwd, :salt)";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':pseudo' => $user['pseudo'], ':email' => $user['email'],
    ':pwd' => $user['pwd'], ':salt' => $user['salt']));
    return connecteur()->lastInsertId();
}

//Fin fonctions CREATE

//Fonctions EDIT

//Fin fonctions EDIT

//Fonctions DELETE

//Fin fonctions DELETE

?>
