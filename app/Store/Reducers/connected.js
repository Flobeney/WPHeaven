//State initial
const initialState = { idUser: false }

//Connecter ou déconnecter l'utilisateur
function isConnected(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'IS_CONNECTED':
            //Déconnecter l'user
            if(action.value === false){
                nextState = {
                    ...state,
                    idUser: false
                }
            }else{
                //Connecter l'utilisateur
                nextState = {
                    ...state,
                    idUser: action.value
                }
            }
            return nextState || state
        default:
        return state
    }
}

//Export du component
export default isConnected