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

function checkFavExist($fav){
    $req = "SELECT idFavorite
    FROM `favorite`
    WHERE idImage = :idImage
    AND idUser = :idUser";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':idImage' => $fav['idImage'], ':idUser' => $fav['idUser']));
    $array = $sth->fetch(PDO::FETCH_ASSOC);
    return ($array == false ? false : $array['idFavorite']);
}

function getFavUser($idUser){
    $req = "SELECT idImage
    FROM `favorite`
    WHERE idUser = :idUser
    ORDER BY dateFavorite";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':idUser' => $idUser));
    return $sth->fetchAll(PDO::FETCH_ASSOC);
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

function addFav($fav){
    $req = "INSERT INTO `favorite` (`idFavorite`, `idImage`, `idUser`)
    VALUES (null, :idImage, :idUser)";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':idImage' => $fav['idImage'], ':idUser' => $fav['idUser']));
    return connecteur()->lastInsertId();
}

//Fin fonctions CREATE

//Fonctions EDIT

//Fin fonctions EDIT

//Fonctions DELETE

function delFav($fav){
    $req = "DELETE FROM `favorite` WHERE idImage = :idImage AND idUser = :idUser";
    $sth = connecteur()->prepare($req);
    $sth->execute(array(':idImage' => $fav['idImage'], ':idUser' => $fav['idUser']));
}

//Fin fonctions DELETE

?>
