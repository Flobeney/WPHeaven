//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
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
            <View style={styles.container}>
                <Input
                placeholder='Pseudo'
                onChangeText={(value) => this.pseudo = value}
                />
            </View>
        );
    }    
}

//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//Pour Redux
const mapStateToProps = (state) => {
    return {
        idUser: state.isConnected.idUser
    }
}

//Export du component
export default connect(mapStateToProps)(Login);