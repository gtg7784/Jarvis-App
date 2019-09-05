import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  ImageBackground,
  Alert,
} from 'react-native';

import MapView from 'react-native-maps';

import {COLOR_WHITE, COLOR_BLACK} from '../constants/color';

import {width, height} from '../constants/size';

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
    headerStyle: {
      elevation: 0,
      shadowOffset: {height: 0, width: 0},
      shadowOpacity: 0,
      shadowRadius: 0,
      backgroundColor: 'transparent',
      shadowColor: 'transparent',
    },
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLOR_WHITE,
        }}>
        <View
          style={{
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
            }}>
            지도
          </Text>
          <View />
        </View>
        <MapView
          style={{
            flex: 1,
          }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  wrapper: {},
});

export default MapScreen;
