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

import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_BATTERY,
  COLOR_TRANS_BLACK,
} from '../constants/color';
import {IMAGE_PROFILE} from '../constants/image';

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
            프로필
          </Text>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              borderColor: COLOR_BLACK,
              borderRadius: 20,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
              }}>
              T
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 50,
            borderBottomWidth: 1,
            borderBottomColor: COLOR_BATTERY,
          }}>
          <Image
            source={IMAGE_PROFILE}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              marginTop: 15,
              marginBottom: 40,
            }}>
            송주현
          </Text>
        </View>
        <View
          style={{
            padding: 40,
          }}>
          <View
            style={{
              height: 60,
              flexDirection: 'column',
              marginBottom: 10,
              borderBottomColor: COLOR_BATTERY,
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                textAlign: 'left',
                color: COLOR_TRANS_BLACK,
              }}>
              이름
            </Text>
            <Text
              style={{
                fontWeight: '500',
                marginTop: 10,
                fontSize: 20,
                color: COLOR_BLACK,
              }}>
              송주현
            </Text>
          </View>
          <View
            style={{
              height: 60,
              flexDirection: 'column',
              marginBottom: 10,
              borderBottomColor: COLOR_BATTERY,
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                textAlign: 'left',
                color: COLOR_TRANS_BLACK,
              }}>
              전화번호
            </Text>
            <Text
              style={{
                fontWeight: '500',
                marginTop: 10,
                fontSize: 20,
                color: COLOR_BLACK,
              }}>
              010-3271-1739
            </Text>
          </View>
          <View
            style={{
              height: 60,
              flexDirection: 'column',
              marginBottom: 10,
              borderBottomColor: COLOR_BATTERY,
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                textAlign: 'left',
                color: COLOR_TRANS_BLACK,
              }}>
              이메일
            </Text>
            <Text
              style={{
                fontWeight: '500',
                marginTop: 10,
                fontSize: 20,
                color: COLOR_BLACK,
              }}>
              izen1231@gmail.com
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: width - 40,
            marginHorizontal: 20,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOR_BLACK,
            borderRadius: 10,
            marginTop: 40,
          }}>
          <Text
            style={{
              color: COLOR_WHITE,
              fontWeight: '600',
              fontSize: 18,
            }}>
            주행 시작
          </Text>
        </TouchableOpacity>
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

export default SettingScreen;
