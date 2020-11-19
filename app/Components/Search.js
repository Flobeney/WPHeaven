//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//Components perso
import { BASE_STYLE, Loading, ImageList } from './MyComponent.js';
//Fonctions
import { CATEGORIES, ORDER_DESC, ORDER_ASC, SORTING } from '../WS/functions.js';
//Redux
import { connect } from 'react-redux';

class Search extends Component {
	constructor(props) {
		super(props);
		//Recherche
        this.search = {
			tag: null,
			owner: null,
			color: null,
        }
        //State
        this.state = {
			isLoading: false,
			category: CATEGORIES,
			order: ORDER_DESC,
			sorting: null
		};
	}

	//Effectuer la recherche
	_search(){
		//Récupérer les valeurs des catégories
		var categories = '';
		this.state.category.map(categorie => categories += categorie.value);

		//Page suivante
		this.props.navigation.navigate('SearchResult', {search: {...this.search, category: categories, order: this.state.order, sorting: this.state.sorting}})
	}
	
    render(){
        return (
            <View style={BASE_STYLE.container}>
                <KeyboardAwareScrollView 
                style={BASE_STYLE.scrollview_container}
                contentContainerStyle={BASE_STYLE.scrollview_content}
                >
					{/* Catégories de recherches */}
					<Text style={BASE_STYLE.text_subtitle}>Categories</Text>
					<View style={{flexDirection: 'row'}}>
						{this.state.category.map(categorie => (
							<TouchableOpacity
							key={categorie.name}
							style={{flex: 1}}
							onPress={() => {
								//Copier les catégories dans la variable de résultat
								var res = [...this.state.category];
								//Trouver l'élément clické
								var indexElem = res.findIndex(elem => elem.name == categorie.name);
								//Inverser sa valeur
								res[indexElem].value = (res[indexElem].value == 0 ? 1 : 0);

								//Mettre à jour la valeur
								this.setState({
									category: res
								});
							}}
							>
								<Text style={{textAlign: 'center', fontWeight: (categorie.value == 1 ? 'bold' : 'normal')}}>{categorie.name}</Text>
							</TouchableOpacity>
						))}
					</View>
					{/* Sorting */}
					<Text style={BASE_STYLE.text_subtitle}>Sorting</Text>
					{SORTING.map(typeSorting => (
						<TouchableOpacity
						key={typeSorting}
						style={{marginVertical: 5}}
						onPress={() => this.setState({sorting: typeSorting})}
						>
							<Text style={{textAlign: 'center', fontWeight: (typeSorting == this.state.sorting ? 'bold' : 'normal')}}>{typeSorting}</Text>
						</TouchableOpacity>
					))}
					{/* Order */}
					<Text style={BASE_STYLE.text_subtitle}>Order</Text>
					<TouchableOpacity
					onPress={() => this.setState({
						order: (this.state.order == ORDER_DESC ? ORDER_ASC : ORDER_DESC)
					})}
					>
						<Text>{this.state.order}</Text>
					</TouchableOpacity>

					{/* Tag */}
					<Input
					placeholder='Tag'
					onChangeText={(value) => this.search.tag = value}
					autoCapitalize='none'
					autoCorrect={false}
					/>
					<Text>Which tag are you looking for ?</Text>
					{/* Owner */}
					<Input
					placeholder='Owner'
					onChangeText={(value) => this.search.owner = value}
					autoCapitalize='none'
					autoCorrect={false}
					/>
					<Text>Owner of the wallpaper</Text>
					{/* Color */}
					<Input
					placeholder='Color'
					onChangeText={(value) => this.search.color = value}
					autoCapitalize='none'
					autoCorrect={false}
					/>
					<Text>Hexa value of the color without the #</Text>
					{/* Recherche */}
                    <Button
                    title='Search'
                    onPress={() => this._search()}
                    />
                </KeyboardAwareScrollView>
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