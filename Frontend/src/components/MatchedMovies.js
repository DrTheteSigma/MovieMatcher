import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button, StatusBar, ActivityIndicator } from 'react-native';
import SyncStorage from 'sync-storage';
import MatchedCard from './MatchedCard';

const MatchedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const roomfind = async () => {
      try {
        const roomId = await SyncStorage.get('id');
        const response = await fetch('http://157.230.86.79:3001/api/room/matches', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            roomId: roomId,
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
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
    
  } else if (movies.length === 0) {
    return (
      <View style={styles.noMatchesContainer}>
        <Text style={styles.noMatchesText}>No matches found for the given room ID.</Text>
      </View>
      )
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
