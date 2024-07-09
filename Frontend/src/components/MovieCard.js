import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useStore from '../stores/useStore';
import CustomButton from './CustomButton';

function MovieList({ movies }) {
  const [index, setIndex] = useState(0);
  const { id, playerNum } = useStore(); // Use Zustand store

  const handleNext = () => {
    setIndex((index + 1) % movies.length);
  };

  const movie = movies[index];

  const addtolist = () => {
    fetch('http://3.141.165.128:8001/api/room/putmovie1', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        roomId: id,
        themovie: index,
        PlayerNum: playerNum,
      }),
    })
      .then(response => response.json())
      .then(() => {
        console.log("Movie added to list");
        handleNext();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>Year: {movie.year}</Text>
        <Text style={styles.description}>{movie.description}</Text>
        <Text style={styles.rating}>IMDB Rating: {movie.rating}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Not Interesting"
          onPress={handleNext}
          style={[styles.button, styles.leftButton, { backgroundColor: '#00308F' }]}
        />
        <CustomButton
          title="Interesting"
          onPress={addtolist}
          style={[styles.button, styles.rightButton, { backgroundColor: '#00308F' }]}
        />
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
    textAlign: 'center',
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
    fontSize: 20,
  },
  leftButton: {
    marginRight: 10,
    padding: 10,
    margin: 10,
  },
  rightButton: {
    padding: 10,
    margin: 10,
  },
});

export default MovieList;
