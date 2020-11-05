//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, Image, TouchableOpacity, Share } from 'react-native';
import * as Linking from 'expo-linking';
import { Entypo } from 'react-native-vector-icons';
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

	//Partage du wallpaper
	_share(){
		Share.share({
			message: "Fond d'écran Wallhaven : " + this.state.wallpaper.url,
		});
	}

	//Ouvrir dans Wallhaven
	_openInWallhaven(){
		Linking.openURL(this.state.wallpaper.url);
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
					{/* Informations sur le wallpaper */}
					<View style={BASE_STYLE.infos_wallpaper}>
						{/* Définition */}
						<Text>Définition: {this.state.wallpaper.resolution}</Text>
						{/* Ouvrir dans Wallhaven */}
						<TouchableOpacity
						onPress={() => this._openInWallhaven()}
						>
							<Text style={BASE_STYLE.text_link}>Ouvrir dans Wallhaven</Text>
						</TouchableOpacity>
						{/* Partage */}
						<TouchableOpacity
						onPress={() => this._share()}
						>
							<Entypo
							name="share"
							size={25}
							/>
						</TouchableOpacity>
					</View>
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