import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import useStore from '../stores/useStore';
import MatchedCard from './MatchedCard';

const MatchedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useStore(); // Using Zustand store to get the room ID

  useEffect(() => {
    const roomfind = async () => {
      try {
        const response = await fetch('http://3.141.165.128:8001/api/room/matches', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            roomId: id, // Using Zustand store to get the room ID
          }),
        });

        const data = await response.json();
        console.log(data);
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    roomfind();
  }, [id]); // Adding id as a dependency to useEffect

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (movies.length === 0) {
    return (
      <View style={styles.noMatchesContainer}>
        <Text style={styles.noMatchesText}>No matches found for the given room ID.</Text>
      </View>
    );
  } else {
    return <MatchedCard movies={movies} />;
  }
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMatchesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMatchesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default MatchedMovies;
