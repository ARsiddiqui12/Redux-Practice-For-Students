import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Firstreducer from './components/reducer/Firstreducer';

    
const store = createStore(Firstreducer);



class App extends Component{

    render(){

        return(
        <Provider store={store}>
            <View style={{alignItems:'center'}}>
                <Counter />
            </View>
        </Provider>
        );
    }


}

export default App;

