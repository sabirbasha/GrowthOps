import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard,
  AsyncStorage,
} from 'react-native';
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
import {
  TOUCHID_SCREEN,
  WEBVIEW_SCREEN,
  TAB_SCREEN,
} from '../../navigation/navigationConstant';
import {cheackTouchID} from '../../../Utilities/Utility';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/authActions';

/**
 * Start screen of Application
 */

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  onUsernameInputTextChange = value => {
    console.log('[LoginScreen] >> [onInputTextChange]');
    this.setState({username: value});
  };
  onPasswordInputTextChange = value => {
    console.log('[LoginScreen] >> [onInputTextChange]');
    this.setState({password: value});
  };

  forgotPasswordPress = () => {
    console.log('[LoginScreen] >> [forgotPasswordPress]');
    const params = {
      title: 'Forgot Password',
    };
    this.props.navigation.navigate(WEBVIEW_SCREEN, {
      params: params,
    });
  };
  touchIdPressed = async () => {
    console.log('[LoginScreen] >> [touchIdPressed]');
    const value = await AsyncStorage.getItem('touchEnable');
    const touchID = cheackTouchID();
    if (touchID) {
      Alert.alert(
        String.FINGERPRINT_AUTHENTICATION,
        String.FINGERPRINT_AUTHENTICATION,
      );
    } else {
      Alert.alert(
        String.FINGERPRINT_AUTHENTICATION,
        String.AUTHENTICATION_FAILED,
      );
    }
    if (value === 'true') {
      this.props.navigation.navigate(TAB_SCREEN);
      return;
    }
    this.props.navigation.navigate(TOUCHID_SCREEN);
  };
  signUpPressed = () => {
    console.log('[LoginScreen] >> [signUpPressed]');
    const params = {
      title: 'Sign Up',
    };
    this.props.navigation.navigate(WEBVIEW_SCREEN, {
      params: params,
    });
  };
  loginPressed = async () => {
    console.log('[LoginScreen] >> [loginPressed]');
    const {username, password} = this.state;
    const value = await AsyncStorage.getItem('touchEnable');

    Keyboard.dismiss();
    this.props.login(username, password).then(() => {
      if (this.props.error) {
        Alert.alert(
          String.LOGIN_FAILED,
          String.LOGIN_ERROR,
          [
            {
              text: String.TRY_AGAIN,
              onPress: () => console.log('Try Again Pressed'),
            },
          ],
          {cancelable: false},
        );
      } else {
        console.log('[LoginScreen] >> [loginPressed]', this.props.userData);
        if (value === 'true') {
          this.props.navigation.navigate(TAB_SCREEN);
          return;
        }
        this.props.navigation.navigate(TOUCHID_SCREEN);
      }
    });
  };

  render() {
    const {username, password} = this.state;
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
                  text={String.WeLCOME_TEXT}
                  fontWeight="600"
                  fontSize={16}
                  lineHeight={19}
                  color={WHITE}
                />
              }
            />
          }>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Typography
                text={String.USER_ID}
                fontWeight="normal"
                fontSize={16}
                lineHeight={19}
                textAlign="left"
              />
              <View style={styles.inputView}>
                <InputField
                  value={username}
                  onChangeText={this.onUsernameInputTextChange}
                  placeholder={String.PLACE_HOLDER_USER_ID}
                  inputStyle={styles.inputText}
                  autoFocus={true}
                />
              </View>
            </View>
            <View style={styles.inputPasswordView}>
              <Typography
                text={String.PASSWORD}
                fontWeight="normal"
                fontSize={16}
                lineHeight={19}
                textAlign="left"
              />
              <View style={styles.inputView}>
                <InputField
                  value={password}
                  onChangeText={this.onPasswordInputTextChange}
                  placeholder={String.PASSWORD}
                  inputStyle={styles.inputText}
                />
              </View>
            </View>
            <View style={styles.forgotPassword}>
              <TouchableOpacity onPress={this.forgotPasswordPress}>
                <Typography
                  text={String.FORGOT_PASSWORD}
                  fontWeight="normal"
                  fontSize={16}
                  lineHeight={19}
                  textAlign="left"
                  color={ROYAL_BLUE}
                  style={styles.forgotPasswordText}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginView}
              onPress={this.loginPressed}>
              <Typography
                text={String.LOGIN}
                fontWeight="normal"
                fontSize={16}
                lineHeight={19}
                textAlign="left"
              />
            </TouchableOpacity>
            <View style={styles.loginViaView}>
              <View style={styles.firstcolumnView} />
              <Typography
                text={String.OR_LOGIN_VIA}
                fontWeight="normal"
                fontSize={16}
                lineHeight={19}
                textAlign="left"
                style={styles.loginViaText}
              />
              <View style={styles.secondColumnView} />
            </View>
            <View style={styles.touchIdView}>
              <TouchableOpacity onPress={this.touchIdPressed}>
                <Typography
                  text={String.TOUCHID}
                  fontWeight="normal"
                  fontSize={16}
                  lineHeight={19}
                  textAlign="left"
                  color={ROYAL_BLUE}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.newUserView}>
              <Typography
                text={String.NEWUSER}
                fontWeight="normal"
                fontSize={16}
                lineHeight={19}
                textAlign="left"
                style={styles.newUserText}
              />
              <TouchableOpacity onPress={this.signUpPressed}>
                <Typography
                  text={String.SIGNUP}
                  fontWeight="normal"
                  fontSize={16}
                  lineHeight={19}
                  textAlign="left"
                  color={ROYAL_BLUE}
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
    flex: 1,
  },
  inputContainer: {
    height: 100,
    width: '100%',
    marginTop: 30,
  },
  loginViaView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
    marginTop: 10,
  },
  newUserText: {
    width: '25%',
  },
  forgotPassword: {
    marginTop: 20,
    height: 40,
  },
  loginView: {
    width: '100%',
    height: 50,
    backgroundColor: RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  touchIdView: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newUserView: {
    height: 40,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstcolumnView: {
    width: '30%',
    height: 1,
    backgroundColor: GREY,
  },
  loginViaText: {
    width: '33%',
    marginLeft: 10,
  },
  secondColumnView: {
    flex: 1,
    marginLeft: 5,
    height: 1,
    backgroundColor: GREY,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
  },
  inputPasswordView: {
    height: 100,
    width: '100%',
    marginTop: 10,
  },
  inputView: {
    height: 50,
    fontSize: 20,
    fontWeight: 'normal',
    borderColor: GREY,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  inputText: {
    marginLeft: 10,
    flex: 1,
  },
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  userData: state.auth.userData,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(actions.login({username, password})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
