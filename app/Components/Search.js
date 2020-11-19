//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
//Components perso
import { BASE_STYLE, Loading, ImageList } from './MyComponent.js';
//Fonctions
import { getLastWP } from '../WS/functions.js';
//Redux
import { connect } from 'react-redux';

class Search extends Component {
	constructor(props) {
        super(props);
        //State
        this.state = {
			isLoading: false,
		};
	}
	
    render(){
        return (
            <View style={BASE_STYLE.container}>
				<Text>hello</Text>
				{/* Affichage du chargement */}
				{this.state.isLoading && <Loading/>}
            </View>
        );
    }    
}

//Pour Redux
const mapStateToProps = (state) => {
    return {
        idUser: state.isConnected.idUser
    }
}

//Export du component
export default connect(mapStateToProps)(Search);