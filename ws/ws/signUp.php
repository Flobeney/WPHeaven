<?php
//Fichier contenant les fonctions
include_once '../php/functions.php';

//Résultat à retourner
$res = array('done' => false, 'msg' => false);

//Récupérer les données
$user['pseudo'] = filter_input(INPUT_POST, 'pseudo', FILTER_SANITIZE_STRING);
$user['email'] = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$user['pwd'] = filter_input(INPUT_POST, 'pwd', FILTER_SANITIZE_STRING);

//Vérifier que l'email existe pas
if(checkEmailNotExist($user['email'])){
    //Vérifier que le pseudo existe pas
    if(checkPseudoNotExist($user['pseudo'])){
        //Créer le salt et le mdp crypté
        $user['salt'] = hash('sha256', random_bytes(100));
        $user['pwd'] = hash('sha256', $user['salt'] . $user['pwd']);

        //Créer l'user
        $res['msg'] = createUser($user);

        //Tout s'est bien passé
        $res['done'] = true;
    }else{
        $res['msg'] = "Le pseudo est déjà utilisé";
    }
}else{
    $res['msg'] = "Le mail est déjà utilisé";
}

//JSON
header('Content-type: application/json');
echo json_encode($res);
?>
