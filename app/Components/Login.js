//Librairies
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//Components perso
import { BASE_STYLE } from './MyComponent.js';
//Redux
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        //Variables
        this.pseudo = '';
        this.pwd = '';
        //State
        this.state = {

        };
    }
    
    render(){
        return (
            <View style={BASE_STYLE.container}>
                <KeyboardAwareScrollView 
                style={BASE_STYLE.scrollview_container}
                contentContainerStyle={{alignItems: 'center'}}
                >
                    {/* Pseudo */}
                    <Input
                    placeholder='Pseudo'
                    onChangeText={(value) => this.pseudo = value}
                    />
                    {/* Mot de passe */}
                    <Input
                    secureTextEntry={true}
                    placeholder='Mot de passe'
                    onChangeText={(value) => this.pwd = value}
                    />
                </KeyboardAwareScrollView>
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
export default connect(mapStateToProps)(Login);