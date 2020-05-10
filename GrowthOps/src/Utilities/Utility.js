import * as Strings from '../Constants/Strings';
import Biometrics from 'react-native-touch-id';

export const cheackTouchID = async () => {
  const optionalConfigObject = {
    title: 'Authentication Required',
    imageColor: '#e00606',
    imageErrorColor: '#ff0000',
    sensorDescription: 'Touch sensor',
    sensorErrorDescription: 'Failed',
    cancelText: 'Cancel',
    fallbackLabel: 'Show Passcode',
    unifiedErrors: false,
    passcodeFallback: false,
  };
  try {
    await Biometrics.isSupported(optionalConfigObject)
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
          return true;
        } else {
          console.log('TouchID is supported.');
          return false;
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
        return false;
      });
  } catch (e) {
    console.log('  catch ERROR==> ' + e);
    return false;
  }
};
