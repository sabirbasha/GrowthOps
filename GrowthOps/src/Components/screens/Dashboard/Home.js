import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ScreenContainer from '../../Containers/ScreenContainer';
import ScreenLayout from '../../Layouts/ScreenLayout';
import Typography from '../../Components/Typography';
import {
  RED,
  ECRU_WHITE,
  WHITE,
  GREY,
  ROYAL_WHITE,
} from '../../../Constants/Colors';
import * as String from '../../../Constants/Strings';
import { Pages } from 'react-native-pages';

class Home extends Component {
  state = {

  };

  render() {
    return (
      <ScreenContainer backgroundColor={ECRU_WHITE}>
        <ScreenLayout
          scrollable
          header={
            <View style={styles.headeView}>
              <View style={styles.logotHeaderView}>
                <View style={styles.meuView}>
                  <Image
                    source={require('../../../assets/menuWhite.png')}
                    style={styles.menuicon}
                  />
                </View>
                <View style={styles.logoutView}>
                  <Image
                    source={require('../../../assets/logout.png')}
                    style={styles.logouticon}
                  />
                </View>
              </View>
              <View style={styles.pagesView}>
                <Pages>
                  <Typography
                    text={String.CURRENT_BILL}
                    fontWeight="600"
                    fontSize={16}
                    lineHeight={19}
                    color={WHITE}
                    style={styles.billerView}
                  />
                  <Typography
                    text={String.PASTBILL}
                    fontWeight="600"
                    fontSize={16}
                    lineHeight={19}
                    color={WHITE}
                    style={styles.billerView}
                  />
                </Pages>
              </View>
              <View style={styles.indexView}>
                <View style={styles.iconsView}>
                  <Image
                    source={require('../../../assets/iconMenuWallet.png')}
                    style={styles.imageICon}
                  />
                </View>
                <View style={styles.iconsView}>
                  <Image
                    source={require('../../../assets/icon24BlackReminder.png')}
                    style={styles.imageICon}
                  />
                </View>
                <View style={styles.iconsView}>
                  <Image
                    source={require('../../../assets/iconMenuWallet.png')}
                    style={styles.imageICon}
                  />
                </View>
                <View style={styles.imageICon}>
                  <Image
                    source={require('../../../assets/icon24BlackReminder.png')}
                    style={styles.imageICon}
                  />
                </View>
              </View>
            </View>
          }
          paddingHorizontal={24}>
          <View style={styles.container}>
            <View style={styles.billDetailsView}>
              <Typography
                text={String.VIEW_ALL_POLICIES}
                fontWeight="600"
                fontSize={16}
                lineHeight={19}
                textAlign="center"
                style={styles.allPolicies}
              />
              <Typography
                text={String.VIEW_ALL}
                fontWeight="600"
                fontSize={16}
                lineHeight={19}
                textAlign="center"
                style={styles.viewAllText}
              />
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
    paddingHorizontal: 10,
  },
  imageICon: {
    height: 20,
    width: 28,
  },
  menuicon: {
    height: 40,
    width: 40,
  },
  logouticon: {
    height: 25,
    width: 25,
  },
  logotHeaderView: {
    height: 40,
    marginTop: 40,
    flexDirection: 'row',
  },
  meuView: {
    height: 40,
    marginLeft: 20,
    width: '80%',
  },
  logoutView: {
    height: 40,
  },
  pagesView: {
    height: 80,
  },
  billerView: {
    marginTop: 10,
    height: 50,
  },
  allPolicies: {
    height: 30,
    marginTop: 10,
  },
  viewAllText: {
    position: 'absolute',
    bottom: 10,
    height: 30,
  },
  iconsView: {
    width: '25%',
  },
  indexView: {
    height: 100,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: ROYAL_WHITE,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  billDetailsView: {
    height: 200,
    borderRadius: 5,
    marginTop: 100,
    backgroundColor: ROYAL_WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headeView: {
    height: 200,
    backgroundColor: RED,
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

export default Home;
