import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Nav } from 'react-bootstrap'
import MatchedMovies from '../components/MatchedMovies'
import Selector from '../components/Selector'
import Settings from '../components/Settings'


const Menu = ({ navigation }) => {
    const Tab = createBottomTabNavigator()
   
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator>
            <Tab.Screen name="selector" component={Selector}></Tab.Screen>
            <Tab.Screen name="Matched" component={MatchedMovies} options={{unmountOnBlur: true}}></Tab.Screen>
            <Tab.Screen name="settings" component={Settings} ></Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Menu