/* eslint react/prop-types: 0 */
import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import * as Icon from '@expo/vector-icons';
import transitionConfig from './transitionConfig';

import HomeScreen from '~/screens/HomeScreen';
import SectionScreen from '~/screens/SectionScreen';
import ProjectsScreen from '~/screens/ProjectsScreen';

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
  },
  {
    mode: 'modal',
    transitionConfig,
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routeName } = navigation.state.routes[navigation.state.index];

  if (routeName === 'Section') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <Icon.Ionicons name="ios-home" size={26} color={focused ? activeColor : inactiveColor} />
    ),
  };
};

const ProjectsStack = createStackNavigator({
  Projects: ProjectsScreen,
});

ProjectsStack.navigationOptions = {
  tabBarLabel: 'Projects',
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons name="ios-folder" size={26} color={focused ? activeColor : inactiveColor} />
  ),
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ProjectsStack,
  },
  {
    mode: 'modal',
    tabBarOptions: {
      style: {
        paddingBottom: 10,
        paddingTop: 8,
        height: 68,
        elevation: 12,
      },
    },
  }
);

export default createAppContainer(TabNavigator);
