//Librairies
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
		searchWP(this.props.route.params.search, this.state.currentPage).then(data => this.setState({
			wallpapers: data.data,
			currentPage: data.meta.current_page,
			lastPage: data.meta.last_page,
			refreshing: false
		}));
	}
	
	//Changer de page
	_changePage(page){
		//Si la page demandé reste dans les limites
		if(page > 0 && page <= this.state.lastPage){
			this.setState({isLoading: true});
			//Récupérer les images
			searchWP(this.props.route.params.search, page).then(data => this.setState({
				wallpapers: data.data,
				currentPage: data.meta.current_page,
				lastPage: data.meta.last_page,
				isLoading: false
			}));
		}
	}
		
    render(){
        return (
            <View style={BASE_STYLE.container}>
				{/* Affichage des résultats, ou d'un message indiquant qu'il n'y a pas de résultat */}
				{(this.state.wallpapers != undefined && this.state.wallpapers.length == 0) ?
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<Text>There's nothing here...</Text>
					</View>
					:
					<ImageList
					data={this.state.wallpapers}
					onPress={(item) => this.props.navigation.navigate('WallpaperDetails', {wallpaper: item})}
					refreshing={this.state.refreshing}
					onRefresh={() => this._onRefresh()}
					/>
				}
				{/* Pagination */}
				<View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
					{/* Page précédente */}
					<TouchableOpacity
					onPress={() => this._changePage(this.state.currentPage - 1)}
					>
						<Entypo
                        name="chevron-thin-left"
                        size={SIZE_CHEVRON}
                        />
					</TouchableOpacity>
					{/* Page actuelle */}
					<Text>
						Current page: {this.state.currentPage}/{this.state.lastPage}
					</Text>
					{/* Page suivante */}
					<TouchableOpacity
					onPress={() => this._changePage(this.state.currentPage + 1)}
					>
						<Entypo
                        name="chevron-thin-right"
                        size={SIZE_CHEVRON}
                        />
					</TouchableOpacity>
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