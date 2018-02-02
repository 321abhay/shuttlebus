import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, Dimensions,
  TouchableOpacity, View, FlatList, ListView, ActivityIndicator
} from 'react-native';
import MapView from 'react-native-maps'
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import busmarker from './src/images/busmarker3.png'
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
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        showsBuildings={true}
        region={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <MapView.Marker
          coordinate={{ latitude: 1.345738996, longitude: 103.6828494072 }}
          title="Bus Arrival"
          description="2 Mins"
        />
        <MapView.Marker
          coordinate={{ latitude: 1.3482524, longitude: 103.6836641 }}
          image={busmarker}
          rotation={-80}
        />
        <MapView.Polyline
          coordinates={[
            { latitude: 1.3482524, longitude: 103.6836641 },
            { latitude: 1.3481343, longitude: 103.6836543 },
            { latitude: 1.3480425, longitude: 103.6836595 },
            { latitude: 1.3479083, longitude: 103.6836836 },
            { latitude: 1.3473565, longitude: 103.6837806 },
            { latitude: 1.3471612, longitude: 103.6838207 },
            { latitude: 1.3470049, longitude: 103.6838356 },
            { latitude: 1.3468558, longitude: 103.6838185 },
            { latitude: 1.3468192, longitude: 103.6837999 },
            { latitude: 1.3466833, longitude: 103.683731 },
            { latitude: 1.3466622, longitude: 103.6837165 },
            { latitude: 1.3461569, longitude: 103.6833693 },
            { latitude: 1.3460396, longitude: 103.6832745 },
            { latitude: 1.3459272, longitude: 103.6831837 },
            { latitude: 1.3457688, longitude: 103.6829214 },
            { latitude: 1.345738996, longitude: 103.682849407 },
            { latitude: 1.345738996, longitude: 103.6828494072 }
          ]}
          strokeColor="#000"
          strokeWidth={5}
        />
      </MapView >
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

{/* 
<MapView
provider={PROVIDER_DEFAULT}
style={styles.map}
showsBuildings={true}
region={{
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}}>
<MapView.Marker
  coordinate={{ latitude: 1.34184014, longitude: 103.6810112 }}
/>
</MapView> 
*/}
/* constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}
componentDidMount() {
  return fetch('https://baseride.com/routes/api/platformbusarrival/378237/?format=json')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.forecast.route),
      }, function () {
      });
      this.setState({ isLoading: false, data: responseJson.name })
    })
    .catch((error) => {
      console.error(error);
    });
}
render() {
  if (this.state.isLoading) {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
            <ListView
          dataSource={this.state.data}
          renderRow={(rowData) => <Text>{rowData.id},{rowData.name}</Text>}
        />
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
} */