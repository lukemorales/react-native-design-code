import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as Icon from '@expo/vector-icons';

import MenuOption from '../MenuOption';

const screenHeight = Dimensions.get('window').height + 100;

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

function Menu({ action, closeMenu }) {
  const [top] = useState(new Animated.Value(screenHeight));

  const toggleMenu = useCallback(() => {
    if (action === 'openMenu') {
      Animated.spring(top, {
        toValue: 68,
        bounciness: 6,
        useNativeDriver: true,
      }).start();
    }

    if (action === 'closeMenu') {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: true,
      }).start();
    }
  }, [action, top]);

  useEffect(() => {
    toggleMenu();
  }, [action, toggleMenu]);

  return (
    <AnimatedContainer style={{ transform: [{ translateY: top }] }}>
      <Cover>
        <Image source={require('~/assets/background2.jpg')} />
        <Title>Luke Morales</Title>
        <Subtitle>Your Next React Native Developer</Subtitle>
      </Cover>
      <CloseButton onPress={closeMenu}>
        <CloseView>
          <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </CloseButton>
      <Content>
        {items.map(item => (
          <MenuOption key={item.title} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </Content>
    </AnimatedContainer>
  );
}

const mapStateToProps = state => ({ action: state.action });

const mapDispatchToProps = dispatch => ({
  closeMenu: () =>
    dispatch({
      type: 'CLOSE_MENU',
    }),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
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
const CloseButton = styled(RectButton)`
  position: absolute;
  top: 115px;
  left: 50%;
  margin-left: -22px;
  z-index: 1;
  border-radius: 26px;
  background-color: white;
  elevation: 20;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const CloseView = styled.View`
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;
