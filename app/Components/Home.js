//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
//Components perso
import { BASE_STYLE, Loading } from './MyComponent.js';
//Fonctions
import { getLastWP } from '../WS/functions.js';
//Redux
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
        super(props);
        //State
        this.state = {
			wallpapers: undefined,
			isLoading: true
		};
		//Récupérer les images
		getLastWP().then(data => this.setState({
			wallpapers: data.data,
			isLoading: false
		}));
	}
	
    render(){
        return (
            <View style={BASE_STYLE.container}>
				{/* Affichage des fonds d'écrans */}
				{this.state.wallpapers != undefined &&
					<FlatList
					data={this.state.wallpapers}
					renderItem={({item, index}) => (
						<TouchableOpacity
						onPress={() => this.props.navigation.navigate('WallpaperDetails', {wallpaper: item})}
						>
							<Image
							style={index % 2 == 0 ? BASE_STYLE.img_left : BASE_STYLE.img_right}
							source={{uri: item.thumbs.original}}
							/>
						</TouchableOpacity>
					)}
					numColumns={2}
					/>
				}
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
export default connect(mapStateToProps)(Home);