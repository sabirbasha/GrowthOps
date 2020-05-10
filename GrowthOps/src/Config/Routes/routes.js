import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../../Components/screens/onBoarding/Login';
import TouchID from '../../Components/screens/onBoarding/TouchID';
import Webview from '../../Components/screens/onBoarding/Webview';
import TabRoute from './tabRoute';


const Navigation = createStackNavigator(
  {
    Login: Login,
    TouchID: TouchID,
    Webview: Webview,
    TabRoute: TabRoute,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
export default createAppContainer(Navigation);
