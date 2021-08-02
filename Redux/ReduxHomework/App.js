import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import * as reducers from './src/store/reducers';

const store = createStore(combineReducers(reducers));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView></SafeAreaView>
    </Provider>
  );
};

export default App;
