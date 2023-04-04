import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import SyncStorage from 'sync-storage';

function MovieList({ movies }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === movies.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };


  const id = SyncStorage.get('id');
  const playnum = SyncStorage.get('PlayerNum');



  const movie = movies[index];


 

  const addtolist = () => {
        return fetch('18.223.195.32:3001/api/room/putmovie1', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        roomId: id,
        themovie: index,
        PlayerNum: playnum
    })
    })
   
    .catch(error => {
    console.error(error);
    throw error;
    }, 

    console.log("running"),
    handleNext()
    );

  
  }
  


  console.log(movie)

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie["image"] }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie["title"]}</Text>
        <Text style={styles.year}>Year: {movie["year"]}</Text>
        <Text style={styles.description}>Description: {movie["description"]}</Text>
        <Text style={styles.rating}>IMDB Rating: {movie["rating"]}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="NO" onPress={handleNext} style={[styles.button, styles.leftButton]} />
        
        <Button title="YES" onPress={addtolist} style={[styles.button, styles.rightButton]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    image: {
      width: 250,
      height: 350,
      borderRadius: 10,
      marginBottom: 20,
    },
    infoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    year: {
      fontSize: 16,
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      marginBottom: 5,
    },
    rating: {
      fontSize: 16,
      marginBottom: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button: {
      flex: 1,
      fontSize: 20
    },
    leftButton: {
      marginRight: 10,
      backgroundColor: 'red',
      fontSize: 20
    },
    rightButton: {
      fontSize: 20
    },
  });
  
  

export default MovieList;
