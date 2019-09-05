import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLOR_WHITE} from '../constants/color';

import {width, height} from '../constants/size';

class SettingScreen extends React.Component {
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
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR_WHITE,
        }}>
        <Text>Setting</Text>
      </View>
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

export default SettingScreen;
