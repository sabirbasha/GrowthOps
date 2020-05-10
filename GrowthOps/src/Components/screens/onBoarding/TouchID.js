import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage,
} from 'react-native';
import ScreenContainer from '../../Containers/ScreenContainer';
import ScreenLayout from '../../Layouts/ScreenLayout';
import Typography from '../../Components/Typography';
import { RED, ECRU_WHITE, WHITE } from '../../../Constants/Colors';
import * as String from '../../../Constants/Strings';
import { cheackTouchID } from '../../../Utilities/Utility';
import {
  TAB_SCREEN,
} from '../../navigation/navigationConstant';
/**
 * Start screen of Application
 */

class TouchID extends Component {
  state = {
    username: '',
  };

  closePressed = () => {
    console.log('[TouchID] >> [loginPressed]');
  };
  laterPressed = () => {
    console.log('[TouchID] >> [laterPressed]');
    this.props.navigation.navigate(TAB_SCREEN);
  };
  yesButtonPressed = async () => {
    console.log('[TouchID] >> [yesPreesed]');
    const touchID = cheackTouchID();
    if (touchID) {
      Alert.alert('Fingerprint Authentication', 'TouchID added successfully');
      await AsyncStorage.setItem('touchEnable', 'true');
      this.props.navigation.navigate(TAB_SCREEN);
      return;
    }
    Alert.alert('Fingerprint Authentication', 'Unable to verify TouchID');
    await AsyncStorage.setItem('touchEnable', 'false');
    this.props.navigation.navigate(TAB_SCREEN);

  };

  render() {
    return (
      <ScreenContainer backgroundColor={WHITE}>
        <ScreenLayout
          paddingBottom={0}
          paddingHorizontal={0}
          paddingTop={0}
          header={
            <View style={styles.addFingerPrintView}>
              <Typography
                text={String.ADD_FINGERPRINT}
                fontWeight="600"
                fontSize={20}
                lineHeight={19}
                color={RED}
                textAlign="left"
                style={styles.addText}
              />
              <TouchableOpacity
                onPress={this.closePressed}
                style={styles.closeButton}>
                <Image
                  source={require('../../../assets/blackClose44.png')}
                  style={styles.closeButtonIcon}
                />
              </TouchableOpacity>
            </View>
          }>
          <View style={styles.container}>
            <Typography
              text={String.ADD_FINGERPRINT}
              fontWeight="600"
              fontSize={20}
              lineHeight={19}
              style={styles.fingerPrintText}
            />
            <Typography
              text={String.FINGERPRINT_TEXT}
              fontWeight="normal"
              fontSize={16}
              lineHeight={19}
              style={styles.fingerPrintDetailText}
            />
            <View style={styles.touchView}>
              <Image
                source={require('../../../assets/thumbprintVector.png')}
                style={styles.toychIcon}
              />
            </View>

            <View style={styles.buttonsView}>
              <TouchableOpacity
                onPress={this.laterPressed}
                style={styles.bottomLaterView}>
                <Typography
                  text={String.LATER}
                  fontWeight="normal"
                  fontSize={16}
                  lineHeight={19}
                  textAlign="left"
                  color={RED}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.yesButtonPressed}
                style={styles.bottomYesView}>
                <Typography
                  text={String.YES}
                  fontWeight="normal"
                  fontSize={16}
                  lineHeight={19}
                  textAlign="left"
                />
              </TouchableOpacity>
            </View>
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

export default TouchID;
