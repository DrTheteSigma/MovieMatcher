import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button, StatusBar } from 'react-native';
import SyncStorage from 'sync-storage';
import MatchedCard from './MatchedCard';



const id = SyncStorage.get('id');
const PlayerNum = SyncStorage.get('PlayerNum');





const roomfind = async () => {
    try {
        const response = await fetch('https://4754-75-102-132-145.ngrok.io/api/room/matches', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            roomId: id
          })
        });
    
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
  }
  




  const MatchedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      roomfind()
        .then((imdb) => {
          setMovies(imdb);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }, []);
  
    if (loading) {
      return <Text>getting data...</Text>;
    }
    else{
        return (
            <MatchedCard movies={movies} />
         
        );
    }

    
  };
  


export default MatchedMovies