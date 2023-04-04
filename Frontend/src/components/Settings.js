import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SyncStorage from 'sync-storage';

const Settings = ({ route }) => {
  const result = SyncStorage.get('id');
  const playerNum = SyncStorage.get('PlayerNum');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Room Number:</Text>
        <Text style={styles.settingValue}>{result}</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Player Number:</Text>
        <Text style={styles.settingValue}>{playerNum}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingLabel: {
    fontSize: 18,
    color: '#333',
  },
  settingValue: {
    fontSize: 18,
    color: '#888',
  },
});

export default Settings;
