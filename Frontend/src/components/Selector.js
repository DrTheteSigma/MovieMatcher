import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button, StatusBar } from 'react-native';
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
                const response = await fetch('https://a815-75-102-132-145.ngrok.io/api/room/getroom', {
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
        return <Text>getting data...</Text>;
    } else {
        return <MovieList movies={movies} />;
    }
};


export default Selector