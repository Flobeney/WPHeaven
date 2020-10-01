//Librairies
import React from 'react';
//Components perso
import NavLogin from '../Navigation/NavLogin.js';
//Redux
import { connect } from 'react-redux';

class Index extends React.Component {
    render() {
        return (
            <NavLogin/>
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
export default connect(mapStateToProps)(Index);
