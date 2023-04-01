import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SyncStorage from 'sync-storage';

const Settings = ({ route }) => {
  const result = SyncStorage.get('id');
  const playerNum = SyncStorage.get('PlayerNum');

  const [num, setNum] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{num}</Text>
      <Text style={styles.subtitle}>Your room number is {result}</Text>
      <Text style={styles.subtitle}>Your player number is {playerNum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
  },
});

export default Settings;
