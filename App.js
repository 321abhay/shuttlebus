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
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

import MapView from 'react-native-maps'
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
//import BusTimingData from 'src/api/BusTimingData';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 1.3452295168393036;
const LONGITUDE = 103.68220567703247;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <MapView
        provider = {PROVIDER_DEFAULT}
        style={styles.map}
        showsBuildings={true}
        region={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
<MapView.Polyline
		coordinates={[
    {latitude: 1.34481206, longitude: 103.68097881},
    {latitude: 1.34476916, longitude: 103.68188393},
    {latitude: 1.34556287, longitude: 103.68261349},
    {latitude: 1.34665691, longitude: 103.68368638},
    {latitude: 1.34855454, longitude: 103.68380427},
    {latitude: 1.34951986, longitude: 103.68502736},
    {latitude: 1.34885486, longitude: 103.68576765},
    {latitude: 1.34836147, longitude: 103.68658304},
    {latitude: 1.34698856, longitude: 103.68656158},
    {latitude: 1.34488629, longitude: 103.68838549},
    {latitude: 1.34604468, longitude: 103.68973732},
    {latitude: 1.34690275, longitude: 103.69016647},
    {latitude: 1.33774284, longitude: 103.69600296},
    {latitude: 1.3378072, longitude: 103.69868517},
    {latitude: 1.34143255, longitude: 103.69641066},
    {latitude: 1.3396735, longitude: 103.6947155}
		]}
		strokeColor="#008000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeWidth={3}
	/>
  <MapView.Polyline
		coordinates={[
      {latitude: 1.34202333, longitude: 103.68085397},
      {latitude: 1.34129397, longitude: 103.67999566},
      {latitude: 1.34127252, longitude: 103.67915881},
      {latitude: 1.34363221, longitude: 103.67892278},
      {latitude: 1.34491932, longitude: 103.67847216},
      {latitude: 1.34702159, longitude: 103.67834342},
      {latitude: 1.34880209, longitude: 103.68190539},
      {latitude: 1.35096871, longitude: 103.67980254},
      {latitude: 1.3534142, longitude: 103.68216288},
      {latitude: 1.35588114, longitude: 103.68593943},
      {latitude: 1.35588115, longitude: 103.68686211},
      {latitude: 1.35515179, longitude: 103.68787062},
      {latitude: 1.35304952, longitude: 103.68621838},
      {latitude: 1.35193404, longitude: 103.68583215},
      {latitude: 1.35043242, longitude: 103.68581069},
      {latitude: 1.34946709, longitude: 103.68501675},
      {latitude: 1.34890934, longitude: 103.68581069},
      {latitude: 1.34850176, longitude: 103.68643296},
      {latitude: 1.34702159, longitude: 103.68654025},
      {latitude: 1.34483351, longitude: 103.68829978},
      {latitude: 1.34354641, longitude: 103.68656171},
      {latitude: 1.34376093, longitude: 103.68482363},
      {latitude: 1.3427956, longitude: 103.68362201},
      {latitude: 1.34122961, longitude: 103.6838795},
      {latitude: 1.34050025, longitude: 103.68252766},
      {latitude: 1.34118671, longitude: 103.68177665},
      {latitude: 1.34202333, longitude: 103.68085397}
		]}
		strokeColor="#0000FF" // fallback for when `strokeColors` is not supported by the map-provider
		strokeWidth={3}
	/>
  <MapView.Marker
  coordinate={{latitude: 1.34184014,longitude: 103.6810112}}
  />
        </MapView>
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
