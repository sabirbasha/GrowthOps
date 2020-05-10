import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ScreenContainer from '../../Containers/ScreenContainer';
import ScreenLayout from '../../Layouts/ScreenLayout';
import HeaderLayout from '../../Layouts/HeaderLayout';
import Typography from '../../Components/Typography';
import {
  RED,
  ECRU_WHITE,
  WHITE,
  ROYAL_BLUE,
  GREY,
} from '../../../Constants/Colors';
import * as String from '../../../Constants/Strings';
import InputField from '../../Components/InputField';

/**
 * Start screen of Application
 */

class Notes extends Component {
  state = {
    username: '',
  };

  closePressed = () => {
    console.log('[LoginScreen] >> [loginPressed]');
  };
  laterPressed = () => {
    console.log('[LoginScreen] >> [laterPressed]');
  };
  yesPreesed = () => {
    console.log('[LoginScreen] >> [yesPreesed]');
  };

  render() {
    return (
      <ScreenContainer backgroundColor={ECRU_WHITE}>
        <ScreenLayout
          paddingHorizontal={24}
          header={
            <HeaderLayout
              backgroundColor={RED}
              height={100}
              headerCenterElement={
                <Typography
                  text={String.NOTES}
                  fontWeight="600"
                  fontSize={16}
                  lineHeight={19}
                  color={WHITE}
                />
              }
            />
          }>
          <View style={styles.container}>
            <Typography
              text={String.COMING_SOON}
              fontWeight="normal"
              fontSize={16}
              lineHeight={19}
              style={styles.fingerPrintDetailText}
            />

          </View>
        </ScreenLayout>
      </ScreenContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: ECRU_WHITE,
    paddingHorizontal: 24,
  },
  addFingerPrintView: {
    height: 60,
    flexDirection: 'row',
    width: '100%',
  },
  addText: {
    width: '80%',
    marginTop: 40,
    marginLeft: 20,
  },
  closeButton: {
    width: '30%',
    marginTop: 40,
  },
  closeButtonIcon: {
    height: 18,
    width: 18,
  },
  fingerPrintText: {
    marginTop: 40,
  },
  fingerPrintDetailText: {
    marginTop: 20,
  },
  toychIcon: {
    height: 120,
    width: 100,
  },
  touchView: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsView: {
    bottom: 10,
    left: 24,
    position: 'absolute',
    right: 24,

  },
  bottomLaterView: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: RED,
    borderWidth: 1,
    borderRadius: 5,
  },
  bottomYesView: {
    marginTop: 10,
    height: 50,
    backgroundColor: RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default Notes;
