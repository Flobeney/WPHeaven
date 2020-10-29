//Librairies
import React from 'react';
import { Entypo } from 'react-native-vector-icons';
//Components perso
import { HomeStack } from './SharedNav.js';
import Login from '../Components/Login.js';
import SignUp from '../Components/SignUp.js';
//Constantes
import { COLOR_FOCUSED, COLOR_NOT_FOCUSED, Stack, Tab } from "../WS/functions.js";

//Login
function LoginStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen 
            name="SignUp" 
            options={{title: 'Inscription'}}
            component={SignUp} />
        </Stack.Navigator>
    );
}

//Navigation
function NavLogin(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={HomeStack} 
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <Entypo
                        name="home"
                        size={25}
                        color={focused ? COLOR_FOCUSED : COLOR_NOT_FOCUSED}
                        />
                    )
                }
            }}
            />
            <Tab.Screen 
            name="Login" 
            component={LoginStack} 
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <Entypo
                        name="login"
                        size={25}
                        color={focused ? COLOR_FOCUSED : COLOR_NOT_FOCUSED}
                        />
                    )
                }
            }}
            />
        </Tab.Navigator>
    );
}

//Export du component
export default NavLogin;