/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {Provider} from 'mobx-react';
import {Platform, Image} from 'react-native';
import {
  NavigationScreenOptions,
  NavigationScreenProp,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import SettingScreen from './src/screens/SettingScreen';

import stores from './src/stores';

import {
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_TRANS_BLACK,
} from './src/constants/color';
import {IMAGE_HOME, IMAGE_MAP, IMAGE_SETTINGS} from './src/constants/image';

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
        activeTintColor: COLOR_BLACK,
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
    Map: {
      screen: MapScreen,
    },
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
    Firend: {
      screen: SettingScreen,
      tabBarOptions: {
        activeTintColor: COLOR_BLACK,
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
        height: 0,
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
      },
    },
  },
);

const MainSwitch = createBottomTabNavigator(
  {
    Home: HomeStack,
    Map: MapStack,
    Setting: SettingStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = IMAGE_HOME;
        } else if (routeName === 'Map') {
          iconName = IMAGE_MAP;
        } else if (routeName === 'Setting') {
          iconName = IMAGE_SETTINGS;
        }

        return (
          <Image
            source={iconName}
            style={{
              marginTop: 10,
              width: 25,
              height: 25,
              marginBottom: 5,
            }}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: COLOR_BLACK,
      inactiveTintColor: COLOR_TRANS_BLACK,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: COLOR_WHITE,
      },
    },
  },
);
const AppContainer = createAppContainer(MainSwitch);

export default App;
