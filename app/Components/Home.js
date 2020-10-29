//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
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
            wallpapers: undefined
		};
		getLastWP().then(data => {
			console.log(data);
			console.log(Dimensions.get("screen").height * Dimensions.get("screen").scale);
			console.log(Dimensions.get("screen").width * Dimensions.get("screen").scale);
		});
	}
	
    render(){
        return (
            <View style={BASE_STYLE.container}>
                <Text>Welcome ! Take a seat and please wait :c</Text>
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