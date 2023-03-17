import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button, StatusBar } from 'react-native';
import SyncStorage from 'sync-storage';
import MovieList from './MovieCard';


const id = SyncStorage.get('id');
const PlayerNum = SyncStorage.get('PlayerNum');





const roomfind = () => {
        return fetch('https://88fc-75-102-132-145.ngrok.io/api/room/getroom', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        roomId: id
    })
    })
    .then(response => response.json())
    .then(data => {
    //console.log("test")
    //console.log(data["IMDB"]);
    return data["IMDB"];
    })
    .catch(error => {
    console.error(error);
    throw error;
    });


  }




  const Selector = () => {
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
    }else{
        return <MovieList movies={movies} />;
    }

   
};


export default Selector