import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';
import { Container, IconView, Content, Title, Text } from './MenuOption_Styles';

export default function MenuOption({ icon, title, text }) {
  return (
    <Container>
      <IconView>
        <Icon.Ionicons name={icon} size={24} color="#546bfb" />
      </IconView>
      <Content>
        <Title>{title}</Title>
        <Text> {text} </Text>
      </Content>
    </Container>
  );
}

MenuOption.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
