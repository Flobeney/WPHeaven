//Librairies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons } from 'react-native-vector-icons';
//Components perso
import Home from '../Components/Home.js';
import Logout from '../Components/Logout.js';
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

//Logout
function LogoutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
    );
}

//Navigation
function NavLogged(){
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
            name="Logout" 
            component={LogoutStack} 
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <MaterialIcons
                        name="logout"
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
export default NavLogged;