//Librairies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Redux et Persist
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import Store from './Store/configureStore.js';
//Components perso
import Index from './Components/Index.js';

class App extends React.Component {
    render() {
        let persistor = persistStore(Store);
        return (
            <Provider store={Store}>
                <PersistGate persistor={persistor}>
                    <NavigationContainer>
                        <Index/>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        )
    }
}

//Export du component
export default App;