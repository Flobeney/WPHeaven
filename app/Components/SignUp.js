//Librairies
import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//Components perso
import { BASE_STYLE, Loading } from './MyComponent.js';
//Fonctions
import { signUp, trimValues, nothingEmpty, TEXT_FILL_ALL } from '../WS/functions.js';
//Redux
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor(props) {
        super(props);
        //Variables
        this.user = {
            pseudo: '',
            email: '',
            pwd: '',
        }
        //State
        this.state = {
            isLoading: false
        };
    }

    //Inscription
    _signUp(){
        //Trim
        this.user = trimValues(this.user);
        if(nothingEmpty(this.user)){
            //Lancer le chargement
            this.setState({
                isLoading: true
            });
            //Inscription
            signUp(this.user).then((data) => {
                //Fin du chargement
                this.setState({
                    isLoading: false
                });
                //Si l'inscription est valide
                if(data.done === true){
                    //Envoie un message d'alerte 
                    Alert.alert(
                        "Informations",
                        "Inscription réussie",
                        [{
                            text:"Ok",
                            onPress: () => {
                                const action = { type: "IS_CONNECTED", value: data.msg };
                                this.props.dispatch(action);
                            }
                        }]
                    );
                }else{ //Inscription invalide
                    //Envoie un message d'alerte 
                    Alert.alert(
                        "Informations",
                        data.msg,
                        [{text:"Ok"}]
                    );
                }
            });
        }else{
            //Envoie un message d'alerte 
            Alert.alert(
                "Informations",
                TEXT_FILL_ALL,
                [{text:"Ok"}]
            );
        }
    }

    //Affichage

    //Icône de chargement
    _displayLoading(){
        if(this.state.isLoading){
            return(
                <Loading/>
            );
        }
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
                    onChangeText={(value) => this.user.pseudo = value}
                    />
                    
                    {/* Email */}
                    <Input
                    keyboardType='email-address'
                    placeholder='Email'
                    onChangeText={(value) => this.user.email = value}
                    />
                    {/* Mot de passe */}
                    <Input
                    secureTextEntry={true}
                    placeholder='Mot de passe'
                    onChangeText={(value) => this.user.pwd = value}
                    />
                    <Button
                    title='Inscription'
                    onPress={() => this._signUp()}
                    />
                </KeyboardAwareScrollView>
                {this._displayLoading()}
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
export default connect(mapStateToProps)(SignUp);