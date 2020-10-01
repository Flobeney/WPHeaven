//Librairies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//Components perso
import Home from './Home.js';
//Redux
import { connect } from 'react-redux';

//Constantes
const Stack = createStackNavigator();

class Index extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        )
    }
}

//Pour Redux
const mapStateToProps = (state) => {
    return {
        idUser: state.isConnected.idUser
    }
}

//Export du component
export default connect(mapStateToProps)(Index)
