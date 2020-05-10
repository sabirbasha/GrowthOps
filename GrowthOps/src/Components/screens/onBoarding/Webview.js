import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import ScreenContainer from '../../Containers/ScreenContainer';
import ScreenLayout from '../../Layouts/ScreenLayout';
import HeaderLayout from '../../Layouts/HeaderLayout';
// import HeaderBackButton from '../';
import { MEDIUM_GREY } from '../../../Constants/Colors';
import Typography from '../../Components/Typography';

class Webview extends Component {

  _onBackPress = () => {
    console.log('_onBackPress');
    this.props.navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    console.log('_onBackPress', navigation.getParam('params').title);

    return (
      <ScreenContainer backgroundColor={MEDIUM_GREY}>
        <ScreenLayout
          header={
            <HeaderLayout
              headerCenterElement={
                <Typography
                  fontSize={16}
                  fontWeight="600"
                  lineHeight={19}
                  text={navigation.getParam('params').title || 'Web View'}
                />
              }
              headerLeftElement={
                <TouchableOpacity onPress={this._onBackPress}>
                  <Image
                    source={require('../../../assets/ic_back_black.png')}
                    style={styles.imageIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              }
            />
          }
          useSafeArea
          paddingHorizontal={0}
          paddingBottom={0}>
          <React.Fragment>
            <View style={styles.container}>
              <WebView
                source={{
                  uri: 'https://growthops.com.au/',
                }}
                style={styles.container}
              />
            </View>
          </React.Fragment>
        </ScreenLayout>
      </ScreenContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageIcon: {
    width: 50,
    height: 50,
  },
});
export default Webview;
