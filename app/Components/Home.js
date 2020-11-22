//Librairies
import React, { Component } from 'react';
import { View } from 'react-native';
//Components perso
import { BASE_STYLE, Loading, ImageList } from './MyComponent.js';
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
			isLoading: true,
			refreshing: false
		};
		//Récupérer les images
		getLastWP().then(data => this.setState({
			wallpapers: data.data,
			isLoading: false
		}));
	}

    //Quand la liste est rafraîchit
    _onRefresh = () => {
        this.setState({refreshing: true});
        //Récupérer les images
		getLastWP().then(data => this.setState({
			wallpapers: data.data,
			refreshing: false
		}));
    }
	
    render(){
        return (
            <View style={BASE_STYLE.container}>
				{/* Affichage des fonds d'écrans */}
				<ImageList
				data={this.state.wallpapers}
				onPress={(item) => this.props.navigation.navigate('WallpaperDetails', {wallpaper: item})}
				refreshing={this.state.refreshing}
				onRefresh={() => this._onRefresh()}
				/>
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