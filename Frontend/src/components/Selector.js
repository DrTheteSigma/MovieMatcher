import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button, StatusBar, ActivityIndicator } from 'react-native';
import SyncStorage from 'sync-storage';
import MovieList from './MovieCard';


const id = SyncStorage.get('id');
const PlayerNum = SyncStorage.get('PlayerNum');





const Selector = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(null);
    const [playerNum, setPlayerNum] = useState(null);

    useEffect(() => {
        const getIdAndPlayerNum = async () => {
            const _id = await SyncStorage.get('id');
            const _playerNum = await SyncStorage.get('PlayerNum');
            setId(_id);
            setPlayerNum(_playerNum);
        };
        getIdAndPlayerNum();
    }, []);

    useEffect(() => {
        if (!id) return;
        const roomfind = async () => {
            try {
                const response = await fetch('http://3.141.165.128:8001/api/room/getroom', {
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
                const imdb = data["IMDB"];
                setMovies(imdb);
                setLoading(false);
            } catch (error) {
                console.error(error);
                throw error;
            }
        };
        roomfind();
    }, [id]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
            </View>
          )
    } else {
        return <MovieList movies={movies} />;
    }
};

const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
   
  });

export default Selector