//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//Components perso
import { BASE_STYLE, Loading } from './MyComponent.js';
//Redux
import { connect } from 'react-redux';

class Home extends Component {
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