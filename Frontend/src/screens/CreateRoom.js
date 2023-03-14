import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button, StatusBar } from 'react-native';

import SyncStorage from 'sync-storage';

let roomid;

useState

const roomCreate = () => {
    return fetch('https://512f-75-102-132-145.ngrok.io/api/room/create', {
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
       roomid = data.message;

      console.log(roomid);
      return roomid;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
  }

const image = { uri: "https://w0.peakpx.com/wallpaper/277/14/HD-wallpaper-cinema-movies-theatre-popcorn-entertaintment-chill.jpg" };



const CreateRoom = ({ navigation }) => {
    const [id, setId] = useState('');


    useEffect(() => {
        roomCreate()
          .then(roomid => {
            setId(roomid)
           
            console.log(roomid);
            SyncStorage.set('id', roomid);
            SyncStorage.set('PlayerNum', 1);


          })
          .catch(error => console.error(error));
      }, []);
      
  return (
    <ImageBackground
      source={image} style={styles.background}>
        <View>
            <Text style={styles.RoomID}>{id}</Text>
            <TouchableOpacity
             style={styles.button}
             onPress={() => 
             navigation.navigate('Menu')}>
             <Text style={styles.buttonText}>Start Choosing movies!</Text>
            </TouchableOpacity>

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
    RoomID: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },

})

export default CreateRoom