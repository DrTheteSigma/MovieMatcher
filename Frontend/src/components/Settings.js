import React, { useState } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button, StatusBar } from 'react-native';
import SyncStorage, { set } from 'sync-storage';

const Settings = ({ route }) => {

    const result = SyncStorage.get('id');
    const PlayerNum = SyncStorage.get('PlayerNum');

    console.log(result)

    const [num, setNum] = useState(0)





  return (
    <>
    <Text > {num}Your room number is {result}</Text>
    <Text>Your player number is {PlayerNum}</Text>
    
    
    </>
  )
}

export default Settings