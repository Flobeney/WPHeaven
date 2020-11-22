//Librairies
import React from 'react';
//Components perso
import NavLogin from '../Navigation/NavLogin.js';
import NavLogged from '../Navigation/NavLogged.js';
//Redux
import { connect } from 'react-redux';

class Index extends React.Component {
    render() {
        return (
            (this.props.idUser === false ? <NavLogin/> : <NavLogged/>)
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
