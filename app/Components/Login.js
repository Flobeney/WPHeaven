//Librairies
import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//Components perso
import { BASE_STYLE, Loading } from './MyComponent.js';
//Fonctions
import { login, trimValues, nothingEmpty, TEXT_FILL_ALL } from '../WS/functions.js';
//Redux
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        //Variables
        this.user = {
            pseudo: '',
            pwd: '',
        }
        //State
        this.state = {
            isLoading: false
        };
    }

    //Login
    _login(){
		//Trim
		this.user = trimValues(this.user);
		//Aucun champs vide
        if(nothingEmpty(this.user)){
			//Lancer le chargement
			this.setState({
				isLoading: true
			})
			//Login
			login(this.user).then((data) => {
				//Fin du chargement
				this.setState({
					isLoading: false
				});
				//Si la connexion est valide
				if(data !== false){
					const action = { type: "IS_CONNECTED", value: data };
					this.props.dispatch(action);
				}else{ //Connexion invalide
					//Envoie un message d'alerte 
					Alert.alert(
						"Information",
						"Invalid connection !",
						[{text:"Ok"}]
					);

				}
			});
		}else{
			//Envoie un message d'alerte 
			Alert.alert(
				"Information",
				TEXT_FILL_ALL,
				[{text:"Ok"}]
			);
		}
        
    }
    
    render(){
        return (
            <View style={BASE_STYLE.container}>
                <KeyboardAwareScrollView 
                style={BASE_STYLE.scrollview_container}
                contentContainerStyle={BASE_STYLE.scrollview_content}
                >
                    {/* Pseudo */}
                    <Input
                    placeholder='Pseudo'
                    onChangeText={(value) => this.user.pseudo = value}
                    />
                    {/* Mot de passe */}
                    <Input
                    secureTextEntry={true}
                    placeholder='Password'
                    onChangeText={(value) => this.user.pwd = value}
                    />
                    <Button
                    title='Login'
                    onPress={() => this._login()}
                    />
                    <Button
                    title='Sign up'
                    onPress={() => this.props.navigation.navigate('SignUp')}
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
export default connect(mapStateToProps)(Login);