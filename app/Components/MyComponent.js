//Librairies
import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

//Style utilisé sur plusieurs pages
export const BASE_STYLE = StyleSheet.create({
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