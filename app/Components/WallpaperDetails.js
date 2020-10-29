//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, Image, TouchableOpacity } from 'react-native';
//Components perso
import { BASE_STYLE, Loading } from './MyComponent.js';
//Redux
import { connect } from 'react-redux';

class WallpaperDetails extends Component {
	constructor(props) {
        super(props);
        //State
        this.state = {
			wallpaper: this.props.route.params.wallpaper,
		};
	}
	
    render(){
        return (
            <View style={BASE_STYLE.container}>
				<ScrollView>
					{/* Image */}
					<Image
					style={BASE_STYLE.img_full}
					source={{uri: this.state.wallpaper.path}}
					/>
					{/* Définition */}
					<Text>Définition: {this.state.wallpaper.resolution}</Text>
				</ScrollView>
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
export default connect(mapStateToProps)(WallpaperDetails);