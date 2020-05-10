// NavigationService.js
import {createRef} from 'react';
import {
  StackActions,
  CommonActions,
  TabActions,
} from '@react-navigation/native';

export const navigationRef = createRef();
export const isMountedRef = createRef();

// navigate
function navigate(name, params) {
  isMountedRef.current &&
    navigationRef.current &&
    navigationRef.current.navigate(name, params);
}

/**
 * Reset everything and start from dashboard
 */
function resetRoot() {
  if (isMountedRef.current && navigationRef.current) {
    const state = navigationRef.current.getRootState();

    console.tron.log(state);
  }
  // isMountedRef.current && navigationRef.current && resetAndNavigateToModule(TAB_NAVIGATOR);
}

/**
 *
 * @param {String} routeName The route to navigate to (Required)
 * @param {String} moduleName The module of which the routeName exists. This will ensure it know which stack to look into (Optional)
 * @param {Object} params Params to be supplied when the screen navigated
 */

function getNavigationObj() {
  return navigationRef;
}

// add other navigation functions that you need and export them

export default {
  navigate,
  navigateToModule,
  replaceStack,
  resetModifiedStack,
  resetAndNavigateToModule,
  resetRoot,
  jumpTo,
  getNavigationObj,
};
