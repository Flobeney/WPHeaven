//Librairies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from 'react-native-vector-icons';
//Components perso
import Home from '../Components/Home.js';
import Login from '../Components/Login.js';
import SignUp from '../Components/SignUp.js';
//Constantes
import {COLOR_FOCUSED,COLOR_NOT_FOCUSED} from "../WS/functions.js";

//Constantes
//Navigateur "Stack" (écran qui peuvent s'empiler)
const Stack = createStackNavigator();
//Navigateur "Tab" (onglet en bas de l'application)
const Tab = createBottomTabNavigator();

//Home
function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

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