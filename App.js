import React from 'react';
import AppNavigator from './src/navigations/Navigator';
import { registerRootComponent }  from 'expo';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

export default class App extends React.Component{

  state = {
    isFontLoaded : false
  }

  async componentDidMount(){
    await Font.loadAsync({
        'MontBold' : require('./src/fonts/Mont-Bold.otf'),
        'MontRegular' : require('./src/fonts/Mont-Regular.otf'),
        'MontThin' : require('./src/fonts/Mont-Thin.otf'),
    });
    this.setState({isFontLoaded:true})
  }

  render(){
    return(
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(<AppLoading/>)
    );
  }
}

registerRootComponent(App);
