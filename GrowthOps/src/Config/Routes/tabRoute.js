import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react';

import Home from '../../Components/screens/Dashboard/Home';
import Notes from '../../Components/screens/Dashboard/Notes';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: <Icon name="home" size={24} />,
      },
    },

    Notes: {
      screen: Notes,
      navigationOptions: {
        title: 'Notes',
        tabBarIcon: <Icon name="edit" size={24} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'darkgray',
      labelStyle: {
        fontSize: 10,
      },
    },
  },
);

export default createAppContainer(TabStack);
