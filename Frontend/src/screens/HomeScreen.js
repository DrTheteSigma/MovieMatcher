import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Button } from 'react-native';

const image = { uri: "https://w0.peakpx.com/wallpaper/277/14/HD-wallpaper-cinema-movies-theatre-popcorn-entertaintment-chill.jpg" };

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={image} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>The perfect way to plan a movie night!</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateRoom')}>
          <Text style={styles.buttonText}>Create A Room!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MatchPage')}>
          <Text style={styles.buttonText}>Join A Room!</Text>
        </TouchableOpacity>


      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
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
});

export default HomeScreen;
