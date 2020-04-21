import React, {useState, useEffect} from 'react';
import Navigation from './navigation'
import { useFonts } from '@use-expo/font';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { AppLoading } from 'expo';


import stateReducer from './store/reducers/state.reducer'

const rootReducer = combineReducers({
  state: stateReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  const [isLoaded] = useFonts({
    'OpenSans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  return (
    isLoaded
    ? 
    <Provider store={store}>
        <Navigation />
      </Provider>
    : <AppLoading />
  );
}

