//Librairies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//Components perso
import Login from '../Components/Login.js';

//Constantes
const Stack = createStackNavigator();

//Navigation
function NavLogin(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

//Export du component
export default NavLogin;