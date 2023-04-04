import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import MatchedMovies from '../components/MatchedMovies'
import Selector from '../components/Selector'
import Settings from '../components/Settings'

const Menu = ({ navigation }) => {
  const Tab = createBottomTabNavigator()
   
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#aaa',
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen name="selector" component={Selector} />
        <Tab.Screen name="Matched" component={MatchedMovies} options={{unmountOnBlur: true}} />
        <Tab.Screen name="settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#222',
    borderTopWidth: 0,
    height: 60,
    paddingTop: 5,
    paddingBottom: 5,
  },
})

export default Menu
