import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import useStore from '../stores/useStore';

const roomCreate = () => {
  return fetch('http://3.141.165.128:8001/api/room/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: 'some data'
    })
  })
  .then(response => response.json())
  .then(data => {
     return data.message;
  })
  .catch(error => {
    console.error(error);
    throw error;
  });
}

const image = { uri: "https://w0.peakpx.com/wallpaper/277/14/HD-wallpaper-cinema-movies-theatre-popcorn-entertaintment-chill.jpg" };

const CreateRoom = ({ navigation }) => {
  const { id, setId, setPlayerNum } = useStore();

  useEffect(() => {
    roomCreate()
      .then(roomid => {
        setId(roomid);
        setPlayerNum(1);
      })
      .catch(error => console.error(error));
  }, []);
  
  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.RoomID}>Get your Popcorn ready User Number 1</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.buttonText}>Start Choosing movies!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RoomID: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', 
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CreateRoom;
