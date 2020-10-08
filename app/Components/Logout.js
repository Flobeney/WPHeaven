//Librairies
import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
//Components perso
import { BASE_STYLE, Loading } from './MyComponent.js';
//Redux
import { connect } from 'react-redux';

class Logout extends Component {
    constructor(props) {
        super(props);
        //State
        this.state = {
            isLoading: false
        };
    }

    _logout(){
        Alert.alert(
            'Attention',
            'Voulez-vous vraiment vous déconnecter ?',
            [
                {
                    text: 'Annuler',
                    style: 'cancel'
                },
                {
                    text: 'Déconnexion',
                    onPress: () => {
                        const action = { type: "IS_CONNECTED", value: false };
                        this.props.dispatch(action);
                    }
                }
            ]
        );
    }
    
    render(){
        return (
            <View style={BASE_STYLE.container}>
                <Button
                title='Logout'
                onPress={() => this._logout()}
                />
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
export default connect(mapStateToProps)(Logout);