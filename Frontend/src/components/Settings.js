import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Clipboard, Alert } from 'react-native';
import useStore from '../stores/useStore';

const Settings = () => {
  const { id, playerNum } = useStore(); // Use Zustand store

  const handleCopy = () => {
    Clipboard.setString(id);
    Alert.alert("Room ID was saved to Clipboard", "Enjoy sharing with friends :)");
    // Show a feedback or notification to the user indicating that the text has been copied
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity onPress={handleCopy} style={styles.settingItem}>
        <Text style={styles.settingLabel}>Room Number:</Text>
        <Text style={styles.settingValue}>{id}</Text>
      </TouchableOpacity>
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
