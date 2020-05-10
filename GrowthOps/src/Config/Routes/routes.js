import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../../Components/screens/onBoarding/Login';
import TouchID from '../../Components/screens/onBoarding/TouchID';
import TabScreen from '../../Components/screens/Dashboard/TabBar';
import Webview from '../../Components/screens/onBoarding/Webview';


const Navigation = createStackNavigator(
  {
    Login: Login,
    TouchID: TouchID,
    TabScreen: TabScreen,
    Webview: Webview,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
export default createAppContainer(Navigation);
