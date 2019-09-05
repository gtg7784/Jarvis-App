import * as React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_TRANS_BLACK,
  COLOR_BATTERY,
  COLOR_SHADOW,
} from '../constants/color';

import {width, height} from '../constants/size';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    weather: 20,
    username: '송주현',
    battery: 89,
    distance: 3.4,
    currentTime: 1000,
    speed: 25,
  };

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
    const {
      weather,
      username,
      battery,
      distance,
      currentTime,
      speed,
    } = this.state;
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
            오늘날씨 {weather}°C
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
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: COLOR_TRANS_BLACK,
            }}>
            환영합니다! {username} 사용자님! {'\n'}
            오늘 날씨는 {weather}°C로 맑고 화창한 하루입니다.{'\n'}
            오늘도 안전운전 하세요.{'\n'}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: COLOR_BLACK,
              fontWeight: '500',
            }}>
            배터리 잔량
          </Text>
          <View
            style={{
              marginTop: 12,
              width: '100%',
              height: 6,
              borderRadius: 3,
              backgroundColor: COLOR_BATTERY,
            }}
          />
          <View
            style={{
              width: `${battery}%`,
              marginTop: -6,
              height: 6,
              borderRadius: 3,
              backgroundColor: COLOR_BLACK,
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: COLOR_BLACK,
              fontWeight: '500',
            }}>
            주행 정보
          </Text>
          <ScrollView
            style={{
              marginTop: 20,
              paddingLeft: 4,
              paddingRight: 20,
              marginBottom: 20,
            }}
            horizontal={true}>
            <View
              style={{
                marginVertical: 10,
                width: 270,
                height: 300,
                backgroundColor: COLOR_WHITE,
                marginRight: 40,
                paddingVertical: 20,
                paddingHorizontal: 25,
                borderWidth: 1,
                borderColor: COLOR_WHITE,
                shadowColor: COLOR_SHADOW,
                shadowOffset: {
                  width: 2,
                  height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4.65,
                elevation: 8,
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOR_BLACK,
                  fontWeight: '500',
                }}>
                주행 거리
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOR_TRANS_BLACK,
                  fontWeight: '500',
                  marginTop: 2,
                }}>
                오늘 하루 동안의 주행거리 입니다.
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 60,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginTop: 24,
                }}>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: '600',
                    letterSpacing: -1.3,
                  }}>
                  {distance}km
                </Text>
                <View
                  style={{
                    width: '94%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOR_TRANS_BLACK,
                      fontWeight: '400',
                    }}>
                    {currentTime < 60
                      ? currentTime % 60 >= 10
                        ? `00분 ${currentTime}초`
                        : `00분 0${currentTime}초`
                      : currentTime % 60 >= 10
                      ? currentTime > 600
                        ? `${parseInt(currentTime / 60)}분 ${currentTime %
                            60}초`
                        : `0${parseInt(currentTime / 60)}분 ${currentTime %
                            60}초`
                      : currentTime > 600
                      ? `${parseInt(currentTime / 60)}분 0${currentTime % 60}초`
                      : `0${parseInt(currentTime / 60)}분 0${currentTime %
                          60}초`}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOR_TRANS_BLACK,
                      fontWeight: '400',
                    }}>
                    평균 속도 {speed}km
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginBottom: 4,
                    }}>
                    엊그제{'\n'}
                    2019.09.03
                  </Text>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '500',
                      letterSpacing: -1.3,
                    }}>
                    1.7km
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginBottom: 4,
                    }}>
                    어제{'\n'}
                    2019.09.04
                  </Text>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '500',
                      letterSpacing: -1.3,
                    }}>
                    2.7km
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                width: 270,
                height: 300,
                backgroundColor: COLOR_WHITE,
                marginRight: 40,
                paddingVertical: 20,
                paddingHorizontal: 25,
                borderWidth: 1,
                borderColor: COLOR_WHITE,
                shadowColor: COLOR_SHADOW,
                shadowOffset: {
                  width: 2,
                  height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4.65,
                elevation: 8,
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOR_BLACK,
                  fontWeight: '500',
                }}>
                주변 사고 현황
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOR_TRANS_BLACK,
                  fontWeight: '500',
                  marginTop: 2,
                }}>
                주변에 사고가 있는지 확인합니다.
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 60,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginTop: 24,
                }}>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: '600',
                    letterSpacing: -1.3,
                  }}>
                  킨텍스 앞
                </Text>
                <View
                  style={{
                    width: '94%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOR_TRANS_BLACK,
                      fontWeight: '400',
                    }}>
                    승용차 2대 추돌
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOR_TRANS_BLACK,
                      fontWeight: '400',
                    }}>
                    사망자 1명
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginBottom: 4,
                    }}>
                    버스 3중 추돌
                  </Text>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '500',
                      letterSpacing: -1.3,
                    }}>
                    대화역
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginBottom: 4,
                    }}>
                    승용차 3중 추돌
                  </Text>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '500',
                      letterSpacing: -1.3,
                    }}>
                    자유로
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
            borderRadius: 16,
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

export default HomeScreen;
