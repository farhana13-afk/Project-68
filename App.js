import React from 'react';
import Facebook from './screens/fb';
import Instagram from './screens/in';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen:Facebook},
  Instagram: {screen:Instagram}
})
const AppContainer = createAppContainer(TabNavigator)


