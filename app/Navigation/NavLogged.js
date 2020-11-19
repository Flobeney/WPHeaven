//Librairies
import React from 'react';
import { Entypo, MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
//Components perso
import { HomeStack } from './SharedNav.js';
import Fav from '../Components/Fav.js';
import Search from '../Components/Search.js';
import WallpaperDetails from '../Components/WallpaperDetails.js';
import Logout from '../Components/Logout.js';
//Constantes
import { COLOR_FOCUSED, COLOR_NOT_FOCUSED, Stack, Tab } from "../WS/functions.js";

//Favoris
function FavStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={Fav} />
			<Stack.Screen 
			name="WallpaperDetails" 
            options={{title: 'Details', headerBackTitle: 'Back'}}
			component={WallpaperDetails} />
        </Stack.Navigator>
    );
}

//Recherche
function SearchStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} />
			<Stack.Screen 
			name="WallpaperDetails" 
            options={{title: 'Details', headerBackTitle: 'Back'}}
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
			name="Favorites" 
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
			{/* Recherche */}
			<Tab.Screen 
			name="Search" 
			component={SearchStack} 
			options={{
				tabBarIcon: ({focused}) => {
					return(
						<Ionicons
						name="ios-search"
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