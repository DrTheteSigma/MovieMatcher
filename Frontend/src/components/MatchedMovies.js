import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button, StatusBar } from 'react-native';
import SyncStorage from 'sync-storage';
import MatchedCard from './MatchedCard';

const MatchedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const roomfind = async () => {
      try {
        const roomId = await SyncStorage.get('id');
        const response = await fetch('https://3c74-131-247-226-124.ngrok.io/api/room/matches', {
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
    return <Text>getting data...</Text>;
  } else if (movies.length === 0) {
    return <Text>No matches found for the given room ID.</Text>;
  } else {
    return <MatchedCard movies={movies} />;
  }
};

export default MatchedMovies;
