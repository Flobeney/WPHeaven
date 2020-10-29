//Librairies
import React from 'react';
//Components perso
import Home from '../Components/Home.js';
import WallpaperDetails from '../Components/WallpaperDetails.js';
//Constantes
import { Stack } from "../WS/functions.js";

//Home
export function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
			<Stack.Screen 
			name="WallpaperDetails" 
            options={{title: 'Détails', headerBackTitle: 'Retour'}}
			component={WallpaperDetails} />
        </Stack.Navigator>
    );
}