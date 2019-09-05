/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {Provider} from 'mobx-react';
import {Platform} from 'react-native';
import {
  NavigationScreenOptions,
  NavigationScreenProp,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import SettingScreen from './src/screens/SettingScreen';

import stores from './src/stores';

import {COLOR_MAIN} from './src/constants/color';
import {IMAGE_HOME} from './src/constants/image';

class App extends Component {
  componentDidMount = async () => {
    if (Platform.OS === 'android') {
      const readStoragePerm = await PermissionsAndroid.check(
        'android.permission.READ_EXTERNAL_STORAGE',
      );
      if (!readStoragePerm) {
        await PermissionsAndroid.request(
          'android.permission.READ_EXTERNAL_STORAGE',
        ).then(res => {
          if (res === 'denied' || res === 'never_ask_again') {
            BackHandler.exitApp();
          }
        });
      }
      const writeStoragePerm = await PermissionsAndroid.check(
        'android.permission.WRITE_EXTERNAL_STORAGE',
      );
      if (!writeStoragePerm) {
        await PermissionsAndroid.request(
          'android.permission.WRITE_EXTERNAL_STORAGE',
        ).then(res => {
          if (res === 'denied' || res === 'never_ask_again') {
            BackHandler.exitApp();
          }
        });
      }
    }

    const netInfo = await NetInfo.isConnected.fetch();

    !netInfo &&
      Alert.alert(
        '알림',
        '인터넷이 연결되어 있지 않습니다.\n앱을 종료합니다.',
        [{text: '확인', onPress: () => BackHandler.exitApp()}],
        {cancelable: false},
      );
  };

  render() {
    return (
      <Provider {...stores}>
        <AppContainer />
      </Provider>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      tabBarOptions: {
        activeTintColor: COLOR_MAIN,
        labelStyle: {
          fontSize: 12,
        },
        showIcon: true,
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: 'transparent',
      },
    },
  },
);

const MapStack = createStackNavigator(
  {
    Map: {screen: MapScreen},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0,
        shadowRadius: 0,
        height: 0,
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
      },
    },
  },
);

const SettingStack = createStackNavigator(
  {
    Firend: {screen: SettingScreen},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0,
        shadowRadius: 0,
        height: 0,
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
      },
    },
  },
);

const MainSwitch = createBottomTabNavigator({
  Home: HomeStack,
  Map: MapStack,
  Setting: SettingStack,
});
const AppContainer = createAppContainer(MainSwitch);

export default App;
