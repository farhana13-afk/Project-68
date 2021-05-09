import React from 'react';
import Facebook from './screens/fb';
import Instagram from './screens/in';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Header} from 'react-native-elements';

export default class App extends React.Component{
  render(){
  return (
    <View>
    <Header
          backgroundColor={'#00ff80'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: 'black', fontSize: 20 },
          }}
        />
    <AppContainer/>
    </View>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen:Facebook},
  Instagram: {screen:Instagram}
})
const AppContainer = createAppContainer(TabNavigator)


