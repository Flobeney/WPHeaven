//Librairies
import React from 'react';
import { Entypo, MaterialCommunityIcons } from 'react-native-vector-icons';
//Components perso
import { HomeStack } from './SharedNav.js';
import Fav from '../Components/Fav.js';
import WallpaperDetails from '../Components/WallpaperDetails.js';
import Logout from '../Components/Logout.js';
//Constantes
import { COLOR_FOCUSED, COLOR_NOT_FOCUSED, Stack, Tab } from "../WS/functions.js";

//Favoris
function FavStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favoris" component={Fav} />
			<Stack.Screen 
			name="WallpaperDetails" 
            options={{title: 'Détails', headerBackTitle: 'Retour'}}
			component={WallpaperDetails} />
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
			{/* Page d'accueil */}
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
			{/* Favoris */}
			<Tab.Screen 
			name="Favoris" 
			component={FavStack} 
			options={{
				tabBarIcon: ({focused}) => {
					return(
						<Entypo
						name="star"
						size={25}
						color={focused ? COLOR_FOCUSED : COLOR_NOT_FOCUSED}
						/>
					)
				}
			}}
			/>
			{/* Logout */}
            <Tab.Screen 
            name="Logout" 
            component={LogoutStack} 
            options={{
                tabBarIcon: ({focused}) => {
                    return(
                        <MaterialCommunityIcons
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