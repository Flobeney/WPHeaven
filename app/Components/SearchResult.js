//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
//Components perso
import { BASE_STYLE, Loading, ImageList } from './MyComponent.js';
//Fonctions
import { searchWP } from '../WS/functions.js';
//Redux
import { connect } from 'react-redux';

const SIZE_CHEVRON = 30;

class SearchResult extends Component {
	constructor(props) {
        super(props);
        //State
        this.state = {
			wallpapers: undefined,
			isLoading: true,
			refreshing: false,
			currentPage: 0,
			lastPage: 0,
		};
		//Récupérer les images
		searchWP(this.props.route.params.search).then(data => this.setState({
			wallpapers: data.data,
			currentPage: data.meta.current_page,
			lastPage: data.meta.last_page,
			isLoading: false
		}));
	}

    //Quand la liste est rafraîchit
    _onRefresh = () => {
        this.setState({refreshing: true});
        //Récupérer les images
		searchWP(this.props.route.params.search).then(data => this.setState({
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
				{/* Pagination */}
				<View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
						<Entypo
                        name="chevron-thin-left"
                        size={SIZE_CHEVRON}
                        />
						<Text>
							Current page: {this.state.currentPage}/{this.state.lastPage}
						</Text>
						<Entypo
                        name="chevron-thin-right"
                        size={SIZE_CHEVRON}
                        />
				</View>
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
export default connect(mapStateToProps)(SearchResult);