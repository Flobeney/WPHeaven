//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, Image, TouchableOpacity, Share } from 'react-native';
import * as Linking from 'expo-linking';
import { Entypo } from 'react-native-vector-icons';
//Components perso
import { BASE_STYLE, Loading, ImageList } from './MyComponent.js';
//Fonctions
import { getSimilarWP, checkFav, toggleFav } from '../WS/functions.js';
//Redux
import { connect } from 'react-redux';

class WallpaperDetails extends Component {
	constructor(props) {
        super(props);
        //State
        this.state = {
			wallpaper: this.props.route.params.wallpaper,
			similars: undefined,
			fav: false
		},
		//Si l'user est connecté
		(this.props.idUser !== false &&
			//Checker si l'image est en favoris
			checkFav({idUser: this.props.idUser, idImage: this.state.wallpaper.id}).then(data => {
				this.setState({fav: data});
			}),
			//Récupérer les images similaires
			getSimilarWP(this.state.wallpaper.id).then(data => {
				this.setState({similars: data.data});
			})
		);
	}

	//Partage du wallpaper
	_share(){
		Share.share({
			message: "Fond d'écran Wallhaven : " + this.state.wallpaper.url,
		});
	}

	//Toggle le favoris
	_toggleFav(){
		toggleFav({idUser: this.props.idUser, idImage: this.state.wallpaper.id}).then(data => {
			this.setState({fav: data});
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
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							{/* Partage */}
							<TouchableOpacity
							onPress={() => this._share()}
							>
								<Entypo
								name="share"
								size={25}
								/>
							</TouchableOpacity>
							{/* Étoile de favoris */}
							{this.props.idUser !== false &&
								<TouchableOpacity
								onPress={() => this._toggleFav()}
								>
									<Entypo
									name={this.state.fav ? "star" : "star-outlined"}
									size={25}
									/>
								</TouchableOpacity>
							}
						</View>
					</View>
					{/* Affichage des fonds d'écrans similaire seulement si l'utilisateur est connecté */}
					{this.props.idUser !== false &&
						<View>
							<Text style={BASE_STYLE.text_subtitle}>Images similaires :</Text>
							<ImageList
							data={this.state.similars}
							onPress={(item) => this.props.navigation.navigate('WallpaperDetails', {wallpaper: item})}
							/>
						</View>
					}
					
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