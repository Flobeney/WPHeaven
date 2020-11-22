//Librairies
import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
//Components perso
import { BASE_STYLE } from './MyComponent.js';
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

    //Avertir avant de déconnecter
    _logout(){
        Alert.alert(
            'Warning',
            'Are you sure you want to logout ?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Logout',
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