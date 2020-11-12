import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Read : { screen: ReadScreen },
  Write: { screen: WriteScreen }
}, 
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const RouteName = navigation.state.routeName;
      if (RouteName=="Read"){
        return(
          <Image source= {require("./assets/read.png")}
          style = {{
            width: 40,
            height:40
          }}></Image>
        )
      }
      else if (RouteName=="Write"){
        return(
          <Image source= {require("./assets/write.png")}
          style = {{
            width: 40,
            height:40
          }}></Image>
        )
      }
    }
  })
});


const AppContainer = createAppContainer(TabNavigator);