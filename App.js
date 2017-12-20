/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps'
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <MapView
        provider = {PROVIDER_DEFAULT}
        style={styles.map}
        showsBuildings={true}
        initalRegion={{
          latitude: 1.348310,
          longitude: 103.683135,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.0421,
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
