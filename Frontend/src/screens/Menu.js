import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import MatchedMovies from '../components/MatchedMovies'
import Selector from '../components/Selector'
import Settings from '../components/Settings'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
        <Tab.Screen name="selector" component={Selector} 
        
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        
        />
        <Tab.Screen name="Matched" component={MatchedMovies} options={{unmountOnBlur: true}} 
        
        
        options1={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="check" size={size} color={color} />
          ),
        }}
        
        />
        <Tab.Screen name="settings" component={Settings}
        
        
        options2={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-helper" size={size} color={color} />
          ),
        }}
        
        />
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
