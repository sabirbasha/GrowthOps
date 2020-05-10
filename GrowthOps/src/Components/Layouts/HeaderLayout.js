import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import SpaceFiller from './SpaceFiller';
import {useSafeArea} from 'react-native-safe-area-context';

const TRANSPARENT = 'transparent';

const HeaderLayout = ({
  headerLeftElement,
  headerCenterElement,
  headerRightElement,
  horizontalPaddingMode,
  horizontalPaddingCustomLeftValue,
  horizontalPaddingCustomRightValue,
  backgroundColor,
  ...props
}) => {
  const safeAreaInsets = useSafeArea();

  const style = [
    styles.container,
    {
      backgroundColor,
      paddingTop: safeAreaInsets.top,
      height: 70 + safeAreaInsets.top,
    },
  ];
  switch (horizontalPaddingMode) {
    case 'form':
      style.push(styles.formPadding);
      break;
    case 'custom':
      style.push({
        paddingLeft: horizontalPaddingCustomLeftValue,
        paddingRight: horizontalPaddingCustomRightValue,
      });
      break;
    default:
      style.push(styles.screenPadding);
  }

  return (
    <View style={style} {...props}>
      <View style={[styles.headerSmallElement, {alignItems: 'flex-start'}]}>
        {headerLeftElement}
      </View>
      <View style={styles.headerMainElement}>{headerCenterElement}</View>
      <View style={[styles.headerSmallElement, {alignItems: 'flex-end'}]}>
        {headerRightElement}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    width: '100%',
  },
  formPadding: {
    paddingHorizontal: 24,
  },
  headerMainElement: {
    flex: 0.8,
  },
  headerSmallElement: {
    alignItems: 'center',
    flex: 0.2,
    justifyContent: 'center',
  },
  screenPadding: {
    paddingHorizontal: 24,
  },
});

HeaderLayout.propTypes = {
  headerLeftElement: PropTypes.element,
  headerCenterElement: PropTypes.element,
  headerRightElement: PropTypes.element,
  horizontalPaddingMode: PropTypes.oneOf(['form', 'screen', 'custom']),
  horizontalPaddingCustomLeftValue: PropTypes.number,
  horizontalPaddingCustomRightValue: PropTypes.number,
  backgroundColor: PropTypes.string,
};

HeaderLayout.defaultProps = {
  headerLeftElement: <SpaceFiller width={45} height={45} />,
  headerCenterElement: <SpaceFiller />,
  headerRightElement: <SpaceFiller width={45} height={45} />,
  horizontalPaddingMode: 'screen',
  horizontalPaddingCustomLeftValue: 0,
  horizontalPaddingCustomRightValue: 0,
  backgroundColor: TRANSPARENT,
};

const Memoiz = React.memo(HeaderLayout);

export default Memoiz;
