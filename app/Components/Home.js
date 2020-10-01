//Librairies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//Redux
import { connect } from 'react-redux';

class Home extends Component {
    render(){
        console.log('idUser: ', this.props.idUser)
        return (
            <View style={styles.container}>
                {/* Tester Redux */}
                <Button
                title='login'
                onPress={() => {
                    const action = { type: "IS_CONNECTED", value: 1 }
                    this.props.dispatch(action)
                }}
                />
                <Button
                title='logout'
                onPress={() => {
                    const action = { type: "IS_CONNECTED", value: false }
                    this.props.dispatch(action)
                }}
                />
                <Text>Welcome ! Take a seat and wait please :c</Text>
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
export default connect(mapStateToProps)(Home)