import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import * as Icon from '@expo/vector-icons';

import MenuOption from '../MenuOption';

const screenHeight = Dimensions.get('window').height;

const items = [
  {
    icon: 'ios-settings',
    title: 'Account',
    text: 'settings',
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    text: 'payments',
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    text: 'start course',
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'see you soon!',
  },
];

export default function Menu() {
  const [top, setTop] = useState(new Animated.Value(screenHeight));

  useEffect(() => {
    Animated.spring(top, {
      toValue: 0,
    }).start();
  }, [top]);

  function toggleMenu() {
    Animated.spring(top, {
      toValue: screenHeight + 100,
    }).start();
  }

  return (
    <AnimatedContainer style={{ top }}>
      <Cover>
        <Image source={require('../../../assets/background2.jpg')} />
        <Title>Luke Morales</Title>
        <Subtitle>Your Next React Native Developer</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={() => toggleMenu()}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items.map(item => (
          <MenuOption key={item.title} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </Content>
    </AnimatedContainer>
  );
}

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  elevation: 15;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;
