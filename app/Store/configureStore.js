//Librairies
import { createStore } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
//Components perso
import isConnected from './Reducers/connected.js';

//Configuration
const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}

//Export du component
export default createStore(persistCombineReducers(rootPersistConfig, {isConnected}))