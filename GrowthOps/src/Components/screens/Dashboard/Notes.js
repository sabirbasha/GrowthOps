import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ScreenContainer from '../../Containers/ScreenContainer';
import ScreenLayout from '../../Layouts/ScreenLayout';
import HeaderLayout from '../../Layouts/HeaderLayout';
import Typography from '../../Components/Typography';
import {RED, ECRU_WHITE, WHITE} from '../../../Constants/Colors';
import * as String from '../../../Constants/Strings';

class Notes extends Component {
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
              style={styles.comingSoonText}
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
  comingSoonText: {
    marginTop: 20,
  },
});

export default Notes;
