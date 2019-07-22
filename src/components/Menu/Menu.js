import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Animated, Dimensions } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { AnimatedContainer, Cover, Image, Title, Subtitle, CloseButton, CloseView, Content } from './Menu_Styles';

import MenuOption from '../MenuOption';
import items from '~/data/items';

const screenHeight = Dimensions.get('screen').height;

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
      <Content screenHeight={screenHeight}>
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

Menu.propTypes = {
  action: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
