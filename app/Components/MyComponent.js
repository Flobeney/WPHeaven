//Librairies
import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
//Constantes
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../WS/functions.js';

//Style utilisé sur plusieurs pages
export const BASE_STYLE = StyleSheet.create({
	//Container
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    center_absolute: {
        flex: 1, 
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
    },
    scrollview_container: {
        flex: 1, 
        margin: 15
	},
	//Images
	img_left: {
		width: (WIDTH_SCREEN / 2) - (WIDTH_SCREEN / 100), 
		height: (HEIGHT_SCREEN / 2) - (HEIGHT_SCREEN / 100),
		marginRight: (WIDTH_SCREEN / 100),
		marginBottom: (HEIGHT_SCREEN / 100)
	},
	img_right: {
		width: (WIDTH_SCREEN / 2) - (WIDTH_SCREEN / 100), 
		height: (HEIGHT_SCREEN / 2) - (HEIGHT_SCREEN / 100),
		marginLeft: (WIDTH_SCREEN / 100),
		marginBottom: (HEIGHT_SCREEN / 100)
	},
	img_full: {
		width: WIDTH_SCREEN, 
		height: HEIGHT_SCREEN,
	},
	//Informations sur le wallpaper
	infos_wallpaper: {
		margin: 15
	},
	//Textes
	text_link: {
		fontWeight: 'bold',
		textDecorationLine: 'underline'
	}
});

//Components

//Affichage d'une icône de chargement
export function Loading(){
    return(
        <View style={BASE_STYLE.center_absolute}>
            <ActivityIndicator size='large'/>
        </View>
    );
}