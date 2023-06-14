import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SyncStorage from 'sync-storage';

const JoinRoom = ({ navigation }) => {
  const [roomId, setRoomId] = useState('');
  const [selectedUser, setSelectedUser] = useState('user1');

  const handleJoinRoom = async () => {
    // Handle joining the room with the entered ID
    const response = await fetch('http://3.141.165.128:8001/api/room/available', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        roomId: roomId
      })
    });
    let data = await response.json();
    data = data["Available"];
    console.log(data);
    if (data !== true) {
      alert('Please enter a correct Room ID');
    } else {
      SyncStorage.set('id', roomId);
      SyncStorage.set('PlayerNum', selectedUser === 'user1' ? 1 : 2);
      navigation.navigate('Menu');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Room ID</Text>
      <TextInput
        style={styles.input}
        value={roomId}
        onChangeText={setRoomId}
        placeholder="Room ID"
        placeholderTextColor="#a6a6a6"
      />
      <View style={styles.radioButtonGroup}>
        <View style={styles.radioButton}>
          <TouchableOpacity
            style={selectedUser === 'user1' ? styles.radioButtonSelected : styles.radioButtonUnselected}
            onPress={() => setSelectedUser('user1')}
          >
            <Text style={styles.radioButtonText}>User 1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.radioButton}>
          <TouchableOpacity
            style={selectedUser === 'user2' ? styles.radioButtonSelected : styles.radioButtonUnselected}
            onPress={() => setSelectedUser('user2')}
          >
            <Text style={styles.radioButtonText}>User 2</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleJoinRoom}>
        <Text style={styles.buttonText}>Join Room</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#FFFFFF',
  },
  radioButtonGroup: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  radioButton: {
    marginRight: 20,
  },
  radioButtonSelected: {
    backgroundColor: '#5DBCD2',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  radioButtonUnselected: {
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  radioButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: '#5DBCD2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JoinRoom;
